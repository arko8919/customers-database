import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

// Components
import { Footer } from "../layout/Footer";

export default function Dashboard() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, logout, updateAccountEmail, updateAccountPassword } =
    useAuth();

  const [errorProfile, setErrorProfile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    setErrorProfile("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setErrorProfile("Failed to log out");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateAccountEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updateAccountPassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Container
        as="main"
        className="d-flex align-items-center justify-content-center flex-column auth"
      >
        <Card className="w-100 mb-4 auth-card mt-4">
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {errorProfile && <Alert variant="danger">{errorProfile}</Alert>}
            <strong>Email:</strong> {currentUser.email}
          </Card.Body>
        </Card>

        <Card className="w-100 auth-card">
          <Card.Body as="section">
            <h2 className="text-center mb-4">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  defaultValue={currentUser.email}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Button
                disabled={loading}
                type="submit"
                variant="primary"
                className="mt-2 w-100"
              >
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2 mb-5">
          <Link to="/">Cancel</Link>
          <Link className="ps-3" onClick={handleLogout}>
            Log Out
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
}

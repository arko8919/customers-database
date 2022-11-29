import { useState, useEffect } from "react";
import { firebase } from "./firebase";

// Components
import { Header } from "./js/layout/Header";
import { Footer } from "./js/layout/Footer";
import { UserNavbar } from "./js/layout/UserNavbar";
import { FiltrableCustomerTable } from "./js/components/FilterableCustomerTable";

import "./App.scss";

// Get data from the Firebase server
const ref = firebase.firestore().collection("customers");

function App() {
  const [data, setdata] = useState([]); // All customers from the firebase will be stored in "data" current state

  useEffect(() => {
    ref.onSnapshot((querySnapshot) => {
      const items = []; // All documents are stored here
      querySnapshot.forEach((doc) => {
        // Each "doc" is each document inside firebase. In this case, is only one document as an array with two objects, and each object is a customer
        items.push(doc.data());
      });
      setdata(items); // Update state with new data [ Array of Objects ]
    });
  }, []);

  // Adding customer to the database
  function handleAddCustomer(customerDetails) {
    ref
      .doc(customerDetails.id)
      .set(customerDetails)
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }

  // Removing customer from the database
  function handleDeleteCustomer(customerId) {
    ref
      .doc(customerId)
      .delete()
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }

  // Edit customer data
  function handleEditCustomer(updatedCustomerDetails) {
    ref
      .doc(updatedCustomerDetails.id)
      .update(updatedCustomerDetails)
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }

  return (
    <>
      <UserNavbar onAddCustomer={handleAddCustomer} />
      <Header />
      <FiltrableCustomerTable
        customersList={data}
        onDeleteCustomer={handleDeleteCustomer}
        onEditCustomer={handleEditCustomer}
      />
      <Footer />
    </>
  );
}

export default App;

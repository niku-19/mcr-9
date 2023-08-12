import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Departement from "./pages/Departement";
import Layout from "./Components/Layout/Layout";
import ProductPage from "./pages/ProductPage";
import AddProducts from "./pages/AddProducts";
import ProductListing from "./pages/Product Listing/ProductListing";
import { inventoryData } from "./Data/inventoryData";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(inventoryData));
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/departement"
          element={
            <Layout>
              <Departement />
            </Layout>
          }
        />
        <Route
          path="/product"
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Layout>
              <ProductListing />
            </Layout>
          }
        />
        <Route
          path="/add-new-product"
          element={
            <Layout>
              <AddProducts />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;

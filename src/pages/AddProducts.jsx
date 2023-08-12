import { useState } from "react";
import styles from "./addproduct.module.css";
import { useProduct } from "../Context/Product.context";

const AddProducts = () => {
  const { dispatch } = useProduct();
  const [addProductData, setAddProductData] = useState({
    id: Math.floor(Math.random() * 999999) + 1,
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "KITCH001",
    supplier: "KitchenWonders Inc.",
    delivered: 0,
    imageUrl: "https://m.media-amazon.com/images/I/616vJsA33kL.jpg",
  });

  const addProductandler = (e) => {
    e.preventDefault();
    dispatch({ type: "HANDLE__ADD__NEW__PRODUCT", payload: addProductData });
    setAddProductData({
      id: 0,
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: " ",
      delivered: 0,
      imageUrl: "",
    });
  };

  return (
    <div className={styles.container}>
      <h1>Add New Product</h1>
      <form action="#" onSubmit={(e) => addProductandler(e)}>
        <div className={styles.departement__box}>
          <label htmlFor="department">Departement: </label>
          <select
            name="selectDepatement"
            id="selectDepatement"
            placeholder={"Select Department"}
            className={styles.select}
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                department: e.target.value,
              })
            }
          >
            <option value="Kitchen">Kitchen</option>
            <option value="Kitchen">Clothing</option>
            <option value="Kitchen">Toys</option>
          </select>
        </div>
        <div className={styles.name__box}>
          <label htmlFor="name">Name: </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Product Name"
            name="name"
            id="name"
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.Des__box}>
          <label htmlFor="des">Description: </label>
          <textarea
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                description: e.target.value,
              })
            }
            name="des"
            id="des"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className={styles.price__box}>
          <label htmlFor="price">Price: </label>
          <input
            className={styles.input}
            type="number"
            name="price"
            id="price"
            value={addProductData.price}
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                price: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.stock__box}>
          <label htmlFor="stock">Stock: </label>
          <input
            className={styles.input}
            type="number"
            name="stock"
            id="stock"
            value={addProductData.stock}
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                stock: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.sku__box}>
          <label htmlFor="sku">SKU: </label>
          <input
            className={styles.input}
            type="text"
            name="sku"
            id="sku"
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                sku: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.supplier__box}>
          <label htmlFor="supplier">Supplier</label>
          <input
            className={styles.input}
            type="text"
            name="supplier"
            id="supplier"
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                supplier: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.delivered__box}>
          <label htmlFor="deliverd">Deliverd: </label>
          <input
            className={styles.input}
            type="number"
            name="deliverd"
            id="deliverd"
            value={addProductData.delivered}
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                delivered: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.image__box}>
          <label htmlFor="image">Image URL: </label>
          <input
            className={styles.input}
            type="text"
            name="image"
            id="image"
            onChange={(e) =>
              setAddProductData({
                ...addProductData,
                imageUrl: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className={styles.btn}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;

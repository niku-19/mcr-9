import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useProduct } from "../../Context/Product.context";

const Header = () => {
  const { dispatch, productData } = useProduct();

  const handleFilterLowStock = (e) => {
    dispatch({ type: "HANDLE__LOW__STOCK__PRODUCT", payload: e });
  };

  const handleFilterDepartment = (e) => {
    dispatch({ type: "HANDLE__FILTER__DEPARTEMENT", payload: e });
  };

  const handleFilterProduct = (e) => {
    dispatch({ type: "HANDLE__FILTER__PRODUCT__PROPERTY", payload: e });
  };

  return (
    <div className={styles.header__container}>
      <h1>Products</h1>
      <select
        className={styles.select}
        name="cateogry"
        id="category"
        value={productData?.selectedDepartment}
        onChange={(e) => handleFilterDepartment(e)}
      >
        <option value="select" disabled>
          Select Category
        </option>
        <option value="All">All</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>
      <label htmlFor="">
        <input
          type="checkbox"
          name="lowStockitems"
          id="lowStockitems"
          onChange={(e) => handleFilterLowStock(e)}
        />
        Low Stock Items
      </label>
      <select
        className={styles.select}
        name="cateogryPre"
        id="categoryPre"
        onChange={(e) => handleFilterProduct(e)}
      >
        <option value="select" disabled>
          Select Category
        </option>
        <option value="all">All</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>
      <NavLink to={"/add-new-product"}>
        <button className={styles.btn}>New</button>
      </NavLink>
    </div>
  );
};

export default Header;

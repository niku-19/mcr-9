import { NavLink } from "react-router-dom";
import { useProduct } from "../../Context/Product.context";
import styles from "./tabel.module.css";

const Tabel = () => {
  const { productData } = useProduct();
  return (
    <div className={styles.tabel__container}>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price </th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {productData?.updatedProductData.map((eachProduct) => {
            return (
              <tr key={eachProduct.id}>
                <td>
                  <NavLink to={`/product/${eachProduct.id}`}>
                    <img
                      className={styles.product__image}
                      src={eachProduct?.imageUrl}
                      alt={eachProduct.name}
                    />
                  </NavLink>
                </td>
                <td>
                  <NavLink to={`/product/${eachProduct.id}`}>
                    {eachProduct?.name}
                  </NavLink>
                </td>
                <td>
                  <NavLink to={`/product/${eachProduct.id}`}>
                    {eachProduct?.description}
                  </NavLink>
                </td>
                <td>
                  <NavLink to={`/product/${eachProduct.id}`}>
                    {eachProduct?.price}
                  </NavLink>
                </td>
                <td>
                  <NavLink to={`/product/${eachProduct.id}`}>
                    {eachProduct?.stock}
                  </NavLink>
                </td>
                <td>
                  <NavLink to={`/product/${eachProduct.id}`}>
                    {eachProduct?.supplier}
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;

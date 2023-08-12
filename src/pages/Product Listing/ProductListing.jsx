import { useParams } from "react-router-dom";
import { useProduct } from "../../Context/Product.context";
import styles from "./productListing.module.css";
const ProductListing = () => {
  const { id } = useParams();
  const { productData } = useProduct();

  const singleItem = productData?.updatedProductData?.find(
    (eachProduct) => eachProduct.id === +id
  );
  console.log(
    "🚀 ~ file: ProductListing.jsx:11 ~ ProductListing ~ singleItem:",
    singleItem
  );
  return (
    <div className={styles.product__listing__container}>
      <h1>{singleItem?.name}</h1>
      <img
        src={singleItem.imageUrl}
        className={styles.image}
        alt={singleItem?.name}
      />
      <h1>Price: ${singleItem?.price}</h1>
      <h1>Price: {singleItem?.stock}</h1>
      <h1>Price: {singleItem?.supplier}</h1>
      <h1>Price: {singleItem?.department}</h1>
      <h1>Price: {singleItem?.delivered}</h1>
      <h1>Price: {singleItem?.description}</h1>
    </div>
  );
};

export default ProductListing;

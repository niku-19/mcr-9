/* eslint-disable react/prop-types */
import styles from "./stockcard.module.css";

const StockCard = ({ stock, totalDelivered, lowStockItem, color, label }) => {
  return (
    <div className={styles.card__container}>
      <h1
        style={{
          color: `${color}`,
        }}
      >
        {stock} {totalDelivered} {lowStockItem}
      </h1>
      <h1>{label}</h1>
    </div>
  );
};

export default StockCard;

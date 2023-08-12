import StockCard from "../Components/Stock card/StockCard";
import { useProduct } from "../Context/Product.context";

const Dashboard = () => {
  const { productData } = useProduct();

  const totalStock = productData?.productData?.reduce(
    (acc, cur) => acc + cur.stock,
    0
  );
  const totalDelivered = productData?.productData?.reduce(
    (acc, cur) => acc + cur.delivered,
    0
  );

  const lowStockItem = productData?.productData?.reduce(
    (acc, cur) => (cur.stock <= 10 ? acc + 1 : acc),
    0
  );

  return (
    <section>
      <div className="grid">
        <StockCard stock={totalStock} color={"#50C878"} label={"Total Stock"} />
        <StockCard
          totalDelivered={totalDelivered}
          color={"orange"}
          label={"Total Delivered"}
        />
        <StockCard
          lowStockItem={lowStockItem}
          color={"red"}
          label={"Low Stock Items"}
        />
      </div>
    </section>
  );
};

export default Dashboard;

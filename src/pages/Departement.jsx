import { NavLink } from "react-router-dom";
import StockCard from "../Components/Stock card/StockCard";
import { useProduct } from "../Context/Product.context";

const Departement = () => {
  const { dispatch } = useProduct();
  const handleFilterCategory = (label) => {
    dispatch({ type: "HANDLE__FILTER__DEPARTEMNET__SELECTED", payload: label });
  };

  return (
    <section>
      <div className="grid">
        <NavLink
          to={"/product"}
          onClick={() => handleFilterCategory("Kitchen")}
        >
          <StockCard label={"Kitchen"} />
        </NavLink>
        <NavLink
          to={"/product"}
          onClick={() => handleFilterCategory("Clothing")}
        >
          <StockCard label={"Clothing"} />
        </NavLink>
        <NavLink to={"/product"} onClick={() => handleFilterCategory("Toys")}>
          <StockCard label={"Toys"} />
        </NavLink>
      </div>
    </section>
  );
};

export default Departement;

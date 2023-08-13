import { inventoryData } from "../Data/inventoryData";

localStorage.setItem("data", JSON.stringify(inventoryData));
const data = JSON.parse(localStorage.getItem("data"));
const INITIAL__STATE = {
  productData: data,
  updatedProductData: data,
  selectedDepartment: "All",
};

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "HANDLE__LOW__STOCK__PRODUCT": {
      if (payload.target.checked) {
        const result = state.productData.filter(
          (eachProduct) => eachProduct.stock <= 10
        );
        return {
          ...state,
          updatedProductData: result,
        };
      }
      return {
        ...state,
        updatedProductData: state.productData,
      };
    }

    case "HANDLE__FILTER__DEPARTEMENT": {
      if (payload.target.value.toLowerCase().includes("all")) {
        return {
          ...state,
          updatedProductData: state.productData,
          selectedDepartment: "all",
        };
      }

      const result = state.productData?.filter((eachProduct) =>
        eachProduct.department
          .toLowerCase()
          .includes(payload.target.value.toLowerCase())
      );
      return {
        ...state,
        updatedProductData: result.length > 0 ? result : state.productData,
        selectedDepartment: payload.target.value,
      };
    }

    case "HANDLE__FILTER__DEPARTEMNET__SELECTED": {
      const result = state.productData?.filter((eachProduct) =>
        eachProduct.department.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        updatedProductData: result.length > 0 ? result : state.productData,
        selectedDepartment: payload,
      };
    }

    case "HANDLE__FILTER__PRODUCT__PROPERTY": {
      if (payload.target.value.toLowerCase().includes("all")) {
        return {
          ...state,
          updatedProductData: state.updatedProductData,
        };
      }

      if (payload.target.value.toLowerCase().includes("name")) {
        const result = [...state.productData].sort();
        return {
          ...state,
          updatedProductData: result.length > 0 ? result : state.productData,
        };
      } else if (payload.target.value.toLowerCase().includes("price")) {
        const result = [...state.productData].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return {
          ...state,
          updatedProductData: result.length > 0 ? result : state.productData,
        };
      } else if (payload.target.value.toLowerCase().includes("stock")) {
        const result = [...state.productData].sort((a, b) => a.stock - b.stock);
        return {
          ...state,
          updatedProductData: result.length > 0 ? result : state.productData,
        };
      }
      return {
        ...state,
        updatedProductData: state.productData,
      };
    }
    case "HANDLE__ADD__NEW__PRODUCT": {
      localStorage.removeItem("data");
      const result = [
        ...state.productData,
        {
          id: 1,
          department: payload?.department,
          name: payload?.name,
          description: payload?.description,
          price: Number(payload.price),
          stock: Number(payload?.stock),
          sku: payload?.sku,
          supplier: payload?.supplier,
          delivered: Number(payload?.delivered),
          imageUrl: payload?.imageUrl,
        },
      ];

      localStorage.setItem("data", JSON.stringify(result));

      return {
        ...state,
        productData: result,
        updatedProductData: result,
      };
    }

    default:
      return state;
  }
};

export { INITIAL__STATE, productReducer };

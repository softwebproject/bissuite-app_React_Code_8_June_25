"use client";
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

type ProductProps = {
  totalFixedCost: number;
};
interface table1 {
  name: string;
  sellingPrice: string;
  variableCost: string;
  contributionMargin: string;
  contributionMarginRatio: string;
}
interface table2 {
  name: string;
  salesLevel: string;
  unitsToBeSold: string;
}
interface Product {
  name: string;
  sellingPrice: string;
  variableCost: string;
  estimatedSales: string;
  errors: {
    sellingPrice: boolean;
    variableCost: boolean;
    estimatedSales: boolean;
  };
}

const ProductSection: React.FC<ProductProps> = ({ totalFixedCost }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      name: "Product 1",
      sellingPrice: "",
      variableCost: "",
      estimatedSales: "",
      errors: {
        sellingPrice: false,
        variableCost: false,
        estimatedSales: false,
      },
    },
  ]);
  const [breakEvenRevenue, setBreakEvenRevenue] = useState<number | null>(null);
  const [table1, setTable1] = useState<table1[]>([]);
  const [table2, setTable2] = useState<table2[]>([]);

  const handleAddProduct = () => {
    const newProductName = `Product ${products.length + 1}`;
    setProducts([
      ...products,
      {
        name: newProductName,
        sellingPrice: "",
        variableCost: "",
        estimatedSales: "",
        errors: {
          sellingPrice: false,
          variableCost: false,
          estimatedSales: false,
        },
      },
    ]);
  };

  const handleInputChange = (
    index: number,
    field: keyof Product, // Ensure the field is a valid key of Product
    value: string
  ) => {
    const updatedProducts: Product[] = [...products];

    // Update the field value if it's part of the main Product object
    if (field in updatedProducts[index]) {
      updatedProducts[index] = {
        ...updatedProducts[index],
        [field]: value,
      };
    }

    // Clear the error if the field is not empty and exists in the errors object
    if (field in updatedProducts[index].errors && value.trim() !== "") {
      updatedProducts[index] = {
        ...updatedProducts[index],
        errors: {
          ...updatedProducts[index].errors,
          [field as keyof Product["errors"]]: false,
        },
      };
    }

    setProducts(updatedProducts);
  };

  const validateInputs = () => {
    let isValid = true;
    const updatedProducts = products.map((product) => {
      const errors = {
        sellingPrice: product.sellingPrice.trim() === "",
        variableCost: product.variableCost.trim() === "",
        estimatedSales: product.estimatedSales.trim() === "",
      };
      if (errors.sellingPrice || errors.variableCost) {
        isValid = false;
      }
      return { ...product, errors };
    });
    setProducts(updatedProducts);
    return isValid;
  };

  const calculateBreakEven = () => {
    if (!validateInputs()) {
      return; // Stop execution if validation fails
    }
    if (totalFixedCost <= 0) {
      alert("Please enter valid values for fixed costs.");
      return;
    }
    let totalWeightedContribution = 0;
    let totalSalesValue = 0;

    const table1Data = [];
    const contributionMargins: number[] = [];
    const sellingPrices: number[] = [];

    for (const product of products) {
      const sellingPrice = parseFloat(product.sellingPrice) || 0;
      const variableCost = parseFloat(product.variableCost) || 0;
      const estimatedSales = parseFloat(product.estimatedSales) || 1;

      const contributionMargin = sellingPrice - variableCost;
      const contributionMarginRatio = sellingPrice
        ? contributionMargin / sellingPrice
        : 0;

      totalWeightedContribution += contributionMargin * estimatedSales;
      totalSalesValue += sellingPrice * estimatedSales;

      table1Data.push({
        name: product.name,
        sellingPrice: sellingPrice.toFixed(2),
        variableCost: variableCost.toFixed(2),
        contributionMargin: contributionMargin.toFixed(2),
        contributionMarginRatio: contributionMarginRatio.toFixed(2),
      });

      contributionMargins.push(contributionMarginRatio);
      sellingPrices.push(sellingPrice);
    }

    if (totalWeightedContribution <= 0) {
      setBreakEvenRevenue(null);
      setTable1(table1Data);
      setTable2([]);
      alert("Contribution margin must be greater than zero to cover fixed costs.");
      return;
    }

    const breakEven = totalFixedCost / (totalWeightedContribution / totalSalesValue);
    setBreakEvenRevenue(breakEven);

    const table2Data = products.map((product, index) => {
      const productEstimatedSalesRevenue = sellingPrices[index] * parseFloat(product.estimatedSales);
      const productProportion = totalSalesValue ? productEstimatedSalesRevenue / totalSalesValue : 0;
      const salesLevel = productProportion * breakEven;
      const unitsToBeSold = sellingPrices[index] ? salesLevel / sellingPrices[index] : 0;
      return {
        name: product.name,
        salesLevel: salesLevel.toFixed(2),
        unitsToBeSold: unitsToBeSold.toFixed(2),
      };
    });

    setTable1(table1Data);
    setTable2(table2Data);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-end mr-4 md:mr-4">
        <button
          onClick={handleAddProduct}
          className="flex items-center text-base font-semibold text-textThemeClr"
        >
          <span className="mr-4 hidden sm:block">New Product</span>
          <FiPlusCircle size={20} />
        </button>
      </div>
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white p-4 shadow rounded-lg space-y-4 border"
        >
          <div className="relative flex justify-center items-center">
            <h2 className="font-bold text-xl text-[#2B2B2B] text-center">
              {product.name}
            </h2>
          </div>

          <div className="space-y-2">
            <div>
              <label className="block font-semibold text-[#555555] mb-1">
                Selling Price per Unit ($):
              </label>
              <input
                type="number"
                required
                className={`border rounded px-4 py-2 w-full ${
                  product.errors.sellingPrice ? "border-red-500" : ""
                }`}
                value={product.sellingPrice}
                onChange={(e) =>
                  handleInputChange(index, "sellingPrice", e.target.value)
                }
              />
              {product.errors.sellingPrice && (
                <p className="text-red-500 text-sm mt-1">
                  Please fill this field.
                </p>
              )}
            </div>
            <div>
              <label className="block font-semibold text-[#555555] mb-1">
                Variable Cost per Unit ($):
              </label>
              <input
                type="number"
                required
                className={`border rounded px-4 py-2 w-full ${
                  product.errors.variableCost ? "border-red-500" : ""
                }`}
                value={product.variableCost}
                onChange={(e) =>
                  handleInputChange(index, "variableCost", e.target.value)
                }
              />
              {product.errors.variableCost && (
                <p className="text-red-500 text-sm mt-1">
                  Please fill this field.
                </p>
              )}
            </div>
            <div>
              <label className="block font-semibold text-[#555555] mb-1">
                Estimated Sales (units):
              </label>
              <input
                type="number"  
                className={`border rounded px-4 py-2 w-full ${
                  product.errors.estimatedSales ? "border-red-500" : ""
                }`}
                value={product.estimatedSales}
                onChange={(e) =>
                  handleInputChange(index, "estimatedSales", e.target.value)
                }
              />
              {product.errors.estimatedSales && (
                <p className="text-red-500 text-sm mt-1">
                  Please fill this field.
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-10">
        <button
          onClick={calculateBreakEven}
          className="bg-textThemeClr hover:bg-btnHover text-white h-[54px] w-[240px] rounded-lg text-base font-medium"
        >
          Calculate Break Even Point
        </button>
      </div>

      {breakEvenRevenue !== null && (
        <div className="mt-6">
          {breakEvenRevenue > 0 ? (
            <h2 className="text-center font-bold text-xl">
              Break-Even Point in Revenue: ${breakEvenRevenue.toFixed(2)}
            </h2>
          ) : (
            <h2 className="text-center font-bold text-xl">
              Contribution margin must be greater than zero.
            </h2>
          )}

          {/* <h3 className="mt-6 font-bold">Table 1</h3> */}
          <div className="w-full overflow-x-auto rounded-lg border mt-6">
            <table className="w-full border-collapse rounded-lg border text-center ">
              <thead>
                <tr className="bg-textThemeClr text-white">
                  <th className="border p-2">Product</th>
                  <th className="border p-2">Selling Price ($)</th>
                  <th className="border p-2">Variable Cost ($)</th>
                  <th className="border p-2">Contribution Margin ($)</th>
                  <th className="border p-2">Contribution Margin Ratio</th>
                </tr>
              </thead>
              <tbody>
                {table1.map((row, index) => (
                  <tr key={index}>
                    <td className="border p-2">{row.name}</td>
                    <td className="border p-2">{row.sellingPrice}</td>
                    <td className="border p-2">{row.variableCost}</td>
                    <td className="border p-2">{row.contributionMargin}</td>
                    <td className="border p-2">
                      {row.contributionMarginRatio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {breakEvenRevenue > 0 ? (
            <div>
              <h3 className="mt-6 font-bold text-base md:text-xl">
                Sales Level by Product for Break-Even Point
              </h3>
              <div className="w-full overflow-x-auto rounded-lg border mt-2">
                <table className="w-full border-collapse text-center border">
                  <thead>
                    <tr className="bg-textThemeClr text-white">
                      <th className="border p-2">Product</th>
                      <th className="border p-2">Sales Level ($)</th>
                      <th className="border p-2">Units to be Sold</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table2.map((row, index) => (
                      <tr key={index}>
                        <td className="border p-2">{row.name}</td>
                        <td className="border p-2">{row.salesLevel}</td>
                        <td className="border p-2">{row.unitsToBeSold}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <h1></h1>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSection;

"use client";
import React, { useState } from "react";

// import { AiFillPrinter } from "react-icons/ai";
import { FiPlusCircle, FiXCircle } from "react-icons/fi";
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
        variableCost: false       
      },
    },
  ]);
  const [breakEvenRevenue, setBreakEvenRevenue] = useState<number | null>(null);
  const [table1, setTable1] = useState<table1[]>([]);
  const [table2, setTable2] = useState<table2[]>([]);
  const [nextProductId, setNextProductId] = useState(2); // Counter for unique product names

  const handleAddProduct = () => {
    //   const newProductName = `Product ${products.length + 1}`;
    //   setProducts([
    //     ...products,
    //     {
    //       name: newProductName,
    //       sellingPrice: "",
    //       variableCost: "",
    //       estimatedSales: "",
    //       errors: {
    //         sellingPrice: false,
    //         variableCost: false,
    //         estimatedSales: false,
    //       },
    //     },
    //   ]);
    // };

    // const newProductName = `Product ${products.length + 1}`;
    const newProductName = `Product ${nextProductId}`;

    setProducts([
      ...products,
      {
        name: newProductName,
        sellingPrice: "",
        variableCost: "",
        estimatedSales: "",
        errors: {
          sellingPrice: false,
          variableCost: false          
        },
      },
    ]);
    setNextProductId(nextProductId + 1); // Increment the counter
  };

  const handleDeleteProduct = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  // const handleInputChange = (
  //   index: number,
  //   field: keyof Product, // Ensure the field is a valid key of Product
  //   value: string
  // ) => {
  //   const updatedProducts: Product[] = [...products];

  //   // Update the field value if it's part of the main Product object
  //   if (field in updatedProducts[index]) {
  //     updatedProducts[index] = {
  //       ...updatedProducts[index],
  //       [field]: value,
  //     };
  //   }

  //   // Clear the error if the field is not empty and exists in the errors object
  //   if (field in updatedProducts[index].errors && value.trim() !== "") {
  //     updatedProducts[index] = {
  //       ...updatedProducts[index],
  //       errors: {
  //         ...updatedProducts[index].errors,
  //         [field as keyof Product["errors"]]: false,
  //       },
  //     };
  //   }

  //   setProducts(updatedProducts);
  // };
  const handleInputChange = (
    index: number,
    field: keyof (typeof products)[number],
    value: string
  ) => {
    const updatedProducts = [...products];

    updatedProducts[index] = {
      ...updatedProducts[index],
      [field]: value,
      errors: {
        ...updatedProducts[index].errors,
        [field]: value.trim() === "" ? true : false,
      },
    };

    setProducts(updatedProducts);
  };

  // const validateInputs = () => {
  //   let isValid = true;
  //   const updatedProducts = products.map((product) => {
  //     const errors = {
  //       sellingPrice: product.sellingPrice.trim() === "",
  //       variableCost: product.variableCost.trim() === "",
  //       estimatedSales: product.estimatedSales.trim() === "",
  //     };
  //     if (errors.sellingPrice || errors.variableCost || errors.estimatedSales) {
  //       isValid = false;
  //     }
  //     return { ...product, errors };
  //   });
  //   setProducts(updatedProducts);
  //   return isValid;
  // };
  const validateInputs = () => {
    let isValid = true;
    const updatedProducts = products.map((product) => {
      const errors = {
        sellingPrice: product.sellingPrice.trim() === "",
        variableCost: product.variableCost.trim() === ""        
      };
      if (errors.sellingPrice || errors.variableCost) {
        isValid = false;
      }
      if(product.estimatedSales=='')
      {
        product.estimatedSales='0'; 
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

  const fixedCost = totalFixedCost || 0;
  if (fixedCost <= 0) {
    alert("Please enter a valid positive value for fixed costs.");
    return;
  }

  const table1Data = [];
  const contributionMargins = [];
  const sellingPrices: number[] = [];
  const estimatedUnits: number[] = [];

  // Check if any estimated sales are provided
  let hasSalesData = false;
  for (const product of products) {
    const units = parseFloat(product.estimatedSales) || 0;
    estimatedUnits.push(units);
    if (units > 0) hasSalesData = true;
  }

  let totalContribution = 0;
  let totalUnits = 0;
  //let totalRevenue = 0;

  // Calculate contribution margins and prepare Table 1
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const sellingPrice = parseFloat(product.sellingPrice) || 0;
    const variableCost = parseFloat(product.variableCost) || 0;
    const units = estimatedUnits[i];

    if (sellingPrice < 0 || variableCost < 0) {
      alert(`Invalid input for ${product.name}: Selling price and variable cost must be non-negative.`);
      return;
    }

    const contributionMargin = sellingPrice - variableCost;
    const contributionMarginRatio = sellingPrice > 0 ? contributionMargin / sellingPrice : 0;

    if (contributionMargin <= 0) {
      alert(`Invalid input for ${product.name}: Contribution margin must be positive to cover fixed costs.`);
      return;
    }

    table1Data.push({
      name: product.name,
      sellingPrice: sellingPrice.toFixed(2),
      variableCost: variableCost.toFixed(2),
      contributionMargin: contributionMargin.toFixed(2),
      contributionMarginRatio: contributionMarginRatio.toFixed(2),
    });

    contributionMargins.push(contributionMargin);
    sellingPrices.push(sellingPrice);

    // If sales data provided, use it; otherwise, assume 1 unit for equal mix calculation
    const unitCount = hasSalesData ? units : 1;
    totalContribution += contributionMargin * unitCount;
    totalUnits += unitCount;
    //totalRevenue += sellingPrice * unitCount;
  }

  // Calculate weighted average contribution margin
  const weightedAvgCM = totalUnits > 0 ? totalContribution / totalUnits : 0;
  if (weightedAvgCM <= 0) {
    setBreakEvenRevenue(null);
    setTable1(table1Data);
    setTable2([]);
    alert("Weighted average contribution margin must be greater than zero.");
    return;
  }

  // Calculate total break-even units
  const totalBreakEvenUnits = fixedCost / weightedAvgCM;

  // Determine units per product based on mix
  const table2Data = products.map((product, index) => {
    let unitsToBeSold;
    if (hasSalesData) {
      // Scale units based on provided estimated sales mix
      const proportion = totalUnits > 0 ? estimatedUnits[index] / totalUnits : 0;
      unitsToBeSold = totalBreakEvenUnits * proportion;
    } else {
      // Equal unit mix
      unitsToBeSold = totalBreakEvenUnits / products.length;
    }

    const salesLevel = unitsToBeSold * sellingPrices[index];
    return {
      name: product.name,
      salesLevel: salesLevel.toFixed(2),
      unitsToBeSold: unitsToBeSold.toFixed(2),
    };
  });

  // Calculate total break-even revenue
  const breakEvenRevenue = table2Data.reduce((sum, item) => sum + parseFloat(item.salesLevel), 0);

  setBreakEvenRevenue(breakEvenRevenue);
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
          className="relative bg-white p-4 shadow rounded-lg space-y-4 border"
        >
          {/* Cross Icon */}
          {index == 0 ? (
            <h1></h1>
          ) : (
            <button
              onClick={() => handleDeleteProduct(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <FiXCircle size={24} />
            </button>
          )}
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
            {/* <div>
              <label className="block font-semibold text-[#555555] mb-1">
               Estimated Sales in units (Optional)
              </label>
              <input
                type="number"                
                className={`border rounded px-4 py-2 w-full`}
                value={product.estimatedSales}
                onChange={(e) =>
                  handleInputChange(index, "estimatedSales", e.target.value)
                }
              />              
            </div> */}
          </div>
        </div>
      ))}{" "}
      {/* End this Section */}
      <div className="flex justify-center mt-10">
        <button
          onClick={calculateBreakEven}
          className="bg-textThemeClr hover:bg-btnHover text-white h-[54px] w-[240px] rounded-lg text-base font-medium"
        >
          Calculate Break Even Point
        </button>
      </div>
      {/* <section className="flex justify-center sm:justify-end px-2 sm:px-8 pt-6">
        <div className="flex text-base font-semibold gap-1 sm:gap-3 cursor-pointer">
          <h1 className="text-sm sm:text-base">Print</h1>
          <AiFillPrinter className="text-lg sm:text-2xl font-semibold" />
        </div>
      </section> */}
      {breakEvenRevenue !== null && (
        <div className="mt-6">
          {breakEvenRevenue > 0 ? (
            <h2 className="font-bold text-xl">
              Break-Even Point in Revenue: ${breakEvenRevenue.toFixed(2)}
            </h2>
          ) : (
            <h2 className="text font-bold text-xl">
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
                      <th className="border p-2">Units to be Sold</th>
                      <th className="border p-2">Sales Level ($)</th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {table2.map((row, index) => (
                      <tr key={index}>
                        <td className="border p-2">{row.name}</td>
                        <td className="border p-2">{row.unitsToBeSold}</td>
                        <td className="border p-2">{row.salesLevel}</td>                        
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

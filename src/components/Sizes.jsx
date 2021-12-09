import React from "react";

function Sizes({
  selectedSizes,
  setSelectedSizes,
  products,
  sortProducts,
  setSortProducts,
  sortOrder,
  handleChangeSize,
}) {
  let sizes = products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);

  let uniqueSizes = [...new Set(sizes)];

  // function handleClick(size) {
  //   if (selectedSizes.includes(size)) {
  //     setSelectedSizes(selectedSizes.filter((s) => s !== size));
  //   } else {
  //     setSelectedSizes([...selectedSizes, size]);
  //   }
  // }

  // useEffect(() => {
  // if (selectedSizes?.length > 0) {
  //   setSortProducts(
  //     sortProducts.filter((p) => {
  //       if (selectedSizes.length > 0) {
  //         for (const size of selectedSizes) {
  //           if (p.availableSizes.includes(size)) {
  //             return true;
  //           }
  //         }
  //       }
  //     })
  //   );
  // }
  // }, [setSortProducts, sortProducts.selectedSizes]);

  return (
    <aside className='w-[25%] '>
      <div className='flex gap-2 flex-wrap w-3/4'>
        <h3 className='text-xl font-semibold text-left m-2 w-full'>Sizes :</h3>
        <div className='w-full'>
          {/* {uniqueSizes.map((size, i) => (
            <React.Fragment key={i}>
              <button
                className={`m-1 p-1 w-10 h-10 text-md  rounded-full border-2 hover:border-gray-900 ${
                  selectedSizes?.includes(size)
                    ? "bg-yellow-400"
                    : "bg-gray-200"
                } `}
                onClick={() => {
                  handleClick(size);
                }}>
                {size}
              </button>
            </React.Fragment>
          ))} */}
          <select
            id='select_sizes'
            multiple='mutliple'
            className='w-full'
            onChange={(e) => handleChangeSize(e.target.value)}>
            {uniqueSizes.map((size, i) => (
              <option className='w-2/12 ' key={i}>
                {size}
              </option>
            ))}

            {/* <option>S</option>
            <option>X</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option></option>
            <option>XXL</option> */}
          </select>
        </div>
      </div>
    </aside>
  );
}

export default Sizes;

// function filterProductsBrSizes(selectedSizes, sortProducts, setSortProducts) {
//   if (selectedSizes?.length > 0) {
//     sortProducts = setSortProducts(
//       sortProducts.filter((p) => {
//         if (selectedSizes.length > 0) {
//           for (const size of selectedSizes) {
//             if (p.availableSizes.includes(size)) {
//               return true;
//             }
//           }
//         }
//       })
//     );
//   } else {
//     return sortProducts;
//   }
// }

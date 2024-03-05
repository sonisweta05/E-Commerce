const Category = () => {
  const category = [
    {
      image: "https://cdn-icons-png.flaticon.com/256/4359/4359963.png",
      name: "fashion",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/11833/11833323.png",
      name: "shirt",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/8174/8174424.png",
      name: "jacket",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/7648/7648246.png",
      name: "mobile",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/12142/12142416.png",
      name: "laptop",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/10686/10686553.png",
      name: "shoes",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/12114/12114279.png",
      name: "home",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/11946/11946316.png",
      name: "books",
    },
  ];
  return (
    <div>
      <div className="flex mt-2 justify-center">
        <div className="flex gap-4 p-2 overflow-x-scroll no-scrollbar">
          <div className="flex">
            {category.map((cat,index) => {
              return (
                <div key={index} className="px-3 lg:px-10 cursor-pointer hover:scale-105 transition ease-in-out" >
                  <div className="flex justify-center items-center bg-blue-gray-500 w-16 h-16 rounded-full">
                    <img className="w-[100px] " src={cat.image} />
                  </div>
                  <h1 className="text-sm pt-3 lg:text-lg text-center font-medium first-letter:uppercase">
                    {" "}
                    {cat.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

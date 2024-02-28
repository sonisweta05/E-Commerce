const Testimonials = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl">Testimonials</h1>
      <h4 className="text-center font-semibold text-gray-800">What our <span className="text-pink-700">customers</span> are saying</h4>
      <div className="flex flex-col md:flex-row justify-center gap-2 pl-2 pr-2 mt-10">
        <div className="text-center">
          <div className="flex justify-center">
            <img src="../../img/download.jfif" className="w-14" />
          </div>
          <p className="text-gray-700 text-sm md:text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            aperiam illo nulla veniam et earum modi! Modi fugit facilis illum
            expedita, quaerat a reiciendis rem eius molestias deserunt
            perferendis deleniti.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4 justify-center" />
          <h1 className="">First User</h1>
          <p className="text-gray-700  text-sm md:text-md">
            Senior Product Designer
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <img src="../../img/download.jfif" className="w-14" />
          </div>
          <p className=" text-sm md:text-md text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            aperiam illo nulla veniam et earum modi! Modi fugit facilis illum
            expedita, quaerat a reiciendis rem eius molestias deserunt
            perferendis deleniti.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
          <h1 className="">User Second</h1>
          <p className="text-gray-700  text-sm md:text-md">Senior Developer</p>
        </div>{" "}
        <div className="text-center">
          <div className="flex justify-center">
            <img src="../../img/download.jfif" className="w-14" />
          </div>
          <p className=" text-gray-700 text-sm md:text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            aperiam illo nulla veniam et earum modi! Modi fugit facilis illum
            expedita, quaerat a reiciendis rem eius molestias deserunt
            perferendis deleniti.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
          <h1 className=" ">Third User</h1>
          <p className="text-gray-700  text-sm md:text-md">Senior Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

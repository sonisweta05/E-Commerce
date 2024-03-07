
const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const getCurrentDate = (separator = "/") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
  };
  return (
    <div className="py-6 px-3">
      <div>
        <section className="text-white bg-blue-gray-500 rounded-lg flex justify-center items-center">
          <div className="p-2">
            <div className="flex justify-center">
              <img
                className=" w-16 h-16 rounded-full"
                src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
              />
            </div>
            <div className="flex flex-col justify-center w-full">
              <h1>Name : {user?.displayName}</h1>
              <p>Email : {user?.email}</p>
              <p>Date : {getCurrentDate()}</p>
              <p>Role : Admin</p>
            </div>
          </div>
        </section>
        <section className="py-3 text-xl font-bold">
          <h1>Order Deails</h1>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard

import Category from "../components/categories/Category";
import HomePageProductCard from "../components/homePageProductCard/HomePageProductCard";
import Testimonials from "../components/testimonials/Testimonials";

const HomePage = () => {

  return (
    <>
      <div>
        <div>
          <img
            src="../../img/hero1.png"
            className=" h-44 md:h-[180px] w-full"
          />
        </div>
        <div>
          <Category />
        </div>
        <HomePageProductCard />
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;

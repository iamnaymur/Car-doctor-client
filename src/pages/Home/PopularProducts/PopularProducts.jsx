import image1 from "../../../assets/images/products/1.png";
import image2 from "../../../assets/images/products/2.png";
import image3 from "../../../assets/images/products/3.png";
import image4 from "../../../assets/images/products/4.png";
import image5 from "../../../assets/images/products/5.png";
import image6 from "../../../assets/images/products/6.png";

const PopularProducts = () => {
  return (
    <div className="mt-20">
      <div className="text-center space-y-6">
        <p className="text-orange-500 bold">Popular Products.</p>
        <h1 className="text-5xl bold">Browse Our Products</h1>
        <p className="font-semibold">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      {/* cards starts here. */}
      <div className=" grid gap-5 grid-cols-1 md:grid-cols-3 mt-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image1} alt="Shoes" />
          </figure>
          <div className="card-body text-center ">
            <h2 className="text-2xl bold">Cools Led Light</h2>
            <p className="text-orange-500 bold">$ 20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure>
            <img src={image2} alt="Shoes" />
          </figure>
          <div className="card-body text-center ">
            <h2 className="text-2xl bold">Car Engine Plug</h2>
            <p className="text-orange-500 bold">$ 20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure>
            <img src={image3} alt="Shoes" />
          </figure>
          <div className="card-body text-center ">
            <h2 className="text-2xl bold">Car Air filter</h2>
            <p className="text-orange-500 bold">$ 20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure>
            <img src={image4} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl bold">Battery</h2>
            <p className="text-orange-500 bold">$ 20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image5} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl bold">Tires</h2>
            <p className="text-orange-500 bold">$ 20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image6} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl bold">Screws</h2>
            <p className="text-orange-500 bold">$ 20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;

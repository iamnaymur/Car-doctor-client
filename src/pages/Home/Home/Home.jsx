import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactDetails from "../ContactDetails/ContactDetails";
import PopularProducts from "../PopularProducts/PopularProducts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <ContactDetails></ContactDetails>
      <PopularProducts></PopularProducts>
    </div>
  );
};

export default Home;

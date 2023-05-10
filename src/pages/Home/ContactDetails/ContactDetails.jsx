import icon1 from "../../../assets/icons/Group 32.svg";
import icon2 from "../../../assets/icons/Group 34.svg";
import icon3 from "../../../assets/icons/Group 35.svg";
const ContactDetails = () => {
  return (
    <div className="stats p-2 mt-20 stats-vertical md:items-center justify-center h-48 md:w-full text-white bg-black lg:stats-horizontal shadow">
      <div className="stat ">
        <div className="md:flex">
          <div className="me-2 stat-desc">
            <img src={icon1} alt="" />
          </div>
          <div>
            <div className="stat-title text-white">
              We are open monday-friday
            </div>
            <div className="stat-value">7:00 am - 9:00 pm</div>
          </div>
        </div>
      </div>

      <div className="stat">
        <div className="md:flex">
          <div className="stat-desc me-2">
            <img src={icon2} alt="" />
          </div>
          <div>
            <div className="stat-title text-white">Have a question?</div>
            <div className="stat-value">+2546 251 2658</div>
          </div>
        </div>
      </div>

      <div className="stat">
        <div className="md:flex">
          <div className="stat-desc me-2">
            <img src={icon3} alt="" />
          </div>
          <div>
            <div className="stat-title text-white">
              Need a repair? our address
            </div>
            <div className="stat-value">Liza Street, New York</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

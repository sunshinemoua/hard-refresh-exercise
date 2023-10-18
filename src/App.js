import classes from "./App.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiBatteryCharging, FiCloud } from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoWaterOutline, IoStarSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className={classes["footer-wrapper"]}>
      helllo
      {/* <div className={classes["email-wrapper"]}>
        <Info
          icon={<TfiEmail size="1.25rem" />}
          classDef={"email"}
          name={"info@email.com"}
        />
      </div>
      <div className={classes["second"]}>
        <div className={classes.top}>
          <IoStarSharp size="3rem" />
          <div>
            <button className={classes["demo-btn"]}> Request a Demo </button>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes["bottom-content"]}>
            <span>Po Box 1234</span>
            <span> Seattle, WA 98888 , USA </span>
            <span>425-123-4567</span>
          </div>
          <div className={classes["bottom-content"]}>
            <span className={classes.hours}>Hours</span>
            <span> Monday - Friday: 8am - 5pm </span>
            <span>(Pacific Standard Time)</span>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

const Info = ({ icon, classDef, name }) => {
  return (
    <div className={classes.info}>
      {icon}
      <span className={classes[`${classDef}`]}>{name}</span>
    </div>
  );
};

const Content = () => {
  return (
    <div className={classes["home-wrapper"]}>
      <div className={classes.title}>
        <h3 className={classes.header}>Title Goes Here</h3>
        <p className={classes.child}>
          Child title goes here and explains a little more
        </p>
        <button className={classes.btn}>
          Read More
          <AiOutlineArrowRight />
        </button>
      </div>

      <div className={classes["img-wrapper"]}>
        <img className={classes.img} src="./machine-img.png" />
      </div>
      <div className={classes["info-wrapper"]}>
        <Info
          icon={<FiBatteryCharging color="#175b93" size="1.5rem" />}
          classDef={"info-inner"}
          name={"Ipsum ullamcorper"}
        />
        <Info
          icon={<HiOutlineEmojiHappy color="#175b93" size="1.5rem" />}
          classDef={"info-inner"}
          name={"Sociis egestas dis"}
        />
        <Info
          icon={<IoWaterOutline color="#175b93" size="1.5rem" />}
          classDef={"info-inner"}
          name={"Vehicula ridiculus"}
        />
        <Info
          icon={<IoMdTime color="#175b93" size="1.5rem" />}
          classDef={"info-inner"}
          name={" Etiam urna sapien vestibulum"}
        />
        <Info
          icon={<FiCloud color="#175b93" size="1.5rem" />}
          classDef={"info-inner"}
          name={"Penativus elementum"}
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className={classes["app-wrapper"]}>
      <Content />
      <Footer />
    </div>
  );
};

export default App;

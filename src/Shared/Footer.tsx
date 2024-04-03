import UseIcon from "../components/common/UseIcon";
import Flogo from "../Assets/Images/Flogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center rounded p-10 mt-10">
      <div>
        <p className=" mb-3">
          <Link to="/" className=" ">
            <img src={Flogo} alt="logo" className=" mx-auto h-20" />
          </Link>
          <br />
          Providing reliable tech since 2022
        </p>

        <UseIcon></UseIcon>

        <p className="text-center  mt-3">
          Copyright &copy; {new Date().getFullYear()}. All right reserved to
          <span className="text-primary font-semibold">
            {" "}
            Developer Md Mobassher Hossain
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

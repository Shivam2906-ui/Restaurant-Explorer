import { useContext } from "react";
import UserContext from "../utils/userContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-slate-700 w-full">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-center my-2 p-4 font-semibold text-xl text-slate-100 font-serif">
          Follow Us
        </h1>
        <ul className="flex justify-center flex-wrap">
          <li className="m-4 rounded-full">
            <Link to="https://www.linkedin.com/in/shivam-kumar-mishra-976085244/">
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                alt="Linkedin icon"
                className="h-10 w-10 hover:opacity-75"
              />
            </Link>
          </li>
          <li className="m-4 rounded-full">
            <Link to="https://www.instagram.com/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram icon"
                className="h-10 w-10 hover:opacity-75"
              />
            </Link>
          </li>
          <li className="m-4 rounded-full">
            <Link to="https://m.facebook.com/profile.php/?id=100022477230813">
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png"
                alt="Facebook icon"
                className="h-10 w-10 hover:opacity-75"
              />
            </Link>
          </li>
          <li className="m-4 rounded-full">
            <Link to="https://www.youtube.com/@s.k.m2906">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                alt="YouTube icon"
                className="h-10 w-10 hover:opacity-75"
              />
            </Link>
          </li>
        </ul>
        <h2 className="text-center text-slate-300 mt-6">
          This site is developed by {user.name} - {user.email}
        </h2>
      </div>
    </div>
  );
};

export default Footer;

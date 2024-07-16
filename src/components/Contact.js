import contactBack1 from "../assets/img/contactBack1.png";
import { Link } from "react-router-dom";

const Contact = () => {
  // JSX start from here
  return (
    <>
      <div
        className="flex flex-col md:flex-row h-full w-full bg-cover bg-center justify-between shadow-lg shadow-slate-600"
        style={{ backgroundImage: "url(" + contactBack1 + ")" }}
      >
        <div className="phone w-full md:w-1/3 p-4">
          <div className="my-0 mx-auto flex flex-col items-center justify-center">
            <img
              src="https://visualpharm.com/assets/152/Phone-595b40b75ba036ed117d82e1.svg"
              alt="phone"
              className="w-24 my-12 rounded-2xl"
            />
            <div className="text-center mb-7 mt-10 text-slate-900 font-serif">
              <h1 className="text-xl font-bold">CALL US</h1>
              <p>Mon-Fri from 8am to 5pm</p>
              <p>+91 7319888365 or +91 8927691915</p>
            </div>
          </div>
        </div>
        <div className="mail w-full md:w-1/3 p-4">
          <div className="my-0 mx-auto flex flex-col items-center justify-center">
            <img
              src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Email-Letter-Mail-512.png"
              alt="mail"
              className="w-24 my-12 rounded-2xl"
            />
            <div className="text-center mb-7 mt-10 font-serif">
              <h1 className="text-xl font-bold">MAIL US</h1>
              <p>
                shivam.mishra2021@uem.edu.in or shivamkumardbg1109@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="address w-full md:w-1/3 p-4">
          <div className="my-0 mx-auto flex flex-col items-center justify-center">
            <img
              src="https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/address_location_pin-512.png"
              alt="address"
              className="w-24 my-12 rounded-2xl"
            />
            <div className="text-center mb-7 mt-10 font-serif">
              <h1 className="text-xl font-bold">ADDRESS</h1>
              <p>
                Gurukul, Sikar Road Near Udaipuria Mod, Jaipur, Rajasthan 303807
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

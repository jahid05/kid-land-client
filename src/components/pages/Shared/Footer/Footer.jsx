import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-theme-300">
      <footer className="footer container mx-auto p-10 text-white">
        <div>
          <h1 className="text-4xl font-custom-200 ">Kids Land</h1>
          <div className="">
            <button className="text-2xl me-7 my-2"><FaFacebook></FaFacebook></button>
            <button className="text-2xl me-7 my-2"><FaInstagram></FaInstagram></button>
            <button className="text-2xl me-7 my-2"><FaTwitter></FaTwitter></button>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Career</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

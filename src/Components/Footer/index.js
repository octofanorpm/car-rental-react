import "./style.css";
const Footer = () => {
  return (
    <>
      <footer className="footstyle">
        <div className="consttyle col-3">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="consttyle col-2">
          <a className="nav-link active" aria-current="page" href="#">
            Our Services
          </a>
          <a className="nav-link" href="#">
            Why Us
          </a>
          <a className="nav-link" href="#">
            Testimonial
          </a>
          <a className="nav-link">FAQ</a>
        </div>
        <div className="consttyle col-3">
            <p>Connect with us</p>
            <p>Icons</p>
        </div>
        <div className="consttyle col-3">
            <p>Copyright Binar 2022</p>
            <p>another icon</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

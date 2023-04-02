import "./style.css"
import imgCar from "./img_car.png"
const Header = () => {
  return (
<>
    <div className="heads">
      <div className="col-6 center">
        <h1>Sewa & Rental Mobil Terbaik Di Kawasan (Lokasimu)</h1>
        <p className="w-75">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualotas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <h3>
          <a name="Start" id="" className="btn btn-primary" href="#" role="button">
            Mulai Sewa Mobil
          </a>
        </h3>
      </div>

      <div className="responsive col-6">
        <img src={imgCar} />
      </div>
    </div>
  </>
  )
};



  export default Header;

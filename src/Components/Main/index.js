import "./style.css"
import imgService from "./img_service.png" 
const main = () => {
    return (
<>

    <div className="main">
      <div className="col-6 right">
        <img src={imgService} />
      </div>
      <div className="col-6 center">
        <h1>Best Car Rental For Any Kind Of Trip In (Lokasimu)!</h1>
        <p className="w-75">
         Sewa mobil di (lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan dengan yang lain, 
         kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,wedding, meeting, dll.
        </p>
        <ul>
          <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
          <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
          <li>Sewa Mobil Jangka Panjang Bulanan</li>
          <li>Gratis Antar-Jemput di Bandara</li>
          <li>Layanan Airport Transfer / Drop In Out</li>
        </ul>
      </div>
    </div>

</>
    )
}

export default main
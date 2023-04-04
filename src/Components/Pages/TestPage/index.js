import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Header from "../../Header";
import FormInput from "../../FormInput";

const apiDetailCar = `https://bootcamp-rent-cars.herokuapp.com/customer/car`;

const DetailCar = () => {
  const { carId } = useParams();
  const [dataDetailCar, setDataDetailCar] = useState({});

  console.log({ dataDetailCar });

  useEffect(() => {
    fetch(`${apiDetailCar}/${carId}`) //https://bootcamp-rent-cars.herokuapp.com/customer/car/2410
      .then((res) => res.json())
      .then((response) => {
        setDataDetailCar(response);
      });
  }, [carId]);

  return (
    <div>
      <Navbar />
      <Header />
      <FormInput />

      <div className="all">
        <div className="col-7 containerlocating">
          <div>
            <h5>Tentang Paket</h5>
            <br></br>
            <h5>Include</h5>
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <br></br>
            <h5>Exclude</h5>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <br></br>
            <h5>Refund, Reschedule, Overtime</h5>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
        </div>

        <div className="col-5 cardloc">
          <img class="card-img-top" src={dataDetailCar.image} alt="" />
          <div class="card-body">
            <h4 class="card-title">{dataDetailCar.name}</h4>
            <p class="card-text">{dataDetailCar.category}</p>
          </div>

          <div
            style={{
              margin: "1em",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <b>Total</b>
            </div>
            <div>
              <b>Rp.{dataDetailCar.price}</b>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailCar;

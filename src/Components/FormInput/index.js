import { useState } from "react";
import {useHistory, useParams} from "react-router-dom"
import TextField from "../TextField";
import Select from "../Select";
import { catOptions, hargaOptions, statusOptions } from "./../../Constants";
import { Link } from "react-router-dom";
import "./style.css";
import { Button, Spinner } from "reactstrap";

// const apiCarURL = "https://run.mocky.io/v3/1ebcace0-5bb9-4b8d-a89c-5993b9647194"; //api custom karena yang untuk challenge datanya kosong
const apiCarURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car"; //api untuk search mobil dari BE data server

const FormInput = () => {
  const [valueCategory, setCategory] = useState("");
  const [valueHarga, setHarga] = useState("");
  const [valueStatus, setStatus] = useState("");
  const [valueNamaMobil, setNamaMobil] = useState("");
  const [listCars, setListCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const {push} = useHistory()

  console.log({ listCars });

  const handleOnClick = () => {
    setLoading(true);
    fetch(
      apiCarURL +
        "?" +
        new URLSearchParams({
          name: valueNamaMobil,
          category: valueCategory,
          isRented: valueStatus,
          minPrice: valueHarga,
          page: 1,
          pageSize: 10,
        })
    )
      .then((res) => res.json())
      .then((resp) => {
        const dataCar = resp.cars;
        // console.log(dataCar);
        // setListCars(dataCar);
        setListCars(dataCar);
        setLoading(false);
      });
  };

  const handlePilihMobil = (param) => {
    push(`/cari-mobil/${param}`)
  }

  return (
    <>
      <div id="list" class="listcard styForm">
        <div className="styfill">
          <TextField
            labelValue={"Nama Mobil"}
            value={valueNamaMobil}
            onChange={setNamaMobil}
          />
        </div>

        <div className="styfill">
          <Select
            labelValue={"Kategori"}
            items={catOptions}
            onChange={setCategory}
            value={valueCategory}
            className="styfill"
          />
        </div>

        <div className="styfill">
          <Select
            labelValue={"Harga"}
            items={hargaOptions}
            onChange={setHarga}
            value={valueHarga}
            className="styfill"
          />
        </div>

        <div className="styfill">
          <Select
            labelValue={"Status"}
            items={statusOptions}
            onChange={setStatus}
            value={valueStatus}
            className="styfill"
          />
        </div>

        <Button
          onClick={handleOnClick}
          type="button"
          className="btn btn-primary btn-lg btn-block"
        >
         {loading ? (
          <>
            <Spinner size="sm">Loading...</Spinner>
            <span> Loading</span>
          </>
        ) : (
          <>Cari Mobil</>
        )}
        </Button>
      </div>
      
      {/* <br />
      <hr /> */}

      <div>
        <h3 className="result">Result</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
          className="stycard"
        >
          {listCars.map(({ id, image, name, price }) => {
            return (
              <div class="card col-2">
                <div style={{ width: "auto", height: "auto" }}>
                  <img
                    class="card-img-top"
                    width="auto"
                    height="auto"
                    src={image}
                    alt=""
                  />
                </div>
                <div class="card-body">
                  <h4 class="card-title">{name}</h4>
                  <p class="card-text">{price}</p>
                </div>

                {/* <button className="btn btn-success">Pilih Mobil</button> */}
                {/* <Link
                  to="/search/detail"
                  name="Start"
                  id=""
                  className="btn btn-success"
                  href="#"
                  role="button"
                >
                  Pilih Mobil
                </Link> */}
                <Button onClick={()=>handlePilihMobil(id)} style={{margin: '1em', backgroundColor: "#5CB85F", border: 'none', borderRadius: "2px"}}>Pilih Mobil</Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FormInput;

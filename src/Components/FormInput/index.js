import { useState } from "react";
import TextField from "../TextField";
import Select from "../Select";
import { catOptions, hargaOptions, statusOptions } from "./../../Constants";
import "./style.css";

// const apiCarURL = "https://run.mocky.io/v3/1ebcace0-5bb9-4b8d-a89c-5993b9647194"; //api custom karena yang untuk challenge datanya kosong
const apiCarURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car"; //api untuk search mobil dari BE data server

const FormInput = () => {
  const [valueCategory, setCategory] = useState("");
  const [valueHarga, setHarga] = useState("");
  const [valueStatus, setStatus] = useState("");
  const [valueNamaMobil, setNamaMobil] = useState("");
  const [displayResult, setDisplayResult] = useState(false);
  const [listCars, setListCars] = useState([]);

  // const handleOnClick = () => {
  //   // setDisplayResult(true);
  // };

  const handleOnClick = () => {
    // setLoading(true);
    fetch(
      apiCarURL
       +
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
        console.log (dataCar)
        setListCars(dataCar)
        // setListCars(dataCar);
        // setLoading(false);
      });
  };

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
            // placeholder={catOptions[0].text}
          />
        </div>

        <div className="styfill">
          <Select
            labelValue={"Harga"}
            items={hargaOptions}
            onChange={setHarga}
            value={valueHarga}
            className="styfill"
            // placeholder={hargaOptions[0].text}
          />
        </div>

        <div className="styfill">
        <Select
          labelValue={"Status"}
          items={statusOptions}
          onChange={setStatus}
          value={valueStatus}
          className="styfill"
          // placeholder={statusOptions[0].text}
        />
        </div>

        <button 
            onClick={handleOnClick}
            type="button"
            // className="btn btnstyle"
            className="btn btn-primary btn-lg btn-block"
          >
            Cari Mobil
          </button>
      </div>
      {/* <br />
      <hr /> */}
      
      {/* <div>
        <h3>Result</h3>
          <div>
            <p>Nama Mobil: {valueNamaMobil}</p>
            <p>Kategori Mobil: {valueCategory}</p>
            <p>Harga Mobil: {valueHarga}</p>
            <p>Status Mobil: {valueStatus}</p>
          </div>
      </div> */}

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
          {listCars.map(({id, image, name, price }) => {
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

                  <button className="btn btn-success">Pilih Mobil</button>

              </div>
              
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FormInput;

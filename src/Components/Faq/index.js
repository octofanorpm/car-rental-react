import "./style.css"
const Faq = () => {
    return (
        <>
            <div className="row constyle">
                <div className="col-6">
                    <h1>Frequently Asked Question</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            
                <div className="col-6 dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button">
                    Apa saja syarat yang dibutuhkan?
                    </button>
                    <button className="btn btn-secondary dropdown-toggle" type="button">
                    Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                    <button className="btn btn-secondary dropdown-toggle" type="button">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                    <button className="btn btn-secondary dropdown-toggle" type="button">
                    Apakah Ada biaya antar-jemput?
                    </button>
                    <button className="btn btn-secondary dropdown-toggle" type="button">
                    Bagaimana jika terjadi kecelakaan
                    </button>
                        {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul> */}
                </div>
            </div>
            
        </>
    )
}

export default Faq;
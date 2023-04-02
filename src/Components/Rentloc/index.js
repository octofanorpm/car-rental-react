import "./syle.css"
import {Link} from "react-router-dom"
const Rentloc = () => {
    return (
        <>
        <div className="containerloc">
            <h1 class>Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p className="w-50 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to='/search' name="Start" id="" className="btn btn-primary" href="#" role="button">
            Mulai Sewa Mobil
          </Link>
        </div>
        </>
    )
}

export default Rentloc;
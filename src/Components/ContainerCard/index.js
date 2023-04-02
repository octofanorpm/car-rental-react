import "./style.css"
import Card from "../../Components/Card"
import hrs from "./icon_24hrs.png"
import comp from "./icon_complete.png"
import price from "./icon_price.png"
import pro from "./icon_professional.png"

// const ContainerCard = ({ description, reviewer }) => {
    const ContainerCard = () => {
    return (
        <div id="list" class="listcard styCont">
            <Card description="Mobil Lengkap" reviewer="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat" /> 
            <Card description="Harga Murah" reviewer="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain" />
            <Card description="Layanan 24 Jam" reviewer="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu" />
            <Card description="Sopir Profesional" reviewer="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu" />
        </div>
        );
    /*
  return (
    <div className="container styconts">
      <div className="card text-left styCard">
        <img className="card-img-top" src="holder.js/100px180/" alt="" />
        <div className="card-body">
          <p className="card-title">{description}</p>
          <p className="card-text">{reviewer}</p>
        </div>
      </div>
    </div>
  );
  */
};

export default ContainerCard;

import "./style.css"
import Card from "../../Components/Card"

// const ContainerCard = ({ description, reviewer }) => {
    const ContainerCard = () => {
    return (
        <div id="list" class="listcard styCont">
            <Card description="Binar Bagus Banget" reviewer="rijarmdh" />
            <Card description="Binar Bagus Banget" reviewer="rijarmdh" />
            <Card description="Binar Bagus Banget" reviewer="rijarmdh" />
            <Card description="Binar Bagus Banget" reviewer="rijarmdh" />
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

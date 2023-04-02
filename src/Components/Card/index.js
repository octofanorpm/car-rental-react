import "./style.css";

//props
const Card = ({ description, reviewer, img }) => {

  return (
      <div className="card text-left styCard">
        <img className="card-img-top" alt="">{img}</img>
        <div className="card-body">
          <p className="card-title">{description}</p>
          <p className="card-text">{reviewer}</p>
        </div>
      </div>
  );
};

export default Card;

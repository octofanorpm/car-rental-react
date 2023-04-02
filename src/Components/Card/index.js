import "./style.css";

//props
const Card = ({ description, reviewer }) => {

  return (
      <div className="card text-left styCard">
        <img className="card-img-top" src="holder.js/100px180/" alt="" />
        <div className="card-body">
          <p className="card-title">{description}</p>
          <p className="card-text">{reviewer}</p>
        </div>
      </div>
  );
};

export default Card;

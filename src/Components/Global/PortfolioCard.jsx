// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";

import classes from "../../assets/styles/PortfolioCard.module.css";

const PortfolioCard = ({
  image = "img",
  title = "abc",
  category = "category",
}) => {
  return (
    <>
      <div className={classes.card}>
        <img src={image} alt={title} className={classes.cardimage} />

        <div className={classes.overlay}>
          <p className={classes.category}>{category}</p>
          <h3 className={classes.title}>{title}</h3>
          <div className={classes.buttons}>
            <button className={classes.btn}>↗</button>
            <button className={classes.btn}>→</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;

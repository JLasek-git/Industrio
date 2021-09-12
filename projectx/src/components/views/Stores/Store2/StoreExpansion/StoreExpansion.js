import React from "react";
import PropTypes from "prop-types";
import styles from "./StoreExpansion.module.scss";
import ButtonBuy from "../../../../common/ButtonBuy/ButtonBuy";
function StoreExpansion({ name, improvement, cost }) {
  return (
    <div className={styles.singleExpansion}>
      <p className={styles.expansionName}>{name}</p>
      <div className={styles.actionHandler}>
        <ButtonBuy />
      </div>
      <div className={styles.descriptions}>
        <p>Additional places: {improvement}</p>
        <p>Cost: ${cost}</p>
      </div>
    </div>
  );
}

StoreExpansion.propTypes = {
  name: PropTypes.node,
  improvement: PropTypes.node,
  cost: PropTypes.node,
};
export default StoreExpansion;

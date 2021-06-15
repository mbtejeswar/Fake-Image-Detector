import React, { Component } from "react";
import styles from "./styles.module.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    debugger;
    return (
      <header className={styles["header"]}>
        <div className={styles["left-container"]}>
          <div className={styles["text-big"]}>Fake Image detector</div>
          {this.props.heading && (
            <h1 className={`${styles["text-big"]} ${styles["heading"]}`}>
              {this.props.heading}
            </h1>
          )}
        </div>

        <div className={styles["right-container"]}>
         
        </div>
      </header>
    );
  }
}

// export default withRouter(Navigation);
export default Navigation;

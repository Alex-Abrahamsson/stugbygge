import React from "react";

import style from "./footer.module.scss";

function Footer() {
  return (
    <footer className={style.FooterContainer}>
      <div className={style.ContentContainer}>
        <p>Footer</p>
      </div>
    </footer>
  );
}

export default Footer;

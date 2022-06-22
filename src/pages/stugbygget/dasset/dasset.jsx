import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import dassImages from "../../../data/dassImages";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import styles from "./dasset.module.scss";


function Dasset() {
  return (
    <Container className={styles.ContentContainer}>
      <ImageGallery
        additionalClass={styles.MyGallery}
        disableSwipe={false}
        autoPlay={true} // set false orr comment if donnot want to auto play
        showFullscreenButton={true} // set false to hide button
        showPlayButton={true} // set false to hide button
        items={dassImages}
        showThumbnails={true}
        showNav={true}
        thumbnailPosition="top"
      />
    </Container>
  );
}

export default Dasset;

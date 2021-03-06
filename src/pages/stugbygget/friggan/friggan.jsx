import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import frigganImages from "../../../data/frigganImages";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import styles from "./friggan.module.scss";

function Friggan() {
  return (
    <Container className={styles.ContentContainer}>
      <ImageGallery
        additionalClass={styles.MyGallery}
        disableSwipe={false}
        autoPlay={true} // set false or comment if donnot want to auto play
        showFullscreenButton={true} // set false to hide button
        showPlayButton={true} // set false to hide button
        items={frigganImages}
        showThumbnails={true}
        showNav={true}
        thumbnailPosition="top"
      />
    </Container>
  );
}

export default Friggan;

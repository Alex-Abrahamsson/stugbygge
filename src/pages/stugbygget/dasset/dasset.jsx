import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./dasset.module.scss"

function Dasset() {
  return (
    <Container>
      <Row>
        <Col><Image className={styles.images} src="https://drive.google.com/thumbnail?id=12EbFehupgYiNZAF0E4O7fG6nd7R4twbP" alt="drive image"/></Col>
        <Col><Image className={styles.images} src="https://drive.google.com/thumbnail?id=12DO-NC9e3ImELtOmJpq9iG3h204wAl5m" alt="drive image"/></Col>
        <Col><Image className={styles.images} src="https://drive.google.com/thumbnail?id=120aMp2dXu3hCT0nlaCRhBqaFkhcn6AHl" alt="drive image"/></Col>
        <Col><Image className={styles.images} src="https://drive.google.com/thumbnail?id=11pmmaxYgy05ZFM2_u0IDk7rfw5SrONYF" alt="drive image"/></Col>
      </Row>
      <Row>
        <Col><Image className={styles.images} src="https://drive.google.com/thumbnail?id=11d_4nl8Gj_YeAL1KFSK9fQLzAvGOtF7D" alt="drive image"/></Col>
        <Col><Image className={styles.images} src="https://drive.google.com/thumbnail?id=11RFY9i0TQkPQpA1N59RGlM3LKXm6h299" alt="drive image"/></Col>
        <Col><Image className={styles.images} src="https://drive.google.com/thumbnail?id=119nsMtfz58CrqZfI9FO0eO45s9Fl6NB1" alt="drive image"/></Col>
      </Row>
    </Container>
  );
}

export default Dasset;

import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./friggan.module.scss";

function Friggan() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            className={styles.images}
            src="https://drive.google.com/thumbnail?id=12ZEKlXqYAU-78hrSrikcjPDXeoWuHrWx"
            alt="drive image"
          />
        </Col>
        <Col>
          <Image
            className={styles.images}
            src="https://drive.google.com/thumbnail?id=12USwyKV7q4W-FYRkhMvKVxJWN8-6WkG1"
            alt="drive image"
          />
        </Col>
        <Col>
          <Image
            className={styles.images}
            src="https://drive.google.com/thumbnail?id=12Rv374XO0KFL0kflDI3ab3WVWiTshJqN"
            alt="drive image"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Friggan;

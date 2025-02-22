import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Card, ToggleButton } from "react-bootstrap";
import "boxicons";
import ModalFeature from "./ModalFeature";
import styles from "../CSS/Cards.module.css";

const Cards = ({ data, pag, view }) => {
  let page = 8;
  const [filteredData, setFilteredData] = useState(data.slice(0, 8));
  // console.log("ssss" + view)

  useEffect(() => {
    if (view) {
      const adjustedPag = (pag = 0 ? 1 : pag);
      const newData = data?.slice(page * (adjustedPag - 1), page * adjustedPag);
      setFilteredData(newData);
    } else {
      if (window.innerWidth > 768) {
        setFilteredData(data);
      }
    }
  }, [data, pag]);

  const [show, setShow] = useState(false);

  return filteredData.map?.((data) => (
    <div key={data?.id} className="card-item">
      <ModalFeature show={show} setShow={setShow} data={data} />
      <Card style={{ width: "10rem", height: "21rem" }}>
        <Card.Img
          style={{
            width: "160px",
            height: "160px",
          }}
          variant="top"
          src={data?.images}
        />
        {/* <Button
          size="sm"
          variant="primary"
          style={{
            position: "absolute",
            top: "125px",
            right: "5px",
            whiteSpace: "nowrap",
            maxWidth: "110px",
            overflow: "auto",
          }}
        >
          <img
            src="location.svg"
            alt=""
            style={{
              width: "15px",
              position: "relative",
              right: "3px",
              top: "-1px",
            }}
          />
          {"Sincelejo"}
        </Button>  */}
        {data?.fest && (
          <img
            className={styles["img-fest"]}
            src="images/BurgerFestPrime.png"
            alt="Hot Dog Fest"
          ></img>
        )}
        <Card.Body>
          <Card.Title
            style={{
              width: "128px",
              height: "50px",
              position: "relative",
              top: "10px",
              overflow: "auto",
              fontSize: "14px",
            }}
          >
            {data.name}
          </Card.Title>
          {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
          <Card
            style={{
              width: "8rem",
              position: "relative",
              height: "95px",
              top: "5px",
            }}
          >
            <Card.Body
              style={{
                margin: "auto",
                position: "relative",
                right: "10px",
                top: "-8px",
              }}
            >
              <Card.Title
                style={{
                  position: "relative",
                  top: "15px",
                  fontSize: "14px",
                  right: "-11px",
                }}
              >
                Contáctanos
              </Card.Title>
              <div
                style={{ position: "relative", right: "14px", top: "-40px" }}
              >
                <Card.Link href={data.contact?.instgram}>
                  <img
                    style={{ width: "35px", position: "absolute", top: "52px" }}
                    src="images/instagram.png"
                    alt=""
                  />
                </Card.Link>
                <Card.Link href={data.contact?.phoneNum}>
                  <img
                    style={{
                      width: "35px",
                      position: "absolute",
                      right: "-23px",
                      top: "52px",
                    }}
                    src="images/whatsapp.png"
                    alt=""
                  />
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  ));
};

export default Cards;

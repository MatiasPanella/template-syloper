import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./CardItems.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const CardItems = () => {
  const [datos, setDatos] = useState([
    {
      nombre: "Sensor Termico",
      desc: "Este sensor termico sirve para realizar mediciones, etc, etc...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
      id: 1,
      price: "20.000",
    },
    {
      nombre: "Sensor Foto Electrico",
      desc: "Este sensor termico sirve para realizar mediciones, etc, etc...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
      id: 2,
      price: "30.000",
    },
    {
      nombre: "Sensor Optico",
      desc: "Este sensor termico sirve para realizar mediciones, etc, etc...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
      id: 3,
      price: "25.000",
    },
    {
      nombre: "Sensor de Proximidad",
      desc: "Este sensor termico sirve para realizar mediciones, etc, etc...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
      id: 4,
      price: "18.500",
    },
    {
      nombre: "Sensor Infrarrojo",
      desc: "Este sensor termico sirve para realizar mediciones, etc, etc...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
      id: 5,
      price: "32.750",
    },
    {
      nombre: "Sensor Infrarrojo",
      desc: "Este sensor termico sirve para realizar mediciones, etc, etc...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
      id: 6,
      price: "21.150",
    },
    {
      nombre: "Sensor Infrarrojo",
      desc: "Este sensor termico sirve para realizar mediciones, etc, etc...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
      id: 7,
      price: "32.000",
    },
    {
      nombre: "Sensor Infrarrojo",
      desc: "Este sensor termico sirve para realizar mediciones, etc, etc...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
      id: 8,
      price: "34.520",
    },
  ]);

  localStorage.setItem("productos", JSON.stringify(datos));

  var data = JSON.parse(localStorage.getItem("productos"));

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      textAlign: "center",
    },
    media: {
      height: 140,
    },
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const classes = useStyles();

  return (
    <>
      <div className="card__container">
        <div className="row">
         
            {data.length != 0
              ? data.map((dat) => {
                  return (
                    <div className="col-sm">
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={dat.image}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            type=" button"
                            onClick={() => setModalIsOpen(true)}
                          >
                            {dat.nombre}
                          </Typography>
                          <p style={{ color: "grey" }}>{dat.price}</p>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" id={dat.id}>
                          <Link to="/product">COMPRAR</Link>
                        </Button>
                      </CardActions>
                    </Card>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      

      {data.length != 0
        ? data.map((dat) => {
            return (
              <Modal isOpen={modalIsOpen}>
                <h2>{dat.nombre}</h2>
                <p>{dat.desc}</p>
                <button onClick={() => setModalIsOpen(false)}> Cerrar </button>
              </Modal>
            );
          })
        : null}
    </>
  );
};

export default CardItems;

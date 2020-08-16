import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./CardItems.css";
import Modal from 'react-modal'

const CardItems = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      textAlign:'center'
    },
    media: {
      height: 140,
    },
  });


  const [modalIsOpen, setModalIsOpen]= useState(false)

  const classes = useStyles();

  return (
    <>
      <div className="card__container">
        <div className="row">
          <div className="col-sm">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" type=" button" onClick={()=>setModalIsOpen(true)}>
                    Sensor
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  COMPRAR
                </Button>
              </CardActions>
            </Card>
          </div>
        
          <div className="col-sm">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" type=" button" onClick={()=>setModalIsOpen(true)}>
                    Sensor
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  COMPRAR
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="col-sm">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" type=" button" onClick={()=>setModalIsOpen(true)}>
                    Sensor
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  COMPRAR
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="col-sm">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" type=" button" onClick={()=>setModalIsOpen(true)}>
                    Sensor
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  COMPRAR
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="col-sm">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" type=" button" onClick={()=>setModalIsOpen(true)}>
                    Sensor
                  </Typography>
                  <p style={{color:'grey'}}>$10.000</p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Comprar
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="col-sm">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU"
                  title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" type=" button" onClick={()=>setModalIsOpen(true)}>
                    Sensor
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
                <Button size="small" color="primary">
                  Comprar
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen}>
            <h2>Title</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <button onClick={() => setModalIsOpen(false)}> Cerrar </button>
          </Modal>

    </>
  );
};

export default CardItems;

import React from "react";
import "./SocialMedias.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const SocialMedias = () => {
  return (
    <>
    <div className='social__medias'>
      <div className="contact__medias">
        <select>
          <option value="español">ESPAÑOL</option>
          <option value="ingles">INGLES</option>
          <option value="portugues">PORTUGUES</option>
        </select>
        <div className="icons">
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
        <a href="#">Soporte</a>
        <a href="#">Descargas</a>
        <a href="#">Contacto</a>
      </div>
      <div className='contact__phone'>
        <WhatsAppIcon />
        <p><b>Hablá</b> con nosotros</p>
      </div>
      </div>
    </>
  );
};
export default SocialMedias;

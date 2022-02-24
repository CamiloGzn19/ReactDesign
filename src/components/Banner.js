import React from "react";
import { Ban, Image, Parap, Parap2, Title, Text, Ancor } from "../Styles/Banner_Styles";

const Banner = () => {
  return (
    <Ban>
      <Parap>
        <Image
          src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455262/Reto%205/illustration-stay-productive_soktxy.png"
          alt=""
        />
      </Parap>
      <Parap2>
        <Title>Stay productive, wherever you are</Title>
        <Text>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs. 
          <br/>
          <br/>
          Securely share files and folders with friends, family and colleagues for live 
          collaboration. No email attachments required.
        </Text>
        <br/>
        <Ancor href="#">See how Fylo works</Ancor>
      </Parap2>
    </Ban>
  );
};

export default Banner;

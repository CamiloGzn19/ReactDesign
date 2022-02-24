import React from "react";
import { Container, Img, Main, Text, BtnP} from "../Styles/Presentation_Styles";

const presentation = () => {
  return (
    <Container>
      <Img
        src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455261/Reto%205/illustration-intro_un4cgx.png"
        alt=""
      />
      <Main>
        All your files in one secure locations, accessible anywhere.
      </Main>
      <Text>
        Fylo stores all your most important files in one secure location.
        Access them wherever you need, share and collaborate with 
        friends, family, and co-workers.
      </Text>
      <BtnP>Get Started</BtnP>
    </Container>
  );
};

export default presentation;

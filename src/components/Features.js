import React from "react";
import {
  Feat,
  Cont,
  Card,
  Logo,
  Ltitle,
  Text,
} from "../Styles/Features_styles";

const Features = () => {
  return (
    <Feat>
      <Cont>
        <Card>
          <Logo
            src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455260/Reto%205/icon-access-anywhere_runax3.svg"
            alt=""
          />
          <Ltitle>Access your files, anywhere</Ltitle>
          <Text>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </Text>
        </Card>
        <Card>
          <Logo
            src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455261/Reto%205/icon-collaboration_zkul2y.svg"
            alt=""
          />
          <Ltitle>Real-time collaboration</Ltitle>
          <Text>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </Text>
        </Card>
      </Cont>
      <Cont>
        <Card>
          <Logo
            src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455262/Reto%205/icon-security_zwmbo4.svg"
            alt=""
          />
          <Ltitle>Security you can trust</Ltitle>
          <Text>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </Text>
        </Card>
        <Card>
          <Logo
            src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455261/Reto%205/icon-any-file_nmevff.svg"
            alt=""
          />
          <Ltitle>Store any type of file</Ltitle>
          <Text>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </Text>
        </Card>
      </Cont>
    </Feat>
  );
};

export default Features;

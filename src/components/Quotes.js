import React from "react";
import {
  Quo,
  Mark,
  Card,
  Person,
  Text,
  Name,
  Prof,
  PerInf,
  Sub,
} from "../Styles/Quotes_Styles";

const Quotes = () => {
  return (
    <Quo>
      <Mark
        src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455260/Reto%205/bg-quotes_jdj4q6.png"
        alt="quotation"
      />
      <Card>
        <Text>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </Text>
        <Person>
          <Prof
            src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455263/Reto%205/profile-1_k02t1e.jpg"
            width="24"
            height="24"
            alt=""
          />
          <PerInf>
            <Name>Satish Patel</Name>
            <Sub>Founder & CEO, Huddle</Sub>
          </PerInf>
        </Person>
      </Card>
      <Card>
        <Text>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </Text>
        <Person>
          <Prof
            src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455263/Reto%205/profile-2_av2kld.jpg"
            width="24"
            height="24"
            alt=""
          />
          <PerInf>
            <Name>Bruce McKenzie</Name>
            <Sub>Founder & CEO, Huddle</Sub>
          </PerInf>
        </Person>
      </Card>
      <Card>
        <Text>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </Text>
        <Person>
          <Prof
            src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645455263/Reto%205/profile-3_l4m8yv.jpg"
            width="24"
            height="24"
            alt=""
          />
          <PerInf>
            <Name>Iva Boyd</Name>
            <Sub>Founder & CEO, Huddle</Sub>
          </PerInf>
        </Person>
      </Card>
    </Quo>
  );
};

export default Quotes;

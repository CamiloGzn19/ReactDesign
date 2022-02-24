import React from "react";
import { Acc, Title, Text, Ipt, BtnS, Adv } from "../Styles/Access_Styles";

const Access = () => {
  return (
    <Acc>
      <Title>Get early access today</Title>
      <Text>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </Text>
      <div>
        <Ipt type="email" placeholder="email@example.com"/>
        <BtnS>Get Started For Free</BtnS>
      </div>
      <Adv className="error">Please enter a valid email address</Adv>
    </Acc>
  );
};

export default Access;

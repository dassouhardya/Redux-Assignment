import React from "react";
import styled from "styled-components";
const Cards = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: auto;
  padding: 1px;
  flex-direction: column;
  background-image: linear-gradient(to right, yellow, orange);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 26);
  border-radius: 8px;
  margin: 2rem auto;
  padding: 1rem;
  width: 30%;
  // max-width: 35rem;
  font-weight: bold;

  // &:not(:last-child) {
  //   margin-right: 30px;
  // }

  @media only screen and (max-width: 800px) {
    flex-direction:column;
    width: auto;
  }
`;

const Card = (props) => {
  return (
    <Cards>
      <img
        src={props.data.imageUrl}
        style={{ height: `8rem`, width: `8rem`,margin:`auto`}}
        alt="user"
      ></img>

      <div>
        ID:– {props.data.id}
        <br></br>
        First Name: {props.data.firstName}
        <br></br>
        Last Name: {props.data.lastName}
        <br></br>
        Email: {props.data.email}
        <br></br>
        Contact Number: {props.data.contactNumber}
        <br></br>
        Age: {props.data.age}
        <br></br>
        D.O.B : {props.data.dob}
        <br></br>
        Salary : ₹{props.data.salary}
        <br></br>
        Address: {props.data.address}
        <br></br>
      </div>
    </Cards>
  );
};

export default Card;

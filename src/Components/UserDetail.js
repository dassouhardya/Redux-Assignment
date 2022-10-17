import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "./Card";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 25px;
  width: 100%;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const Button = styled.button`
  justify-content: center;
  background-color: aqua;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
`;

const UserDetail = () => {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);

  const navigate = useNavigate();
  return (
    <>
      <Div>
        {data.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </Div>
      <Div>
        <Button onClick={() => navigate(-1)}>BACK</Button>
      </Div>
    </>
  );
};

export default UserDetail;

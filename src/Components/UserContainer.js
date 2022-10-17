import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 50px;
  margin: 25px;
`;

const Para = styled.p`
  display: flex;
  justify-content: center;
`;

const Submit = styled.button`
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
const UserContainer = ({ fetchUsers, userData }) => {
  const navigate = useNavigate();
  const [Error, setError] = useState("");
  let userIds = [];
  const showHandler = (event) => {
    event.preventDefault();
    // console.log(event);

    userIds = [];
    // console.log(userData);
    // console.log(userData.users);
    // console.log(Object.values(event.target)[0].id);
    userData.users.map((user) =>
      Object.values(event.target).map((userId) => {
        //    console.log(userId.id);

        return userId.nodeName === "INPUT" && userId.checked
          ? Number(user.id) === Number(userId.id)
            ? userIds.push(user)
            : null
          : "";
      })
    );
    if (userIds.length > 0) {
      setError("");
      navigate("/details", { state: { data: userIds } });
    } else {
      setError("❌Please select atleast one field.❌");
    }
    console.log(userIds);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <Header>User List</Header>
      <form onSubmit={showHandler}>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <Div key={user.id}>
              <input type="checkbox" id={user.id}></input>
              <label>
                {" "}
                {user.firstName} {user.lastName}
              </label>
            </Div>
          ))}
        <Div>
          <Submit>Submit</Submit>
        </Div>
      </form>
      <Para>{Error}</Para>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

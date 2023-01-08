import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { Link } from "react-router-dom";
import vl from "../images/VectorLogin.svg"
import { BaseURL } from "../App";

import "../CSS/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resp, setResponse] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    variant: "",
    text: "",
  });

  const login = (e) => {
    e.preventDefault();
    let data = { username: email, password: password };
    let url = `${BaseURL}/client/login/`;
    axios
      .post(url, data)
      .then((response) => {
        if (Math.floor(response.status / 100) === 2) {
          setResponse(response.data.token);
          setAlert({
            show: true,
            variant: "success",
            text: "Logged in successfully",
          });
        }
      })
      .catch((error) => {
        setResponse(error.response.data.message)
        console.log(resp)

        setAlert({
          show: true,
          variant: "danger",
          text: error.response.data.message,
        });
      });
  };
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [resp]);

  return (
    <div>
      <Form className="login-form" onSubmit={login}>
        <h3 className="login-heading">Login</h3>
        <div className="login-comps">
          <Form.Group className="login-input" controlId="formBasicEmail">
            <Form.Label>Email address: </Form.Label>
            <Form.Control
              name="email"
              value={email}
              placeholder="Enter email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="login-input" controlId="formBasicPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <div className="login-button">
            <Button variant="outline-light" type="submit">
              Submit
            </Button>
            <Form.Text className="login-signup">
              Don't have an account? <Link to="/signup">Signup</Link>
            </Form.Text>
          </div>
        </div>
      </Form>
      {alert.show ? <Alert variant={alert.variant}>{alert.text}</Alert> : <></>}
        <img src = {vl} className="login-svg" alt = "SVG"/>
    </div>
  );
}

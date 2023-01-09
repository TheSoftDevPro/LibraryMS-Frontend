import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { Link } from "react-router-dom";

import { BaseURL } from "../App";

import "../CSS/Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [disbool, setDisbool] = useState(true);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [resp, setResponse] = useState("");
  const [samepass, setSamepass] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    variant: "",
    text: "",
  });

  const signup = (e) => {
    if (password !== confirm_password) {
      setAlert({
        show: true,
        variant: "danger",
        text: "password values did not match",
      });
    } else {
      e.preventDefault();
      let data = {
        username: email,
        password: confirm_password,
        mobile: mobile,
        name: name,
      };
      let url = `${BaseURL}/signup/`;
      axios
        .post(url, data)
        .then((response) => {
          if (Math.floor(response.status / 100) === 2) {
            // setResponse(response.data.token);
            setAlert({
              show: true,
              variant: "success",
              text: "Signed up successfully",
            });
          }
        })
        .catch((error) => {
          setResponse(error.response.data.message);

          setAlert({
            show: true,
            variant: "danger",
            text: error.response.data.message,
          });
        });
    }
  };
  useEffect(() => {
    setEmail("");
    setName("");
    setMobile("");
    setAlert({
      show: false,
      variant: "",
      text: "",
    });
    setConfirmPassword("");
    setPassword("");
  }, [resp]);

  useEffect(() => {
    if (confirm_password !== password) {
      setSamepass("Password values did not match");
    } else {
      setSamepass("");
    }
  }, [confirm_password, password]);

  // useEffect(()=>{
  //   if(mobile.length > 10)
  // }
  // )

  return (
    <div className="signup-div">
      <Form className="signup-form" onSubmit={signup}>
        <div className="signup-heading-div">
          <h3 className="signup-heading">Sign Up</h3>
        </div>
        <div className="signup-comps">
          <Form.Group className="signup-input" controlId="formBasicName">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              name="name"
              value={name}
              placeholder="Enter your name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="signup-input" controlId="formBasicEmail">
            <Form.Label>Email address: </Form.Label>
            <Form.Control
              name="email"
              value={email}
              placeholder="Enter email"
              required
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="signup-input" controlId="formBasicMobile">
            <Form.Label>Mobile Number: </Form.Label>
            <Form.Control
              name="mobile"
              value={mobile}
              placeholder="Enter mobile"
              required
              type="number"
              onChange={(e) => {
                if(e.target.value.length <= 10)
                setMobile(e.target.value);

              }}
            />
          </Form.Group>

          <Form.Group className="signup-input" controlId="formBasicPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
                setDisbool(false);
              }}
            />
          </Form.Group>
          <Form.Group
            className="signup-input"
            controlId="formBasicConfirmPassword"
          >
            <Form.Label>Confirm Password: </Form.Label>
            <Form.Control
              name="confirm_password"
              value={confirm_password}
              type="password"
              placeholder="Confirm Password"
              required
              disabled={disbool}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <Form.Text className="signup-confirm">{samepass}</Form.Text>
          </Form.Group>
          <div className="signup-button-gp">
            <Button
              variant="outline-light"
              className="signup-button"
              size="md"
              type="submit"
            >
              Submit
            </Button>
            <Form.Text className="signup-login">
              Already have an account? <Link to="/login" className="signup-login-link">Login</Link>
            </Form.Text>
          </div>
        </div>
      </Form>
      {alert.show ? <Alert variant={alert.variant}>{alert.text}</Alert> : <></>}
    </div>
  );
}

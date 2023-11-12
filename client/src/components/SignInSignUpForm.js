import { Button, Checkbox, Form, Input } from "antd";
import star from "../assets/star.png";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function SignInSignUpForm({ title }) {
  const navigate = useNavigate();
  const signIn = async (email) => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
      });
      const token = response.data.access_token;
      localStorage.setItem("access_token", token);
      navigate("/");
    } catch (error) {
      Swal.fire({
        // title: error.response.data.message,
        text: error.response.data.message,
        icon: "error",
      });
    }
  };

  const signUp = async (email) => {
    try {
      const response = await axios.post("http://localhost:3001/register", {
        email,
      });
      const token = response.data.access_token;
      Swal.fire({
        text: response.data.message,
        icon: "success",
      });
      navigate("/signin");
    } catch (error) {
      Swal.fire({
        text: error.response.data.message,
        icon: "error",
      });
    }
  };
  const onFinish = (values) => {
    if (title === "Sign In") {
      signIn(values.email);
    } else if (title === "Sign Up") {
      signUp(values.email);
    }
  };
  return (
    <div>
      <img src={star} width="150px" />
      <h1>AWARD</h1>
      <h3>Enter your email address to {title} and continue</h3>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Email Address" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {title}
          </Button>
        </Form.Item>
        {title === "Sign In" && (
          <h5>
            Don't have any account? <a href="/signup">Sign Up</a>
          </h5>
        )}
        {title === "Sign Up" && (
          <h5>
            Already have an account? <a href="/signin">Sign In</a>
          </h5>
        )}
      </Form>
    </div>
  );
}

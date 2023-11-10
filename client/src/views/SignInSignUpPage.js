import { Button, Checkbox, Form, Input } from "antd";
import SignInSignUpForm from "../components/SignInSignUpForm";
import { Flex } from "antd";

export default function SignInSignUpPage({ title }) {
  return (
    <Flex
      align="center"
      justify="center"
      style={{ paddingTop: "20px", width: "100vw", height: "100vh" }}
    >
      <SignInSignUpForm title={title} />
    </Flex>
  );
}

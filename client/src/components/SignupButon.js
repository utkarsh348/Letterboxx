import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'reactstrap';

const SignupButton = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <Button
      className="btn btn-info btn-block" href='/signup'
    >
      Signup
    </Button>
  );
};

export default SignupButton;
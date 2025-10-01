import "@/global.css";
import { ImageBackground } from "react-native";
import LoginDetails from "../components/LoginDetails";
import { useState } from "react";

export default function Index() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Login button pressed");
    console.log({ fullName, password, rememberMe });
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password pressed");
  };

  const handleSignUp = () => {
    console.log("Sign Up pressed");
  };

  return (
    <ImageBackground
      source={require("../assets/images/pexels-photo-3571551.jpeg")}
      className="flex-1 w-screen h-screen justify-center items-center"
    >
      <LoginDetails
        fullName={fullName}
        setFullName={setFullName}
        password={password}
        setPassword={setPassword}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
        onLoginPress={handleLogin}
        onForgotPress={handleForgotPassword}
        onSignUpPress={handleSignUp}
      />
    </ImageBackground>
  );
}

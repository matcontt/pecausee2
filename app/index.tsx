import "@/global.css";
import { ImageBackground } from "react-native";
import LoginDetails from "../components/LoginDetails";
import { useState } from "react";

export default function Index() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
      />
    </ImageBackground>
  );
}

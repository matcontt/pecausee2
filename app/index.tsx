import "@/global.css";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ImageBackground } from "react-native";
import LoginDetails from "../components/LoginDetails";

export default function Index() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [actionType, setActionType] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    if (!actionType) return; 

    switch (actionType) {
      case "Login":
        Alert.alert("Logueando");
        // Esperar 2 segundos para pasar de pagina (unicamente estético)
        setTimeout(() => {
          router.push("/(home)/HomeScreen");
        }, 2000);
        break;
      case "SignUp":
        Alert.alert("Registrando");
        break;
      case "ForgotPassword":
        Alert.alert("Contraseña diferente");
        break;
      default:
        break;
    }
  
    setActionType("");
  }, [actionType]);

  const handleForgotPassword = () => {
    setActionType("ForgotPassword");
  };

  const handleSignUp = () => {
    setActionType("SignUp");
  };

  const handleLogin = () => {
    setActionType("Login");
  };

  return (
    <ImageBackground
      source={require("../assets/images/FondoMusica.png")}
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

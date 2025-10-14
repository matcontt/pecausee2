import "@/global.css";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ImageBackground } from "react-native";
import LoginDetails from "../components/LoginDetails";
import RegisterForm from "../components/RegisterForm";

export default function Index() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [actionType, setActionType] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    if (!actionType) return;

    switch (actionType) {
      case "Login":
        Alert.alert("Logueando");
        setTimeout(() => {
          router.push("/(home)/HomeScreen");
        }, 2000);
        break;
      case "Register":
        if (password !== confirmPassword) {
          Alert.alert("Error", "Las contraseñas no coinciden");
        } else {
          Alert.alert("Registrando");
          // Aquí puedes agregar tu lógica de registro
          // Por ahora, solo volvemos al login
            setTimeout(() => {
                setIsRegistering(false);
            }, 2000);
        }
        break;
      case "ForgotPassword":
        Alert.alert("Contraseña diferente");
        break;
      default:
        break;
    }

    setActionType("");
  }, [actionType, password, confirmPassword]);

  const handleForgotPassword = () => {
    setActionType("ForgotPassword");
  };

  const handleShowRegister = () => {
    setIsRegistering(true);
  };
  
  const handleBackToLogin = () => {
    setIsRegistering(false);
  };

  const handleRegister = () => {
    setActionType("Register");
  };

  const handleLogin = () => {
    setActionType("Login");
  };

  return (
    <ImageBackground
      source={require("../assets/images/FondoMusica.png")}
      className="flex-1 w-screen h-screen justify-center items-center"
    >
      {isRegistering ? (
        <RegisterForm
          fullName={fullName}
          setFullName={setFullName}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          onRegisterPress={handleRegister}
          onBackToLoginPress={handleBackToLogin}
        />
      ) : (
        <LoginDetails
          fullName={fullName}
          setFullName={setFullName}
          password={password}
          setPassword={setPassword}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          onLoginPress={handleLogin}
          onForgotPress={handleForgotPassword}
          onSignUpPress={handleShowRegister}
        />
      )}
    </ImageBackground>
  );
}

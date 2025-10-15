import "@/global.css";
import { router, useNavigation, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const params = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });

    // Verificar si venimos de un logout para forzar la pantalla de login
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (!token) {
        setIsRegistering(false); // Asegura que mostramos LoginDetails
      } else if (params.from === "logout") {
        await AsyncStorage.removeItem("userToken"); // Limpia token si viene de logout
        setIsRegistering(false); // Forzar login tras logout
      }
    };
    checkAuth();
  }, [navigation, params]);

  useEffect(() => {
    if (!actionType) return;

    switch (actionType) {
      case "Login":
        Alert.alert("Logueando");
        setTimeout(async () => {
          // Simular guardado de token (reemplaza con tu lógica de autenticación real)
          await AsyncStorage.setItem("userToken", "dummy-token");
          router.replace("/(home)/HomeScreen"); // Navega a HomeScreen en (home)
        }, 2000);
        break;
      case "Register":
        if (password !== confirmPassword) {
          Alert.alert("Error", "Las contraseñas no coinciden");
        } else {
          Alert.alert("Registrando");
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
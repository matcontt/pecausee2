import "@/global.css";
import { Link, useNavigation } from 'expo-router';
import { useEffect, useState } from "react";
import { Alert, ImageBackground, Text, View } from "react-native";
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
    switch (actionType) {
      case "Login":
        Alert.alert("Logueando");
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
    // Added the dependency array here
  }, [actionType]);

  const handleLogin = () => {
    console.log("Login button pressed");
    console.log({ fullName, password, rememberMe });
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password pressed");
 setActionType("ForgotPassword");
  };

  const handleSignUp = () => {
    console.log("Sign Up pressed");
  };

  const handleActionType = (type: string) => setActionType(type);

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
        onLoginPress={() => handleActionType("Login")}
        onForgotPress={handleForgotPassword}
        onSignUpPress={() => handleActionType("SignUp")}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Link href="/(home)">Settings</Link>
    </View>
    </ImageBackground>
  );



  
  //Configurar el Layout
  //Crear el Link-> SettingsScreen
}

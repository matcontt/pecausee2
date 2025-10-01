import CustomText from "@/components/CustomText";
import "@/global.css";
import { ImageBackground, View } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/pexels-photo-3571551.jpeg")}
      className="flex-1 w-screen h-screen justify-center items-center"
    >
      <CustomText variant="large" dark={true}>
        Hello World
      </CustomText>
    </ImageBackground>
  );
}

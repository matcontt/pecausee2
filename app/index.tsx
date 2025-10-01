import CustomText from "@/components/CustomText";
import "@/global.css";
import { View } from "react-native";
export default function Index() {
  return (
    <View className="bg-[#355D49] w-screen h-screen">
     <CustomText variant="large" dark={false}>
        Hello World
      </CustomText>
    </View>
  );
}

import React from 'react';
import { Text } from 'react-native';
interface CustomTextProps{
    variant:"small"|"medium"|"large"; //tamaño del texto
    dark:boolean;// Color claro u oscuro
    children: React.ReactNode;//Va dentro de la etiqueta
}

const CustomText = ({variant, dark, children}:CustomTextProps) => {
  return (
     <Text className={styleSelector(variant,dark)}>
        {children}
    </Text>
 )
}

function styleSelector(variant:any,dark:boolean){
    let style = ""
    if(dark == true){
        style += "text-[#72907A] "        
    }else{
        style += "text-white "
    }
    
    switch(variant){
        case "small":
            return style + "font-semibold text-sm" ;
        case "medium":
            return style + "font-semibold text-base" ;
        case "large":
            return style + " font-semibold text-xl" ;
    }
}

export default CustomText
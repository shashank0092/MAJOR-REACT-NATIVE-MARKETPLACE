import { SafeAreaView,View,Text } from "react-native"
import WelcomeWidget from "./WelcomeWidget"
import SignInWidget from "./SignInWidget" 
import { useState } from "react"



const Welcome=()=>{

    const[welcomeScreen,setWelcomeScreen]=useState(1);

    
    return(
        <View>
            {
                welcomeScreen>3?(<SignInWidget/>):(<WelcomeWidget welcomeScreen={welcomeScreen} setWelcomeScreen={setWelcomeScreen}/>)
            }
        </View>
    )
}

export default Welcome;
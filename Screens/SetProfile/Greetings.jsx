import {View,Text,Image} from "react-native"
import tw from "../../lib/tailwind";

const Greetings=()=>{
    return(
        <>
            <View style={tw `bg-appbgColor h-full flex items-center justify-center  `}>
                    <View>
                        <Image source={require("../../assets/WelcomeGreetings.png")} />
                    </View>
                    <View>
                        <Text style={tw `text-white font-bold py-5 text-3xl `} >Hey!Welcome</Text>
                    </View>
                    <View>
                        <Text style={tw `text-white font-bold`} >Create and Sell your NFT in 1 second </Text>
                    </View>
            </View>
        </>
    )
}

export default Greetings;
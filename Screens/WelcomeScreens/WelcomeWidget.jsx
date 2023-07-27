import { Text, SafeAreaView, View, Image, TouchableOpacity } from "react-native"
import tw from "../../lib/tailwind";
const WelcomeWidget = (props) => {


    return (
        <>
            <View style={tw`bg-appbgColor h-full flex items-center justify-between`} >
                <View style={tw`flex justify-center items-center  h-[60%]`} >
                    <View>
                        {
                            props.welcomeScreen == 1 ? (<Image source={require("../../assets/WelcomeImage1.png")} />) : (props.welcomeScreen == 2 ? (<Image source={require("../../assets/WelcomeImage2.png")} />) : (props.welcomeScreen == 3 ? (<Image source={require("../../assets/WelcomeImage3.png")} />) : (<></>)))
                        }
                    </View>
                </View>
                <View style={tw`bg-useGrey w-full flex items-center  gap-10 h-[70%] rounded-3xl`} >
                   <View style={tw `flex  items-center gap-10`} >
                   {
                        props.welcomeScreen == 1 ?
                            (<View style={tw`flex  w-1/2`} >
                                <Text style={tw`text-white pt-11 text-center text-2xl font-sans font-semibold  `} >Discover Largest NFT marketplace</Text>
                            </View>) :
                            (props.welcomeScreen == 2 ?
                                (<View style={tw`flex  w-2/3`} >
                                <Text style={tw`text-white pt-11  text-center text-2xl font-sans font-semibold  `} >Start your own NFT gallery now</Text>
                            </View>) :
                                (props.welcomeScreen == 3 ?
                                    (<View style={tw`flex  w-3/5`} >
                                    <Text style={tw`text-white pt-11 text-center text-2xl font-sans font-semibold  `} >Discovering the world of crypto art </Text>
                                </View>)
                                    : (<></>)))
                    }
                    <Text style={tw`text-white font-extrabold`}>Buy and sell digital items</Text>
                    <View></View>
                   </View>
                    <View style={tw`w-full p-4 py-1` } >
                        <TouchableOpacity style={tw`bg-blueBtn p-5 rounded-lg   w-full  `} onPress={() => props.setWelcomeScreen(props.welcomeScreen + 1)}  ><Text style={tw`text-white text-center`}>Next</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default WelcomeWidget;
import { View, Text, Image, TouchableOpacity } from "react-native"
import tw from "../../lib/tailwind";
const SignInOptions=()=>{
    return(
        <>
             <View style={tw`bg-appbgColor h-full `} >
                <View style={tw`ml-5 mt-5`} >
                    <View style={tw`flex gap-5`}>
                        <View style={tw`w-1/2 leading-7`} >
                            <Text style={tw`text-white font-bold text-2xl `} >BEST Collection Digital Art</Text>
                        </View>
                        <View style={tw} >
                            <Text style={tw`text-white font-bold text-xl leading-6 `}>
                                Semper in cursus magna et eu nunc adipisicng.
                            </Text>
                            <Text style={tw`text-white font-bold text-xl leading-6`} >
                                Elementum justo,laoreet id sem semper parturient.
                            </Text>
                        </View>
                    </View>
                    <View>

                    </View>
                    <View>
                        <View style={tw`w-full p-4 `} >
                            <TouchableOpacity style={tw`bg-blueBtn p-5 rounded-lg   w-full  `}  ><Text style={tw`text-white text-center`}>SIGN UP</Text></TouchableOpacity>
                        </View>
                        <View style={tw`w-full p-4  `} >
                            <TouchableOpacity style={tw`bg-white p-5 rounded-lg   w-full  `}   ><Text style={tw` text-center text-blueBtn `}>SIGN IN</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default SignInOptions;
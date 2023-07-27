import { View, Text, TouchableOpacity } from "react-native"
import tw from "../../lib/tailwind";
import Icon from 'react-native-vector-icons/FontAwesome';

const OTPEnter = () => {
    return (
        <View style={tw`bg-appbgColor h-full`} >
            <View style={tw`ml-5 mt-5`}  >
                <View style={tw`flex gap-20`} >
                    <View>
                        <TouchableOpacity style={tw`border-t-2  border-white  border-l-2 border-r-2 border-b-2 w-10 p-2 bg-blueBtn rounded-full flex  items-center  `} >
                            <Icon name="chevron-left" size={20} color="#FFFFFF" type="AntDesign" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={tw`text-white font-bold text-2xl text-center `} >ENTER OTP</Text>
                    </View>
                </View>
                <View style={tw `flex items-center  `} >
                    <View style={tw `w-2/3 py-5`} >
                        <Text style={tw `text-white text-center font-bold `} >We have just sent you 4 digit code via your email</Text>
                    </View>
                    <View>

                    </View>
                </View>
                <View style={tw `py-16`} >
                    <View style={tw`w-full p-4 `} >
                        <TouchableOpacity style={tw`bg-blueBtn p-5 rounded-lg   w-full  `}  ><Text style={tw`text-white text-center`}>Continue</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={tw `flex flex-row items-center justify-center py-5`} >
                    <Text style={tw `text-white font-bold `} >Didn't recive code?</Text>
                    <Text style={tw `text-blueBtn font-bold `} > Resend Code</Text>
                </View>
            </View>
        </View>
    )
}

export default OTPEnter;
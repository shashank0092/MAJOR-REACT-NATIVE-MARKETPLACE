import { View, TouchableOpacity, Text } from "react-native"
import tw from "../../lib/tailwind";

const Terms = () => {
    return (
        <>
            <View style={tw`bg-appbgColor h-full flex items-center justify-center `} >
                <View style={tw`bg-[#AAB8C2] m-5 p-10 rounded-xl`} >
                    <View>
                        <Text style={tw `text-black font-bold leading-5`} >
                            I agree to the Terms of Service and Conditions of Use including consent to electronic communications and I affirm that the information provided is my own
                        </Text>
                    </View>
                    <View style={tw `flex flex-row justify-between py-5`} >
                        <TouchableOpacity style={tw`p-3 `} ><Text style={tw`text-black`} >Disagree</Text></TouchableOpacity>
                        <TouchableOpacity style={tw `bg-blueBtn p-3 rounded-lg`} ><Text>Agree and Continue</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Terms;
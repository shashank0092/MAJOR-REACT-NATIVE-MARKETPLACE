import { View, Text, TouchableOpacity } from "react-native"
import tw from "../../lib/tailwind";
import FontIcon from 'react-native-vector-icons/FontAwesome';

const HelpCenter = () => {
    return (
        <>
            <View style={tw`bg-appbgColor h-full`} >
                <View style={tw`flex flex-row items-center gap-32 border-b-2 border-white py-4 `} >
                    <View style={tw`ml-2`} >
                        <TouchableOpacity>
                            <FontIcon name="chevron-left" size={20} color="#FFFFFF" type="AntDesign" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={tw`text-white font-bold text-2xl`} >Help Center</Text>
                    </View>
                </View>

                <View style={tw`ml-5 mt-10 flex gap-10 `} >
                    <View style={tw`flex flex-row gap-10`} >
                        <View style={tw`w-40 h-40 bg-[#258BC3] rounded-lg    `} >
                            <View style={tw`flex justify-center gap-5 w-full h-full ml-3 `} >
                                <Text style={tw`text-white font-bold  `} >Getting Started</Text>
                                <Text style={tw`text-white font-extralight w-36 `} >Create an account, set up your wallet, and more</Text>
                            </View>
                        </View>
                        <View style={tw`w-40 h-40 bg-[#FE1515] rounded-lg `} >
                            <View style={tw`flex justify-center gap-5 w-full h-full ml-3 `} >
                                <Text style={tw`text-white font-bold  `} >Create</Text>
                                <Text style={tw`text-white font-extralight w-36 `} >Create your first NFT and collection to start selling and sharing</Text>
                            </View>
                        </View>
                    </View>
                    <View style={tw`flex flex-row gap-10`}>
                        <View style={tw`w-40 h-40 bg-[#C3A025] rounded-lg `} >
                            <View style={tw`flex justify-center gap-5 w-full h-full ml-3 `} >
                                <Text style={tw`text-white font-bold  `} >FAQ</Text>
                                <Text style={tw`text-white font-extralight w-36 `}  >Learn answers to frequently askedquestions on</Text>
                            </View>
                        </View>
                        <View style={tw`w-40 h-40 bg-[#4EA817] rounded-lg `} >
                            <View style={tw`flex justify-center gap-5 w-full h-full ml-3 `} >
                                <Text style={tw`text-white font-bold  `} >User Saftey</Text>
                                <Text style={tw`text-white font-extralight w-36 `} >Learn more about anti-fraud and user safety processes</Text>
                            </View>
                        </View>
                    </View>
                    <View style={tw`flex flex-row gap-10`}>
                        <View style={tw`w-40 h-40 bg-[#C325BD] rounded-lg `} >
                            <View style={tw`flex justify-center gap-5 w-full h-full ml-3 `} >
                                <Text style={tw`text-white font-bold  `}>Developers</Text>
                                <Text style={tw`text-white font-extralight w-36 `}>Learn more how to develop and build with OpenSea</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </>
    )
}

export default HelpCenter;
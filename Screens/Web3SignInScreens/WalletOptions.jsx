import { View, Image, Text, TouchableOpacity } from "react-native"
import tw from "../../lib/tailwind";
import Icon from 'react-native-vector-icons/FontAwesome';
const WalletOptions = () => {
    return (
        <>
            <View style={tw`bg-appbgColor h-full`} >
                <View style={tw`ml-5`} >
                    <View>
                        <TouchableOpacity style={tw` w-10 p-2  rounded-full flex  items-center  `} >
                            <Icon name="chevron-left" size={20} color="#FFFFFF" type="AntDesign" />
                        </TouchableOpacity>
                    </View>
                    <View style={tw`items-center `}  >
                        <View>
                            <Image source={require("../../assets/WalletLogo.png")} />
                        </View>
                        <View>
                            <Text style={tw`text-white font-bold text-2xl`} >Choose your wallet</Text>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={tw`flex flex-row gap-5  items-center bg-[#253341] p-5 m-5 mb-0 rounded-xl `}  >
                            <View>
                                <Image source={require("../../assets/MetamaskImage.png")} />
                            </View>
                            <View>
                                <Text style={tw`text-white font-bold `} >MetaMask</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`  flex flex-row gap-5 items-center bg-[#253341] p-5 m-5 mb-0 rounded-xl  `}  >
                            <View>
                                <Image source={require("../../assets/TrustImage.png")} />
                            </View>
                            <View>
                                <Text style={tw`text-white font-bold`} >Trust Wallet</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`text-white flex flex-row gap-5 items-center bg-[#253341] p-5 m-5 mb-0 rounded-xl `}   >
                            <View>
                                <Image source={require("../../assets/AddressImage.png")} />
                            </View>
                            <View>
                                <Text style={tw`text-white font-bold`} >Enter ethereum address</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={tw`w-full p-4 `} >
                            <TouchableOpacity style={tw`bg-blueBtn p-5 rounded-lg   w-full  `}  ><Text style={tw`text-white text-center font-bold `}>Continue</Text></TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </>
    )
}

export default WalletOptions;
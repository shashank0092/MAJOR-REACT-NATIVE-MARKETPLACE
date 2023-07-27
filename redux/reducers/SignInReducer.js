const intialValue=null;

export const changeSignIn=(state=intialValue,action)=>{
    switch(action.type){
        case 'web2':
            return web2;
        case 'web3':
            return web3;

        default:
            return intialValue;
    }
}
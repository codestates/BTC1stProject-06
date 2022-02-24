import lightwallet from "eth-lightwallet";

const generateMnemonic = () => {
    let mnemonic = "";
    try {
        mnemonic = lightwallet.keystore.generateRandomSeed();
    } catch (err) {
        console.log(err);
    }
    return mnemonic;
}

export default generateMnemonic();
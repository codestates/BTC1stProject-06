import lightwallet from "eth-lightwallet";

const coinType = `9006`; //bsc

const generateWallet = (mnemonic, password, accountIdx, cb) => {
    let privateKey = "";
    try {
        lightwallet.keystore.createVault(
            {
                password: password,
                seedPhrase: mnemonic,
                hdPathString: `m/44'/${coinType}'/${accountIdx}'/0/0` //one account can have only one address
            },
            (err, ks) => {
                ks.keyFromPassword(password, (err, pwDerivedKey) => {
                    ks.generateNewAddress(pwDerivedKey, 1);

                    let address = (ks.getAddresses()).toString();
                    privateKey = ks.exportPrivateKey(address, pwDerivedKey);
                    cb(privateKey);
                });
            }
        );
    } catch (exception) {
        console.log("NewWallet ==>>>> " + exception);
    }

    return privateKey;
}

export default generateWallet;
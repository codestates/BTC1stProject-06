import React from "react";
import lightwallet from "eth-lightwallet";
import "../App.css";
import icon from "../img/icon.png";

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
                ks.keyFromPassword(password, async (err, pwDerivedKey) => {
                    ks.generateNewAddress(pwDerivedKey, 1);

                    let address = (ks.getAddresses()).toString();
                    privateKey = ks.exportPrivateKey(address, pwDerivedKey);
                    await cb(privateKey);
                });
            }
        );
    } catch (exception) {
        console.log("NewWallet ==>>>> " + exception);
    }
}


const Mnemonic = ({ setRouter, setMcode, mCode, setAccount }) => {

    const generate = () => {
        let mnemonic = "";
        try {
            mnemonic = lightwallet.keystore.generateRandomSeed();
        } catch (err) {
            console.log(err);
        }
        setMcode(mnemonic);
    }
    return (
        <div>
            <img src={icon} alt="no img" />
            <h3>MetaNFT</h3>
            <button className="mnemonic-btn" onClick={generate} disabled={mCode !== "" ? true : false}>Generate Mnemonic code</button>
            <textarea readOnly className="mnemonic-code" value={mCode}>
            </textarea>
            {mCode !== "" ? <button className="mnemonic-btn" onClick={() => {
                setRouter("account");
                generateWallet(mCode, "password", 0, (pk) => {
                    setAccount(pk);
                })
            }}>Make Account</button> : <></>}
        </div>
    );
}

export default Mnemonic;

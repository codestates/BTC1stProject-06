import "../App.css";
import React, { useState, useEffect } from "react";
import Mnemonic from "./Mnemonic.js";
import Account from "./Account.js";
import Web3 from "web3";
const bscMainnet = `https://speedy-nodes-nyc.moralis.io/11ed355a9e5af834c4ec415e/bsc/mainnet`;
const web3 = new Web3(new Web3.providers.HttpProvider(bscMainnet));
const Body = () => {
    const [router, setRouter] = useState("mnemonic");
    const [mCode, setMcode] = useState("");
    const [pk, setPk] = useState();
    const [account, setAccount] = useState();
    useEffect(() => {
        if (pk) {
            const acc = web3.eth.accounts.privateKeyToAccount(pk);

            setAccount(acc.address);
        }

    }, [pk]);
    return (
        <div>
            {router === "mnemonic" ? <Mnemonic setRouter={setRouter} setMcode={setMcode} mCode={mCode} setAccount={setPk}></Mnemonic> : <Account mnemonic={mCode} account={account} pk={pk} ></Account>}
        </div >
    );
}

export default Body;

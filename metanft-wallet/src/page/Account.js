import "../App.css";
import Web3 from "web3";
import React, { useState, useLayoutEffect } from "react";
const bscMainnet = `https://speedy-nodes-nyc.moralis.io/11ed355a9e5af834c4ec415e/bsc/mainnet`;
const web3 = new Web3(new Web3.providers.HttpProvider(bscMainnet));
const tokenAddr = `0xdedd744cc359810d02aa49e30caf91c33fe6af6c`;
const getBal = async (addr) => {
    return await web3.eth.getBalance(addr);
}
const Account = ({ mnemonic, account, pk }) => {
    const [bal, setBal] = useState();
    useLayoutEffect(() => {
        setBal(getBal(account));
    }, [account]);
    return (
        <div>
            {account}
            <br />
            {pk}
        </div>
    );
}

export default Account;

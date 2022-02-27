import pk from "../mnemonic/wallet.js";
import mnemonic from "../mnemonic/mnemonic.js";
import Web3 from "web3";
/**
 console.log(mnemonic);

console.log(
    
)

 */
const bscTestnet = `https://speedy-nodes-nyc.moralis.io/11ed355a9e5af834c4ec415e/bsc/testnet`;
const web3 = new Web3(new Web3.providers.HttpProvider(bscTestnet));

pk(mnemonic, 'pw', 0, async (pk) => {
    const account = web3.eth.accounts.privateKeyToAccount(pk);
    console.log(account);
    console.log(await web3.eth.getBalance(account.address));
})


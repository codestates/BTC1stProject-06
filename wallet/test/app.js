import pk from "../mnemonic/wallet.js";
import mnemonic from "../mnemonic/mnemonic.js";
console.log(mnemonic);

console.log(
    pk(mnemonic, 'pw', 0, (pk) => {
        console.log(pk);
    })
)
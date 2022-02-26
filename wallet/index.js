router.post('/newMnemonic', async(req,res) => {
  let mnemonic;
  try {
      mnemonic = lightwallet.keystore.generateRandomSeed();
      res.json({mnemonic});
  } catch(err) {
      console.log(err);
  }
});
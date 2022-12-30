const secp = require('ethereum-cryptography/secp256k1')
const {toHex} = require('ethereum-cryptography/utils')
const {keccak256} = require('ethereum-cryptography/keccak')

const hashMessage = (message) => keccak256(Uint8Array.from(message));

async function sign(privateKey, message) {
    const hash = hashMessage(message);
    console.log("Message:", toHex(hash))
    const [signature, recoveryBit] =  await secp.sign(hash, privateKey, {
      recovered: true,
    });
    const fullSignature = new Uint8Array([recoveryBit, ...signature]);
    console.log( toHex(fullSignature));
  };

  // Hardcode Sign Message
sign('ddda367e376622c4c3c8981befcc3575a847aebb050058829c0e436c6dd9cd52',{
    amount: 10,
    recipient:'61b086dd941670f796ab2695683813e963a387f0',
  })


module.exports = {
    sign
  }
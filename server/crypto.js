const secp = require('ethereum-cryptography/secp256k1')
const {toHex, hexToBytes} = require('ethereum-cryptography/utils')
const {keccak256} = require('ethereum-cryptography/keccak')

const hashMessage = (message)=>{
    return keccak256(Uint8Array.from(message))
}

const recoverSenderAddress =  (message, signature)=>{
    const signatureBytes = hexToBytes(signature)
    const recoveryBit = signatureBytes[0]
    const signatureByte = signatureBytes.slice(1)
    const pubKey =  secp.recoverPublicKey(hashMessage(message), signatureByte, recoveryBit)
    return toHex(keccak256(pubKey.slice(1)).slice(-20))
}

module.exports={
    recoverSenderAddress,
    hashMessage
}
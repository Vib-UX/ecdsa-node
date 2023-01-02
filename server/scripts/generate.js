const secp = require('ethereum-cryptography/secp256k1')
const {toHex, hexToBytes} = require('ethereum-cryptography/utils')
const {keccak256} = require('ethereum-cryptography/keccak')

const privateKey = (secp.utils.randomPrivateKey())
console.log("privateKey: ",toHex(privateKey))

const publicKey = (secp.getPublicKey(privateKey))
console.log("public Key: ", toHex(publicKey))

const address = keccak256((publicKey.slice(1))).slice(-20)
console.log("address : ", toHex(address))



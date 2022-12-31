const secp = require('ethereum-cryptography/secp256k1')
const {toHex, hexToBytes} = require('ethereum-cryptography/utils')
const {keccak256} = require('ethereum-cryptography/keccak')

const {recoverSenderAddress} = require('../crypto')

console.log(recoverSenderAddress({
    amount: 10,
    recipient:'61b086dd941670f796ab2695683813e963a387f0',
  },'0130440220461c3d1b06450f823a9d15e47c0f4f8da41750c2a71ca7ba32379b05f8aed588022030069f491afca146c1a6b2b0cdce58d9a005bc4614ebd594299034a96d202599'))

// const privateKey = (secp.utils.randomPrivateKey())
// console.log("privateKey: ",toHex(privateKey))

// const publicKey = (secp.getPublicKey(privateKey))
// console.log("public Key: ", toHex(publicKey))

// const address = keccak256((publicKey.slice(1))).slice(-20)
// console.log("address : ", toHex(address))


// privateKey:  ddda367e376622c4c3c8981befcc3575a847aebb050058829c0e436c6dd9cd52       
// public Key:  040d2d68ed85f7a558f3a83e94d4448cd3123d4e3f7f8d91e1d4a38ff68e5f281a13980a927ef32aeaceea3eba7869bb655320f0850c32bc1912e2021835a806b3
// address :  0fc9515116b93ec834a9629c6dfc48a18b412db4

// privateKey:  633bcd0bc24d50f39966447bba47bfaf08730ffffd7ecaebb4be577781733d1f
// public Key:  04c32cd7f3f7c79800d54873f22cd25697dcafc09d5a73ab120c0f63535f6b7c1437a36bd40dbacc217632aba7915040d499bd764e721a8401998cca9fc771765c
// address :  61b086dd941670f796ab2695683813e963a387f0

// privateKey:  347ad692e8fad95fdff2091782df73486150ec0fc72177ef389ed37ab51d909a       
// public Key:  041cebbb99463809d8fa7047e4f00527047c91801aadac2cc1b3582ef0b6812baa07e28aecff7c49053524cf50c1d20c647063adcde99fb27bbd687c3612fabea2
// address :  9e6cf8de59b415cb6d971287804e44744e004036
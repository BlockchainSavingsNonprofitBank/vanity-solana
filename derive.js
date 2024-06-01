// Given sequence of bytes
const bytesSequence = [76,203,127,127,143,22,131,116,149,121,189,59,250,117,178,218,26,12,145,222,133,111,116,32,38,220,210,200,216,114,13,104,0,63,53,102,29,199,25,191,90,229,108,184,16,163,158,173,172,138,151,95,123,119,107,209,48,224,221,80,216,187,205,206]
;

const web3 = require('@solana/web3.js');
// Convert bytes to Buffer
const privateKeyBuffer = Buffer.from(bytesSequence);

// Derive public key from private key
const privateKey = web3.Keypair.fromSecretKey(privateKeyBuffer);
const publicKey = privateKey.publicKey;

console.log("Public Key:", publicKey.toString());

// Convert bytes to hexadecimal string
const privateKeyHex = bytesSequence.map(byte => byte.toString(16).padStart(2, '0')).join('');

console.log("Private Key (Hexadecimal):", privateKeyHex);



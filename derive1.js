

const privateKeyHex = '11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'; // replace 'yourPrivateKeyHex' with your actual private key in hexadecimal format

// Convert hexadecimal string to a byte array
const bytes = [];
for (let i = 0; i < privateKeyHex.length; i += 2) {
    bytes.push(parseInt(privateKeyHex.substr(i, 2), 16));
}

console.log(bytes);

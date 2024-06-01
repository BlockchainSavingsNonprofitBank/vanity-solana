const { Keypair } = require('@solana/web3.js');

async function generateVanityKeypairs(patterns, count) {
    let results = [];

    while (results.length < count) {
        const keypair = Keypair.generate();
        const publicKey = keypair.publicKey.toString();
        const privateKey = keypair.secretKey.toString('hex');

        if (patterns.some(pattern => publicKey.startsWith(pattern))) {
            console.log('Vanity Keypair Generated:');
            console.log('Public Key:', publicKey);
            console.log('Private Key (Hexadecimal):', privateKey);
            results.push({ publicKey, privateKey });
        }
    }

    return results;
}

// Example: Generating 5 vanity keypairs containing patterns
const patterns = ['usdcv2', 'v3USD', 'v2USD', 'USDv3','1111111', 'wso1111', 'BybitUSDC', 'So1ana', 'So1112', 'BybitUSD', 'So1an','So1111', 'v1USDC', 'wrapped', 'USDv1', '2025', 'USDv2'];
const count = 50;
generateVanityKeypairs(patterns, count)
    .then(results => console.log('Total Vanity Keypairs Generated:', results.length))
    .catch(err => console.error(err))

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift riot night purse hunt kitten surge slow'; 
let testAccounts = [
"0xffac55b2e5a5a2d44f8f61a0f6f5e3bd70f0004b44aeb82d676b647e0328b38b",
"0x74ee926dee713551f872f8476f21278624786af16da35c6a0f109b6b270d03c2",
"0x661a32bde83390fe3a63dbd500f239d0868692fcf9ad6874b3f4a2661ec9604e",
"0xd07e5141400b47ef7877a220795195294e28e07ed68e21abfe5b027e0f2da5d0",
"0xac9368776b659bc9a4878db83b4e1ac06d01d1509857ddefa9698ee02c0c5451",
"0xb44ec8796b3a8eb0f661a7e2ce67181ea8d2b11e574dc5e3f9234a7779e3366f",
"0x2fc41baad9c61d202b5e5704561c3e90e1701f5f8c006d933299ad5fd14c2ee9",
"0x149fed63c8afca18f4aead67be8d7d1cddb61ee88736cbebd9306e3120db9c6a",
"0x1d2ad2bad5ed64c22c53fd1d61bdb8c11606b57554128c0b9647b53d8549ce86",
"0xf06e6cbdb76c47a8e5582dccea2087024971ada51a1c5936d0ad5b7c3266d7b5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


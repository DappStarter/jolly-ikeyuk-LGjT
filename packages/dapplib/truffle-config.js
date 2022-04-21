require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture story remember nominee concert hen light army giant'; 
let testAccounts = [
"0xeb911a07253ae268f283671b058441886759d3c19f180dba1d8713e0d182a554",
"0x5dbc76ce6643d37cea43c54b83169cdc3a8e6d4c706fddf88e7ae417ac689d68",
"0x25d5c813092d38ab3d4783789949aefaca9df97195f6677b09e0524edcd1007c",
"0xd2a41bb4d42b4e5ea23f589f3b277b237388bee5606f2d35c31819d241af03da",
"0x7a7c066e47db32be1695b07119ad27c08cbacd87c1289d6dedde7db0a75ca491",
"0x3f8f31d52d09dc029a432dd178427200a15c5e957a35a10787cbcf352fac06bd",
"0x033bacee6b1fcc2710ec4d0f845a820ed3e9027c95a44804f2a72e987a2d9f59",
"0x66dc56bc13900282c6efe3badb88b205223b5a4b7d7fa62bf15058033379801f",
"0xc0a2b42e2d4bbccfae4f297cfccee6a513d7f029dbf39ce6d0519c43709fa96f",
"0xcfc388e28675712b6c7da7941e595c456efa52b080f191b0b8c27ff0460c4610"
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


require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "http://70.34.216.42:9933",
      http: "true",
      accounts: [
        privateKey
      ],
    },
  },
};

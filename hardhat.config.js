const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-waffle");
// require('hardhat-ethernal');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  console.log("MICKEY");
  for (const account of accounts) {
    console.log(account.address);
  }
});
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.6",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/sgKLhw1_NkOoFl-L7R3sbVIh7obw64Hy"
      }
    },
    // two: {
    //   forking: {
    //     url: "https://polygon-mainnet.g.alchemy.com/v2/YKT0rdcuY2sSPpvIV3owgB1huK3kdTvx"
    //   }
    // }
  }
};

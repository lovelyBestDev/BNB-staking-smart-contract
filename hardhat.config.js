require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

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
  solidity: "0.8.4",
  networks: {
    binance: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,      // Rinkeby's id
      gas: 5000000,        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 500,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      accounts: ['ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
    },


    ropsten: {
      url: "https://ropsten.infura.io/v3/6b441de391c142c3b5742f8467752df7",
      chainId: 3,      // Rinkeby's id
      // gas: 5000000,        // Rinkeby has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 500,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      accounts: ['c66ca43cac13ca78b5243b0d07c4362d6177be456feb24dd01d5ec64afde7ddd']
    },

    rinkeby: {
      url: "https://rinkeby.infura.io/v3/6b441de391c142c3b5742f8467752df7",
      chainId: 4,      // Rinkeby's id
      gas: 5000000,        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 500,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      accounts: ['ee31531f1b55b97956bf17011dcae5d0df5d5b5881cb5d5ba8c830ddaa837c4a']
    },
  }
};

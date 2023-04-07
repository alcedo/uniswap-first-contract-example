
const hre = require("hardhat");

async function main() {
  //   const lockedAmount = hre.ethers.utils.parseEther("0.001");

  // @alcedo ➜ /workspaces/uniswap-first-contract-example (main) $ npx hardhat run scripts/deploy_run_simple_swap.js --network hardhat
  const UniswapRouterAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564";
  const SimpleSwap = await hre.ethers.getContractFactory("SimpleSwap");
  const simpleSwap = await SimpleSwap.deploy(UniswapRouterAddress);
  const vitalik_address = "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B";

  const victim_address = "0x770943Da73A2C616eec597B23a43d51112064a55";
  await simpleSwap.deployed();

  console.log(
    `Deployed to ${simpleSwap.address}`
  );

  var message = await simpleSwap.hello();
  console.log(message);


  await network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [victim_address]
  });

  //  get signer
  const signer = await hre.ethers.getSigner(victim_address);
  console.log(
    "victim_address account before transaction",
    ethers.utils.formatEther(await signer.getBalance())
  );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


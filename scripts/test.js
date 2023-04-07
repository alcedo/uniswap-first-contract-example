
const hre = require("hardhat");
const {ethers} = require("ethers");

async function main() {
    //   const lockedAmount = hre.ethers.utils.parseEther("0.001");
    // hre.ethers.

    const data = '0xa9059cbb000000000000000000000000c3c094a68c68cce30d6cbd2a655a163b80db705a00000000000000000000000000000000000000000000000000000000135e79fc';
    var out = hre.ethers.utils.defaultAbiCoder.decode(
        ['address', 'uint256'],
        ethers.utils.hexDataSlice(data, 4)
    )

    console.log(out);

    const iface = ethers.utils.Interface

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


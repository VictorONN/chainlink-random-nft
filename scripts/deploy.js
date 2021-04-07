// const hre = require("hardhat")
// const ethers = hre.ethers

const { ethers } = require("hardhat")

RINKEBY_VRF_COORDINATOR = "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B"
RINKEBY_LINKTOKEN = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709"
RINKEBY_KEYHASH =	"0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311"

async function main(){
    const [deployer]= await ethers.getSigners();
    console.log(`Deploying contracts with the account ${deployer.address}`)
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const DungeonsAndDragonsCharacter = await ethers.getContractFactory("DungeonsAndDragonsCharacter")
    console.log("Deploying")
    const dungeonsAndDragonsCharacter =  await DungeonsAndDragonsCharacter.deploy( 
        ethers.utils.getAddress(RINKEBY_VRF_COORDINATOR), 
        ethers.utils.getAddress(RINKEBY_LINKTOKEN), 
        RINKEBY_KEYHASH)

    console.log(`DungeonsAndDragonsCharacter deployed to: ${dungeonsAndDragonsCharacter.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
const {expect} =require('chai')
const { ethers } = require('hardhat')

describe('Platzi Punks Contract', ()=>{
    
    const setup=async ({maxSupply=1000})=>{
        const [owner]=await ethers.getSigners()
        const PlatziPunks = await ethers.getContractFactory("PlatziPunks");
        const deployed=await PlatziPunks.deploy(maxSupply, 'https//avataars.io')

        return {
            owner,
            deployed
        }
    }

    describe("Deployment", ()=>{
        it('Set max supply to pass param', async ()=>{
            const maxSupply=4000
            const {deployed}=await setup({maxSupply})

            const returnMaxSupply=await deployed.maxSupply()
            expect(maxSupply).to.equal(returnMaxSupply);
        })
    })

    describe("Minting", ()=>{
        it('Mints a new token and assign to owner', async ()=>{
            const {owner, deployed}=await setup({})

            await deployed.mint()
            
            const ownerOfMinted=await deployed.ownerOf(0)
            expect(ownerOfMinted).to.equal(owner.address)
        })
        it('Has a minting limit', async ()=>{
            const maxSupply=2
            const {deployed}=await setup({maxSupply})

            for(let i=0; i<maxSupply; i++){
               await deployed.mint()
            }

            //assertation
            await expect(deployed.mint()).to.be.revertedWith("Not PlatziPunks available :(")

        })
    })

    describe('tokenURI', ()=>{
        it('returns valid metadata', async ()=>{
            const {deployed}= await setup({})

            await deployed.mint();
            
            const tokenURI=await deployed.tokenURI(0)
            const  stringifiedTokenURI= await tokenURI.toString()
            const [, base64JSON]=stringifiedTokenURI.split("data:application/json;base64,")
            
            //34545sdx457
            const stringifiedMetadata= await Buffer.from(base64JSON, "base64").toString("ascii")
            //{name: "hola"}

            const metadata=JSON.parse(stringifiedMetadata)

            expect(metadata).to.have.all.keys("name", "description", "image")
        })
    })
})
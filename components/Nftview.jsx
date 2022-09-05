import React , {useState} from 'react'
import axios from 'axios'
import { Network, Alchemy } from 'alchemy-sdk';

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: 'sh8RMUzqvhkuioESeOIbvt74xuRIc_j2', // Replace with your Alchemy API Key.
  network: Network.MATIC_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy();

async function main() {
      // Wallet address
  const address = "0xaE6f8945a2BfAfE01E31bbf7Cfc54a194fE6f3Ef";
  // Get token balances
  const balances = await alchemy.nft.getNftsForOwner(address);
  console.log(balances)
  }
  
  main();
  
function Nftview() {
  const [nfts,setNfts]=useState(null)
  let address='0xaE6f8945a2BfAfE01E31bbf7Cfc54a194fE6f3Ef'
  const baseURL='https://eth-mainnet.g.alchemy.com/v2/sh8RMUzqvhkuioESeOIbvt74xuRIc_j2'
  const url = `${baseURL}/getNFTs/?owner=${address}`;
  const config = {
    method: 'get',
    url: url
}
function filterNfts(array){
    let usefulNfts=[]
    for(let i= 0;i<array.length;i++){
        if(array[i].contract.address=="0x1ed25648382c2e6da067313e5dacb4f138bc8b33" || array[i].contract.address=="0x3cd266509d127d0eac42f4474f57d0526804b44e"){
            usefulNfts.append(array[i])
        }
    }
    return usefulNfts
}
// Make the request and print the formatted response:
  async function getNFTs() {
      const result= await axios(config)
          .then(response => result=response['data'])
          .catch(error => console.log('error', error));
      console.log(result)
      const Nfts=filterNfts(result.ownedNfts)
      console.log(Nfts)
  }
  return (
    <button onClick={getNFTs}>Nftview</button>
  )
}

export default Nftview
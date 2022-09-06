import React , {useState} from 'react'
import axios from 'axios'

function Nftview(address) {
  const [nfts,setNfts]=useState(null)
// Make the request and print the formatted response:
  async function getNFTs() {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-API-Key': 'ffjJwK5ZijCNygN6TGiKPCGtmbtY2BHCs4dyasCgtrrtzaVd8METfoIN8t3KBxIO'
      }
    };
    
    await fetch('https://deep-index.moralis.io/api/v2/0x0D1f2Bd5351a65a78Ac0BeF3C8fAEf643C046508/nft?chain=polygon&format=decimal&token_addresses=0x1ed25648382c2e6da067313e5dacb4f138bc8b33&token_addresses=0x3cd266509d127d0eac42f4474f57d0526804b44e', options)
      .then(response => response.json())
      .then(response =>setNfts(response))
      .catch(err => console.error(err));
  }
  return (
    <>
    <button onClick={getNFTs}>Nftview</button>
    </>
  )
}

export default Nftview
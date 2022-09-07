import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Nftview({address}) {
  const [nfts, setNfts] = useState(null);
  const learnWeb3Nft='0x1ed25648382c2e6da067313e5dacb4f138bc8b33'
  const buildSpaceNft='0x3cd266509d127d0eac42f4474f57d0526804b44e'
  const apiUrl='https://deep-index.moralis.io/api/v2'
  // Make the request and print the formatted response:
  useEffect(() => {
    async function getNFTs() {
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
        },
      };
      await fetch(
        `${apiUrl}/${address}/nft?chain=polygon&format=decimal&token_addresses=${learnWeb3Nft}&token_addresses=${buildSpaceNft}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setNfts(response.result))
        .catch((err) => console.error(err));
    }
    getNFTs();
  }, [address]);
  return (
    <d>
      {nfts?.length ? (
        <Wrapper>
          {nfts.map((item ,index) => {
            let nft = JSON.parse(item.metadata);
            console.log(nft);
            return (
              <NftItem key={index}>
                <Image
                  src={nft.image.replace("ipfs://", "https://ipfs.io/ipfs/")}
                  alt="NFT Image"
                />
                <Body>
                <p>{nft.name}</p>
                <p>{nft.description}</p>
                </Body>
              </NftItem>
            );
          })}
        </Wrapper>
      ) : (
        <div>
        <Wrapper>
          <h3>You do not having any LearnWeb3 or Buildspace NFTs.</h3>
        </Wrapper>
        </div>
      )}
    </d>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height:100vh;
`;

const NftItem = styled.div`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Body=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;

  >p{
    font-size: 13px;
    margin: 0 0 40px;
  }
`

export default Nftview;

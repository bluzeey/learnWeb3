import React from 'react'
import styled from 'styled-components'

function Wallet({setAddress}) {
  const connectWallet=async()=>{
    if(window.ethereum){
      console.log('detected')
      try {
        const accounts=await window.ethereum.request({
          method:"eth_requestAccounts"
        });
        setAddress(accounts[0])
      }catch(err){
        console.log(error)
      }
    }else{
      console.log('Connect your wallet')
    }
  } 

  return (
    <Login>
       <h1>Hi There!</h1>
       <Button onClick={connectWallet}>Connect your Ethereum Wallet</Button>
    </Login>
  )
}

const Login=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vw;
`

const Button=styled.button`
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
`

export default Wallet

import { useEffect, useState } from 'react';
import './App.css';
import {Web3} from 'web3';
import abi from "./contract/SimpleStorage.json"


function App() {
  const [web3, setWeb3] = useState("")
  const [contract, setContract] = useState("")
  const [userAcc, setUserAcc] = useState("")

  const [blockValue, setBlockValue] = useState(undefined)
  const [value, setValue] = useState(null)

  useEffect(() => {
    const connectWeb3 = async() => {
      const instance = new Web3(window.ethereum)
      const account = await window.ethereum.request({method:'eth_requestAccounts'})
      setWeb3(instance);
      setUserAcc(account[0]);

      const networkId = await instance.eth.net.getId();
      if (abi.networks[networkId]) {
        const deployedNetwork = abi.networks[networkId];
        setContract(deployedNetwork.address);
        
      }
      else {
        console.error("Contract not deployed on this network.");
      }
    }
    connectWeb3();
  },[])


  const setStoreValue = async () => {
    if(web3 && contract) {
      try {
        const ContractInstance = new web3.eth.Contract(abi.abi, contract)

        console.log(value)
        await ContractInstance.methods.set(value).send({
          from: userAcc,
          gasPrice: web3.utils.toWei('50','gwei')
        });
      }
      catch(err) {
        console.log("Error", err)
      }
    }
  }

  const getStoreValue = async () => {
    if (web3 && contract) {
      try {
        const ContractInstance = new web3.eth.Contract(abi.abi, contract);
        await ContractInstance.methods.get().call().then((data) => {
          console.log(String(data))
          setBlockValue((prev) => String(data))
        });

      } catch (error) {
        console.error('Error getting store value:', error)
      }
    }
  };

  const handleValue = (e) => {
    setValue((prev) => e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button style={{
          backgroundColor: 'skyblue',
          color: "black",
          padding: "10px 8px",
          border: '0px',
          borderRadius: '20px'
        }}
          onClick={getStoreValue}
        >Get the storage value on blockchain</button>
        <h5>The value of blockchain : {blockValue ? blockValue : 0}</h5>
        <input type='text' placeholder='Enter the value to store on blockchain' 
          style={{
            width: '20%',
            height: '20px'
          }} 
          onChange={handleValue}
          value={value}
        />
        <button style={{
          margin: '20px',
          backgroundColor: '#76ABAE',
          color: "black",
          padding: "10px 8px",
          border: '0px',
          borderRadius: '20px'
        }}
          onClick={setStoreValue}
        >
          Store this value on blockchain storage
        </button>
      </header>
    </div>
  );
}

export default App;

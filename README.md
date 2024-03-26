## Simple Storage
### Setup Steps
- Edit the truffle.config.js `network.development.port` value to the port of the truffle workspace.
- Added this truffle.config.js on the truffle workspace configuration.
- ```truffle compile```
- ```
  PS:\Simple Storage>truffle compile
  
  Compiling your contracts...
  ===========================
  > Compiling .\contracts\SimpleStorage.sol
  > Compiling .\contracts\SimpleStorage.sol
  > Artifacts written to PS:\Simple Storage\build\contracts
  > Compiled successfully using:
     - solc: 0.8.0+commit.c7dfd78e.Emscripten.clang
  ```
- ```truffle migrate```
- ```cmd
    PS:\Simple Storage>truffle migrate
    Starting migrations...
    ======================
    > Network name:    'development'
    > Network id:      5777
    > Block gas limit: 6721975 (0x6691b7)
    
    
    1_initial_simplestorage.js
    ==========================
    
       Replacing 'SimpleStorage'
       -------------------------
       > transaction hash:    0xc83169ca133ab87e7ad1d1e4ab94a78c935ab0829f8dc25ac65346fb5cd8c7e7
       > Blocks: 0            Seconds: 0
       > block number:        3
       > block timestamp:     1711448165
       > account:             0x7E393FDAf8Ae4b6a68363Ad8f03dE4e57991430B
       > balance:             99.998656082781723981
       > gas used:            142969 (0x22e79)
       > gas price:           3.1775679 gwei
       > value sent:          0 ETH
       > total cost:          0.0004542937050951 ETH
    
       > Saving artifacts
       -------------------------------------
       > Total cost:     0.0004542937050951 ETH
    
    Summary
    =======
    > Final cost:          0.0004542937050951 ETH

    ```
- ```npm start```
- ```cmd
  Compiled successfully!
  You can now view app in the browser.
  
    Local:            http://localhost:3000        
    On Your Network:  http://192.168.56.1:3000     
  
  Note that the development build is not optimized.
  To create a production build, use npm run build. 
  
  webpack compiled successfully
  ```
### Screenshot
![image](https://github.com/0xrakesh/Blockchain/assets/70006331/14e3709b-e012-4fac-a648-31f85b8d774c)

// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract SimpleStorage {
  uint256 public store;

  function set(uint256 value) public {
    store = value;
  }

  function get() public view returns(uint256) {
    return store;
  }
}

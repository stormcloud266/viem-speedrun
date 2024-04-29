// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

contract Fun {
  uint public x = 125;

  constructor() {

  }

  function changeX(uint _x) external {
    x = _x;
  }
}
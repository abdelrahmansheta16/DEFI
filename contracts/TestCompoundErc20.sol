// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/compound.sol";

// supply
// borrow
// repay
// redeem

contract TestCompoundErc20 {
  IERC20 public token;
  CErc20 public cToken;

  event Log(string message, uint val);

  constructor(address _token, address _cToken) {
    token = IERC20(_token);
    cToken = CErc20(_cToken);
  }

  function supply(uint _amount) external {
    token.transferFrom(msg.sender, address(this), _amount);
    token.approve(address(cToken), _amount);
    require(cToken.mint(_amount) == 0, "mint failed");
  }

  function getCTokenBalance() external view returns (uint) {
    return cToken.balanceOf(address(this));
  }



}

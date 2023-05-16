// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

/* Long ETH
1. supply ETH
2. borrow stable coin (DAI, USDC)
3. buy ETH on Uniswap

when the price of ETH goes up...
4. sell ETH on Uniswap
5. repay borrowed stable coin
*/

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/compound.sol";
import "./interfaces/Uniswap.sol";

contract TestCompoundLong {
  CEth public cEth;
  CErc20 public cTokenBorrow;
  IERC20 public tokenBorrow;
  uint public decimals;

  Comptroller public comptroller =
    Comptroller(0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B);
}

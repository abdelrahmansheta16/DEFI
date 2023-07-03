// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/Uniswap.sol";

contract TestUniswapOptimal {
  using SafeMath for uint;

  address private constant FACTORY = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
  address private constant ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
  address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

  /* optimal one-sided supply
  1. swap optimal amount from token A to token B
  2. add liquidity
  */
  function zap(
    address _tokenA,
    address _tokenB,
    uint _amountA
  ) external {
    require(_tokenA == WETH || _tokenB == WETH, "!weth");

    IERC20(_tokenA).transferFrom(msg.sender, address(this), _amountA);

    address pair = IUniswapV2Factory(FACTORY).getPair(_tokenA, _tokenB);
    (uint reserve0, uint reserve1, ) = IUniswapV2Pair(pair).getReserves();

  }


}

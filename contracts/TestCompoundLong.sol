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

  PriceFeed public priceFeed = PriceFeed(0x922018674c12a7F0D394ebEEf9B58F186CdE13c1);

  IUniswapV2Router private constant UNI =
    IUniswapV2Router(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D);
  IERC20 private constant WETH = IERC20(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);

  constructor(
    address _cEth,
    address _cTokenBorrow,
    address _tokenBorrow,
    uint _decimals
  ) {
    cEth = CEth(_cEth);
    cTokenBorrow = CErc20(_cTokenBorrow);
    tokenBorrow = IERC20(_tokenBorrow);
    decimals = _decimals;

    // enter market to enable borrow
    address[] memory cTokens = new address[](1);
    cTokens[0] = address(cEth);
    uint[] memory errors = comptroller.enterMarkets(cTokens);
    require(errors[0] == 0, "Comptroller.enterMarkets failed.");
  }

  receive() external payable {}

  function supply() external payable {
    cEth.mint{value: msg.value}();
  }

  function getMaxBorrow() external view returns (uint) {
    (uint error, uint liquidity, uint shortfall) = comptroller.getAccountLiquidity(
      address(this)
    );

    require(error == 0, "error");
    require(shortfall == 0, "shortfall > 0");
    require(liquidity > 0, "liquidity = 0");
  }
}

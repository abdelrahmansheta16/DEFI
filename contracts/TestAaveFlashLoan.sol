// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./interfaces/aave/FlashLoanReceiverBase.sol";

contract TestAaveFlashLoan is FlashLoanReceiverBase {
  using SafeMath for uint;

  event Log(string message, uint val);

  constructor(ILendingPoolAddressesProvider _addressProvider)
    public
    FlashLoanReceiverBase(_addressProvider)
  {}

  function testFlashLoan(address asset, uint amount) external {
    uint bal = IERC20(asset).balanceOf(address(this));
    require(bal > amount, "bal <= amount");

    address receiver = address(this);

    address[] memory assets = new address[](1);
    assets[0] = asset;

    uint[] memory amounts = new uint[](1);
    amounts[0] = amount;

    // 0 = no debt, 1 = stable, 2 = variable
    // 0 = pay all loaned
    uint[] memory modes = new uint[](1);
    modes[0] = 0;

    address onBehalfOf = address(this);

    bytes memory params = ""; // extra data to pass abi.encode(...)
    uint16 referralCode = 0;

    LENDING_POOL.flashLoan(
      receiver,
      assets,
      amounts,
      modes,
      onBehalfOf,
      params,
      referralCode
    );
  }
}

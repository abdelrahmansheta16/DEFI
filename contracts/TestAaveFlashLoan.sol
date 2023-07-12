// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./interfaces/aave/FlashLoanReceiverBase.sol";

contract TestAaveFlashLoan is FlashLoanReceiverBase {
    using SafeMath for uint;

    event Log(string message, uint val);

    constructor(
        ILendingPoolAddressesProvider _addressProvider
    ) public FlashLoanReceiverBase(_addressProvider) {}
}

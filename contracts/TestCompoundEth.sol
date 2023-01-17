// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/compound.sol";

contract TestCompoundEth {
    CEth public cToken;

    constructor(address _cToken) {
        cToken = CEth(_cToken);
    }

    receive() external payable {}

    function supply() external payable {
        cToken.mint{value: msg.value}();
    }

    function getCTokenBalance() external view returns (uint) {
        return cToken.balanceOf(address(this));
    }

    // not view function
    function getInfo() external returns (uint exchangeRate, uint supplyRate) {
        // Amount of current exchange rate from cToken to underlying
        exchangeRate = cToken.exchangeRateCurrent();
        // Amount added to you supply balance this block
        supplyRate = cToken.supplyRatePerBlock();
    }
}

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
}

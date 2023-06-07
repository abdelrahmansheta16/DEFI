const { time } = require("@openzeppelin/test-helpers")
const assert = require("assert")
const BN = require("bn.js")
const { sendEther, pow, frac } = require("./util")
const { DAI, DAI_WHALE, CDAI, WBTC, WBTC_WHALE, CWBTC, CETH } = require("./config")
const { web3 } = require("@openzeppelin/test-helpers/src/setup")

const IERC20 = artifacts.require("IERC20")
const TestCompoundLong = artifacts.require("TestCompoundLong")

contract("TestCompoundLong", (accounts) => {
  const ETH_WHALE = accounts[0]
  const TOKEN_BORROW = DAI
  const C_TOKEN_BORROW = CDAI
  const REPAY_WHALE = DAI_WHALE // used to repay interest on borrow
})

const { time } = require("@openzeppelin/test-helpers")
const assert = require("assert")
const BN = require("bn.js")
const { sendEther, pow } = require("./util")
const { DAI, DAI_WHALE, CDAI, WBTC, WBTC_WHALE, CWBTC } = require("./config")
const { web3 } = require("@openzeppelin/test-helpers/src/setup")

const IERC20 = artifacts.require("IERC20")
const CErc20 = artifacts.require("CErc20")
const TestCompoundErc20 = artifacts.require("TestCompoundErc20")

contract("TestCompoundErc20", (accounts) => {
  const WHALE = WBTC_WHALE
  const TOKEN = WBTC
  const C_TOKEN = CWBTC
  const TOKEN_TO_BORROW = DAI
  const C_TOKEN_TO_BORROW = CDAI
  const REPAY_WHALE = DAI_WHALE // used to repay interest on borrow

  const SUPPLY_DECIMALS = 8
  const SUPPLY_AMOUNT = pow(10, SUPPLY_DECIMALS).mul(new BN(1))
  const BORROW_DECIMALS = 18
  const BORROW_INTEREST = pow(10, BORROW_DECIMALS).mul(new BN(1000))

})

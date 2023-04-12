const { time } = require("@openzeppelin/test-helpers")
const assert = require("assert")
const BN = require("bn.js")
const { sendEther, pow } = require("./util")
const { DAI, DAI_WHALE, CDAI, WBTC, WBTC_WHALE, CWBTC } = require("./config")
const { web3 } = require("@openzeppelin/test-helpers/src/setup")

const IERC20 = artifacts.require("IERC20")
const CErc20 = artifacts.require("CErc20")
const TestCompoundLiquidate = artifacts.require("TestCompoundLiquidate")
const CompoundLiquidator = artifacts.require("CompoundLiquidator")

contract("TestCompoundLiquidate", (accounts) => {
  const SUPPLY_WHALE = WBTC_WHALE
  const TOKEN_SUPPLY = WBTC
  const C_TOKEN_SUPPLY = CWBTC
  const TOKEN_BORROW = DAI
  const C_TOKEN_BORROW = CDAI
  const LIQUIDATOR = DAI_WHALE

  const SUPPLY_DECIMALS = 8
  const SUPPLY_AMOUNT = pow(10, SUPPLY_DECIMALS).mul(new BN(1))
  const BORROW_DECIMALS = 18

  let testCompound
  let tokenSupply
  let cTokenSupply
  let tokenBorrow
  let cTokenBorrow
  let liquidator
})

const BankAccount = artifacts.require("BankAccount");

contract("BankAccount", (accounts) => {
  let bank;

  before(async () => {
    bank = await BankAccount.deployed();
  });

  it("should deposit funds", async () => {
    await bank.deposit(1000);
    const balance = await bank.getBalance();
    assert.equal(balance.toNumber(), 1000, "Deposit was not successful");
  });

  it("should withdraw funds", async () => {
    await bank.withdraw(500);
    const balance = await bank.getBalance();
    assert.equal(balance.toNumber(), 500, "Withdrawal was not successful");
  });

  it("should calculate interest correctly", async () => {
    const interest = await bank.calculateInterest(1000, 5, 1);
    assert.equal(interest.toNumber(), 50, "Interest calculation is incorrect");
  });
});
const testcontract = artifacts.require("testcontract");
const ControlStructures = artifacts.require("ControlStructures");
const SimpleFunctions = artifacts.require("SimpleFunctions");
const Arithmetic = artifacts.require("Arithmetic");
const test = artifacts.require("test");
const FunctionType = artifacts.require("FunctionType");
const BankAccount = artifacts.require("BankAccount");
const Messages = artifacts.require("Messages");
const PersonInfo = artifacts.require("PersonInfo");
const StructArray = artifacts.require("StructArray");
const NestedStruct = artifacts.require("NestedStruct");
const NestedStructMapping = artifacts.require("NestedStructMapping");

module.exports = async function (deployer) {
  // 1. Deploy del primo contratto (TestContract)
  await deployer.deploy(testcontract);
  const testContractInstance = await testcontract.deployed();

  // 2. Deploy del secondo contratto (ControlStructures) passando l'indirizzo di TestContract come parametro
  await deployer.deploy(ControlStructures, testContractInstance.address);
  
  // 3. Deploy del terzo contratto (SimpleFunctions) senza dipendenze
  await deployer.deploy(SimpleFunctions);
  const simpleFunctionsInstance = await SimpleFunctions.deployed();

  // 4. Deploy del contratto Arithmetic, passando l'indirizzo di SimpleFunctions come parametro
  await deployer.deploy(Arithmetic, simpleFunctionsInstance.address);

  // 5. Deploy del contratto AnotherContract senza dipendenze
  await deployer.deploy(test);
  const testInstance = await test.deployed();

  await deployer.deploy(FunctionType);
  const FunctionTypeInstance = await FunctionType.deployed();
  
  
  await deployer.deploy(BankAccount);
  const BankAccountInstance = await BankAccount.deployed();

  await deployer.deploy(Messages);
  const MessagesInstance = await Messages.deployed();

  await deployer.deploy(PersonInfo);
  const PersonInfoInstance = await PersonInfo.deployed();

  await deployer.deploy(StructArray);
  const StructArrayInstance = await StructArray.deployed();

  await deployer.deploy(NestedStruct);
  const NestedStructInstance = await NestedStruct.deployed();

  await deployer.deploy(NestedStructMapping);
  const NestedStructMappingInstance = await NestedStructMapping.deployed();

  // 6. Deploy del contratto YetAnotherContract, passando l'indirizzo di AnotherContract come parametro
  //await deployer.deploy(YetAnotherContract, anotherContractInstance.address);
};
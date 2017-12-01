import {PhoneNumber} from "./../js/PhoneNumber.js";

describe("PhoneNumber constructor", function() {
  it("should create a phone number from the 10 digit string", function() {
    let testNumber = new PhoneNumber("5035551234");
    expect(testNumber.areaCode).toEqual("503");
    expect(testNumber._firstThree).toEqual("555");
    expect(testNumber._lastFour).toEqual("1234");
  });
  it("should leave properties undefined if not a ten digit string", function() {
    let testNumber = new PhoneNumber("5551234");
    expect(testNumber.areaCode).toEqual(undefined);
    expect(testNumber._firstThree).toEqual(undefined);
    expect(testNumber._lastFour).toEqual(undefined);
  });
});

describe("PhoneNumber .standardFormat", function() {
  it("should give the phone number in (xxx) xxx-xxxx format", function() {
    let testNumber = new PhoneNumber("5035551234");
    expect(testNumber.standardFormat).toEqual("(503) 555-1234");
  });
});

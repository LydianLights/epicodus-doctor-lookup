import {Address} from "./../js/Address.js";

describe("Address constructor", function() {
  it("should create a new address with a street, city, state, and zip code", function() {
    let testAddress = new Address("1039 7th St NW", "Salem", "OR", "97304");
    expect(testAddress.street).toEqual("1039 7th St NW");
    expect(testAddress.city).toEqual("Salem");
    expect(testAddress.state).toEqual("OR");
    expect(testAddress.zip).toEqual("97304");
  });
});

describe("Address .fullCity", function() {
  it("should give the full city in 'City, State Zip' format", function() {
    let testAddress = new Address("1039 7th St NW", "Salem", "OR", "97304");
    expect(testAddress.fullCity).toEqual("Salem, OR 97304");
  });
});

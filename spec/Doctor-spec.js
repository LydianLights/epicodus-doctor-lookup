import {Doctor} from "./../js/Doctor.js";
import {Name} from "./../js/Name.js";
import {Address} from "./../js/Address.js";
import {PhoneNumber} from "./../js/PhoneNumber.js";

describe("Doctor constructor", function() {
  it("should create a doctor with a name, address, phone number, website, and accepting patients status", function() {
    let testName = new Name("Bob", "Bobson", "M.D.");
    let testAddress = new Address("123 Four St.", "Portland", "OR", "97204");
    let testNumber = new Address("5035551234");
    let testSite = "www.realdoctorsite.com";
    let testDoctor = new Doctor(testName, testAddress, testNumber, testSite, true);
    expect(testDoctor.name).toEqual(testName);
    expect(testDoctor.address).toEqual(testAddress);
    expect(testDoctor.phoneNumber).toEqual(testNumber);
    expect(testDoctor.website).toEqual(testSite);
    expect(testDoctor.acceptingPatients).toEqual(true);
  });
});

import {Practice} from "./../js/Practice.js";
import {Address} from "./../js/Address.js";
import {PhoneNumber} from "./../js/PhoneNumber.js";
import {Doctor} from "./../js/Doctor.js";
import {Name} from "./../js/Name.js";

describe("Practice constructor", function() {
  it("should create a practice location with a name, address, phone number, website, accepting patients status, and practicing doctor", function() {
    let testDoctorName = new Name("Bob", "Bobson", "M.D.");
    let testDoctorBio = "Bob does stuff good";
    let testDoctor = new Doctor(testDoctorName, testDoctorBio);

    let testName = "Some Place";
    let testAddress = new Address("123 Four St.", "Portland", "OR", "97204");
    let testNumber = new Address("5035551234");
    let testSite = "www.realdoctorsite.com";
    let testPractice = new Practice(testName, testAddress, testNumber, testSite, true, testDoctor);

    expect(testPractice.name).toEqual(testName);
    expect(testPractice.address).toEqual(testAddress);
    expect(testPractice.phoneNumber).toEqual(testNumber);
    expect(testPractice.website).toEqual(testSite);
    expect(testPractice.acceptingPatients).toEqual(true);
    expect(testPractice.doctor).toEqual(testDoctor);
  });
});

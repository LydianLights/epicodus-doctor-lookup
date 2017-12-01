import {Doctor} from "./../js/Doctor.js";
import {Name} from "./../js/Name.js";

describe("Doctor constructor", function() {
  it("should create a new doctor with a name and bio", function() {
    let testName = new Name("Bob", "Bobson", "M.D.");
    let testBio = "Bob does stuff good";
    let testDoctor = new Doctor(testName, testBio);
    expect(testDoctor.name).toEqual(testName);
    expect(testDoctor.bio).toEqual(testBio);
  });
});

// TODO: Not sure how to properly test async results
// console.log works, but expect gives error

import {BetterDoctorApi} from "./../js/BetterDoctorApi.js";
import {Practice} from "./../js/Practice.js";
import {Address} from "./../js/Address.js";
import {PhoneNumber} from "./../js/PhoneNumber.js";
import {Doctor} from "./../js/Doctor.js";
import {Name} from "./../js/Name.js";

describe("BetterDoctorApi search", function() {
  it("should pass a list of practices to success callback function based on seach query", function() {
    let testSuccessCallback = function(practices) {
      console.log(practices);
      expect(practices).not.toEqual(undefined);
    };
    let testFailCallback = function() {
      console.log("fail");
    };
    BetterDoctorApi.search("dentist", testSuccessCallback, testFailCallback);

  });
});

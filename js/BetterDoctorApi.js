import {Practice} from "./../js/Practice.js";
import {Address} from "./../js/Address.js";
import {PhoneNumber} from "./../js/PhoneNumber.js";
import {Doctor} from "./../js/Doctor.js";
import {Name} from "./../js/Name.js";

import {apiKey} from "./../.env";
const apiPath = "https://api.betterdoctor.com/2016-03-01";
const portlandLatLong = "45.5433229,-122.7945059";
const searchRadiusMiles = "100";

export class BetterDoctorApi {
  static search(query, onSuccess, onFail) {
    const endpoint = "/doctors";
    const resultsPerPage = 100;
    const page = 0;
    const startFromResult = page * resultsPerPage;

    const queryParams = `?user_key=${apiKey}&query=${query}&location=${portlandLatLong},${searchRadiusMiles}&user_location=${portlandLatLong}&limit=${resultsPerPage}&skip=${startFromResult}&sort=best-match-asc`;
    const queryURL = apiPath + endpoint + queryParams;

    $.ajax({
      url: queryURL,
      type: "GET",
      data: {
        format: "json"
      },
      success(response) {
        let practices = [];
        response.data.forEach(function(searchResult) {
          let doctorName = new Name(searchResult.profile.first_name, searchResult.profile.last_name, searchResult.profile.title);
          let doctor = new Doctor(doctorName, searchResult.profile.bio);

          searchResult.practices.forEach(function(location) {
            let name = location.name;
            let address = new Address(location.visit_address.street, location.visit_address.city, location.visit_address.state, location.visit_address.zip);
            let phone = new PhoneNumber(location.phones[0].number);
            let website = null; // TODO: Didn't see website listed anywhere
            let acceptingPatients = location.accepts_new_patients;

            let practice = new Practice(name, address, phone, website, acceptingPatients, doctor);
            // Check if equivalent to last result to avoid duplicates from the api
            if (!(practices.length > 0 && (JSON.stringify(practice) === JSON.stringify(practices[practices.length - 1])))) {
              practices.push(practice);
            }
          });
        });
        onSuccess(practices);
      },
      error() {
        onFail();
      }
    });
  }
}

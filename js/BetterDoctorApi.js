import {Practice} from "./../js/Practice.js";
import {Name} from "./../js/Name.js";
import {Address} from "./../js/Address.js";
import {PhoneNumber} from "./../js/PhoneNumber.js";

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

    const queryParams = `?user_key=${apiKey}&query=${query}&location=${portlandLatLong},${searchRadiusMiles}&user_location=${portlandLatLong}&limit=${resultsPerPage}&skip=${startFromResult}`;
    const queryURL = apiPath + endpoint + queryParams;

    $.ajax({
      url: queryURL,
      type: "GET",
      data: {
        format: "json"
      },
      success(response) {

      },
      error() {
        onFail();
      }
    });
  }
}

import {BetterDoctorApi} from "./../js/BetterDoctorApi.js";
import {Practice} from "./../js/Practice.js";
import {Address} from "./../js/Address.js";
import {PhoneNumber} from "./../js/PhoneNumber.js";
import {Doctor} from "./../js/Doctor.js";
import {Name} from "./../js/Name.js";

class SearchForm {
  static submit() {
    $("#search-form button[type=submit]").attr("disabled", "disabled");
    $("#search-results").hide();
    $("#searching-message").show();
    $("#search-results-list").empty();
    const searchQuery = $("#search-form-query").val();
    BetterDoctorApi.search(searchQuery, SearchForm.showResults, SearchForm.searchError);
  }
  static showResults(foundPractices) {
    console.log(foundPractices);
    $("#no-results-found").hide();
    $("#search-results-list").hide();
    if (foundPractices.length > 0) {
      let resultHtml = "";
      foundPractices.forEach(function(practice) {
        let searchResult = new SearchResult(practice);
        resultHtml += searchResult.getHtml();
      });
      $("#search-results-list").append(resultHtml);
      $("#search-results-list").show();
    }
    else {
      $("#no-results-found").show();
    }
    $("#searching-message").hide();
    $("#search-results").show();
    $("#search-form button[type=submit]").removeAttr("disabled");
    $("#search-form-query").val("");
  }
  static searchError() {
    console.log("Search Error");
    $("#searching-message").hide();
    $("#results").show();
  }
}

class SearchResult {
  constructor(practice) {
    this.practice = practice;
  }
  getHtml() {
    let html = "<h2>result</h2>";
    return html;
  }
}

$(document).ready(function() {
  $("#search-form").submit(function(event) {
    event.preventDefault();
    SearchForm.submit();
  });
});

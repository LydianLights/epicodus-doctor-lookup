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
    $("#searching-error").hide();
    $("#searching-message").show();
    $("#search-results-list").empty();
    const searchQuery = $("#search-form-query").val();
    BetterDoctorApi.search(searchQuery, SearchForm.showResults, SearchForm.searchError);
  }
  static showResults(foundPractices) {
    $("#no-results-found").hide();
    $("#search-results-list").hide();
    if (foundPractices.length > 0) {
      let resultHtml = "";
      resultHtml += `<div id="search-results-panels" class="panel-group">`
      for (let i = 0; i < foundPractices.length; i++) {
        resultHtml += SearchForm.generateSearchResultHtml(foundPractices[i], i);
      }
      resultHtml += `</div>`;
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
  static generateSearchResultHtml(practice, resultIndex) {
    let html = `
    <div class="search-result panel">
      <a data-toggle="collapse" data-parent="#search-results-panels" href="#search-result-${resultIndex}">
        <div class="panel-heading">
          <h3 class="panel-title">${practice.name} - ${practice.address.city}, ${practice.address.state}</h3>
        </div>
      </a>
      <div id="search-result-${resultIndex}" class="panel-collapse collapse">
        <div class="panel-body">
          <p>${practice.doctor.name.fullWithTitle}</p>
          <p>${practice.address.street}</p>
          <p>${practice.address.fullCity}</p>
          <p>${practice.phoneNumber.standardFormat}</p>
          <hr>
          <p>Accepting Patients: ${practice.acceptingPatients ? "Yes" : "No"}</p>
          <p>${practice.doctor.bio}</p>
        </div>
      </div>
    </div>
    `;
    return html;
  }
  static searchError() {
    $("#searching-message").hide();
    $("#searching-error").show();
    $("#search-form button[type=submit]").removeAttr("disabled");
  }
}

$(document).ready(function() {
  $("#search-form").submit(function(event) {
    event.preventDefault();
    SearchForm.submit();
  });
});

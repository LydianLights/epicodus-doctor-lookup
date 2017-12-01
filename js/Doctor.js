import {Name} from "./../js/Name.js";
import {Address} from "./../js/Address.js";
import {PhoneNumber} from "./../js/PhoneNumber.js";

export class Doctor {
  constructor(name, address, phoneNumber, website, acceptingPatients) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.website = website;
    this.acceptingPatients = acceptingPatients;
  }
}

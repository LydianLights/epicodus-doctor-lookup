import {Address} from "./../js/Address.js";
import {PhoneNumber} from "./../js/PhoneNumber.js";

export class Practice {
  constructor(name, address, phoneNumber, website, acceptingPatients, doctor) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.website = website;
    this.acceptingPatients = acceptingPatients;
    this.doctor = doctor;
  }
}

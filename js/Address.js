export class Address {
  constructor(street, city, state, zip) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.fullCity = `${city}, ${state} ${zip}`;
  }
}

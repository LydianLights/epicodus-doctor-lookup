export class PhoneNumber {
  constructor(tenDigitString) {
    if (tenDigitString.length === 10) {
      this.areaCode = tenDigitString.substr(0, 3);
      this._firstThree = tenDigitString.substr(3, 3);
      this._lastFour = tenDigitString.substr(6, 4);
      this.standardFormat = `(${this.areaCode}) ${this._firstThree}-${this._lastFour}`;
    }
  }
}

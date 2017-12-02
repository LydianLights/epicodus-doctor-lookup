export class Name {
  constructor(firstName, lastName, title) {
    this.first = firstName;
    this.last = lastName;
    this.title = title || null;
    this.full = `${firstName} ${lastName}`;
    this.fullLastFirst = `${lastName}, ${firstName}`;
    this.fullWithTitle = (this.title !== null) ? `${firstName} ${lastName}, ${title}` : `${firstName} ${lastName}`;
  }
}

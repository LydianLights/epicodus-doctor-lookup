import {Name} from "./../js/Name.js";

describe("Name constructor", function() {
  it("should generate a new name with a first name, last name, and title", function() {
    let testName = new Name("Rane", "Fields", "Fake M.D.");
    expect(testName.first).toEqual("Rane");
    expect(testName.last).toEqual("Fields");
    expect(testName.title).toEqual("Fake M.D.");
  });
  it("should set title to null if not given", function() {
    let testName = new Name("Rane", "Fields");
    expect(testName.title).toEqual(null);
  });
});

describe("Name .full", function() {
  it("should give both first and last name", function() {
    let testName = new Name("Rane", "Fields");
    expect(testName.full).toEqual("Rane Fields");
  });
});

describe("Name .fullLastFirst", function() {
  it("should give full name in 'last, first' format", function() {
    let testName = new Name("Rane", "Fields");
    expect(testName.fullLastFirst).toEqual("Fields, Rane");
  });
});

describe("Name .fullWithTitle", function() {
  it("should give full name in 'last, first' format", function() {
    let testName = new Name("Rane", "Fields", "Fake M.D.");
    expect(testName.fullWithTitle).toEqual("Rane Fields, Fake M.D.");
  });
  it("should return only first and last if name has no title", function() {
    let testName = new Name("Rane", "Fields");
    expect(testName.fullWithTitle).toEqual("Rane Fields");
  });
});

describe("Test Case 1", function() {
    it("should determine the otherAngle", function() {
        expect(otherAngle(30, 60)).toEqual(90);;
      });
});
describe("Test Case 2", function() {
  it("should determine the otherAngle", function() {
      expect(otherAngle(60, 60)).toEqual(60);;
    });
});
describe("Test Case 3", function() {
  it("should determine the otherAngle", function() {
      expect(otherAngle(43, 78)).toEqual(59);;
    });
});
describe("Test Case 4", function() {
  it("should determine the otherAngle", function() {
      expect(otherAngle(10, 20)).toEqual(150);;
    });
});
describe("Test Case 5", function() {
  it("should determine the otherAngle", function() {
      expect(otherAngle(40, 39)).toEqual(101);;
    });
});



describe("Test Case 1", function() {
    it("should determine the calculateTip", function() {
        expect(calculateTip(20, "Excellent")).toEqual(4);;
      });
});
describe("Test Case 2", function() {
  it("should determine the calculateTip", function() {
      expect(calculateTip(26.95, "good")).toEqual(3);;
    });
});
describe("Test Case 3", function() {
  it("should determine the calculateTip", function() {
      expect(calculateTip(50, "great")).toEqual(8);;
    });
});
describe("Test Case 4", function() {
  it("should determine the calculateTip", function() {
      expect(calculateTip(50, "Poor")).toEqual(3);;
    });
});
describe("Test Case 5", function() {
  it("should determine the calculateTip", function() {
      expect(calculateTip(50, "hai")).toEqual("Rating not recognised");
    });
});



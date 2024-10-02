describe("Test Case 1", function() {
    it("should determine the increaseNumber", function() {
        expect(increaseNumber(7,22)).toEqual(15);
      });
});
describe("Test Case 2", function() {
  it("should determine the increaseNumber", function() {
      expect(increaseNumber(2,7)).toEqual(5);
    });
});
describe("Test Case 3", function() {
  it("should determine the increaseNumber", function() {
      expect(increaseNumber(19, 30)).toEqual(11);
    });
});
describe("Test Case 4", function() {
  it("should determine the increaseNumber", function() {
      expect(increaseNumber(19,39)).toEqual(20);
    });
});
describe("Test Case 5", function() {
  it("should determine the increaseNumber", function() {
      expect(increaseNumber(-19, 39)).toEqual(58);
    });
});



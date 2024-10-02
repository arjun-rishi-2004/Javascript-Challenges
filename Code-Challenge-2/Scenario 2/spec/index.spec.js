describe("Test Case 1", function() {
    it("should determine the hero", function() {
        expect(hero(10, 5)).toEqual(true);;
      });
});
describe("Test Case 2", function() {
  it("should determine the hero", function() {
      expect(hero(100, 40)).toEqual(true);;
    });
});
describe("Test Case 3", function() {
  it("should determine the hero", function() {
      expect(hero(1500, 751)).toEqual(false);;
    });
});
describe("Test Case 4", function() {
  it("should determine the hero", function() {
      expect(hero(4,5)).toEqual(false);;
    });
});
describe("Test Case 5", function() {
  it("should determine the hero", function() {
      expect(hero(7,4)).toEqual(false);;
    });
});



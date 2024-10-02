describe("Test Case 1", function() {
    it("should determine the getGrade", function() {
        expect(getGrade(95,90,93)).toEqual('A');;
      });
});
describe("Test Case 2", function() {
  it("should determine the getGrade", function() {
      expect(getGrade(70,70,100)).toEqual('B');;
    });
});
describe("Test Case 3", function() {
  it("should determine the getGrade", function() {
      expect(getGrade(60,82,76)).toEqual('C');;
    });
});
describe("Test Case 4", function() {
  it("should determine the getGrade", function() {
      expect(getGrade(66,62,68)).toEqual('D');;
    });
});
describe("Test Case 5", function() {
  it("should determine the getGrade", function() {
      expect(getGrade(48,55,52)).toEqual('F');;
    });
});



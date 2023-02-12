const Calculator = require("../calculator");

// 테스트마다 새로운 Calculator를 생성하는 이유 => 각 테스트는 서로 독립적으로 만들어야 하기 떄문.
describe("Calculator", () => {
  // 테스트에서 공통적으로 사용되는 것들을 초기화 하는 작업
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  // it은 입력받은 테스트 이름인 Calculator를 지칭.
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(9);
    cal.add(1);
    expect(cal.value).toBe(10);
  });

  it("add should throw an error", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be");
  });

  it("subtract", () => {
    cal.set(9);
    cal.subtract(1);
    expect(cal.value).toBe(8);
  });

  it("multiply", () => {
    cal.set(9);
    cal.multiply(3);
    expect(cal.value).toBe(27);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});

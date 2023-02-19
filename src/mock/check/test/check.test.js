const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  // test 실행하기전 함수 초기화
  beforeEach(() => {
    // mock 함수
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // calls[0][0] => calls에 첫번째로 호출된 함수의 첫번째 인자
    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("should call onFail when predicate is false", () => {
    check(() => false, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onFail).toHaveBeenCalledTimes(1);
    // calls[0][0] => calls에 첫번째로 호출된 함수의 첫번째 인자
    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onFail).toHaveBeenCalledWith("no");
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});

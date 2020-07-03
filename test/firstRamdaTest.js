import test from "ava";
import valueOr from "../solutions/firstRamda";

test("Should return property from object", (t) => {
  t.deepEqual(valueOr({ value: 10 }), 10);
});

test("Should return default value if property does not exist", (t) => {
  t.deepEqual(valueOr({}), 0);
});

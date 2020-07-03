import test from "ava";
import convert from "../solutions/cucumberDataTableToObjects";

test("should convert data table to list of objects", (t) => {
  const dataTable = {
    rawTable: [
      ["name", "age", "country"],
      ["doug", 24, "Brazil"],
      ["alex", 45, "Germany"],
      ["John", 10, "USA"],
    ],
  };

  const objectsList = [
    { name: "doug", age: 24, country: "Brazil" },
    { name: "alex", age: 45, country: "Germany" },
    { name: "John", age: 10, country: "USA" },
  ];

  const result = convert(dataTable);
  t.deepEqual(result, objectsList);
});

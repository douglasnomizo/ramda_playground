/*
  Given I have a list of objects with the some properties
  And I want to group them by multiple properties
  And I want to filter the grouped items

  Scenario:
  Given I have a list of geometric shapes
  I want to:
  1) Group them by type
  2) Group them by color
  3) Sort by size
  4) Get only the largest


  Input exemple:
  [
    { type: 'square', color: 'green', size: 80 },
    { type: 'square', color: 'blue', size: 10 },
    { type: 'square', color: 'blue', size: 20 },
    { type: 'rect', color: 'green', size: 5 },
    { type: 'rect', color: 'green', size: 30 },
    { type: 'rect', color: 'white', size: 25 },
    { type: 'circle', color: 'purple', size: 40 },
    { type: 'circle', color: 'purple', size: 15 },
  ]


  Expected result:
  {
    square: {
      green: 80,
      blue: 20,
    },
    rect: {
      green: 30,
      white: 25,
    },
    circle: {
      purple: 40,
    }
  }

*/
import { descend, groupBy, head, map, pipe, prop, sortWith } from "ramda";

const pickSortedAndGroupedListOfShapes = (shapes) =>
  pipe(
    groupBy(prop("type")),
    map(groupBy(prop("color"))),
    map(map(sortWith([descend(prop("size"))]))),
    map(map(head)),
    map(map(prop("size")))
  )(shapes);

export default pickSortedAndGroupedListOfShapes;

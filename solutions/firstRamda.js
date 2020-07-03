import { propOr } from "ramda";

export default (object) => propOr(0, "value", object);

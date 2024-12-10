import { NodePlopAPI } from "plop";
import { genFeeling } from "./generators/feeling";

export default function (plop: NodePlopAPI): void {
  plop.setGenerator("feelings", genFeeling());
}

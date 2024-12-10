import { PlopGeneratorConfig } from "plop";

export function genFeeling(): PlopGeneratorConfig {
  return {
    description: "Generator Description",
    prompts: [
      {
        type: "input",
        name: "feeling",
        message: "How are you feeling today?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{kebabCase feeling}}.txt",
        templateFile: "templates/feeling.hbs",
      },
    ],
  };
}

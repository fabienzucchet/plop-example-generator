"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genFeeling = genFeeling;
function genFeeling() {
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
                templateFile: "templates/feelings.hbs",
            },
        ],
    };
}

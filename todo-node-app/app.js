const yargs = require("yargs");
const { addTask } = require("./todo");

yargs.command({
  command: "add",
  describe: "Add todo task to file ....",
  builder: {
    title: {
      describe: "Title for todo task",
      alias: "t",
      demandOption: true,
      type: "string",
    },
    description: {
      describe: "description for the task",
      alias: "d",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title, description }) => {
    addTask(
        title,
        description
      )
  },
});

yargs.parse();

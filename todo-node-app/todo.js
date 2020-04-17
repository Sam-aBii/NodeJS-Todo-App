const fs = require("fs");

const addTask = (title, description) => {
  const data = loadData();

  const isDuplicate = chkDuplicate(title, data);
  if (isDuplicate) {
    console.log("Task already in the database");
  } else {
    const newTask = {
      title,
      description,
    };

    const savetoDatabase = (dataToAdd,title) => {
        const jsonData = JSON.stringify(dataToAdd);
        fs.writeFileSync("data.txt", jsonData);
        console.log(`Todo task with title ${title} is addes into the database`);
    };
    const temData = [...data, newTask];
    savetoDatabase(temData,title);
  }
 
};
const chkDuplicate = (title, data) => {
  const dataFound = data.filter((d) => d.title === title);

  return (dataFound.length === 0) ? false : true;
};

const loadData = () => {
  try {
    const rawData = fs.readFileSync("data.txt");
    const parseData = JSON.parse(rawData);
    return  JSON.parse(parseData)
  } catch (error) {
    return [];
  }
};

module.exports = {
  addTask,
};

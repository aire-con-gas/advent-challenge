const lineReader = require("line-reader");
const INPUT_FILE = "input.txt";

const data = {};

const findElfWithMaxCalories = () => {
  let i = 1;
  let currentElf = "elf" + i;
  lineReader.eachLine(INPUT_FILE, (line, last) => {
    if (line === "") {
      i += 1;
      currentElf = "elf" + i;
    } else {
      if (!(currentElf in data)) {
        data[currentElf] = 0;
      }

      data[currentElf] += parseInt(line, 10);
    }

    if (last) {
      const { elfWithMaxCalories, maxCalories } = calculateMaxCalories();
      console.log('elfWithMaxCalories', elfWithMaxCalories);
      console.log('maxCalories', maxCalories)
    }
  });
};

const calculateMaxCalories = () => {
  let maxCalories = 0;
  let elfWithMaxCalories;

  for (let key in data) {
    let currentCalories = data[key];
    if (currentCalories > maxCalories) {
      maxCalories = currentCalories;
      elfWithMaxCalories = key;
    }
  }

  return {
    elfWithMaxCalories,
    maxCalories,
  };
};

findElfWithMaxCalories();

console.log("data", data);

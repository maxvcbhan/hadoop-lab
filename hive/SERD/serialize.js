const fs = require('fs');

const exampleObject = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  courses: ["Math", "Science", "English"],
  score: [ 10,20,30,40],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  }
};

// Convert object to JSON string
const jsonString = JSON.stringify(exampleObject, null, 2); // Pretty-print with 2 spaces

// Write the JSON string to a file
fs.writeFile('exampleObject.json', jsonString, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("JSON file has been saved.");
  }
});

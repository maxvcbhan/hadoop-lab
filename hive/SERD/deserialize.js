const fs = require('fs');

// Read the JSON file
fs.readFile('exampleObject.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Parse the JSON string back to a JavaScript object
  const deserializedObject = JSON.parse(data);

  // Log the object to verify deserialization
  console.log(deserializedObject);
});

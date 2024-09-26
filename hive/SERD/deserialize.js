const fs = require('fs');

// Read the JSON file
fs.readFile('exampleObject.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Parse the JSON string back to a JavaScript object
  const deserializedObject = JSON.parse(data);
  console.log(deserializedObject["age"])
  deserializedObject.score = deserializedObject.score.map((value)=> value+10)
  
  console.log(deserializedObject.score)

  // Log the object to verify deserialization
  console.log(deserializedObject);
});

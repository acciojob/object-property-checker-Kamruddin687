function hasKey(key) {
  // Check if the key exists in the global object sampleObject
  if (key in sampleObject) {
    return true;
  } else {
    return false;
  }
}

// Define the global object sampleObject
const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// Example usage:
console.log(hasKey("red"));    // true
console.log(hasKey("blue"));   // false
console.log(hasKey("white"));  // true

// This file has been fixed to pass linting
function exampleFunction() {
  console.log('This should trigger a warning');
  let message = 'This now uses single quotes instead of double';
  return message;
}

// Export the function to avoid unused function error
module.exports = exampleFunction;
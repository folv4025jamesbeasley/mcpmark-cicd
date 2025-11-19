// This file has intentional linting errors to test the workflow
const unusedVariable = "This variable is never used"

function exampleFunction() {
  console.log("This should trigger a warning")
  let message = "This uses double quotes instead of single"
  return message
}
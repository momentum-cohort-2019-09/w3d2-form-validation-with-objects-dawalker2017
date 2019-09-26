class Validation {
    // Class method is useful for having more organization when 
    // taking on more code and bigger projects.
    // While the Constructor method is a special method for creating and
    // initializing an object created within a class.

    constructor(test, errorMessage) {
        // Every constructor has to contain the "let x, y, z = x, y, z"
        // so that it is able to use it in the future.

        this.test = test // function taking/returning a value as true/false.
        this.errorMessage = errorMessage || "is invalid" // [Optional] The actual message that should be shown if the test fails.
            // '||' === 'or' so this reads "errorMessage IF errorMessage ELSE 'is invalid'"
    }

    validate(value) {
        // "value" is the value to test.
        return this.test(value)
            // returns true or false.
    }
}

const presenceValidation = Validation(value => !!value, "must not be blank")
    // Tests to see if there is a value at all.
    // "!!" === 'not/opposite' !(!(true))

const nowOrFutureValidation = new Validation(function(dateToTest) {
    let now = newDate()
    now.setUTCHOURS(0, 0, 0, 0)
    dateToTest.setUTCHOURS(0, 0, 0, 0)
    return dateToTest >= now
        // Declaring that 'now' is 'newDate'.
        // 'now' is being set to 'default' 

}, 'must be today to in the future')

class Field(inputDiv, validations) {
    this.inputDiv = inputDiv
    this.validations = validations || []
        // = validations OR else use empty array.
}

validate() {
        const input = this.inputDiv.querySelector('input')
        const value = input.value

        for (let validation of this.validations) {
            if (validation.validate(value)) {
                errorMessage.push(validation.errorMessage)
            }
        }
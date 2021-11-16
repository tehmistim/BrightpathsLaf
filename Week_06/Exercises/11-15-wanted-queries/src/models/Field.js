//The FIELD is used in a QUERY to define required entries to generate a query.

//defines acceptable data types
const dataTypes = {
    date: {
        regex: 'N/A',
        error: 'must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.\n'
    },
    exp: {
        regex: 'N/A',
        error: 'must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900.\n'
    },
    year: {
        regex: new RegExp('^(19|20)([0-9][0-9])'),
        error: 'must be entered as a 4 digit year, YYYY, no earlier than 1900 and no later than this year.\n'
    },
    race: {
        regex: new RegExp('^(A|B|H|I|W|U)$'),
        error: 'must be one of the following: "Asian / Pacific Islander", "Black", "Hispanic", "American Indian/Alaskan Native", "White", "Unknown".\n'
    },
    sex: {
        regex: new RegExp('^(M|F|O|U)$'),
        error: 'must be one of the following: "Female", "Male", "Other", "Unknown".\n'
    },
    alpha: {
        regex: new RegExp('^[a-zA-Z]+$'),
        error: 'can only include characters from the English Alphabet.\n'
    },
    numeric: {
        regex: new RegExp('^[0-9]+$'),
        error: 'can only include numeric characters.\n'
    },
    alphanumeric: {
        regex: new RegExp('^[a-zA-Z0-9]+$'),
        error: 'can only include characters from the English Alphabet or numeric characters.\n'
    },
    alphaspecial: {
        regex: new RegExp('^([^0-9]*)+$'),
        error: 'can only include characters from the English Alphabet or special characters.\n'
    },
    numericspecial: {
        regex: new RegExp('^([^a-zA-Z]*)+$'),
        error: 'can only include numeric or special characters.\n'
    },
    state: {
        regex: new RegExp('^(AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|WA|VA|WV|WI|WY|GU|PR|VI)$'),
        error: 'can only include a valid State/Territory abbreviation.\n'
    }
}
/**
 * Field is an object that has all the details about the needs of the field.  
 * required: true/false
 * name: display name of the field
 * code: 3 digit code of the field per NCIC
 * set: the codes of the fileds in a set
 * alpha: true/false
 * numeric: true/false
 * special: true/false
 * custom: custom datatypes: date, state, sex, year
 * min: number
 * max: number
 * input: the value entered by the user
 * 
 * @param {object} params is an object containing the needed arguments to define the field.
 */
export default class Field {
    constructor(params) {
        this.required = params.required //whether the field is needed or not
        this.name = params.name //name of the field
        this.code = params.code //code of the field (per NCIC)
        this.set = params.set //other fields in the "set" where if one is present, all need to be included; defined by codes; should only be defined once per set
        this.alpha = params.alpha //whether the field allows alphabet characters
        this.numeric = params.numeric //whether the field allows numbers
        this.special = params.special //whether the field allows special characters
        this.custom = params.custom //the "custom" field type from the DataTypes list above, or null if no custom value
        this.min = params.min //the minimum number of characters allowable
        this.max = params.max //the maximum number of characters allowable
        this.input = params.input //the value input
        this.placeholder = params.placeholder //placeholder text to display
        this.error = false

        this.validate = this.validate.bind(this)
    }

    /**
     * validate - checks whether the entered value is correct
     * @param {string} value - the value of the field
     * @returns {object} {valid: true/false, errorMessages: 'why invalid, if invalid' }
     */
    validate(value) {
        let regex = ''
        let errorMessages = []
        let valid = true
        if ((value.length < this.min || value.length > this.max) && value !== '') {
            valid = false
            if (this.min === this.max)
                errorMessages.push('The "' + this.name + '" field should be ' + this.min + ' character' + (this.min === 1 ? '' : 's') + ' long.')
            else
                errorMessages.push('The "' + this.name + '" field should be between ' + this.min + ' and ' + this.max + ' characters long.')
        }

        if (value.indexOf('.') !== -1) { // checks if the string has periods
            errorMessages.push('The "' + this.name + '" field has one or more periods, which are unacceptable in any field.')
            valid = false
        }

        if (valid && value !== '') { //only checks field content if the right number of characters is entered.
            let errorStart = 'The "' + this.name + '" field '
            switch (this.custom) {
                case 'date':
                    regex = dataTypes.date.regex
                    errorMessages.push(errorStart + dataTypes.date.error)
                    break;
                case 'year':
                    regex = dataTypes.year.regex
                    errorMessages.push(errorStart + dataTypes.year.error)
                    break;
                case 'sex':
                    regex = dataTypes.sex.regex
                    errorMessages.push(errorStart + dataTypes.sex.error)
                    break;
                case 'state':
                    regex = dataTypes.state.regex
                    errorMessages.push(errorStart + dataTypes.state.error)
                    break;
                default:
                    if (this.alpha && !this.numeric && !this.special) {
                        regex = dataTypes.alpha.regex
                        errorMessages.push(errorStart + dataTypes.alpha.error)
                    }
                    else if (!this.alpha && this.numeric && !this.special) {
                        regex = dataTypes.numeric.regex
                        errorMessages.push(errorStart + dataTypes.numeric.error)
                    }
                    else if (this.alpha && !this.numeric && this.special) {
                        regex = dataTypes.alphaspecial.regex
                        errorMessages.push(errorStart + dataTypes.alphaspecial.error)
                    }
                    else if (this.alpha && this.numeric && !this.special) {
                        regex = dataTypes.alphanumeric.regex
                        errorMessages.push(errorStart + dataTypes.alphanumeric.error)
                    }
                    else if (!this.alpha && this.numeric && this.special) {
                        regex = dataTypes.numericspecial.regex
                        errorMessages.push(errorStart + dataTypes.numericspecial.error)
                    }
                    break;
                // if (!valid)
                // throw 'Invalid value in ' + this.name //throws error if invalid value entered
            }
            //this section will only trigger if a regex has been defined for the field, which should be any field that has any content validation at all (not allowing any types of characters whatsoever), and regex will only be set if it passed field length requirements already, so this will only trigger while the field has passed everything so far...
            if (regex !== '') {
                if (regex !== 'N/A')
                    valid = regex.test(value) //valid will be set to true if the content matches the set regex
                //checks expirations or dates to be no earlier than 1900
                if (this.custom === 'date' || this.custom === 'exp') {
                    if (value.slice(0, 4) < 1900)
                        valid = false
                    else
                        valid = true

                }
                //further date checking to make sure the date is no later than tomorrow
                if (this.custom === 'date' && valid) {
                    let date = new Date()
                    let today = ''
                    today += date.getFullYear() //formatting date YYYYMMDD allows for direct >< comparison for earlier/later dates
                    let month = date.getMonth() + 1
                    today += month < 10 ? '0' + month : month //adds leading 0 for months before october (10)
                    let day = date.getDate() + 2 //to account for differences in time zones, will allow one day past current date
                    today += day < 10 ? '0' + day : day //adds leading 0 for days before the 10th of the month
                    let dateToCompare = value.slice(0, 4) + value.slice(5, 7) + value.slice(8, 10) //changes entered date to YYYYMMDD for direct comparison
                    valid = parseInt(dateToCompare, 10) < parseInt(today, 10) ? true : false //returns true if date entered is less than today
                }
                //further checking to make sure the year is no later than this year
                else if (this.custom === 'year' && valid) {
                    let date = new Date()
                    valid = parseInt(value, 10) <= date.getFullYear() ? true : false //returns true if the year is less than or equal to this year
                }

                //height and weight cannot be 0.
                else if (this.code === 'wgt' || this.code === 'hgt') {
                    if (!parseInt(this.input, 10) > 0) {
                        valid = false
                        errorMessages.push(`The "${this.name}" field needs to have a value greater than 0.`)
                    }
                }
            }
            //if the field checks out as valid, makes sure to pass an empty list of error messages
            if (valid) {
                errorMessages = []
            }
        }
        if (valid) {
            this.error = false
        }
        else {
            this.error = true
        }

        return { valid: valid, errorMessages: errorMessages }
    }
}
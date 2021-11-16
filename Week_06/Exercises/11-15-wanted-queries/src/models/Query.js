import Field from "./Field";

/**
 * Query is a class that builds a full fleshed query to send to the state.  It contains requirements, takes user entries and checks against requirements, then returns the assembled query if accurate.
 * 
 * @param {object} params //contains the object to define the fields in the query
 */
export default class Query {
  constructor(params) {
    this.fields = {}
    this.optionalFieldGroups = []

    params.forEach(field => {
      //adds new field to the this.fields object, with the MKE as a key
      this.fields[field.code] = new Field(field)
    })
    let fieldNames = Object.getOwnPropertyNames(this.fields)
    fieldNames.forEach(name => {
      let field = this.fields[name]
      //defines sets of fields
      if (field.set.length > 1) {
        let exists = false
        for (let i = 0; i < this.optionalFieldGroups.length; i++) {
          if (this.optionalFieldGroups[i].set === field.set) {
            exists = true
            break
          }
        }
        if (!exists) {
          let errorMessage = 'If one of the following are present, all must be present:'
          for (let i = 0; i < field.set.length; i++) {
            errorMessage += ` ${this.fields[field.set[i]].name},`
          }
          this.optionalFieldGroups.push({
            error: `${errorMessage.slice(0, -1)}.`,
            set: field.set
          })
        }
      }
    })

    this.valid = true             //query is valid until proven defective
    this.assembledQuery = ''      //assembled query is built when the fields are validated

    this.validateFields = this.validateFields.bind(this)
    this.updateField = this.updateField.bind(this)
  }

  updateField(code, val) {
    this.fields[code].input = val;
  }

  validateFields(fields, queryType) {
    this.valid = true
    this.assembledQuery = ''
    let errorMessages = []
    let fieldNames = Object.getOwnPropertyNames(fields)
    //checks for required fields
    fieldNames.forEach(name => {
      let field = fields[name]
      if (field.required && this.fields[field.code].input.trim() === '') {
        this.valid = false
        errorMessages.push('The "' + field.name + '" field must be included.\n')
      }

      let results = field.validate(this.fields[field.code].input)
      if (!results.valid && (field.required || (!field.required && this.fields[name].input !== ''))) {
        this.valid = false
        let tempMessages = errorMessages
        errorMessages = tempMessages.concat(results.errorMessages)
      }
      return true
    })

    //checks that optional groups have all members present
    this.optionalFieldGroups.map(group => {
      let fieldsEntered = 0
      for (let i = 0; i < group.set.length; i++) {
        if (this.fields[group.set[i]].input !== '')
          fieldsEntered++ //adds 1 for every field in the group that has been populated
      }
      if (fieldsEntered < group.set.length && fieldsEntered > 0) {
        errorMessages.push(group.error) //if there is at least one, but not an entry for each field, will return error message
        this.valid = false
      }
      return true
    })
    if (this.valid) {
      Object.entries(this.fields).forEach(([key, value]) => {
        if (key === 'wgt' && value.input !== '') {
          while (value.input.length < 3) {
            value.input = '0' + value.input; //will increase length with preceding zeroes until the value is 3 characters long
          }
        }
        this.assembledQuery += value.input + '.'
      })
      this.assembledQuery = this.assembledQuery.slice(0, -1)
    }

    //if is a "modify" type query, checks that at least one optional field is edited
    if (this.valid && queryType) {
      let included = false
      Object.entries(this.fields).forEach(([key, value]) => {
        if (!value.required && value.input.trim() !== ''){
          included = true
        }
      })
      if (!included){
        this.valid = false
        errorMessages.push('At least one optional field needs to be included.')
      }
    }
    return ({ valid: this.valid, errorMessages: errorMessages, assembledQuery: this.assembledQuery })
  }
}
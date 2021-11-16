import React, { Component } from 'react';
import * as source from './values.js';

class QueryEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: Object.assign({}, props.query),
      notModified: true,
      validated: false,
      valid: true,
      errorMessages: [],
      assembledQuery: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.clear = this.clear.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setState({ notModified: true })
  }

  handleChange(prop, val) {
    if (this.state.notModified) {
      this.setState({ notModified: false, validated: false })
    }
    let queryCopy = Object.assign({}, this.state.query)
    queryCopy.fields[prop].input = val
    queryCopy.updateField(prop, val)
    this.setState({ query: queryCopy })
  }

  submit() {
    let results = this.state.query.validateFields(this.state.query.fields, this.props.type)
    this.setState({ notModified: true, validated: true, valid: results.valid, errorMessages: results.errorMessages, assembledQuery: results.assembledQuery })
  }

  clear() {
    let queryCopy = Object.assign({}, this.state.query)
    for (let prop in queryCopy.fields) {
      if (queryCopy.fields.hasOwnProperty(prop))
        queryCopy.fields[prop].input = ''
    }
    this.setState({ notModified: true, validated: false, valid: true, errorMessages: [], assembledQuery: source.default, query: queryCopy })
  }

  render() {
    let fieldNames = Object.getOwnPropertyNames(this.state.query.fields)
    let inputs = []
    fieldNames.forEach(name => {
      let field = this.state.query.fields[name]

      switch (field.custom) {
        case 'date':
        case 'exp':
          inputs.push(<div key={name}>
            <span className="fieldHeader" name={field.code + 'Header'}> {field.name} </span><br />
            <input type="date" className={field.input.trim() === '' && field.required ? 'inputField required' : field.error ? 'inputField error' : 'inputField'} name={field.code + 'Input'} value={this.state.query.fields[field.code].input || ''} onChange={(e) => { this.handleChange(field.code, e.target.value) }} placeholder={this.state.query.fields[field.code].placeholder ? this.state.query.fields[field.code].placeholder : ""}></input>
          </div>)
          break;
        case 'sex':
          inputs.push(<div key={name}>
            <span className="fieldHeader" name={field.code + 'Header'}> {field.name} </span><br />
            <select className={field.input.trim() === '' && field.required ? 'inputField required' : field.error ? 'inputField error' : 'inputField'} name={field.code + 'Input'} value={this.state.query.fields[field.code].input || ''} onChange={(e) => { this.handleChange(field.code, e.target.value) }} placeholder={this.state.query.fields[field.code].placeholder ? this.state.query.fields[field.code].placeholder : ""}>
              <option value=""></option>
              <option value="F">Female</option>
              <option value="M">Male</option>
              <option value="O">Other</option>
              <option value="U">Unknown</option>
            </select>
          </div>)
          break;
        case 'race':
          inputs.push(<div key={name}>
            <span className="fieldHeader" name={field.code + 'Header'}> {field.name} </span><br />
            <select className={field.input.trim() === '' && field.required ? 'inputField required' : field.error ? 'inputField error' : 'inputField'} name={field.code + 'Input'} value={this.state.query.fields[field.code].input || ''} onChange={(e) => { this.handleChange(field.code, e.target.value) }} placeholder={this.state.query.fields[field.code].placeholder ? this.state.query.fields[field.code].placeholder : ""}>
              <option value=""></option>
              <option value="A">Asian / Pacific Islander</option>
              <option value="B">Black</option>
              <option value="H">Hispanic</option>
              <option value="I">American Indian / Alaskan Native</option>
              <option value="W">White</option>
              <option value="U">Unknown</option>
            </select>
          </div>)
          break;
        default:
          inputs.push(<div key={name}>
            <span className="fieldHeader" name={field.code + 'Header'}> {field.name} </span><br />
            <input className={field.input.trim() === '' && field.required ? 'inputField required' : field.error ? 'inputField error' : 'inputField'} name={field.code + 'Input'} value={this.state.query.fields[field.code].input || ''} onChange={(e) => { this.handleChange(field.code, e.target.value) }} placeholder={this.state.query.fields[field.code].placeholder ? this.state.query.fields[field.code].placeholder : ""}></input>
          </div>
          )
      }
    })
    let errors = []
    if (!this.state.valid)
      this.state.errorMessages.forEach((error, i) => {
        errors.push(<li key={i} className="errorMessage">{error}</li>)
      })
    return (
      <div>
        {
          this.state.query
            ?
            <div>
              <table>
                <thead>
                  <tr>
                    <td colSpan='2'>
                      <p>
                        Fields highlighted in blue are required, others are optional.  If hilighted in red, there is an error with that field.  When ready, click "submit" for an assembled query, or a list of errors if any exist.  You can also click "clear" to clear out the field.
                    </p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="inputs">
                      {inputs}
                    </td>

                    <td className="results">
                      <button id="saveBtn" className="button" value="The" disabled={this.state.notModified} onClick={this.submit}> Submit </button>
                      <button id="clearBtn" className="button" onClick={this.clear}> Clear </button>
                      <br />
                      <h4 id="validHeader" alt="is">{this.state.validated ? (this.state.valid ? 'Valid' : errors.length > 0 ? 'Errors Received:' : '') : (errors.length > 0 ? 'Errors Received' : '')}</h4>
                      <ul id="errorList">{errors}</ul>
                      <br />
                      <span name="queryTitle"> {this.state.validated ? (this.state.valid ? 'Assembled Query:' : 'No results generated due to error.') : 'Submit query for validation.'} </span>
                      <span name="queryBody"> {(this.state.validated && this.state.valid) ? this.state.assembledQuery : ''} </span>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            :
            <p id="noQuery"> Error Loading Query </p>
        }

      </div>
    )
  }
}

export default QueryEditor;


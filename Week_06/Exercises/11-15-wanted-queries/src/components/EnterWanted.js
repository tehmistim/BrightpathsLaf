import React, { Component } from 'react'

import Query from '../models/Query'

import QueryEditor from './QueryEditor'

class EnterWanted extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: new Query([
        //defines the list of fields in the query
        {required: true, name: 'Header', code: 'hdr', set: [], alpha: true, numeric: true, special: true, custom: null, min: 9, max: 19, input: '', placeholder: 'ABC-114933'},
        {required: true, name: 'MKE', code: 'mke', set: [], alpha: true, numeric: false, special: true, custom: null, min: 2, max: 4, input: '', placeholder: 'ABC'},
        {required: true, name: 'Originating Agency Identifier', code: 'ori', set: [], alpha: true, numeric: true, special: false, custom: null, min: 9, max: 9, input: '', placeholder: '897654822'},
        {required: true, name: 'Name', code: 'nam', set: [], alpha: true, numeric: true, special: true, custom: null, min: 3, max: 30, input: '', placeholder: 'John Doe'},
        {required: true, name: 'Sex', code: 'sex', set: [], alpha: true, numeric: false, special: false, custom: 'sex', min: 1, max: 1, input: ''},
        {required: true, name: 'Race / Ethnicity', code: 'rac', set: [], alpha: true, numeric: false, special: false, custom: 'race', min: 1, max: 1, input: ''},
        {required: true, name: 'Height', code: 'hgt', set: [], alpha: false, numeric: true, special: false, custom: null, min: 3, max: 3, input: '', placeholder: '511'},
        {required: true, name: 'Weight', code: 'wgt', set: [], alpha: false, numeric: true, special: false, custom: null, min: 1, max: 3, input: '', placeholder: '180'},
        {required: true, name: 'Hair', code: 'hai', set: [], alpha: true, numeric: false, special: true, custom: null, min: 3, max: 10, input: '', placeholder: 'Blonde'}, 
        {required: true, name: 'Offense', code: 'off', set: [], alpha: true, numeric: true, special: true, custom: null, min: 5, max: 15, input: '', placeholder: 'Arson'},
        {required: true, name: 'Date of Warrant/Violation', code: 'dow', set: [], alpha: false, numeric: true, special: false, custom: 'date', min: 10, max: 10, input: ''},
        {required: false, name: 'Drivers License', code: 'oln', set: ['oln', 'ols', 'old'], alpha: true, numeric: true, special: true, custom: null, min: 1, max: 20, input: '', placeholder: 'A264756'},
        {required: false, name: 'DL State', code: 'ols', set: [], alpha: true, numeric: false, special: false, custom: 'state', min: 2, max: 2, input: '', placeholder: 'CA'},
        {required: false, name: 'DL Expiration Date', code: 'old', set: [], alpha: false, numeric: true, special: false, custom: 'exp', min: 10, max: 10, input: ''},
        {required: false, name: 'License Plate', code: 'lic', set: ['lic', 'lis', 'lid'], alpha: true, numeric: true, special: false, custom: null, min: 5, max: 8, input: '', placeholder: '93HG123'},
        {required: false, name: 'License State', code: 'lis', set: [], alpha: true, numeric: false, special: false, custom: 'state', min: 2, max: 2, input: '', placeholder: 'CA'},
        {required: false, name: 'License Expiration Date', code: 'lid', set: [], alpha: false, numeric: true, special: false, custom: 'exp', min: 10, max: 10, input: ''}
      ])
    }

    this.refresh = this.refresh.bind(this)
  }

  refresh() {
    this.setState(this.state)
  }

  render() {
    return (
      <div id="app">
        <div className="main-container">
          <h2> Enter Wanted </h2>
          <QueryEditor query={this.state.query} type="enter" />
        </div>
      </div>
    )
  }
}

export default EnterWanted;

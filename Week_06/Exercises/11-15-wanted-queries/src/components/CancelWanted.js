import React, { Component } from 'react'

import Query from '../models/Query'

import QueryEditor from './QueryEditor'

class CancelWanted extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: new Query([
        //defines the list of fields in the query
        { required: true, name: 'Warrant ID', code: 'wid', set: [], alpha: false, numeric: true, special: false, custom: null, min: 10, max: 10, input: '', placeholder: '1938663278' },
        { required: true, name: 'Reason for Cancellation', code: 'res', set: [], alpha: true, numeric: true, special: true, custom: null, min: 10, max: 150, input: '', placeholder: 'Alabi was confirmed.' },
        { required: true, name: 'Date of Cancellation', code: 'dat', set: [], alpha: true, numeric: true, special: false, custom: 'exp', min: 10, max: 10, input: '' }
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
          <h2> Cancel Wanted </h2>
          <QueryEditor query={this.state.query} type="cancel" />
        </div>
      </div>
    )
  }
}

export default CancelWanted;

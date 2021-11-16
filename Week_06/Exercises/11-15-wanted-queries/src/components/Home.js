import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div id="welcomeScreen">
        Welcome to "Wanted Queries".  This application will format and display query outputs to a criminal database similar to the NCIC's.  The screens are summarized below, and can be accessed through the menu to the top left.
        <ul>
        <li><h3>Enter Wanted</h3></li>
          <ul>
            <li>This query is to generate a new warrant.</li>
          </ul>
          <li><h3>Modify Wanted</h3></li>
          <ul>
            <li>This query is to modify an existing warrant.</li>
          </ul>
          <li><h3>Cancel Wanted</h3></li>
          <ul>
            <li>This query is to close out an existing warrant.</li>
          </ul>
        </ul>

        Required fields will be marked <span className="required">this way</span> when empty, and <span className="error">this way</span> when in error.
      </div>
    )
  }
}

export default Home;
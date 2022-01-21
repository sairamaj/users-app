import React from 'react';

class Contact extends React.Component {
    render() {
      return (
        <tr>
          <td><label>{this.props.contact.Name}</label></td>
          <td><label>{this.props.contact.Phone}</label></td>
          <td><label>{this.props.contact.Email}</label></td>
        </tr>
      )
    }
  }

  export default Contact
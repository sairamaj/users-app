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

class ContactContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            contacts: []
        }
    }
    componentDidMount() {
        const apiUrl = 'https://0rd4fxo8bc.execute-api.us-west-2.amazonaws.com/prod/users/contacts';
        fetch(apiUrl)
            .then(async (response) => {
                this.setState({ loading: false, contacts: await response.json() });
            });
    }

    render() {
        if (this.state.loading) {
            return (<label>loading...</label>)
        }
        else {
            return (
                <div>
                    {/* <Link to="foo" className="btn btn-sm btn-success mb-2">Add Contact</Link> */}
                    <table align='center'>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        {this.state.contacts.map((item) =>
                            <Contact contact={item} />
                        )}
                    </table>
                </div>
            )
        }
    }
}

export { ContactContainer };
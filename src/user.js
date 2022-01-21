import React from 'react';
import Contact from './contact.js'

class User extends React.Component {
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
                <table align='center'>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    {this.state.contacts.map((item) =>
                        <Contact contact={item} />
                    )}
                </table>
            )
        }
    }
}

export default User
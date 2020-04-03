import React from 'react';
import Home from './Home';
import './Home.css'


export default class HomePage extends React.Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }

    handleSubmitData = (data) => {

        const { user_id } = this.props.match.params
        const { history } = this.props
        history.push(`/data/${user_id}`)
    }
    render() {
        return (
            <Home userId={this.props.user_id} name={this.props.name} createDataSuccess={this.handleSubmitData} />
        )
    }
};
import React from 'react';
import Result from './Result';
import NavBar from '../NavBar/NavBar'
import DataAPiService from '../../Services/data-api-service';

export default class ResultPage extends React.Component {


    state = {
        userData: []
    }


    componentDidMount() {

     DataAPiService.getData()
        .then(userData => this.setState({
            userData,
        }))
     
    }

    render() {
       const {userData} =this.state
        return (
            <main role="main">
             
                <header role="banner">
                    <NavBar />
                    <h1>Daily Sleep Hours</h1>
                   
                </header>
                {userData.map(data => (
                    <Result date={data.date}  />
                ))}

            </main>
        )
    }
}
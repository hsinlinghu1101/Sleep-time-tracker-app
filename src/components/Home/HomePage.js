import React from 'react';
import Home from './Home';

export default class HomePage extends React.Component{
    static defaultProps={
        history:{
            push:()=>{}
        }
    }

    handleSubmitData=(data)=>{
        const {history} = this.props
        history.push('/data')
    }
    render(){
        return(
          <Home createDataSuccess={this.handleSubmitData}/>
      )
    }
        
    
}
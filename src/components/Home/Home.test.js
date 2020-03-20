import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import {MemoryRouter as Router} from 'react-router-dom'
import renderer from 'react-test-renderer';

describe('Home', ()=>{
  it('renders without crashing', () => {
    
    const div = document.createElement('div');
   
    ReactDOM.render(<Router><Home /></Router>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });
})
it('renders the UI as expected', () => {
  const tree = renderer
    .create(
        <Router><Home/></Router>    
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
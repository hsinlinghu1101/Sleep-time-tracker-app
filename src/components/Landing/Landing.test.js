import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter as Router} from 'react-router-dom';
import Landing from './Landing';
import renderer from 'react-test-renderer';

it('renders without crashing', ()=>{
    const div = document.createElement('div')

    ReactDOM.render(
        <Router>
        <Landing />
        </Router>, div)
        ReactDOM.unmountComponentAtNode(div)
    
})
it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <Router>
          <Landing />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
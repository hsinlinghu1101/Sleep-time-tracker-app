import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router} from 'react-router-dom';
import Result from './Result';
import renderer from 'react-test-renderer';

it('renders without crashing', ()=>{
    const div = document.createElement('div')

    ReactDOM.render(
        <Router>
        <Result />
        </Router>, div)
        ReactDOM.unmountComponentAtNode(div)
    
})
it('renders the UI as expected', () => {
    const tree = renderer
      .create(
          <Router><Result/></Router>    
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import renderer from 'react-test-renderer';

describe('Header', ()=>{
  it('renders without crashing', () => {
    
    const div = document.createElement('div');
   
    ReactDOM.render(<Header/>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });
})
it('renders the UI as expected', () => {
  const tree = renderer
    .create(
        <Header/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
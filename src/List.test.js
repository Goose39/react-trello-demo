import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('Messages component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List 
                cards = {
                  {'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
                  'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' }}
                   }/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});
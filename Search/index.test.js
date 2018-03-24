import React from 'react';
import Search from './index';

test('Render the Search component', () => {
    const onKeyPress = jest.fn(),
        component = shallow(<Search onKeyPress={onKeyPress}/>);

    expect(component).toMatchSnapshot();
    component.simulate('keypress');

    expect(onKeyPress).to.have.been.called;
});

import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import App from '../components/App';
import Form from '../components/Form';

it('App renders without crashing', () => {
  shallow(<App />);
});

it('App includes Form component', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Form />)).toEqual(true)
});

describe('<App />', () => {
  const app = shallow(<App />);
  it('resError is false', () => {
    expect(app.state(['resError'])).toEqual(false);
  });
  it('isValidate is false', () => {
    expect(app.state(['isValidate'])).toEqual(false);
  });
});

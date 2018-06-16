import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import App from './App';
import Form from './Form';
import FormInput from './FormInput';

it('App renders without crashing', () => {
  shallow(<App />);
});

it('App includes Form component', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Form />)).toEqual(true)
});

it('Form component includes FormInput component', () => {
  const form = shallow(<Form />);
  expect(form.containsMatchingElement(<FormInput />)).toEqual(true)
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

describe('<Form />', () => {
  const form = shallow(<Form email='example@example.pl' password='example' />);
  const formInput = form.find(FormInput);

  it('check if value is passing as text', () => {
    const formInputFilter = formInput.filter('[type="text"]');
    expect(formInputFilter.props().value).toEqual('example@example.pl');
  });

  it('check if value is passing as password', () => {
    const formInputFilter = formInput.filter('[type="password"]');
    expect(formInputFilter.props().value).toEqual('example');
  });
});

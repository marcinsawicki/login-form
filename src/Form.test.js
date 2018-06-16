import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import FormInput from './FormInput';

it('Form component includes FormInput component', () => {
  const form = shallow(<Form />);
  expect(form.containsMatchingElement(<FormInput />)).toEqual(true)
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

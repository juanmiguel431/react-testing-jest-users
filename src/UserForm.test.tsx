import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from './UserForm';
import { User } from './models';

test('it shows two inputs and a button', () => {
  // render the component
  render(<UserForm
    onUserAdd={() => {
    }}/>)

  // Manipulate the component or find an element in it.
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Assertion - make sure the component is doing
  // what we expect it to do.
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
  // Not the best implementation.

  let user: User | null = null;
  const callback = (userSubmitted: User) => {
    user = userSubmitted;
  };

  // Try to render the component
  render(<UserForm onUserAdd={callback}/>);

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  // Simulate typing in a name
  await userEvent.click(nameInput);
  await userEvent.keyboard('jane');

  // Simulate typing in an email
  await userEvent.click(emailInput);
  await userEvent.keyboard('jane@jane.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  await userEvent.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(user).toEqual({ name: 'jane', email: 'jane@jane.com'});
});

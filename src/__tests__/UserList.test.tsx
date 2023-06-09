import { render, screen, within } from '@testing-library/react';
import UserList from '../UserList';
import { User } from '../models';

test('render one row per user', async () => {
  // Render the component
  const users: User[] = [
    { name: 'jame', email: 'jane@jane.com'},
    { name: 'sam', email: 'sam@sam.com'},
  ];
  const { container } = render(<UserList users={users} />);

  // Find all the rows in the table
  // screen.logTestingPlaygroundURL();
  // const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
  const rows = container.querySelectorAll('tbody tr');

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render email and name of each user', async () => {

});

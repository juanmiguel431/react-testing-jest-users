import React from 'react';
import { User } from './models';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = function ({ users}) {

  const renderedUsers = users.map((user) => {
    return <tr key={user.name}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  })

  return <table>
    <thead>
      <th>Name</th>
      <th>Email</th>
    </thead>
    <tbody>
      {renderedUsers}
    </tbody>
  </table>;
}

export default UserList;

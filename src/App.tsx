import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import { User } from './models';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const onUserAdd = (user: User) => {
    setUsers([...users, user]);
  }

  return <div>
    <UserForm onUserAdd={onUserAdd} />
    <hr/>
    <UserList users={users} />
  </div>
}

export default App;

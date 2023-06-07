import React, { useState } from 'react';
import UserForm, { User } from './UserForm';
import UserList from './UserList';

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

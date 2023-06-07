import React, { useState } from 'react';

export interface User {
  name: string;
  email: string;
}

interface UserFormProps {
  onUserAdd: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = function ({ onUserAdd }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUserAdd({ name, email});
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="">Name</label>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="">Email</label>
      <input value={email} onChange={e => setEmail(e.target.value)}/>
    </div>
    <button>Add User</button>
  </form>
}

export default UserForm;

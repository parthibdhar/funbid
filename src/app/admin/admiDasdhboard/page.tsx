"use client"
import { useEffect, useState } from 'react';
import { getAllUsers, deleteUserProfile } from '../../firestore/user';
import { useRouter } from 'next/navigation';

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await getAllUsers();
        setUsers(userList);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, [users]);

  const handleDelete = async (uid: string) => {
    try {
      await deleteUserProfile(uid);
      alert('User deleted successfully');
      setUsers(users.filter(user => user.id !== uid));
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <button onClick={() => router.push('/admin/create-user')}>Create User</button>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>
                <button onClick={() => router.push(`../../admin/edit-user/${user.id}`)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.email} 
            <button onClick={() => router.push(`/edit-user/${user.id}`)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Users;

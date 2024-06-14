import { getDatabase, onValue, ref, set, update, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { app } from '../Firebase';

export default function FirebaseDatabase() {
    const [users, setUsers] = useState([]);
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [editUserId, setEditUserId] = useState(null);
    const [editUsername, setEditUsername] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const db = getDatabase(app);

    useEffect(() => {
        fetchData();
    }, []);

    function SendData(username, email) {
        set(ref(db, `users/${username}`), {
            username: username,
            email: email,
        }).then(() => {
            console.log('Data sent successfully');
        }).catch((error) => {
            console.error('Error sending data: ', error);
        });
    }

    function fetchData() {
        const usersRef = ref(db, 'users');
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const userList = Object.keys(data).map(key => ({
                    id: key,
                    username: data[key].username,
                    email: data[key].email,
                }));
                setUsers(userList);
            } else {
                setUsers([]);
            }
        }, (error) => {
            console.error('Error fetching data: ', error);
        });
    }

    function handleAddData() {
        if (editUserId) {
            updateUser(editUserId, editUsername, editEmail);
        } else {
            SendData(newUsername, newEmail);
        }
    }

    function updateUser(userId, username, email) {
        update(ref(db, `users/${userId}`), {
            username: username,
            email: email,
        }).then(() => {
            console.log('User updated successfully');
            setEditUserId(null);
            setEditUsername('');
            setEditEmail('');
        }).catch((error) => {
            console.error('Error updating user: ', error);
        });
    }

    function deleteUser(userId) {
        remove(ref(db, `users/${userId}`))
            .then(() => {
                console.log('User deleted successfully');
                setUsers(users.filter(user => user.id !== userId));
            })
            .catch((error) => {
                console.error('Error deleting user: ', error);
            });
    }

    function handleEditUser(user) {
        setEditUserId(user.id);
        setEditUsername(user.username);
        setEditEmail(user.email);
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="New Username"
                    value={editUserId ? editUsername : newUsername}
                    onChange={(e) => editUserId ? setEditUsername(e.target.value) : setNewUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="New Email"
                    value={editUserId ? editEmail : newEmail}
                    onChange={(e) => editUserId ? setEditEmail(e.target.value) : setNewEmail(e.target.value)}
                />
                <button onClick={handleAddData}>{editUserId ? 'Update User' : 'Add User'}</button>
            </div>
            <div>
                {users.map(user => (
                    <div key={user.id}>
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                        <button onClick={() => handleEditUser(user)}>Edit</button>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}



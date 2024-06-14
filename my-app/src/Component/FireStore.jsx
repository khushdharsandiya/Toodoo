import React, { useState, useEffect } from 'react';
import { addDoc, collection, getDocs, getFirestore, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { app } from '../Firebase';

export default function FireStore() {
    const db = getFirestore(app);
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ first: '', last: '' });
    const [editingUserId, setEditingUserId] = useState(null);

    async function Add() {
        try {
            if (editingUserId) {
                const userDocRef = doc(db, "users", editingUserId);
                await updateDoc(userDocRef, {
                    first: newUser.first,
                    last: newUser.last
                });
                console.log("Document updated with ID: ", editingUserId);
                setEditingUserId(null);
            } else {
                const docRef = await addDoc(collection(db, "users"), {
                    first: newUser.first,
                    last: newUser.last
                });
                console.log("Document written with ID: ", docRef.id);
            }
            setNewUser({ first: '', last: '' });
            fetchUsers();
        } catch (e) {
            console.error("Error adding/updating document: ", e);
        }
    }

    async function fetchUsers() {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setUsers(usersList);
    }

    async function deleteUser(userId) {
        try {
            await deleteDoc(doc(db, "users", userId));
            console.log("Document deleted with ID: ", userId);
            fetchUsers();
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    }

    function editUser(user) {
        setNewUser({ first: user.first, last: user.last });
        setEditingUserId(user.id);
    }

    useEffect(() => {
        fetchUsers();
    },[]);

    return (
        <div>
            <input
            style={{border:"1px solid grey",padding:"5px",margin:"5px"}}
                type="text"
                placeholder="First Name"
                value={newUser.first}
                onChange={(e) => setNewUser({ ...newUser, first: e.target.value })}
            />
            <input
            style={{border:"1px solid grey",padding:"5px",margin:"5px"}}
                type="text"
                placeholder="Last Name"
                value={newUser.last}
                onChange={(e) => setNewUser({ ...newUser, last: e.target.value })}
            />
            <button style={{border:"1px solid grey",padding:"5px",margin:"5px"}} onClick={Add}>{editingUserId ? 'Update User' : 'Add User'}</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.first} {user.last}
                        <button style={{border:"1px solid grey",padding:"5px",margin:"5px"}} onClick={() => editUser(user)}>Edit</button>
                        <button style={{border:"1px solid grey",padding:"5px",margin:"5px"}} onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

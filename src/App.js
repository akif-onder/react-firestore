
import { useEffect, useState } from 'react';
import './App.css';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';
import { db } from './firebase-config';
import { async } from '@firebase/util';




function App() {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [users,setUsers] = useState([]);

  const userCollection = collection(db, 'users');

  const createUser = async () => {
    await addDoc(userCollection, {name: newName, age: Number(newAge)})
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id);
    const newFields = {age: age + 1};
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  }
  useEffect(()=>{
    const getUsers = async () => {
      const data = await getDocs(userCollection);
      setUsers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));

    };
    getUsers();
  }, []);
  
  return (
    <div className="App">
      <input type='text' placeholder='Name...' onChange={(e)=> setNewName(e.target.value)}/>
      <input type='number' placeholder='Age...' onChange={(e)=> setNewAge(e.target.value)}/>
      <button onClick={createUser}>Create User</button>
      {users.map((user)=>{
        return(
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button onClick={()=> {updateUser(user.id, user.age)}}>Inrease Age</button>
            <button onClick={()=> {deleteUser(user.id)}}>Delete User</button>
          </div>
        )
      })}
      
    </div>
  );
}

export default App;

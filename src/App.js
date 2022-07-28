
import { useEffect, useState } from 'react';
import './App.css';
import {collection, getDocs} from 'firebase/firestore';
import { db } from './firebase-config';



function App() {
  const [user,setUser] = useState([]);

  const userCollection = collection(db, 'users');

  useEffect(()=>{
    const getUsers = async () => {
      const data = await getDocs(userCollection);
      console.log(data)
    };
    getUsers();
  }, []);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

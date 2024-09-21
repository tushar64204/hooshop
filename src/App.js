import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';

// import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
    const user = localStorage.getItem('token');

    return (
        <>
           
            
            <Routes>
+                {user && <Route path="/" exact element={<Main />} />}
                <Route path="/Signup" exact element={<Signup />} />
                <Route path="/Login" exact element={<Login />} />
               
            
                <Route path="/" exact element={<Navigate replace to="/login" />} />
               
            </Routes>
        </>
    );
}

export default App;
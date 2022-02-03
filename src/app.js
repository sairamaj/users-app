// import './App.css';
import { Route, Routes, Router, Navigate, useLocation } from 'react-router-dom';
import { Home } from './home/index';
import { ContactContainer } from './contacts/index';
import { ToDoContainer } from './todos/index';
import { Nav } from './components/nav';

function App() {
    return (
        <div>
            <Nav />
            <div>
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contacts" element={<ContactContainer />} />
                    <Route exact path="/todos" element={<ToDoContainer />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

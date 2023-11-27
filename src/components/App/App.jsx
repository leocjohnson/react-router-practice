import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min.js';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import Nav from '../Nav/Nav.jsx';


function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                <h1 className="App-title">GitHub Student List</h1>
                </header>
                <Nav />
                <br/>
                <StudentForm />

                <p>Student list:</p>
                <StudentList />
            </Router>
        </div>
    );
}

export default App;

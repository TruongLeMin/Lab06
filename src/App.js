import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './redux/store';
import Quiz from './components/Quiz';
import QuizReview from './components/QuizReview';
import Result from './components/Result';

const App = () => {
    const [view, setView] = useState('quiz');

    return (
        <Provider store={store}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => setView('quiz')}>Home</Nav.Link>
                        <Nav.Link onClick={() => setView('about')}>About</Nav.Link>
                        <Nav.Link onClick={() => setView('news')}>News</Nav.Link>
                        <Nav.Link onClick={() => setView('quiz')}>Quiz</Nav.Link>
                        <Nav.Link onClick={() => setView('review')}>Quiz Review</Nav.Link>
                        <Nav.Link onClick={() => setView('contact')}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container mt-5">
                {view === 'quiz' && <Quiz setView={setView} />}
                {view === 'result' && <Result setView={setView} />}
                {view === 'review' && <QuizReview setView={setView} />}
            </div>
        </Provider>
    );
};

export default App;

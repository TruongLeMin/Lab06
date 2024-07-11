import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserAnswer } from '../redux/quizSlice';

const Quiz = ({ setView }) => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.quiz.questions);
    const userAnswers = useSelector(state => state.quiz.userAnswers);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleAnswerChange = (questionId, answer) => {
        dispatch(setUserAnswer({ questionId, answer }));
    };

    const goToFirst = () => setCurrentQuestionIndex(0);
    const goToLast = () => setCurrentQuestionIndex(questions.length - 1);
    const goToNext = () => setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1));
    const goToPrevious = () => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));

    const handleSubmit = () => {
        setView('result');
    };

    return (
        <div className="quiz-container container mt-5">
            <h1 className="text-center mb-4">JavaScript Quiz</h1>
            <div className="card">
                <div className="card-body">
                    {questions.map((question, index) => (
                        <div key={question.id} className={`question-block ${index === currentQuestionIndex ? '' : 'd-none'}`}>
                            <p className="font-weight-bold">Q{index + 1}. {question.question}</p>
                            <div className="options-container row">
                                {question.options.map((option) => (
                                    <div key={option} className="col-md-6 mb-2">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name={`question-${question.id}`} 
                                                id={`question-${question.id}-option-${option}`} 
                                                value={option} 
                                                checked={userAnswers[question.id] === option}
                                                onChange={() => handleAnswerChange(question.id, option)}
                                            />
                                            <label 
                                                className={`form-check-label ${userAnswers[question.id] === option ? 'bg-primary text-white' : 'bg-light'}`} 
                                                htmlFor={`question-${question.id}-option-${option}`}
                                            >
                                                {option}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="navigation-buttons text-center mt-4">
                <button className="btn btn-secondary mx-2" onClick={goToFirst}>First</button>
                <button className="btn btn-secondary mx-2" onClick={goToPrevious}>Prev</button>
                <button className="btn btn-secondary mx-2" onClick={goToNext}>Next</button>
                <button className="btn btn-secondary mx-2" onClick={goToLast}>Last</button>
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-primary mx-2">Quiz</button>
                <button className="btn btn-info mx-2" onClick={() => setView('review')}>Quiz Review</button>
                <button className="btn btn-success mx-2" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Quiz;

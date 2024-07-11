import React from 'react';
import { useSelector } from 'react-redux';

const Result = ({ setView }) => {
    const questions = useSelector(state => state.quiz.questions);
    const userAnswers = useSelector(state => state.quiz.userAnswers);

    return (
        <div className="quiz-result container mt-5">
            <h2 className="text-center mb-4">Quiz Result</h2>
            {questions.map((question, index) => (
                <div key={question.id} className={`card mb-3 ${userAnswers[question.id] === question.correctAnswer ? 'border-success' : 'border-danger'}`}>
                    <div className="card-body">
                        <h5 className="card-title">Q{index + 1}. {question.question}</h5>
                        <div className="options-container">
                            {question.options.map((option) => (
                                <div key={option} className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`question-${question.id}`}
                                        id={`question-${question.id}-option-${option}`}
                                        value={option}
                                        checked={userAnswers[question.id] === option}
                                        readOnly
                                    />
                                    <label
                                        className={`form-check-label ${userAnswers[question.id] === option ? (userAnswers[question.id] === question.correctAnswer ? 'bg-success text-white' : 'bg-danger text-white') : ''}`}
                                        htmlFor={`question-${question.id}-option-${option}`}
                                    >
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <p className={`mt-2 ${userAnswers[question.id] === question.correctAnswer ? 'text-success' : 'text-danger'}`}>
                            Right answer is: <strong>{question.correctAnswer}</strong>
                        </p>
                    </div>
                </div>
            ))}
            <div className="text-center mt-4">
                <button className="btn btn-info mx-2" onClick={() => setView('review')}>Quiz Review</button>
            </div>
        </div>
    );
};

export default Result;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const QuizReview = ({ setView }) => {
    const questions = useSelector(state => state.quiz.questions);
    const userAnswers = useSelector(state => state.quiz.userAnswers);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);

    const handleQuestionClick = (id) => {
        setSelectedQuestionId(id);
    };

    const selectedQuestion = questions.find(q => q.id === selectedQuestionId);

    return (
        <div className="quiz-review container mt-5">
            <h2 className="text-center mb-4">Quiz Review</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {questions.map((question, index) => (
                    <div key={question.id} className="p-2">
                        <button
                            className={`btn btn-lg ${userAnswers[question.id] ? 'btn-success' : 'btn-danger'} m-2`}
                            onClick={() => handleQuestionClick(question.id)}
                        >
                            Question No {index + 1} <br /> {userAnswers[question.id] ? 'Answered' : 'Not Answered'}
                        </button>
                    </div>
                ))}
            </div>
            {selectedQuestion && (
                <div className="mt-4">
                    <div className={`card mb-3 ${userAnswers[selectedQuestion.id] === selectedQuestion.correctAnswer ? 'border-success' : 'border-danger'}`}>
                        <div className="card-body">
                            <h5 className="card-title">Q{selectedQuestion.id}. {selectedQuestion.question}</h5>
                            <div className="options-container">
                                {selectedQuestion.options.map((option) => (
                                    <div key={option} className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name={`question-${selectedQuestion.id}`}
                                            id={`question-${selectedQuestion.id}-option-${option}`}
                                            value={option}
                                            checked={userAnswers[selectedQuestion.id] === option}
                                            readOnly
                                        />
                                        <label
                                            className={`form-check-label ${userAnswers[selectedQuestion.id] === option ? (userAnswers[selectedQuestion.id] === selectedQuestion.correctAnswer ? 'bg-success text-white' : 'bg-danger text-white') : ''}`}
                                            htmlFor={`question-${selectedQuestion.id}-option-${option}`}
                                        >
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <p className={`mt-2 ${userAnswers[selectedQuestion.id] === selectedQuestion.correctAnswer ? 'text-success' : 'text-danger'}`}>
                                Right answer is: <strong>{selectedQuestion.correctAnswer}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <div className="text-center mt-4">
                <button className="btn btn-primary mx-2" onClick={() => setView('quiz')}>Back to Quiz</button>
                <button className="btn btn-info mx-2">Quiz Review</button>
                <button className="btn btn-success mx-2" onClick={() => setView('result')}>Submit</button>
            </div>
        </div>
    );
};

export default QuizReview;

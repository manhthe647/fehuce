import React, { useState, useEffect } from 'react';
import { getExam } from '../../apis/apiExam';

const Quiz = ({ selectName, data }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [countTime, setCountTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [answers, setAnswers] = useState(Array(data.length).fill(null));
    const [showScore, setShowScore] = useState(false);
    const [prevName, setPrevName] = useState(selectName);

    useEffect(() => {
        if (selectName !== prevName) {
            setCurrentQuestion(0);
            setScore(0);
            setAnswers(Array(data.length).fill(null));
            setShowScore(false);
            setPrevName(selectName);
            setCountTime(0);
            setIsRunning(true);
        }
    }, [selectName, prevName]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (isRunning) {
                setCountTime(prevTime => prevTime + 1);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [isRunning]);

    const handleStopTimer = () => {
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const formattedTime = formatTime(countTime);

    const questions = data

    const handleAnswerSelection = (questionIndex, selectedAnswer) => {
        if (questions[questionIndex].type === 'checkbox') {
            const updatedAnswers = answers[questionIndex]
                ? [...answers[questionIndex]]
                : [];
            if (updatedAnswers.includes(selectedAnswer)) {
                const index = updatedAnswers.indexOf(selectedAnswer);
                updatedAnswers.splice(index, 1);
            } else {
                updatedAnswers.push(selectedAnswer);
            }
            setAnswers(answers.map((a, idx) => (idx === questionIndex ? updatedAnswers : a)));
        } else {
            const updatedAnswers = [...answers];
            updatedAnswers[questionIndex] = selectedAnswer;
            setAnswers(updatedAnswers);
        }
    };

    const handleSubmit = () => {
        let newScore = 0;
        questions.forEach((question, index) => {
            if (isAnswerCorrect(answers[index], question.answer)) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setShowScore(true);
        setIsRunning(false);
    };


    const isAnswerCorrect = (userAnswer, correctAnswer) => {
        if (Array.isArray(correctAnswer)) {
            const sortedUserAnswer = userAnswer.slice().sort();
            const sortedCorrectAnswer = correctAnswer.slice().sort();
            return sortedUserAnswer.every((value, index) => value === sortedCorrectAnswer[index]);
        }
        return userAnswer === correctAnswer;
    };


    const handleNextQuestion = () => {
        if (isAnswerCorrect(answers[currentQuestion], questions[currentQuestion].answer)) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    const renderQuestionInputs = (question, questionIndex) => {
        if (question.type === 'text') {
            return (
                <input
                    type="text"
                    value={answers[questionIndex] || ''}
                    onChange={(e) => handleAnswerSelection(questionIndex, e.target.value)}
                />
            );
        } else {
            return question.options.map((option, index) => (
                <li key={index}>
                    <input
                        type={question.type === 'checkbox' ? 'checkbox' : 'radio'}
                        name={`question${questionIndex}`}
                        checked={
                            question.type === 'checkbox'
                                ? answers[questionIndex]?.includes(option) || false
                                : answers[questionIndex] === option
                        }
                        value={option}
                        onChange={() => handleAnswerSelection(questionIndex, option)}
                    />
                    {option}
                </li>
            ));
        }
    };

    const areAllQuestionsAnswered = () => {
        return answers.every(answer => {
            if (Array.isArray(answer)) {
                return answer.length > 0;
            } else {
                return answer !== null;
            }
        });
    };

    return (
        <div className='quiz'>
            {showScore ? (
                <div>
                    <h3>Điểm số: {score}</h3>
                    <h3>Thời gian: {formatTime(countTime)}</h3>
                </div>
            ) : (
                <div>
                    <div className='d-flex justify-content-between'>
                        <h4>{selectName}</h4>

                        <p> {formatTime(countTime)}</p>
                    </div>
                    <hr />
                    {questions.map((question, index) => (
                        <div key={index}>
                            <h5>Câu hỏi {index + 1}</h5>
                            <h6>{question.question}</h6>
                            <ul>{renderQuestionInputs(question, index)}</ul> {/* Pass index here */}
                        </div>
                    ))}

                    <button className='btn btn-info' disabled={!areAllQuestionsAnswered()} onClick={handleSubmit}>Nộp bài</button>
                </div>
            )}
        </div>
    );

};

export default Quiz;

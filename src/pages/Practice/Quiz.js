import React, { useState } from 'react';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState(Array(2).fill(null)); // Initialize answers with nulls according to questions length
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            question: 'What is the capital of France?',
            type: 'radio',
            options: ['Paris', 'Berlin', 'London', 'Rome'],
            answer: 'Paris',
        },
        {
            question: 'Which planets are considered gas giants? (Select all that apply)',
            type: 'checkbox',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            answer: ['Jupiter', 'Saturn'],
        },
        {
            question: 'How many continents are there on Earth?',
            type: 'text',
            answer: '7',  // Answer as a string to simplify comparison
        },
        
    ];

    const handleAnswerSelection = (questionIndex, selectedAnswer) => {
        if (questions[questionIndex].type === 'checkbox') {
            // For checkboxes, toggle the selected answer in the array
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
            // For radio buttons and others, simply set the selected answer
            const updatedAnswers = [...answers];
            updatedAnswers[questionIndex] = selectedAnswer;
            setAnswers(updatedAnswers);
        }
    };

    const isAnswerCorrect = (userAnswer, correctAnswer) => {
        if (Array.isArray(correctAnswer)) {
            // Compare arrays (for checkboxes), order doesn't matter
            return JSON.stringify(userAnswer.sort()) === JSON.stringify(correctAnswer.sort());
        }
        // Simple comparison for other types (radio, text)
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

    // Render input fields for questions based on their type
    const renderQuestionInputs = (question) => {
        if (question.type === 'text') {
            return (
                <input
                    type="text"
                    value={answers[currentQuestion] || ''}
                    onChange={(e) => handleAnswerSelection(currentQuestion, e.target.value)}
                />
            );
        } else {
            return question.options.map((option, index) => (
                <li key={index}>
                    <input
                        type={question.type === 'checkbox' ? 'checkbox' : 'radio'}
                        name={`question${currentQuestion}`}
                        checked={
                            question.type === 'checkbox'
                                ? answers[currentQuestion]?.includes(option) || false
                                : answers[currentQuestion] === option
                        }
                        value={option}
                        onChange={() => handleAnswerSelection(currentQuestion, option)}
                    />
                    {option}
                </li>
            ));
        }
    };
    

    return (
        <div className='quiz'>
            {showScore ? (
                <div>
                    <h3>Điểm số: {score}</h3>
                </div>
            ) : (
                <div>
                    <h4>Câu hỏi {currentQuestion + 1}</h4>
                    <h5>{questions[currentQuestion].question}</h5>
                    <ul>{renderQuestionInputs(questions[currentQuestion])}</ul>
                    <button className='btn btn-info' onClick={handleNextQuestion}>Tiếp theo</button>
                </div>
            )}
        </div>
    );
};

export default Quiz;

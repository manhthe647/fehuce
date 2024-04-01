import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postUserExam } from '../../apis/apiUserExam';

const Quiz = ({ selectName, data }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState(Array(data.length).fill(null));
    const [showScore, setShowScore] = useState(false);
    const [prevName, setPrevName] = useState(selectName);

    const [maSinhVien, setMaSinhVien] = useState('');
    const [btvnName, setBtvnName] = useState('');
    const [answerList, setAnswerList] = useState([])
    const [countTime, setCountTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        const storedMsv = localStorage.getItem("msv") || "";
        setMaSinhVien(storedMsv);
    }, []);

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


    const handleSubmit = async () => {
        let newScore = 0;
        let fullAnswerList = []; // Lưu trữ toàn bộ câu trả lời và thông tin câu hỏi

        questions.forEach((question, index) => {
            const userAnswer = answers[index];
            const isCorrect = isAnswerCorrect(userAnswer, question.answer);

            if (isCorrect) {
                newScore += 1;
            }

            // Lưu câu hỏi, câu trả lời của người dùng, và đáp án đúng vào một mảng
            fullAnswerList.push({
                question: question.question,
                userAnswer: userAnswer,
                correctAnswer: question.answer,
                isCorrect: isCorrect,
            });
        });

        setScore(newScore);
        setShowScore(true);
        setIsRunning(false);

        // Chuẩn bị dữ liệu để gửi

        const currentDate = new Date();
        currentDate.setUTCHours(currentDate.getUTCHours() + 7);

        const formattedDateTime = currentDate.toISOString();
        const submissionData = {
            id: 0,
            maSinhVien: maSinhVien ?? "",
            examName: selectName ?? "Chưa có tên",
            answerList: JSON.stringify(fullAnswerList), // Gửi toàn bộ thông tin câu trả lời
            totalScore: newScore.toString(),
            usageTime: formattedTime ?? "",
            createAt: formattedDateTime??"",
        };

        // Gửi dữ liệu câu trả lời
        try {
            console.log(submissionData); // Xem trước dữ liệu gửi
            const response = await postUserExam(submissionData);
            toast.success('Kết quả bài làm đã được lưu lại!!');
        } catch (error) {
            console.error("Submission error:", error);
            toast.error('Hết tiền thuê server nên kq sẽ k lưu lại đâu, huhu !! ');
        }
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
                    <ToastContainer />
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
                            <h6>Câu {index + 1}. {question.question}</h6>
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

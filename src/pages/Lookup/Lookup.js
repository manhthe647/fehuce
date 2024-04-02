import React, { useState, useEffect } from "react";
import { getUser } from "../../apis/apiUser";
import { getUserPractice } from "../../apis/apiUserPractice";
import { getUserExam } from "../../apis/apiUserExam";

const Lookup = () => {
  // const [user, setUser] = useState("");
  // const [currentMsv, setCurrentMsv] = useState("");

  // const [examData, setExamData] = useState([])
  // const [homeworkData, setHomeworkData] = useState([]);
  // const [answerList, setAnswerList] = useState([])

  // useEffect(() => {
  //   const storedMsv = localStorage.getItem("msv") || "";
  //   setCurrentMsv(storedMsv);
  // }, []);

  // useEffect(() => {
  //   if (currentMsv !== "") {
  //     getUser(currentMsv)
  //       .then((res) => {
  //         if (res && res.length > 0) {
  //           setUser(res[0].name);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Failed to fetch data:", error);
  //       });
  //   }
  // }, [currentMsv]);

  // const handleGetHomework = (e) => {
  //   e.preventDefault();
  //   if (currentMsv !== "") {
  //     getUserPractice(currentMsv)
  //       .then((res) => {
  //         if (res && res.length > 0) {
  //           setHomeworkData(res);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Failed to fetch data:", error);
  //       });
  //   }
  // }

  // const handleGetExam = (e) => {
  //   e.preventDefault();
  //   if (currentMsv !== "") {
  //     getUserExam(currentMsv)
  //       .then((res) => {
  //         if (res && res.length > 0) {
  //           setExamData(res);
  //           const parsedAnswerList = JSON.parse(res[0].answerList) ?? "";
  //           setAnswerList(parsedAnswerList);
  //           console.log(res);
  //           console.log(parsedAnswerList);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Failed to fetch data:", error);
  //       });
  //   }
  // }

  // const handleChangeMsv = () => {
  //   localStorage.setItem("msv", "");
  //   setCurrentMsv("");
  //   window.location.reload();
  // }

  return (
    <React.Fragment>
      <p>Nothing</p>
      {/* <div className="p-2">
        {user !== "" ? (
          <div>
            <div>
              <p className="m-1">Xin chào, {user}</p>
              <button className="btn btn-primary m-1" onClick={handleGetHomework}>Xem bài đã nộp</button>
              <button className="btn btn-success m-1" onClick={handleGetExam}>
                Xem bài kiểm tra đã làm
              </button>
            </div>
            <hr></hr>
            <div>
              <h5>Bài làm đã nộp</h5>
              {homeworkData.length > 0 ? (
                homeworkData.map((item) => (
                  <div key={item.id}>
                    <p className="bg-warning">===START===</p>
                    <p>Mã sinh viên: {item.maSinhVien}</p>
                    <p>Tên bài tập: {item.practiceName}</p>
                    <p>
                      <strong>Nội dung 1:</strong> {item.content1.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                    <p>
                      <strong>Nội dung 2:</strong> {item.content2.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                    <p>
                      <strong>Nội dung 3:</strong> {item.content3.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                    <p className="bg-warning">===END===</p>
                    <hr />
                  </div>
                ))
              ) : ""}
            </div>
            <p className="bg-info py-2"></p>
            <div>
              <h5>Bài kiểm tra đã làm</h5>
              {examData.length > 0 ? (
                examData.map((item) => (
                  <div key={item.id}>
                    <p className="bg-warning">===START===</p>
                    <p><strong>Mã sinh viên: </strong>{item.maSinhVien}</p>
                    <p><strong>Tên bài kiểm tra:</strong> {item.examName}</p>
                    {answerList.map((answerItem, index) => (
                      <div key={index}>
                        <p>
                          <strong>Câu hỏi {index+1 }:</strong> {answerItem.question}
                        </p>
                        <p>
                          <strong>Đáp án của bạn:</strong> {answerItem.userAnswer}
                        </p>
                        <p>
                          <strong>Đáp án đúng:</strong> {answerItem.correctAnswer}
                        </p>
                        <hr />
                      </div>
                    ))}
                    <p>
                      <strong>Thời gian sử dụng:</strong> {item.usageTime}
                    </p>
                    <p>
                      <strong>Ngày tạo:</strong> {item.createAt}
                    </p>
                    <p className="bg-warning">===END===</p>
                    <hr />
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <p>Không tìm thấy kết quả, thử reset và nhập lại mã sinh viên</p>
            <p> <button className="btn btn-primary" type="submit" onClick={handleChangeMsv}>RESET</button></p>
            <hr></hr>

            <p>
              <i>
                Nếu không được, hãy ib qua fb để nhận
                hỗ trợ 😘😘😘
              </i>
            </p>

          </div>
        )}
      </div> */}
    </React.Fragment>
  );
};

export default Lookup;
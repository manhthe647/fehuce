import React, { useState, useEffect } from "react";
import Quiz from "../Exam/Quiz";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { data } from './questions';
import { getUser } from "../../apis/apiUser";

const Exam = () => {

    document.title = "Trắc nghiệm - FeHuce"

    const [selectName, setSelectName] = useState("Đề 1");
    const [examData, setExamData] = useState(data["de1"])
    const [startExam, setStartExam] = useState(false);

    const [user, setUser] = useState("");
    const [currentMsv, setCurrentMsv] = useState("");
  
    useEffect(() => {
      const storedMsv = localStorage.getItem("msv") || "";
      setCurrentMsv(storedMsv);
    }, []);

    useEffect(() => {
        if (currentMsv !== "") {
          getUser(currentMsv)
            .then((res) => {
              if (res && res.length > 0) {
                setUser(res[0].name);
              }
            })
            .catch((error) => {
              console.error("Failed to fetch data:", error);
            });
        }
      }, [currentMsv]);

    const handleMenuClick = (item) => {
        setSelectName(item.name);
        setExamData(data[item.slug])
        setStartExam(false);
    }

    const handleStartExam = () => {
        setStartExam(true);
    }

    const examList = [
        {
            name: "Đề 1",
            slug: "de1"
        },
        {
            name: "Đề 2",
            slug: "de2"
        }
    ];

    return (
        <React.Fragment>
            <div className="row p-0 m-0">
                <div className="col-md-3 p-0">
                    <div className="pe-2 mb-4">
                        <Sidebar backgroundColor="#BCD0BD" width="80%" 
                        style={{ minWidth: '150px' }} 
                        >
                            <Menu>
                                {examList.map((item, key) => (
                                    <MenuItem key={key} onClick={() => handleMenuClick(item)}>{item.name}</MenuItem>

                                ))}
                            </Menu>
                        </Sidebar>
                    </div>

                </div>
                <div className="col-md-9 ps-4">
                    {startExam ?   <Quiz selectName={selectName} data={examData} /> : 
                    (<p>
                        <h5>{selectName}</h5>
                        <h5>Tên thí sinh: {user == "" ? "Đạo hữu vô danh " : user }</h5>
                        <p><i>Ghi chú: hoàn thành hết các câu mới được nộp bài và nhận điểm. <br></br> Thành viên đã đăng ký sử dụng msv để xem lại kết quả </i></p>
                        <button onClick={handleStartExam} className="btn btn-primary">Bắt đầu làm</button>
                    </p>)}
                  
                </div>
            </div>
        </React.Fragment>
    );
}

export default Exam;

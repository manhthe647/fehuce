import React, { useState, useEffect } from "react";
import { getUser } from "../../apis/apiUser";

const Lookup = () => {
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

  const handleChangeMsv = () => {
    localStorage.setItem("msv", "");
    setCurrentMsv("");
    window.location.reload();
  }

  return (
    <React.Fragment>
      <div className="p-2">
        {user !== "" ? (
          <div>
            <p className="m-1">Xin chào, {user}</p>
            <button className="btn btn-primary m-1">Xem bài đã nộp</button>
            <button className="btn btn-success m-1">
              Xem bài kiểm tra đã làm
            </button>
          </div>
        ) : (
          <div>
            <p>Không tìm thấy kết quả, thử reset và nhập lại mã sinh viên</p>
            <p> <button className="btn btn-primary" onClick={handleChangeMsv}>RESET</button></p>
            <hr></hr>

            <p>
              <i>
                Nếu không được, hãy ib qua fb để nhận
                hỗ trợ 😘😘😘
              </i>
            </p>

          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Lookup;
import React, { useEffect, useState } from "react";
import {
    Modal, ModalBody, Label, Input,
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postUserPractice } from "../apis/apiUserPractice";


const HomeworkUpload = ({ modalState, toggleModal, homeworkName, ctent1, ctent2, ctent3 }) => {

    const [maSinhVien, setMaSinhVien] = useState('');
    const [btvnName, setBtvnName] = useState('');
    const [content1, setContent1] = useState('');
    const [content2, setContent2] = useState('');
    const [content3, setContent3] = useState('');

    useEffect(() => {
        const storedMsv = localStorage.getItem("msv") || "";
        setMaSinhVien(storedMsv);
    }, []);

    const handlePostUserPractice = async () => {
        var data = {
            maSinhVien: maSinhVien ?? "",
            practiceName: homeworkName ?? "Chưa có tên",
            content1: content1 ?? "",
            content2: content2 ?? "",
            content3: content3 ?? ""
        }
        var response = await postUserPractice(data)
        response ? toast.success('Gửi dữ liệu thành công!') : toast.error('Có lỗi xra rồi, 1 là do msv, 2 là hết tiền thuê server :(');
        toggleModal()
    }

    return (
        <div>

            <Modal isOpen={modalState} toggle={() => toggleModal()} centered>
                <ModalBody className="modal-body p-5">
                    <div className="text-center mb-4">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            Nộp bài về nhà - {homeworkName}
                        </h5>
                    </div>
                    <div className="position-absolute end-0 top-0 p-3">
                        <button
                            type="button"
                            onClick={() => toggleModal()}
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="mb-3">
                        <Label
                            for="messageControlTextarea"
                            className="form-label"
                        >
                            HTML CODE
                        </Label>
                        <textarea
                            className="form-control"
                            id="messageControlTextarea"
                            rows="4"
                            placeholder="Dán đoạn code HTML vào đây"
                            value={content1}
                            onChange={(e) => setContent1(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <Label
                            for="messageControlTextarea"
                            className="form-label"
                        >
                            CSS CODE
                        </Label>
                        <textarea
                            className="form-control"
                            id="messageControlTextarea"
                            rows="4"
                            placeholder="Dán đoạn code CSS vào đây"
                            value={content2}
                            onChange={(e) => setContent2(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" onClick={() => handlePostUserPractice()}>
                        Nộp bài
                    </button>
                </ModalBody>
            </Modal>
            <ToastContainer />
        </div>
    );
}

export default HomeworkUpload;
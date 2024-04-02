import React, { useEffect, useState } from 'react'
import PepeImg from "../assets/images/pepe.jpg"
import BubbleImg from "../assets/images/bubble-chat.jpg"
import { Icon } from '@iconify/react';
import {
    Modal, ModalBody, Label, Input,
} from "reactstrap";

const HeaderLayout = () => {

    // const [modal, setModal] = useState(true)
    // const [msv, setMsv] = useState('');

    // var getMsv = localStorage.getItem('msv') ? true : null

    // useEffect(()=>{
    //     if(getMsv){
    //        setModal(false)
    //     }
    // },[])

    // const handleClick = () => {
    //     localStorage.setItem('msv', msv);
    //     setModal(!modal)
    //     if (window.location.pathname === '/lookup') {
    //         window.location.reload();
    //     }
    // }

    // const toggleModal = () => {
    //     setModal(!modal)
    // }

    return (
        <React.Fragment>
            <div className='header'>
                <div className='left-content'>
                    <img src={PepeImg} className='img-logo img-fluid' />
                    <img src={BubbleImg} className='img-logo img-fluid' />
                </div>
                <div className='navigate'>
                    <a href='/'>TRANG CHỦ</a>
                    <a href='/exam'>KIỂM TRA</a>
                    {/* <a href='/lookup'>TRA CỨU</a> */}

                </div>
                <div className='right-content'>
                    <p className='pt-3 pe-2'>Contact:</p>
                    <a href='https://www.facebook.com/tmt1412' target='_blank'><Icon icon="mdi:facebook" style={{ color: '#0866FF', fontSize: '24px' }} /></a>
                </div>

            </div>
            <div style={{ zIndex: '999' }}>

                {/* <Modal isOpen={modal} toggle={toggleModal} centered>
                    <ModalBody className="modal-body p-5">
                        <div className="text-center mb-4">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Mã sinh viên của bạn
                            </h5>
                        </div>
                        <div className="position-absolute end-0 top-0 p-3">
                            <button
                                type="button"
                                onClick={toggleModal}
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="nameControlInput"
                                placeholder="Nhập mã"
                                value={msv}
                                onChange={(e) => setMsv(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={() => handleClick()}>
                            Save
                        </button>
                    </ModalBody>
                </Modal> */}
            </div>
        </React.Fragment>
    );

}

export default HeaderLayout;
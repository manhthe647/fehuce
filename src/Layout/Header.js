import React, {useEffect} from 'react'
import PepeImg from "../assets/images/pepe.jpg"
import BubbleImg from "../assets/images/bubble-chat.jpg"
import { Icon } from '@iconify/react';

const HeaderLayout = () => {

    return (
        <React.Fragment>
            <div className='header'>
                <div className='left-content'>
                    <img src={PepeImg} className='img-logo img-fluid' />
                    <img src={BubbleImg} className='img-logo img-fluid' />
                </div>
                <div className='navigate'>
                    <a href='/'>LÝ THUYẾT</a>
                    <a href='/practice'>BÀI TẬP</a>
                    <a href='/compiler'>CODE EDITOR</a>

                </div>
                <div className='right-content'>
                    <p className='pt-3 pe-2'>Contact:</p>
                    <a href='https://www.facebook.com/tmt1412' target='_blank'><Icon icon="mdi:facebook" style={{ color: '#0866FF', fontSize: '24px' }} /></a>
                </div>
               
            </div>
        </React.Fragment>
    );

}

export default HeaderLayout;
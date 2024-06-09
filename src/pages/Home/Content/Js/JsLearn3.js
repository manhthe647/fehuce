import Img1 from '../../../../assets/images/js/js31.png'
import Img2 from '../../../../assets/images/js/js32.png'
import Img3 from '../../../../assets/images/js/js33.png'

const JsLearn3 = () => {
    return (
        <div>
            <h3>Video bị oánh nhạc bản quyền nên lỗi rồi :))</h3>
            <hr />
            <div>
            <div>
                <img
                    src={Img1}
                    alt="Image 1"
                    loading="lazy"
                    style={{ width: '100%', objectFit: 'cover' }}
                />
            </div>
            <div>
                <img
                    src={Img2}
                    alt="Image 2"
                    loading="lazy"
                    style={{ width: '100%', objectFit: 'cover' }}
                />
            </div>
            <div>
                <img
                    src={Img3}
                    alt="Image 3"
                    loading="lazy"
                    style={{ width: '100%', objectFit: 'cover' }}
                />
            </div>

            </div>
        </div>
    );
};


export default JsLearn3;
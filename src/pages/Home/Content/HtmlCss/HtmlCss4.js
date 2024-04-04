
import LuyenTap5Img from "../../../../assets/images/htmlcss/luyentap5.png"
import LuyenTap6Img from "../../../../assets/images/htmlcss/luyentap6.png"


const HtmlCss4 = () => {
 
    return (
        <div>
            <div>
                <h6>Bài 1</h6>
            <img src={LuyenTap5Img} width="100%" height="70%" />
             <div>
                Yêu cầu
                <ul>
                    <li>Sử dụng reset css</li>
                    <li>Tạo màn hình có độ cao 2500px, sau đó sử dụng postion sao cho khi lướt web, thanh điều hướng cố định trên màn hình</li>
                </ul>
             </div>
            </div>
            <hr/>
            <div>
                <h6>Bài 2</h6>
                <div style={{marginBottom: '12px'}}>
                    <i>Chú thích</i>
                    <br/>
                    <i>
                        - Sử dụng thẻ text area cho Message
                    </i>
                    <br/>
                    <i> - Ở góc phải dưới của thẻ, người dùng có thể thay đổi kích thước cho Message, tôi muốn chiều rộng là cố định và không cho người dùng thay đổi</i>
                </div>
            <img src={LuyenTap6Img} width="100%" height="70%" />

            </div>
        </div>
    )
}

export default HtmlCss4
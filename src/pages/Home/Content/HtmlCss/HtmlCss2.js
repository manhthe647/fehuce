import { useState } from "react";
import LuyenTap1Img from "../../../../assets/images/htmlcss/luyentap1.png"
import LuyenTap2Img from "../../../../assets/images/htmlcss/luyentap2.png"
import LuyenTap3Img from "../../../../assets/images/htmlcss/luyentap3.png"
import LuyenTap4Img from "../../../../assets/images/htmlcss/luyentap4.png"

import HomeworkUpload from "../../../../component/HomeworkUpload";


const HtmlCss2 = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }

    return (
        <div>
            <div>
                <button className="btn btn-primary" onClick={() => toggle()}>Nộp bài</button>
                <p className="mt-1"><i>Chỉ dành cho thành viên ( 2 bài nộp 2 lần )</i></p>
                <HomeworkUpload modalState={modal} toggleModal={() => toggle()} homeworkName="Luyện tập 1" />
            </div>
            <hr></hr>
            <div>
                <p>
                    Công cụ đo đạc phần tử:{" "}
                    <a href="https://chromewebstore.google.com/detail/page-ruler/jcbmcnpepaddcedmjdcmhbekjhbfnlff?hl=vi"
                        target="_blank">
                        Page ruler
                    </a>
                </p>
                <p>Công cụ lấy màu phần tử:
                    <a
                        href="https://chromewebstore.google.com/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=vi"
                        target="_blank">
                        ColorPick Eyedropper
                    </a>
                </p>

                <hr></hr>
                <h5>Bài 1. Code theo mẫu dưới đây</h5>
                <div>
                    <img src={LuyenTap1Img} width="100%" height="70%" />
                </div>
            </div>
            <hr></hr>
              
            <div></div>
            <div>
                <h5>Bài 2. Code theo mẫu dưới đây</h5>
                <div>
                    <img src={LuyenTap2Img} width="100%" height="70%" />
                </div>
                <div>
                    <hr></hr>
                <h5>Bài 3 - 4 (luyện thêm nếu muốn )</h5>
               <div>
               <img src={LuyenTap3Img} width="100%" height="70%" />

               </div>
               <hr></hr>
               <div>
               <img src={LuyenTap4Img} width="100%" height="70%" />

               </div>
                </div>
               <hr></hr>
                <p>Công thức chung
                    <br />
                    Cần xác định rõ: đâu là image, đâu là text, đâu là button, để biết khi nào dùng hình, khi nào dùng text để sử dụng CSS cho đúng.
                    <br />

                    Thông thường image sẽ được viết theo kiểu "500x600".
                    <br />


                    Nếu cấu trúc là image thì dùng &lt;img&gt;.
                    <br />

                    Nếu cấu trúc là đoạn văn thì dùng &lt;p&gt;.
                    <br />

                    Nếu cấu trúc là một danh sách thì dùng &lt;ul&gt; &lt;li&gt;.
                    <br />

                    Nếu cấu trúc là một danh sách có thứ tự, thì dùng &lt;ol&gt; &lt;li&gt;.
                    <br />

                    Nếu cấu trúc có chứa thông tin nhập liệu, thì ta dùng các thẻ &lt;form&gt;.
                    <br />

                    Đối với các thành phần lớn gần nhau, theo các nhóm riêng biệt, ta dùng &lt;div&gt; để gom lại sẽ thuận lợi cho việc layout.

                    <br />
                    Với mỗi thành bao ngoài như &lt;section&gt; hay &lt;div&gt; ta cần sử dụng id hoặc class để thuận lợi cho việc layout sau này.</p>
            </div>
            <p><i>Nguồn: HocWebChuan</i></p>

        </div>
    );
}

export default HtmlCss2;
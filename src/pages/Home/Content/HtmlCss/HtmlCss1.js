

const HtmlCss1 = () => {

    return (
        <div className="pb-4">
            <div>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/UCdviOgDpCw?si=9hdTpWowvW91iA16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <hr />
            <div>
                <h5>Nội dung bài học</h5>
                <hr />
                <h6>1. Giới thiệu các thẻ HTML</h6>
                <div>
                    <strong>&lt;title&gt;</strong>: Đây là một thẻ đặc biệt trong phần <strong>&lt;head&gt;</strong> của trang web, dùng để định nghĩa tiêu đề của trang, hiển thị trên thanh tiêu đề của trình duyệt.
                    <br />
                    <strong>&lt;div&gt;</strong>: Thẻ <strong>&lt;div&gt;</strong> tạo ra một khối phân cách hoặc một container trong HTML. Nó thường được sử dụng để nhóm các phần tử lại với nhau và áp dụng các kiểu CSS hoặc xử lý sự kiện cho nhóm phần tử đó.
                    <br />

                    <strong>&lt;h1&gt;</strong> đến <strong>&lt;h6&gt;</strong>: Đây là các thẻ tiêu đề, với <strong>&lt;h1&gt;</strong> là tiêu đề lớn nhất và <strong>&lt;h6&gt;</strong> là tiêu đề nhỏ nhất. Các thẻ này được sử dụng để định dạng và hiển thị các tiêu đề và phần đầu trong trang web.
                    <br />

                    <strong>&lt;br/&gt;</strong>: Thẻ <strong>&lt;br/&gt;</strong> được sử dụng để tạo một dòng mới hoặc xuống dòng trong văn bản. Nó không có thẻ đóng.
                    <br />

                    <strong>&lt;p&gt;</strong>: Thẻ <strong>&lt;p&gt;</strong> được sử dụng để định dạng và hiển thị đoạn văn bản.
                    <br />

                    <strong>&lt;span&gt;</strong>: Thẻ <strong>&lt;span&gt;</strong> được sử dụng để định dạng một phần nhỏ trong văn bản. Nó thường được sử dụng để áp dụng các kiểu CSS hoặc xử lý sự kiện cho một phần tử nhỏ.
                    <br />

                    <strong>&lt;a&gt;</strong>: Thẻ <strong>&lt;a&gt;</strong> được sử dụng để tạo một liên kết (hyperlink) đến một trang web khác. Thuộc tính href xác định địa chỉ URL của liên kết và thuộc tính target xác định cách mở liên kết.
                    <br />

                    <strong>&lt;img&gt;</strong>: Thẻ <strong>&lt;img&gt;</strong> được sử dụng để hiển thị một hình ảnh trên trang web. Thuộc tính src xác định đường dẫn đến hình ảnh.
                    <br />

                    <strong>&lt;ul&gt;</strong>: Thẻ <strong>&lt;ul&gt;</strong> tạo ra một danh sách không có thứ tự (danh sách dạng bullet). Nó chứa các mục danh sách được định dạng bằng thẻ <strong>&lt;li&gt;</strong>.
                    <br />

                    <strong>&lt;li&gt;</strong>: Thẻ <strong>&lt;li&gt;</strong> được sử dụng để định dạng một mục trong danh sách. Nó thường được sử dụng bên trong thẻ <strong>&lt;ul&gt;</strong> hoặc <strong>&lt;ol&gt;</strong>.
                    <br />

                    <strong>&lt;input&gt;</strong>: Thẻ <strong>&lt;input&gt;</strong> tạo ra một trường nhập liệu, cho phép người dùng nhập dữ liệu vào. Có nhiều loại trường nhập liệu như văn bản, số, checkbox, radio buttons, vv.
                    <br />

                    <strong>&lt;button&gt;</strong>: Thẻ <strong>&lt;button&gt;</strong> tạo ra một nút bấm, cho phép người dùng thực hiện một hành động khi được nhấn.
                    <br />

                    {/* css*/}
                    <h6 className="mt-4">2. Giới thiệu về CSS</h6>
                    <div>
                        Thuộc tính CSS:
                        <br />
                        <strong>Cách liên kết CSS: </strong>Để liên kết một tệp CSS bên ngoài, bạn có thể sử dụng thẻ &lt;link&gt; trong phần &lt;head&gt; của trang web. Ví dụ: &lt;link rel="stylesheet" href="styles.css"&gt;. Bạn cũng có thể sử dụng inline styles bằng cách sử dụng thuộc tính style trực tiếp trong các phần tử HTML. Ví dụ: &lt;div style="color: red;"&gt;Content&lt;/div&gt;.
                        <br />
                        <strong>color:</strong> Thuộc tính color được sử dụng để định dạng màu chữ.
                        <br />
                        <strong>font-size:</strong> Thuộc tính font-size được sử dụng để định dạng kích thước chữ.
                        <br />
                        <strong>text-align:</strong> Thuộc tính text-align được sử dụng để căn chỉnh văn bản theo chiều ngang. Các giá trị thông dụng bao gồm left (trái), right (phải), center (giữa) và justify (căn đều hai bên).
                        <br />
                        <strong>background-color:</strong> Thuộc tính background-color được sử dụng để định dạng màu nền của phần tử.
                        <br />
                        <strong>margin:</strong> Thuộc tính margin được sử dụng để định dạng khoảng cách bên ngoài của phần tử. Nó có thể có giá trị đơn (như 10px) hoặc giá trị kết hợp (như 10px 20px để định dạng xung quanh theo chiều ngang và dọc).
                        <br />
                        <strong>padding:</strong> Thuộc tính padding được sử dụng để định dạng khoảng cách bên trong của phần tử. Tương tự như margin, nó có thể có giá trị đơn hoặc kết hợp.
                        <br />
                        <strong>border:</strong> Thuộc tính border được sử dụng để định dạng đường viền của phần tử. Nó bao gồm các thuộc tính như border-width, border-style và border-color để xác định kích thước, kiểu và màu sắc của đường viền. Ví dụ: border: 1px solid black; sẽ tạo một đường viền đen với độ dày 1 pixel.
                    </div>
                </div>

            </div>
        </div>

    );
}

export default HtmlCss1;
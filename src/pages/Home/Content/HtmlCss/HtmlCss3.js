


const HtmlCss3 = () => {

    return (
        <div>
            <div>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/a3Hdbm8ynlk?si=UoRK0ND2Cmvoyazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <hr />
            <div style={{ margin: '24px 0', height: '2500px' }}>
                <div>
                    <strong>Font Awesome</strong>
                    <div>
                        Font Awesome là một bộ biểu tượng và biểu tượng trực quan được sử dụng rộng rãi trong phát triển web. Nó cung cấp một bộ sưu tập các biểu tượng vector dựa trên CSS và font chữ, giúp người phát triển web dễ dàng thêm các biểu tượng và biểu tượng đẹp vào trang web của họ.
                        <br />

                        Font Awesome bao gồm hàng trăm biểu tượng và biểu tượng khác nhau, bao gồm biểu tượng xã hội (Facebook, Twitter, Instagram...), biểu tượng hình học (hình tròn, hình vuông...), biểu tượng định dạng (mũi tên, sao, trái tim...), biểu tượng đối tượng (xe hơi, điện thoại di động, máy tính...), và nhiều hơn nữa.
                        <br />

                        Để sử dụng Font Awesome, bạn cần thêm thư viện Font Awesome vào trang web của mình, thông qua một tệp CSS hoặc CDN. Sau đó, bạn có thể sử dụng các lớp CSS cung cấp bởi Font Awesome để thêm biểu tượng vào các phần tử HTML. Ví dụ:
                    </div>
                    <div>
                        Đường dẫn lấy link cdn: <a href="https://cdnjs.com/libraries/font-awesome" target="_blank">https://cdnjs.com/libraries/font-awesome </a> 
                        <br/>
                        Đường dẫn đến web lấy icon: <a  href="https://fontawesome.com/search" target="_blank">https://fontawesome.com/search</a>
                    </div>
                </div>
                <hr/>
                <div>
                    <strong>float: </strong>

                    Thuộc tính float trong CSS được sử dụng để xác định cách một phần tử được đặt bên trong phần tử cha.
                    Giá trị của float có thể là left, right hoặc none. Khi thiết lập float: left hoặc float: right, phần tử sẽ được đẩy sang bên trái hoặc bên phải và các phần tử khác sẽ lấp đầy không gian trống.
                    Khi sử dụng float, phần tử sẽ trở thành phần tử thoát khỏi luồng bình thường của tài liệu, và các phần tử khác có thể đặt xung quanh nó.
                </div>
                <hr />
                <div>
                    <strong>select option: </strong>
                    select là một phần tử HTML dùng để tạo một danh sách thả xuống.
                    option là một phần tử HTML được sử dụng bên trong select để định nghĩa một lựa chọn trong danh sách.
                    Sử dụng thuộc tính selected trên một phần tử option để xác định lựa chọn mặc định ban đầu.
                    <br />
                    <select>
                        <option>
                            Việt Nam
                        </option>
                        <option>
                            Lào
                        </option>
                        <option>
                            Campuchia
                        </option>
                    </select>
                </div>
                <hr />
                <div>
                    <strong>display: flex </strong>
                    <br />
                    display: flex là một giá trị của thuộc tính CSS display được sử dụng để tạo một container linh hoạt (flex container) để xếp các phần tử con bên trong nó.
                    Với display: flex, các phần tử con sẽ tự động căn chỉnh và thay đổi kích thước để lấp đầy không gian có sẵn trong container.
                    Các thuộc tính khác như justify-content, align-items, và flex-direction có thể được sử dụng để kiểm soát cách các phần tử con được sắp xếp và căn chỉnh.
                    <br />
                    <h6> Đoạn code căn giữa phần tử</h6>
                    <div style={{ backgroundColor: "RGBA(3,211,211, 0.3)", padding: '8px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        display: flex;
                        <br />
                        justify-content: center;
                        <br />

                        align-item: center;
                        <br />

                        flex-direction: column;
                    </div>
                </div>
                <hr />
                <div style={{ position: 'sticky', top: '20px', backgroundColor: 'rgba(238, 130, 238, 0.7)' }}>
                    position: 'sticky', top: '20px'
                </div>
                <i>Kéo màn hình xuống </i>
                <div>
                    <strong>position: </strong>

                    <br />
                    Thuộc tính position trong CSS được sử dụng để xác định cách một phần tử được định vị trong tài liệu.
                    <br />
                    Giá trị của position có thể là static, relative, absolute, fixed hoặc sticky.
                    <br />

                    position: static là giá trị mặc định, phần tử sẽ được định vị theo luồng bình thường của tài liệu.
                    <br />

                    position: relative di chuyển phần tử từ vị trí ban đầu và vẫn chiếm không gian trong luồng bình thường.
                    <br />

                    position: absolute định vị phần tử dựa trên phần tử cha gần nhất có thuộc tính position là relative, absolute hoặc fixed.
                    <br />

                    position: fixed định vị phần tử dựa trên cửa sổ trình duyệt và sẽ không di chuyển khi trang cuộn.
                    <br />

                    position: sticky giống như position: relative nhưng khi cuộn trang đến một ngưỡng đã xác định, phần tử sẽ "dính" (sticky) và duy trì vị trí.
                </div>
                <div style={{ position: 'fixed', right: '20px', bottom: '20px', backgroundColor: 'rgba(238, 130, 238, 0.7)' }}>
                    position: 'fixed', right: '20px', bottom: '20px'
                </div>
                <div style={{ position: 'absolute', left: '80px', backgroundColor: 'rgba(238, 130, 238, 0.7)' }}>
                    position: 'absolute', left: '80px'
                </div>
            </div>
        </div>
    );
}

export default HtmlCss3;
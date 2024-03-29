import React from "react";


const Content = () => {

  return (
    <React.Fragment>
      <div className="frame w-100">
        <iframe width="100%" height="auto" style={{ maxWidth: '720px' }} src="https://www.youtube.com/embed/UNbtaoGY7L8?si=KZv9A0mJMpeIvTLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <hr></hr>
      <div>
        Note
      </div>

    </React.Fragment>
  );
}

export default Content;
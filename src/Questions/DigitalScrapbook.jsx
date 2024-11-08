import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const DigitalScrapbook = () => {
    const flipBook = React.useRef(null);
  return (
    <div className="scrapbook">
      <HTMLFlipBook width={300} height={500} ref={flipBook}>
        <div className="page">Page 1</div>
        <div className="page">Page 2</div>
        <div className="page">Page 3</div>
        {/* More pages */}
      </HTMLFlipBook>
      <button onClick={() => flipBook.current.pageFlip().flipPrev()}>Previous</button>
      <button onClick={() => flipBook.current.pageFlip().flipNext()}>Next</button>
    </div>
  );
};

export default DigitalScrapbook;

import React from 'react';
import QRCODE from "../assets/QRCode.png";
import "../Quiz.css";
 
const QRCode = () => {

  return (
    <div className='QRCODE'>
      <h2 className='h2forqrcode'> Scan the QR code for a little surpise</h2>
      <img src={QRCODE} alt="QR Code" className="qr-code-img" />
    </div>
  );
};

export default QRCode;

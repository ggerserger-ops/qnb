import React from 'react';
import './App.css';

function Footer() {
  return (
    <div className="footer">
      <span className="master-footer">Her hakkı QNB Bank A.Ş.'ye aittir. © 2025</span>
      <ul className="foot-links">
        <li>
          <a href="/" className="linkbutton" style={{ outline: 'none' }}>
            English
          </a>
        </li>
        <li>
          <a
            href="https://www.qnb.com.tr/724-bankacilik/internet-subesi#internet-sube"
            target="_blank"
            rel="noreferrer noopener"
            className="linkbutton"
            style={{ outline: 'none' }}
          >
            Yapabileceğiniz İşlemler
          </a>
        </li>
        <li>
          <a
            href="https://www.qnb.com.tr/724-bankacilik/internet-subesi#sss"
            target="_blank"
            rel="noreferrer noopener"
            className="linkbutton"
            style={{ outline: 'none' }}
          >
            Sıkça Sorulan Sorular
          </a>
        </li>
        <li>
          <a
            href="https://www.qnb.com.tr/sikayetim-var/default.aspx?FBAS_BY/"
            target="_blank"
            rel="noreferrer noopener"
            className="linkbutton"
            style={{ outline: 'none' }}
          >
            Bize Ulaşın
          </a>
        </li>
      </ul>
      <div className="clr"></div>
    </div>
  );
}

export default Footer;

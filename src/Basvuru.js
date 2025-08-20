import React, { useEffect } from "react";
import "./App.css"; // veya kendi CSS dosyan varsa ekleyebilirsin

function Basvuru() {
  // 60 saniye sonra otomatik yönlendirme
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://www.qnb.com.tr/";
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrap" style={{ maxWidth: "640px", margin: "40px auto", padding: "0 16px" }}>
      <div className="card" style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/tr/1/11/Qnb-finansbank.png"
          alt="QNB Finansbank"
          style={{ maxWidth: "260px", height: "auto", display: "block", margin: "0 auto 16px auto" }}
        />
        <h1 className="title" style={{ fontSize: "22px", color: "#222", margin: "8px 0" }}>Başvurunuz alındı.</h1>
        <p className="desc" style={{ color: "#444", margin: "0 0 16px 0" }}>
          En kısa sürede müşteri temsilcimiz sizinle iletişime geçecektir.
        </p>
        <div className="btns" style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "12px" }}>
          <a
            className="btn primary"
            href="https://www.qnb.com.tr/"
            style={{
              display: "inline-block",
              padding: "10px 14px",
              border: "1px solid #0a7d2b",
              background: "#0a7d2b",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              minWidth: "180px",
            }}
          >
            Ana Sayfa
          </a>
        </div>
      </div>
    </div>
  );
}

export default Basvuru;

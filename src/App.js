import React from 'react';
import './App.css';
import Header from './Header';
import Bilgi from './Bilgi';
import Footer from './Footer';

import { ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Basvuru from './Basvuru';

// ✅ Header ve Footer'u sadece bazı sayfalarda göstermek için Layout component
function Layout({ children }) {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/basvuru-alindi";

  return (
    <div className="container-lg px-0" style={{ maxWidth: '980px' }}>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Bilgi />
              </Layout>
            }
          />
          <Route
            path="/basvuru-alindi"
            element={
              <Layout>
                <Basvuru />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

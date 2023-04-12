import { Route, Routes } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { CandidateReports } from './components/CandidateReports/CandidateReports';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './components/Main Page/MainPage';


function App() {
  const [mainPage, setMainPage] = useState([]);

  const mainFetch = () => {
    const url = 'http://localhost:3333/api/candidates';
    fetch(url)
      .then(response => response.json())
      .then((data => setMainPage(data)))
  }


  useEffect(() => {
    mainFetch()

  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage mainPage={mainPage} />} />
        <Route path="/candidate/:id" element={<CandidateReports />} />
        <Route path="*" element={<div>ROUTE NOT FOUND</div>} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;

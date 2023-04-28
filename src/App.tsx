import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './Header'
import { Footer } from './Footer'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'

function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;

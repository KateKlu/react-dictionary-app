import React from 'react';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
   const defaultWord = 'dream';
   return (
      <div className="App">
         <div className="container">
            <header className="App-header">
               <h1>Dictionary</h1>
            </header>
            <Dictionary defaultWord={defaultWord} />
            <footer>
               <a
                  href="https://github.com/KateKlu/react-dictionary-app"
                  target="_blank"
                  rel="noreferrer"
               >
                  Open-source code
               </a>{' '}
               by{' '}
               <a
                  href="https://www.linkedin.com/in/katerina-kliuieva/"
                  target="_blank"
                  rel="noreferrer"
               >
                  Katerina Kliuieva
               </a>
            </footer>
         </div>
      </div>
   );
}

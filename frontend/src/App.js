import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import ArchivedPage from './components/ArchivedPage.jsx';
import { Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='archived' element={<ArchivedPage/>}></Route>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='*' element={<HomePage/>}></Route>
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;

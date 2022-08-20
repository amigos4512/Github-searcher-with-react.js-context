import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SearchUserPage } from './pages/SearchUserPage';
import { SearchUserRepoPage } from './pages/SearchUserRepoPage';
import { Header } from './components/header/Header';
import 'normalize.css';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Routes>
          <Route path='/' element={<SearchUserPage />} />
          <Route
            path='/repository/:username'
            element={<SearchUserRepoPage />}
          />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;

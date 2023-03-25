import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Movies, Profile, Actors, MovieInfo, NavBar } from './index';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movies/:id" element={<MovieInfo />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;

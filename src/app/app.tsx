import React from 'react';
import { Navbar } from '@/entities/navbar';
import { AppRoutes } from './routes';

export default function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer>
        <p>&copy; 2021. Not all rights reserved.</p>
      </footer>
    </div>
  );
}

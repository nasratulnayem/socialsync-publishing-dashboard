import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

function filterUniqueMainList(items) {
  if (!Array.isArray(items)) return [];
  return Array.from(new Set(items.filter(Boolean)));
}

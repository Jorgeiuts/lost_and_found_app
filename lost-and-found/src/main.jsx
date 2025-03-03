import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { LostAndFound } from './LostAndFound';
import './styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LostAndFound />
    </BrowserRouter>
  </StrictMode>,
)

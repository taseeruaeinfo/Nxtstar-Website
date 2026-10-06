import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const container = document.getElementById('root');
const app = (
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);

// Prerendered pages already contain their HTML, so attach to it instead of rebuilding it.
if (container.hasChildNodes()) {
    hydrateRoot(container, app);
} else {
    createRoot(container).render(app);
}

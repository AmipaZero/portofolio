import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { Layout } from './page/Layout.tsx'
// import { Header } from './components/Navbar.tsx'
// import { AppFooter } from './components/Footer.tsx'
// import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Header />  */}
    {/* <Layout /> */}
    {/* <AppFooter /> */}
  </StrictMode>,
)

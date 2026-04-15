import { Header } from './components/Navbar.tsx'
import { AppFooter } from "./components/Footer";
// import { Layout } from './page/Layout.tsx';
import AppSection from './page/Section.tsx';
// import{ SpinnerExample } from "./components/SpinnerExample";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-blue-900">
       {/* header */}

      <Header />
      {/* konten utama */}
      <main className="flex-1">
        <div className="p-0">
          < AppSection/>
          {/* < Layout/> */}
          {/* <div className="flex items-center justify-center h-screen">
          <SpinnerExample />
        </div> */}
        </div>
      </main>

      {/* footer */}
      <AppFooter />
    </div>
  );
}
import Footer from './Footer';
import Navigation from './Navigation';
export default function General({ children }) {
  return (
    <div className='min-h-screen bg-[#295f7b] text-white'>
      <Navigation />

      <main className='p-6'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='p-4'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

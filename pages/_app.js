import SiteProvider from '@context/SiteProvider'
import '@assets/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
  );
}

export default MyApp

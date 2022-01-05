import { CarProvider } from '../context/carrinho'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <CarProvider>
      <main>
        <Component {...pageProps} />
      </main>
    </CarProvider>
  )
}

export default MyApp

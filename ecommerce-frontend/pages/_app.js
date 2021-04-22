import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { AuthProvier } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvier>
      <content>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </content>
    </AuthProvier>
  )
}

export default MyApp

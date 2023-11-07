import '@/styles/globals.css'
import { ToggleContextProvider } from '@/utils/helpers'

export default function App({ Component, pageProps }) {
  return(<ToggleContextProvider>
    <Component {...pageProps} />
  </ToggleContextProvider> )
}

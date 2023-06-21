import '../styles/globals.css'
import type { AppProps } from 'next/app'

import WindowView from '../components/layouts/WindowView'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WindowView>
			<Component {...pageProps} />
		</WindowView>
	)
}

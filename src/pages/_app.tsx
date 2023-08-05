import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from 'src/store'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='description'
					content='Side created to manage school grades, check student statistics and inform about news'
				/>
				<meta name='author' content='Tomasz Żuber' />
			</Head>
			<Component {...pageProps} />
		</Provider>
	)
}

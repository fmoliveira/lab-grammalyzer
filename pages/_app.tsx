import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import PageHead from "../components/PageHead"
import "../styles/globals.css"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<PageHead />
			<Component {...pageProps} />
		</QueryClientProvider>
	)
}

export default MyApp

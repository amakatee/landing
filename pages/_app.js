import '../sass/style.scss'
import React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())
  return  <QueryClientProvider client={queryClient}>
  <Hydrate state={pageProps.dehydratedState}>
  <Component {...pageProps} />
  </Hydrate>
    </QueryClientProvider>
}

export default MyApp

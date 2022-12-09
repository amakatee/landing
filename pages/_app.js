import '../sass/style.scss'
import { useState } from 'react';

import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())
    return  <QueryClientProvider client={queryClient} >
          <Component {...pageProps} />
       </QueryClientProvider>
    
  
}

export default MyApp

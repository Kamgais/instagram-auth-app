import  styles from './App.module.scss';
import { routes } from './routes';
import RoutingConfig from './routes/RoutingConfig';
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools';

function App() {
  
  const queryClient = new QueryClient();

  return (
   <>
   <QueryClientProvider client={queryClient}>
   <RoutingConfig routes={routes}/>
   <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
   </QueryClientProvider>
   </>
  )
}

export default App

import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from '../Route.jsx'
import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LanguageManager from './utilities/LanguageManager.js'



export default function App() {
  const queryClient = new QueryClient()
  return (
     <QueryClientProvider client={queryClient}>
      <LanguageManager />
       <ReactQueryDevtools initialIsOpen={false} />
         <RouterProvider router={router} />
     </QueryClientProvider>
        
  )
}

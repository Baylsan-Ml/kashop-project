import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from '../Route.jsx'
import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import { Container } from '@mui/material'



export default function App() {
  const queryClient = new QueryClient()
  return (
     <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />
     </QueryClientProvider>
        
  )
}

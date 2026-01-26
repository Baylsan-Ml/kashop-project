import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from '../Route.jsx'
import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LanguageManager from './utilities/LanguageManager.js'
import { CssBaseline, ThemeProvider } from '@mui/material'
import useThemeStore from './store/useThemeStore.js'
import getTheme from './MainTheme.js'



export default function App() {
  const queryClient = new QueryClient()
  const mode= useThemeStore((state)=>state.mode);
  const theme= getTheme(mode);
  return (
     <QueryClientProvider client={queryClient}>
      <LanguageManager />
       <ReactQueryDevtools initialIsOpen={false} />
       <ThemeProvider theme={theme}>
        <CssBaseline/>
        <RouterProvider router={router} />
       </ThemeProvider> 
     </QueryClientProvider>
        
  )
}

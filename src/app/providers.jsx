import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Inspector } from 'react-dev-inspector'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import { store } from '../store/index.js'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: 1,
    },
  },
})

export const AppProviders = ({ children }) => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Inspector disable={!import.meta.env.DEV}>{children}</Inspector>
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>
)

import { ApolloProvider } from '@apollo/client'
import '@assets/main.scss'
import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app.tsx'
import { apolloClient } from './app/graphql/index.ts'
import { store } from './app/store.ts'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Titillium Web', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)

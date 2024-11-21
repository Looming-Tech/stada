import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ThemeProvider from './theme/ThemeProvider';
import awsconfig from 'src/aws-exports';
import MainRoutes from 'src/content/routes/main.routes';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { Amplify } from 'aws-amplify';
import { CssBaseline } from '@mui/material';
import { Authenticator } from '@aws-amplify/ui-react';
import { AuthProvider } from './contexts/AuthContext';

Amplify.configure(awsconfig);

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="gb">
        <Authenticator.Provider>
          <AuthProvider>
            <CssBaseline />
            <MainRoutes />
          </AuthProvider>
        </Authenticator.Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;

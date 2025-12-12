import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import FontTheme from "./Themes/FontTheme";

createRoot(document.getElementById('root')).render(
    <>
        <ThemeProvider theme={FontTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>

    </>

)

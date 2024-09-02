import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './app.tsx'
import './index.css'
import {createTheme, ThemeProvider} from "@mui/material";
import {store} from "./store/store";
import {Provider} from "react-redux";

const theme = createTheme({})
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
        <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
)

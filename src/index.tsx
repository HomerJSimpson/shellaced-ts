import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';

import './index.css';
import ShellAced from './shellaced';
import reportWebVitals from './reportWebVitals';

const themeOptions: ThemeOptions = {
	palette: {
		primary: {
			main: '#303841',
		},
		secondary: {
			main: '#1C707D',
		},
	},
};

const theme = createTheme(themeOptions);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ShellAced />
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


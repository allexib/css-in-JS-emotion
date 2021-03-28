import logo from './logo.svg';
import './App.css';

import {css} from '@emotion/css';
import {ThemeProvider} from "@emotion/react";
import {Button} from "./components/Button";

const bgColor = '#282c34';

const theme = {
    color: {
        primary: 'white',
        secondary: 'lightblue'
    },
    textColor: {
        primary: 'blue',
        secondary: 'black',
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div
                className={css`
            text-align: center;
            background-color: ${bgColor};
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
            `}
            >
                <img src={logo} className="App-logo" alt="logo"/>
                <Button>Click me</Button>
            </div>
        </ThemeProvider>
    );
}

export default App;

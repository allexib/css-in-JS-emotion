import logo from './logo.svg';
import './App.css';

import {css} from '@emotion/css';

const bgColor = '#282c34';

function App() {
    return (
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
        </div>
    );
}

export default App;

import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let Context = createContext(null)

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Povider value={"Hello World"}>
        <App/>
    </Context.Povider>
);

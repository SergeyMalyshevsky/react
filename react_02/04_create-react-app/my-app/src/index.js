import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ItemsList from './components/ItemsList.jsx';

const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra", 
        "iPhone X", 
        "Google Pixel", 
        "Huawei P9", 
        "Meizu Pro 6", 
        "Asus Zenfone 3"
    ]
};

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
 
ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById('root')
)
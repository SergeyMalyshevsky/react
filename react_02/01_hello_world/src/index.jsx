var ReactDOM = require('react-dom');
var React = require('react');
var ItemsList = require('./components/ItemsList.jsx');
 
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
 
ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("app")
)
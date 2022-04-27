import '../css/component.css';
// import webpacklogo from '../assets/webpack-logo.png'

export const sayHello = (name) => {

    const h1 = document.createElement('h1');
    h1.innerText = `Hello!, ${name}`
    document.body.append(h1);
}
// v1
// const dom = document.createElement('div')
// dom.id = 'app'
// document.querySelector('#root').append(dom)

// const textNode = document.createTextNode('')
// textNode.nodeValue = 'app'
// dom.append(textNode)

// v2 react -> vdom -> js object

// type props children
// const textEl = {
//     type: 'TEXT_ELEMENT',
//     props: {
//         nodeValue: 'app',
//         children: []
//     }
// }

import ReactDOM from "./core/ReactDom.js"
import App from './App.jsx'
ReactDOM.createRoot(document.querySelector('#root')).render(App)
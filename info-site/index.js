// function Navbar() {
//     return <nav>
//         <h1>indie developer</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// }
function MyComponent() {
    return <div>
        <img src="./react-logo.png" width="40px"></img >
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<MyComponent />)
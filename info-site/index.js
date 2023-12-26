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
        <header>
            <nav>
                <img src="./react-logo.png" width="40px"></img >
            </nav>
        </header>
        <h1>Fun facts about React</h1>
        <ol>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>
        <footer>
            <small>© 2023 Lu Xuanqing development. All rights reserved.</small>
        </footer>
    </div>
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<MyComponent />)
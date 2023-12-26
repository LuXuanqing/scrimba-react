function Header() {
    return <header>
        <nav>
            <img src="./react-logo.png" width="40px"></img >
        </nav>
    </header>
}

function Footer() {
    return <footer>
        <small>© 2023 Lu Xuanqing development. All rights reserved.</small>
    </footer>
}

function MainContent() {
    return <div>
        <h1>Fun facts about React</h1>
        <ol>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>
    </div>
}

function Page() {
    return <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Page />)
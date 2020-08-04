const Header = {
    render: async () => {
        const view = `
            <header class="header">
                <div class="prev-btn"></div>
                <img src="../../images/logo-pandemia.png" alt="Pan de Pandemia Logo">
                <div class="user-btn"></div>
            </header>
        `
        return view
    }
}

export default Header;
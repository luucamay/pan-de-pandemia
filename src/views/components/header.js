import { headerStyle } from '../../styles/headerCSS.js'
const Header = {
    render: async () => {
        const view = `
            <header class="header" style="${headerStyle}">
                <div class="prev-btn"></div>
                <img src="../../images/logo-pandemia.png" alt="Pan de Pandemia Logo">
                <div class="user-btn"></div>
            </header>
        `
        return view
    }
}

export default Header;
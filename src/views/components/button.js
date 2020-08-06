const Button = {
    render: async (text) => {
        const view = `
            <button>${text}</button>
        `
        return view
    }
}

export default Button;
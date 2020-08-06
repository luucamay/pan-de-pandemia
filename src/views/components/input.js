const Input = {
    render: async (inputName, type) => {
        const view =  `
            <div class="input">
                <label for="${inputName}">${inputName}</label>
                <input type="${type}" id="${inputName}"></input>
            </div>
        `
        return view
    }
}

export default Input;
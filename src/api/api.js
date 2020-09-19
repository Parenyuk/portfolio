import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://parenyk-portfolio.herokuapp.com/'
    baseURL: 'http://localhost:3020/'
})

export const portfolioAPI = {
    sendMessage(formData) {
        debugger
        // let {email, name, message} = formData
        return instance.post('sendMessage', {
               email: formData.email,
            name: formData.name,
            message: formData.messages
            // formData
        })
    }
}

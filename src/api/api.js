import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://parenyk-portfolio.herokuapp.com/'
    baseURL: 'http://localhost:3020/'
    // baseURL: 'https://limitless-hollows-68015.herokuapp.com/'
})

export const portfolioAPI = {
    sendMessage(formData) {
        return instance.post('sendMessage', {
            email: formData.email,
            name: formData.name,
            message: formData.messages

        })
    }
}

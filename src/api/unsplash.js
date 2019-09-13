import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID e9cb5d5dec29ec06723ac2d7cc4c74408f6cf0fd602d05f54678333805f6e538'
    }
});

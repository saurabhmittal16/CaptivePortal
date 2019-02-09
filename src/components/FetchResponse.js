import axios from 'axios';

const fetchResponse = async message => {
    try {
        const data = {
            message
        };

        const response = await axios.post('http://localhost:8000/chatbot', data);
        return response;        
    } catch (err) {
        console.log(err);
    }
}

export default fetchResponse;
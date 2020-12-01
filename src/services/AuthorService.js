import axios from 'axios';

const LMS_API_BASE_URL = "http://localhost:8080/";

class AuthorService {

    getAuthors(){
        return axios.get(LMS_API_BASE_URL);
    }

    createAuthor(author){
        return axios.post(LMS_API_BASE_URL, author);
    }

    getAuthorById(authorId){
        return axios.get(LMS_API_BASE_URL + '/' + authorId);
    }

    updateAuthor(author, authorId){
        return axios.put(LMS_API_BASE_URL + '/' + authorId, author);
    }

    deleteAuthor(authorId){
        return axios.delete(LMS_API_BASE_URL + '/' + authorId);
    }
}

export default new AuthorService();
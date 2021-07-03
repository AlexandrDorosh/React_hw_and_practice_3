import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

const getUsers = () => {
    return axiosInstance('/users')
}

const getUser = (id) => {
    return axiosInstance('/users/' + id + '/posts')
}

const getPosts = () => {
    return axiosInstance('/posts')
}

const getPost = (id) => {
    return axiosInstance('/posts/' + id)
}

const getComments = () => {
    return axiosInstance('/comments')
}

const getComment = (id) => {
    return axiosInstance('/posts/' + id + '/comments')
}

export {getUsers, getUser, getPost, getPosts, getComment, getComments};

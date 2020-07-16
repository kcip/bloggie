import api from './api-helper';

export const getAllPosts = async () => {
 const resp = await api.get('/posts');
 return resp.data;
};

export const getPost = async (id) => {
 const resp = await api.get(`/posts/${id}`);
 return resp.data;
};

export const postPost = async (postData) => {
 const resp = await api.post(`/posts`, { post: postData });
 console.log(resp)
 return resp.data;
}



export const putPost = async (id, postData) => {
 const resp = await api.put(`/posts/${id}`, { post: postData });
 return resp.data;
}

export const deletePost = async (id) => {
 const resp = await api.delete(`/posts/${id}`);
 return resp;
}
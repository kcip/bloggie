import api from './api-helper'

export const getComments = async (id) => {
 const resp = await api.get(`/posts/${id}/comments`);
 return resp.data
}

export const postComments = async (id) => {
 const resp = await api.post(`/posts/${id}/comments`);
 return resp.data;

}
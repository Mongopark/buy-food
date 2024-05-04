import axios, { AxiosError } from "axios";

const BASEURL = 'http://34.31.63.71:3000/api/v1';

let api = axios.create({
    baseURL: BASEURL,
});

// api.interceptors.response.use(response => response, async (error) => {
//     const originalRequest = error.config;

//     if (error.response && error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
  
//         try {
//             const response = await api.post('/customers/new-access-token', {
//                 refreshToken
//             });
  
//             const newAccessToken = response.data.accessToken;
//             localStorage.setItem('accessToken', newAccessToken);
  
//             originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
  
//             return api(originalRequest);
//         } catch (refreshError) {
//             // Handle token refresh error
//             console.error('Error refreshing token:', refreshError);
//             return Promise.reject(refreshError);
//         }
//     }
// });

export {
    AxiosError
}

export default api;



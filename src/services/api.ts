import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: "https://secure-messaging-app-be.onrender.com",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    toast.error("Request error: " + error.message);
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const errorMessage = error.response.data.error || "An error occurred";
      console.error("API Error:", errorMessage);
      toast.error(errorMessage);
    } else if (axiosError.request) {
      toast.error("No response received from the server");
    } else {
      toast.error("Error: " + error.message);
    }
    return Promise.reject(error);
  }
);

export default API;

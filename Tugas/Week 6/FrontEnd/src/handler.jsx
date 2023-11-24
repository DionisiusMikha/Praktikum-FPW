import { redirect } from "react-router-dom";
import axios from 'axios';

const url_api = `http://localhost:3000/api/data`;

const login = async (data) => {
    try {
        const response = await axios.post(`${url_api}/login`, {
            email: data.email,
            password: data.password
        });
        localStorage.setItem("email", data.email);
        window.location = "/home/stories";
    } catch (error) {
        const message = error.response.data.message;
        const status = parseInt(error.response.status);
        let error_massage;
        switch (message) {
            case "not_found":
                error_massage = {
                    message: "Not Found",
                    status: status
                };
                break;
            case "wrong_password":
                error_massage = {
                    message: "Wrong Password",
                    status: status
                };
                break;
            default:
                error_massage = {
                    message: "An error occurred",
                    status: status
                };
                break;
        }
        return error_massage;
    }
};

const register = async (data) => {
    try {
        const response = await axios.post(`${url_api}/register`, {
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            password: data.password
        });

        alert("Account created");
    } catch (error) {
        const message = error.response.data.message;
        const status = parseInt(error.response.status);

        let error_massage;

        if (message === "already_exist") {
            error_massage = {
                message: "Email already exists",
                status: status
            };
            alert("Email already exists");
        }

        if (message === "confirm_password") {
            error_massage = {
                message: "Confirm password is not the same",
                status: status
            };
            alert("Confirm password is not the same");
        }
    }
};

const getData = async () => {
    try {
        const email = localStorage.getItem("email");
        const response = await axios.get(`${url_api}/get-user`, {
            params: {
                email: email
            }
        })

        return response.data.data;
    } catch (error) {
        throw error;
    }
}

const getStory = async () => {
    try {
        const email = localStorage.getItem("email");
        const response = await axios.get(`${url_api}/get-story`, {
            params: {
                email: email
            }
        })

        return response.data.data;
    } catch (error) {
        throw error;
    }
}

const getStoryID = async (data) => {
    const { params } = data;
    try {
        const email = localStorage.getItem("email");
        const response = await axios.get(`${url_api}/get-story-id`, {
            params: {
                email: email,
                id: params.id
            }
        })
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

const formAction = async (data) => {
    const { params } = data;
    const email = localStorage.getItem("email");
    if (data.request.method == "POST"){
        const formData = await data.request.formData();
        const item = Object.fromEntries(formData);

        try {
            const response = await axios.post(`${url_api}/add-chara`, {
                email: email,
                id: params.id,
                nama: item.nama,
                peran: item.peran,
                umur: item.umur,
                sifat: item.sifat,
                backstory: item.backstory,
            })
        } catch (error) {
            throw error;
        }
    }else if(data.request.method == "PUT"){
        const formData = await data.request.formData();
        const item = Object.fromEntries(formData);
    }

    return redirect(`/home/stories/${params.id}/characters`);
}

const formOverview = async (data) => {
    const { params } = data;
    const email = localStorage.getItem("email");
    if (data.request.method == "PUT") {
        const formData = await data.request.formData();
        const item = Object.fromEntries(formData);
        
        try {
            const response = await axios.put(`${url_api}/update-thumb`, {
                email: email,
                id: params.id,
                thumb: item.thumb
            })    
        } catch (error) {
            throw error;
        }
    } else if (data.request.method == "PATCH") {
        const formData = await data.request.formData();
        const item = Object.fromEntries(formData);

        try {
            const response = await axios.put(`${url_api}/update-judul`, {
                email: email,
                id: params.id,
                judul: item.judul
            })    
        } catch (error) {
            throw error;
        }
    } else if(data.request.method == "DELETE"){
        try {
            const response = await axios.delete(`${url_api}/delete-story`, {
                params: {
                    email: email,
                    id: params.id
                }
            })    
        } catch (error) {
            throw error;
        }
    }

    return redirect(`/home/stories`);
}

const formAddStory = async(data) => {
    const email = localStorage.getItem("email");
    if(data.request.method == "POST"){
        try {
            const response = await axios.post(`${url_api}/add-story`, {
                email: email
            });    
        } catch (error) {
            throw error;
        }
    }

    return redirect(`/home/stories`);
}

export default { 
    login, 
    register, 
    getData, 
    getStory, 
    getStoryID, 
    formAction, 
    formOverview, 
    formAddStory, 
};
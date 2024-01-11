import axios from 'axios';
import { Products } from '../interfaces/Products';

const url = "http://192.168.100.5:3002";

const getProducts = async (): Promise<Products[]> => {
    try {
        const response = await axios.get(`${url}/products`);
        return response.data;
    } catch (ex) {
        return [[]] as Products[];
    }

};
const getProductById = async (id: number): Promise<Products> => {
    try {
        const response = await axios.get(`${url}/products/${id}`);
        return response.data;
    } catch (ex) {
        return [] as Products;
    }
}

const postProduct = async (data: Products) => {
    try {
        const response = await axios.post(`${url}/products`, data);
        return response;
    } catch (ex) {
        return null;
    }
};

const patchProduct = async (id: number, data: Products) => {
    try {
        const response = await axios.patch(`${url}/products/${id}`, data );
        return response;
    } catch (ex) {
        return null;
    }
};
const deleteProduct = async (id: number) => {
    try {
        const response = await axios.delete(`${url}/products/${id}`);
        return response;
    } catch (ex) {
        return null;
    }
};


export {
    getProducts,
    getProductById,
    postProduct,
    patchProduct,
    deleteProduct
};
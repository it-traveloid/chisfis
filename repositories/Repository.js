import axios from 'axios';
// const baseDomain = 'http://russianturism.ru:1337'; // API for products
const baseDomain = '/static'; // API for products
export const basePostUrl = 'http://russianturism.ru:1337'; 
export const baseStoreURL = 'http://russianturism.ru:1337'; 

export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};

import { _url, timeout } from "./url"

export async function getUser(msv) {
    let url = _url.server + _url.apiUsers + msv;
    let header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: header,
        });
        if (response.status === 200) {
            return response.json();
        } 
        else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}
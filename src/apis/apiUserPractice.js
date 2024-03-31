import { _url, timeout } from "./url"

export async function getUserPractice(practiceId) {
    let url = _url.server + _url.apiUserPractice + practiceId;
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
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

export async function postUserPractice(practiceInfo) {
    let url = _url.server + _url.apiUserPractice;
    let header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(practiceInfo)
        });
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}
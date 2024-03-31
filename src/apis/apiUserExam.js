import { _url, timeout } from "./url"

export async function getUserExam(examId) {
    let url = _url.server + _url.apiUserExams + examId;
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

export async function postUserExam(examInfo) {
    let url = _url.server + _url.apiUserExams;
    let header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(examInfo)
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
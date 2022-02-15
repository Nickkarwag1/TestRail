const request = require("supertest");

const BASE_URL = `https://nickkarhoney.testrail.io/`;
const USER = {
    EMAIL: 'nickkarsosi+2@gmail.com',
    PASSWORD : 'HhmMDzUekrUEoryY7mDk',
    USERNAME : "Nick Kar"
}

const app = request(BASE_URL);

export { app, USER, BASE_URL };

const request = require("supertest");

const BASE_URL = `https://nickkarsosi.testrail.io/`;
const USER = {
    EMAIL: 'nickkarsosi@gmail.com',
    PASSWORD : 'vQezA9pT.2x5VefQchBH',
    USERNAME : "Nick Kar"
}

const app = request(BASE_URL);

export { app, USER, BASE_URL };

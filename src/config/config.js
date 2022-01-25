const request = require("supertest");

const BASE_URL = `https://nickkar.testrail.io/`;
const USER = {
    EMAIL: 'nickkarsosi+1@gmail.com',
    PASSWORD : 'ZzyLsLi38fgOY2/YZKt1',
    USERNAME : "Nick Kar"
}

const app = request(BASE_URL);

export { app, USER, BASE_URL };

const request = require("supertest");
const { expect } = require("chai");

const BASE_URL = `https://nickkarsosi.testrail.io/`;

const app = request(BASE_URL);

export { app };

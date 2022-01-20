import {getCompanyName, getProductDescription, getRandomBoolean} from "../utils/faker";

export const project = {
    name: getCompanyName(),
    announcement: getProductDescription(),
    show_announcement: getRandomBoolean(),
};
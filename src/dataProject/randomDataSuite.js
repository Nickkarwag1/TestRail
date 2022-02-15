import {getCompanyName, getProductDescription} from "../utils/faker";

export const suite = {
    name: getCompanyName(),
    description: getProductDescription(),
};
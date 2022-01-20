import faker from "@faker-js/faker/index";

export const getProductDescription = () => faker.commerce.productDescription();
export const getCompanyName = () => faker.company.companyName();
export const getRandomBoolean = () => faker.datatype.boolean();

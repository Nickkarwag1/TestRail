import element from "../utils/element";

export async function logIn({EMAIL, PASSWORD}){
    await element("#name").setValue(EMAIL);
    await element("#password").setValue(PASSWORD);
    await element('#button_primary').clickElement();
}


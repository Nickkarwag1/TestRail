
export async function logIn({EMAIL, PASSWORD}){
    await $("#name").addValue(EMAIL);
    await $("#password").addValue(PASSWORD);
    await $('#button_primary').click();
}


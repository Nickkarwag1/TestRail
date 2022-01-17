import {app} from "../config/config";
import HEADERS from "../constants/headers";
import {TOKEN} from "../constants/components";
import CONTENT_TYPES from "../constants/contentTypes";

function postRequest(url, body){
    const request =   app
        .post(url)
        .set(HEADERS.AUTHORIZATION, TOKEN).set(HEADERS.CONTENT_TYPE, CONTENT_TYPES.APPLICATION_JSON);

    if(body){
      return   request.send(body)
    }

    return request;
}

export {postRequest}

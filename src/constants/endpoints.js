import {app} from "../config/config";

const PREFIX = 'index.php?/';
const API = 'api/';
const VERSION = 'v2/';

const ENDPOINTS = {
    GET: {
        PROJECTS: `${PREFIX}${API}${VERSION}get_projects`,
        BY_EMAIL: `${PREFIX}${API}${VERSION}get_user_by_email&email=nickkarsosi@gmail.com`,
        CASES: `${PREFIX}${API}${VERSION}get_cases/1&suite_id=1`,
        STATUSES: `${PREFIX}${API}${VERSION}get_statuses`,
        SUITES: `${PREFIX}${API}${VERSION}get_suite/1`,
    },
    POST: {
        CREAT: buildFullRoute('add_project'),
        DELETE: `${PREFIX}${API}${VERSION}delete_project/`, // следующий ид = 8
        SECTION: `${PREFIX}${API}${VERSION}add_section/`,
        DELETE_SECTION: `${PREFIX}${API}${VERSION}delete_section/9`, // следующий id = 9
        ADD_CASE: `${PREFIX}${API}${VERSION}add_case/8`, // следующий ид = 8
        // TODO: create function applyParams(url, [{paramName, paramValue}])
        DELETE_CASES: buildFullRoute('delete_cases'),
    },
};

export function applyParams(url, params){
    if(!url){
        return ;
    }
    let fullRoute = url + '/';
    for(let {paramName, paramValue} of params){
        fullRoute += `&${paramName}=${paramValue}`
    }
    return fullRoute;
}


function buildFullRoute(endpoint){
    if(!endpoint){
        return
    }
    return `${PREFIX}${API}${VERSION}${endpoint}`
}



export default ENDPOINTS

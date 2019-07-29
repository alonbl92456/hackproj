import { createTypes, createAsyncTypes, config } from 'redux-create-types';

const asyncActionsBase = [
    "LOAD_RESOURCE"
]

const syncActionsBase = [
    "SET_RESOURCE"
]


config.delimiter = '_';
config.start = 'START';
config.next = 'NEXT';
config.complete = 'SUCCESS';
config.error = 'FAIL';


const actionTypes = createTypes(syncActionsBase.concat( asyncActionsBase.map(curAsyncAction => createAsyncTypes(curAsyncAction)))," ");

//export default actionTypes;
export default {
    LOAD_RESOURCE:"LOAD_RESOURCE"
}

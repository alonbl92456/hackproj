import actionTypes from './actionTypes';

/*
const deleteBook = id => ({
  type: 'DELETE_BOOK',
  request: {
    url: `/books/${id}`,
    method: 'delete'
  },
  meta: { // meta is optional, it will be added to success, error or abort action when defined
    id,
  },
});

*/

export const loadResource = (apiUrl) =>{
    return {
        type:actionTypes.LOAD_RESOURCE,
        request: {
            url: apiUrl,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              }
          },
          meta: { 
              // meta is optional, it will be added to success, error or abort action when defined
              asPromise: true
          }
    }
}

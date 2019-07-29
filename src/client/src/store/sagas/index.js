import { createRequestInstance, watchRequests , requestsCacheMiddleware} from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';
import httpHandler from '../../httpHandler';



export function* rootSaga(axiosInstance) {
    yield createRequestInstance({ driver: createDriver(httpHandler) });
    yield watchRequests();
  }
  



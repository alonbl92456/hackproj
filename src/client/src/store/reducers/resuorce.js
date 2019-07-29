
import { updateObject } from '../../shared/utility';
import actionTypes from '../actions/actionTypes';
import { success, error, abort } from 'redux-saga-requests';
import * as serverAPI from '../../shared/serverAPI';


/*
    {
        apiUrl:{
            loading:?
            data:? 
            date: ?
            error:?
        }
    }

*/

const genrateResource = () => {
    return {
        loading: true,
        data: null,
    }
}


const initialState = {};

serverAPI.SAN_ROUTES.map(curRoute => { initialState[curRoute] = genrateResource()});
serverAPI.NAS_ROUTES.map(curRoute => { initialState[curRoute] = genrateResource()});
serverAPI.BACKUPS_ROUTES.map(curRoute => { initialState[curRoute] = genrateResource()});
serverAPI.HARDWARE_ROUTES.map(curRoute => { initialState[curRoute] = genrateResource()});



initialState[serverAPI.NAS.NETAPP.OPENZIR] = {
    loading: false,
    data: {
        title: "NETAPP",
        Category: "NAS",
        areas: {
            Disks: {
                details: [
                    {
                        detail: "Disk Failed",
                        id: 912
                    },
                    {
                        detail: "Disk Failed",
                        id: 912
                    },
                    {
                        detail: "Disk Failed",
                        id: 912
                    }
                ],
                status: 2
            },
            Devs: {
                details: [
                    {
                        detail: "Port Failed",
                        id: 912
                    },
                    {
                        detail: "Port Failed",
                        id: 912
                    },
                    {
                        detail: "Port Failed",
                        id: 912
                    }
                ],
                status: 2
            },
            Pools: {
                details: [],
                status: 0
            },
            Hardware: {
                details: [],
                status: 0
            },
            Ports: {
                details: [],
                status: 0
            }
        },
        date: new Date().toString(),
        errorCount: 3,
        coverage: {
            total: 8,
            missing: []
        }
    }
}


initialState[serverAPI.SAN.VMAX.OPENZIR] = {
    loading: false,
    data: {
        title: "VMAX",
        Category: "SAN",
        areas: {
            Disks: {
                details: [
                    {
                        detail: "Disk Failed",
                        id: 912
                    },
                    {
                        detail: "Disk Failed",
                        id: 912
                    },
                    {
                        detail: "Disk Failed",
                        id: 912
                    }
                ],
                status: 2
            },
            Devs: {
                details: [
                    {
                        detail: "Port Failed",
                        id: 912
                    },
                    {
                        detail: "Port Failed",
                        id: 912
                    },
                    {
                        detail: "Port Failed",
                        id: 912
                    }
                ],
                status: 2
            },
            Pools: {
                details: [],
                status: 0
            },
            Hardware: {
                details: [],
                status: 0
            },
            Ports: {
                details: [],
                status: 0
            }
        },
        date: new Date().toString(),
        errorCount: 3,
        coverage: {
            total: 8,
            missing: []
        }
    }
}

initialState[serverAPI.SAN.VMAX.CC.DATA] = {
    loading: false,
    data: [
        {
            id: "343",
            env: "SITE A",
            total: 100,
            used: 73,
            left: 0,
            Subscribed: 120,
            "Full%": 73
        },
        {
            id: "233",
            env: "SITE A",
            total: 100,
            used: 73,
            left: 0,
            Subscribed: 120,
            "Full%": 73
        },
        {
            id: "441",
            env: "SITE B",
            total: 100,
            used: 73,
            left: 0,
            Subscribed: 120,
            "Full%": 73
        }
    ]
}

initialState[serverAPI.SAN.VMAX.CC.LOG] = {
    loading: false,
    data: [
        {
            id: "343",
            env: "SITE A",
            total: 100,
            used: 73,
            left: 0,
            Subscribed: 120,
            "Full%": 73
        },
        {
            id: "233",
            env: "SITE A",
            total: 100,
            used: 73,
            left: 0,
            Subscribed: 120,
            "Full%": 73
        },
        {
            id: "441",
            env: "SITE B",
            total: 100,
            used: 73,
            left: 0,
            Subscribed: 120,
            "Full%": 73
        }
    ]
}

initialState[serverAPI.SAN.VNX.CC] = {
    loading: false,
    data: [
        {
            id: "343",
            env: "SITE A",
            total: 100,
            used: 83,
            left: 0,
            Subscribed: 120,
            "Full%": 83
        },
        {
            id: "233",
            env: "SITE A",
            total: 100,
            used: 44,
            left: 0,
            Subscribed: 120,
            "Full%": 44
        },
        {
            id: "441",
            env: "SITE B",
            total: 100,
            used: 44,
            left: 0,
            Subscribed: 120,
            "Full%": 44
        }
    ]
}

initialState[serverAPI.SAN.MDS.CC] = {
    loading: false,
    data: [
        {
            id: "343",
            env: "SITE A",
            total: 100,
            used: 20,
            left: 0,
            Subscribed: 120,
            "Full%": 20
        },
        {
            id: "233",
            env: "SITE A",
            total: 100,
            used: 43,
            left: 0,
            Subscribed: 120,
            "Full%": 43
        },
        {
            id: "441",
            env: "SITE B",
            total: 100,
            used: 99,
            left: 0,
            Subscribed: 120,
            "Full%": 99
        }
    ]
}


initialState[serverAPI.SAN.MDS.OPENZIR] = {
    loading: false,
    data: {
        title: "MDS",
        Category: "SAN",
        areas: {
            Disks: {
                details: [
                    {
                        detail: "Disk Failed",
                        id: 221
                    },
                    {
                        detail: "Disk Failed",
                        id: 212
                    },
                    {
                        detail: "Disk Failed",
                        id: 221
                    }
                ],
                status: 2
            },
            Devs: {
                details: [
                    {
                        detail: "Port Failed",
                        id: 221
                    },
                    {
                        detail: "Port Failed",
                        id: 222
                    },
                    {
                        detail: "Port Failed",
                        id: 212
                    },
                    {
                        detail: "Port Failed",
                        id: 221
                    },
                    {
                        detail: "Port Failed",
                        id: 222
                    },
                    {
                        detail: "Port Failed",
                        id: 212
                    }
                ],
                status: 2
            },
            Pools: {
                details: [],
                status: 0
            },
            Hardware: {
                details: [],
                status: 0
            },
            Ports: {
                details: [],
                status: 0
            }
        },
        date: new Date().toString(),
        errorCount: 5,
        coverage: {
            total: 10,
            missing: []
        }
    }
}

initialState[serverAPI.SAN.VNX.OPENZIR] = {
    loading: true,
    data: {
        title: "VNX",
        Category: "SAN",
        areas: {
            Disks: {
                details: [
                    {
                        detail: "Disk Failed",
                        id: 912
                    },
                    {
                        detail: "Disk Failed",
                        id: 912
                    },
                    {
                        detail: "Disk Failed",
                        id: 912
                    }
                ],
                status: 2
            },
            Devs: {
                details: [
                    {
                        detail: "Port Failed",
                        id: 912
                    },
                    {
                        detail: "Port Failed",
                        id: 912
                    },
                    {
                        detail: "Port Failed",
                        id: 912
                    }
                ],
                status: 2
            },
            Pools: {
                details: [],
                status: 0
            },
            Hardware: {
                details: [],
                status: 0
            },
            Ports: {
                details: [],
                status: 0
            }
        },
        date: new Date().toString(),
        errorCount: 0,
        coverage: {
            total: 8,
            missing: []
        }
    }
}




const funcs = {};

funcs[actionTypes.LOAD_RESOURCE] = (state, action) => {
    let addedResource = {};
    addedResource[action.request.url] = genrateResource();
    return updateObject(state, addedResource);
}

funcs[error(actionTypes.LOAD_RESOURCE)] = (state, action) => {
    let addedResource = {

    };
    addedResource[action.meta.requestAction.request.url] = { ...state[action.meta.requestAction.request.url] };
    addedResource[action.meta.requestAction.request.url].data = null;
    addedResource[action.meta.requestAction.request.url].loading = false;
    addedResource[action.meta.requestAction.request.url].error = action.error;

    return updateObject(state, addedResource);
}

funcs[abort(actionTypes.LOAD_RESOURCE)] = (state, action) => {
    let addedResource = {

    };
    addedResource[action.meta.requestAction.request.url] = { ...state[action.meta.requestAction.request.url] };
    addedResource[action.meta.requestAction.request.url].data = null;
    addedResource[action.meta.requestAction.request.url].loading = false;
    addedResource[action.meta.requestAction.request.url].error = action.error;

    return updateObject(state, addedResource);
}

funcs[success(actionTypes.LOAD_RESOURCE)] = (state, action) => {
    let addedResource = {};
    addedResource[action.meta.requestAction.request.url] = { ...state[action.meta.requestAction.request.url] };
    addedResource[action.meta.requestAction.request.url].loading = false;
    addedResource[action.meta.requestAction.request.url].data = action.data;
    addedResource[action.meta.requestAction.request.url].date = new Date();

    return updateObject(state, addedResource);
}



const reducer = (state = initialState, action) => {
    return funcs[action.type] ? funcs[action.type](state, action) : state;
};

export default reducer;
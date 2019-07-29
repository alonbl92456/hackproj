const VERSION = "/api/v1";
const SAN_BASE = VERSION + "/san";
const NAS_BASE = VERSION + "/nas";
const BACKUPS_BASE = VERSION + "/backups";
const HARDWARE_BASE = VERSION + "/hardware";


// Inits the api object recusivly
function initRoutes(apiBaseUrl, apiObject, apiArray) {
    let objKeys = Object.keys(apiObject);


    // Runs on all of the cur namespace functions
    // and for each checks if there is a lower level in the namespace
    // if there is then does the same for it 
    for (let curObjectPropertyIndex = 0;
        curObjectPropertyIndex < objKeys.length;
        curObjectPropertyIndex++) {

        if (typeof apiObject[objKeys[curObjectPropertyIndex]] === "object") {
            initRoutes(apiBaseUrl + '/' + objKeys[curObjectPropertyIndex].toLocaleLowerCase(), apiObject[objKeys[curObjectPropertyIndex]], apiArray);
        }
        else {
            apiObject[objKeys[curObjectPropertyIndex]] = apiBaseUrl + '/' + objKeys[curObjectPropertyIndex].toLocaleLowerCase();
            apiArray.push(apiBaseUrl + '/' + objKeys[curObjectPropertyIndex].toLocaleLowerCase());
        }
    }
}



export const SAN = {
    VMAX: {
        CC: {
            LOG: '',
            DATA: ''
        },
        OPENZIR: '',
        STATUS: ''
    },
    MDS: {
        CC: '',
        OPENZIR: '',
        STATUS: ''
    },
    VNX: {
        CC: '',
        OPENZIR: '',
        STATUS: ''
    }
}


export const SAN_ROUTES = [];

export const NAS = {
    NETAPP: {
        CC: {
            VOLUME: '',
            AGGRGATE: '',
            SVM: ''
        },
        OPENZIR: '',
        STATUS: ''
    }
}

export const NAS_ROUTES = [];


export const BACKUPS = {
    COMMVAULT: {
        CC:{
            LISENCE:'',
            LIBRARY:''
        },
        OPENZIR:'',
        STATUS:''
    },
    ESERIES:{
        CC:{
            POOL:''
        },
        OPENZIR:'',
        STATUS:''
    }
}

export const BACKUPS_ROUTES = [];


export const HARDWARE = {

}

export const HARDWARE_ROUTES = [];
initRoutes(SAN_BASE, SAN, SAN_ROUTES);
initRoutes(NAS_BASE, NAS, NAS_ROUTES);
initRoutes(BACKUPS_BASE, BACKUPS, BACKUPS_ROUTES);








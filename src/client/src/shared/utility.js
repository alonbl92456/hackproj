
// Updates Object immutably 
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = ( value, rules ) => {
    let isValid = true;
    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }

    if ( rules.isNumeric ) {
        const pattern = /^\d+$/;
        isValid = pattern.test( value ) && isValid
    }

    return isValid;
}

export function flatOpenZirObject(openZirObject){

    const res = (Object.keys(openZirObject.data.areas).reduce((allAreasError,curArea) =>{
        return allAreasError.concat(Object.values(openZirObject.data.areas[curArea].details.map(curValue => { return {...curValue, date:openZirObject.data.date ,area:curArea, namespace:openZirObject.data.title }})));
    },[]));

    

    return res;
}

export function getZirObjectCol(openZirObject){

    return ["Id","Error","Date","Area"];
}
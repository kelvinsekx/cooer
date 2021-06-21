const GET_ERROR_MESSAGE = (err) => {
    let message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = GET_UNIQUE_ERR_MESSAGE(err).substring(
                    GET_UNIQUE_ERR_MESSAGE(err).indexOf(":"), GET_UNIQUE_ERR_MESSAGE(err).length)
                break
            default:
                message = "something went wrong"
        }
    } else {
        for(let errName in err.errors) {
            if(err.errors[errName].message){
                 message = err.errors[errName].message
            }
        }
    };
    return message;
};

const GET_UNIQUE_ERR_MESSAGE = (err) => {
    let output;
    try {
        let fieldName =
        err.message.substring(err.message.lastIndexOf('.$')+2,
        err.message.lastIndexOf('_1') )
        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + " already exists";
    }catch (ex){
        output = "Unique field already exists"
    }
    return output;
}


export default {GET_ERROR_MESSAGE}
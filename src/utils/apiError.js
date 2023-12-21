//nodeJS api error for reuse 
 class ApiError extends Error {
    constructor(
        statusCode,
        message="something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.message=message
        this.statusCode = statusCode //overriding the statuscode of constructor
        this.data = null
        this.success = false;
        this.errors = errors

        //optional
        if(stack) {
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
 }

 export {ApiError}
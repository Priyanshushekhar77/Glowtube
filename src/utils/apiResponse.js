class ApiResponse {
    constructor (statusCode,data,message ="success"){
        this.statusCode = statusCode //overriding the statuscode of constructor
        this.data = null
        this.message=message
        this.success = statusCode<400//refer http response status codes
    }
}

export {ApiResponse}
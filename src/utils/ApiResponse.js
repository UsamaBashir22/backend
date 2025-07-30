class ApiResponse {
    constructor(message="success",data,statuscode,) {
        this.statuscode = statuscode
        this.message = message
        this.data = data
        this.success = statuscode < 400      
    }
}

export{ApiResponse }
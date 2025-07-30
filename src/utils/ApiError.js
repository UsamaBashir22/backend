class ApiError extends error{
    constructor (
        statuscode,
        message = "message someting wrong",
        errors = [],
        stack =""
    ){ 
       
        super("message")
        this.statuscode = statuscode
        this.message = message
        this.data = null
        this.success =  false
        this.errors = errors

        if (stack) {
            this.stack= stack
            
        } else {
            errors.captureStackTrace(this,this.constructor)
            
        }
    }
}
export{ApiError}
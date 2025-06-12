class ApiError extends Error {
    constructor(
        
        statuCode,
        message = "something went wrong",
        errors = [],
        stack = ""

    ){
       Super(message)
       this.statuCode = statuCode
       this.data= null
       this.message = message
       this.success = false;
       this.errors= errors

       if(stack){
        this.stack= stack
       }else{
        Error.captureStackTrace(this,this.constructor(params))
       }
    }
        
    
}

export {ApiError}
const asyncHandler= (requestHanler) =>{
    (req, res, next) =>{
        Promise.resolve(requestHanler(req, res, next)).catch((err) => next((err))
        )
    }
}



export {asyncHandler}
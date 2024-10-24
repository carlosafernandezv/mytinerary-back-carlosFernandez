const error_400 = (error,req,res,next) => {
    console.log(error);
    if (error.status === 400) {
        return res.status(400).json({
            success: false,
            response: error,
            messagge: "Error 400 - Bad Request"
        })
    }
    next(error)
    
}
export default error_400
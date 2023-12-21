//use as an wrapper to reuse this later
const asyncHandler = (fun) => async(req,res,next)=> {
    try {
        await fun(req,res,next)
    }
    catch(error){
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
}


//another method
// const asynchandler=(requesthandler) => {
//     (req,res,next) => {
//         Promise.resolve(requesthandler(req,res,next)).
//         catch((err) => next(err))
//     }
// }
export {asyncHandler}



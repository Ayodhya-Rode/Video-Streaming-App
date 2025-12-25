// by using promise

const asyncHandler = (requestHandlerFn) => {
    return (req, res, next) => {
        Promise.resolve(requestHandlerFn(req, res, next))
        .catch(next());
    
    }
}

export default asyncHandler;




// by using try catch

// A middleware to handle async errors in express routes
// Usage: wrap your async route handlers with asyncHandler
// reduce code duplication for try-catch blocks

/*
const asyncHandler = (fn) => async (req, res, next) => {
    try{
        await fn(req, res, next);
    }catch(error){
        res.status(error.code || 500).json({
            success: false,
            message: error.message || "Internal Server Error"
        })
    }
}
*/

// Alternative implementation

/*
function asyncHandler(fn) {
  return async function (req, res, next) {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);  // error पुढच्या middleware ला देण्यासाठी
    }
  }
}
*/
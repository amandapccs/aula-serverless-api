const { StatusCode } = require("./status.code");

function promisePostError(error) {
  return {
    promiseError: {
      message: error.message,
      status: StatusCode.INTERNAL_SERVER_ERROR,
    },
  };
}

module.exports = { promisePostError };
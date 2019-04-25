export const promiseMock = (type, response, shouldAbortRequest) => ({
  then: (successCallback, errorCallback) =>
    !shouldAbortRequest && handleResponse(type, response, {
      successCallback,
      errorCallback
    })
})

function handleResponse(type, response, options) {
  return type === 'success'
    ? options.successCallback(response)
    : options.errorCallback(response)
}

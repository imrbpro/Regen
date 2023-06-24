const success = (res, data, message = 'Success') => { 
    return res.status(200).json({
    status:200,
    message,
    data
    });
}


const created = (res, data, message = 'Created') => {
    return res.status(201).json({
    status: 201,
    message,
    data
    })
}

const notFound = (res, data = null, message = 'Not Found') => {
    return res.status(404).json({
    status: 404,
    message,
    data
    })
}

const badRequest = (res, data = null, message = 'Bad Request') => {
    return res.status(405).json({
    status: 405,
    message,
    data
    })
}

const unAuthorized = (data = null, message = 'Unauthorized') => {
    return res.status(401).json({
    status : 401,
    message,
    data
    })
}

const forbidden = (res, message = 'Forbidden', data = null) => {
    return res.status(403).json({
    status: 403,
    message,
    data
    })
}

const serverError = (res, data = null, message = 'Server Error While Post Generation...') => {
    return res.status(500).json({
    status: 500,
    message,
    data
    })
}

const send = (request, response) => {
    const { status, message, data } = response;
    request.status(status).json({status, message, data});
}

module.exports = {
    success,
    created,
    notFound,
    badRequest,
    unAuthorized,
    forbidden,
    serverError,
    send
}
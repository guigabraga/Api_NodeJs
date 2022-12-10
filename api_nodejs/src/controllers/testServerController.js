const testServerModel = require('../models/testServerModel')

const testServer = async (req, res) => {
    const testServerController = await testServerModel.testServer();
    res.status(200).send({
        "status": "200",
        "message": "Server running.."
    });
}

module.exports = {
    testServer
};
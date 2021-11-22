const {
    permissions
} = require('../../../Data/Promessions')

const getAllPermessions = (req, res) => {
    res.send(permissions)
}

const getAllPermession = (req, res) => {

}


module.exports = {
    getAllPermessions,
    getAllPermession
}
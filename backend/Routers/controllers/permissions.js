const {
    permissions
} = require('../../Data/Promessions')

const getAllPermessions = (req, res) => {
    res.send(permissions)
}

const putPermession = (req, res) => {
    const user = permissions.find((elem) => elem.userId === req.params.id);
    const newData = {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        type: req.body.type,
        place: req.body.place,
        numberOfPeople: req.body.numberOfPeople,
        situation: req.body.situation
    }
    
    user.permission.push(newData)
    res.send(permissions);
}


module.exports = {
    getAllPermessions,
    putPermession
}
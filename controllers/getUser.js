const { user } = require('../models')

const getUser = async (req, res) => {
    try {
        const result = await user.findAll()
        return res.status(200).send({
            'datas': result
        })
    }
    catch(err) {
        return res.status(500).send({
            'message': err?.message
        })
    }
}

module.exports = getUser
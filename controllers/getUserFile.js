const { user } = require('../models')

const getUserFile = async (req, res) => {
    try {
        const { id } = req.params
        const file = await File.findByPk(id)

        const checkId = await user.findOne({
            where: {
                id: id
            }
        })

        // validation
        if (!checkId) {
            return res.status(400).send({
                'message': 'ID tidak ada di database'
            })
        }

        res.set('Content-Type', 'application/pdf')
        res.set('Content-Disposition', `attachment; filename="${file.name}"`)
        res.send(file.data)
    }
    catch (err) {
        return res.status(500).send({
            'message': err?.message
        })
    }
}

module.exports = getUserFile
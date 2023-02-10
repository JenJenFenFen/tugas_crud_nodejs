const { user } = require('../models')

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const checkId = await user.findByPk(id)

        // const checkId = await user.findOne({
        //     where: {
        //         id: id
        //     }
        // })

        // validation
        if (!checkId) {
            return res.status(400).send({
                'message': 'ID tidak ada di database'
            })
        }

        await user.destroy({
            where: {
                id: id
            }
        })

        return res.status(200).send({
            'message': `data berhasil dihapus di id ${id}`
        })
    }
    catch (err) {
        return res.status(500).send({
            'message': err.message
        })
    }
}

module.exports = deleteUser
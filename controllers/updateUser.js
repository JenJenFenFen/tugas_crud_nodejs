const { user } = require('../models')

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email } = req.body

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

        await user.update({
            name: name,
            email: email
        },
        {
            where: {
                id: id
            }  
        })

        return res.status(200).send({
            'message': `data id ${id} berhasil dirubah menjadi nama ${name} dan email ${email}`
        })
    }
    catch (err) {
        return res.status(500).send({
            'message': err.message
        })
    }
}

module.exports = updateUser
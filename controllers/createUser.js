const { user } = require('../models')

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body
        const file = req.file

        // validation
        if (name == '' || email == '' || file == '') {
            return res.status(400).send({
                'message': 'nama atau email atau file tidak boleh kosong'
            })
        }

        await user.create({
            name,
            email,
            file
        })

        return res.status(200).send({
            'message': 'user berhasil ditambahkan'
        })
    }
    catch (err) {
        return res.status(500).send({
            'message': err?.message
        })
    }
}

module.exports = createUser
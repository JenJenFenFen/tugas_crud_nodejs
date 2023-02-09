const { user } = require('../models')

const getUserFile = async (req, res) => {
    try {
        const { id } = req.params
        const file = await user.findByPk(id)

        // validation
        if (!file) {
            return res.status(400).send({
                'message': 'ID tidak ditemukan di database'
            })
        }

        // console.log(file)
        const fileName = file.name
        const fileByte = file.file

        // set header
        res.contentType('application/pdf')
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}.pdf"`)
        
        // download file
        res.send(fileByte)
    }
    catch (err) {
        return res.status(500).send({
            'message': err.message
        })
    }
}

module.exports = getUserFile
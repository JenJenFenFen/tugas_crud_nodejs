const express = require('express')
const introduction = require('../controllers/introduction')
const createUser = require('../controllers/createUser')
const deleteUser = require('../controllers/deleteUser')
const getUser = require('../controllers/getUser')
const updateUser = require('../controllers/updateUser')
const getUserFile = require('../controllers/getUserFile')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const router = express()

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../assets/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000 // 1 MB
    }
}).single('file')

router.get('/', introduction)
router.post('/user', upload, createUser)
router.get('/user', getUser)
router.delete('/user/:id', deleteUser)
router.put('/user/:id', updateUser)
router.get('/userfile/:id', getUserFile)

module.exports = router
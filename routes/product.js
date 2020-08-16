const express = require('express');
const router = express.Router();

//product data 불러오기
router.get('/', (req, res) => {
    res.json({
        message: 'product area 불러오기'
    })
})

//product data 생성하기
router.post('/register', (req, res) => {
    res.json({
        message: 'product data 생성하기'
    })
})

//product data 업데이트하기
router.put('/', (req, res) => {
    res.json({
        message: 'product data 업데이트하기'
    })
})

//product data delete 하기
router.delete('/', (req, res) => {
    res.json({
        message: 'product data delete하기'
    })
})

module.exports = router;

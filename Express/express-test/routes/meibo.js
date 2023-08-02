const express = require('express')
const router = express.Router()

const pool = require("../db/pool")

//　データ全件取得
router.get('/', (req,res,next) => {
  pool.query("SELECT * FROM meibo", (error, result) => {
    if(error){
      throw error
    }
    res.status(200).json({
      data: result.rows
    })
    // return result.rows
  })
})

// データid検索API
router.get('/:id', (req,res,next) => {
  const id = req.params.id;
  pool.query("SELECT * FROM meibo WHERE id = $1", [id], (error,result) => {
    if(error) {
      throw error
    }
    res.status(200).json({
      data: result.rows,
    })
  })
})

module.exports = router
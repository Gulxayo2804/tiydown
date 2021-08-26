const Vedios = require('../models/Vedios');
const md5 = require('md5');
const path = require('path');
const fs = require('fs');
const multer = require('multer')

exports.createOne = async (req, res) => {
 
  const result = new Vedios({
    image: `/public/uploads/${req.file.filename}`
  })
  await result.save()
        .then(() => {res.status(201).json({ success: true, data: result})})
        .catch((error) => {res.status(400).json({ success: false, error: error })})
 
}

exports.getAll = async (req, res) => {
  const result = await Vedios.find()
    .sort({ date: -1 })
  // res.status(200).json({ success: true, data: result })
  res.send(result)
}


exports.getOne = async (req, res) => {
  const result = await Vedios.findById({ _id: req.params.id })
  res.status(200).json({ success: true, data: result })
}






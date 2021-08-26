const Actions = require('../models/ActionsModel');
const md5 = require('md5');
const path = require('path');
const fs = require('fs');
const multer = require('multer')

exports.createOne = async (req, res, next) => {

  const result = new Actions({
    name: req.body.name,
    description: req.body.description,
    image: `/public/uploads/${req.file.filename}`,
    halolmi:req.body.halolmi
  })
  await result.save()
  .then(() => {res.status(201).json({ success: true, data: result})})
  .catch((error) => {res.status(400).json({ success: false, error: error })})

}




exports.getAll = async (req, res, next) => {
  const result = await Actions.find()
    .sort({ date: -1 })
  res.status(200).json({ success: true, data: result })
}

exports.getOne = async (req, res, next) => {
  const result = await Actions.findById({ _id: req.params.id })
  res.status(200).json({ success: true, data: result })
}

exports.updateOne = async (req, res, next) => {
  const result = await Actions.findByIdAndUpdate({ _id: req.params.id })
  result.name = req.body.name
  result.description = req.body.description
  result.halolmi = req.body.halolmi

  result.save()
    .then(() => {
      res.status(200).json({ success: true, data: result })
    })
    .catch((error) => {
      res.status(400).json({ success: false, error: error })
    })
}

exports.deleteOne = async (req, res, next) => {
  await Actions.findById({ _id: req.params.id })
    .exec(async (error, data) => {
      if (error) {
        throw error
      } else {
        let filePath = path.join(path.dirname(__dirname) + `${data.image}`)
        console.log(filePath)
        fs.unlink(filePath, async (error) => {
          if (error) {
            throw error
          }
        })
        await Actions.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json({ success: true, data: [] })
      }
    })
}

exports.getName = async (req, res) => {
  const result = await Actions.aggregate(
   [ { $match : { name: req.params.name} } ]
 );
 res.status(200).json({ success: true, data: result })
 
 }



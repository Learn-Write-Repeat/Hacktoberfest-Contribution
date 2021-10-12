const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const path = require('path');
const dirname = path.join(__dirname+'/../'+'/uploads/');
router.post('/', async (req, res) => {
    new formidable.IncomingForm().parse(req)
    .on('field', (name, field) => {
      console.log('Field', name, field)
    })
    .on('fileBegin', (name, file) => {
        console.log(dirname);
        file.path = dirname + file.name;
    })
    .on('file', (name, file) => {
        try {
            res.render('image.ejs', {
                name:file.name,
                url:file.path
              });
        } catch (error) {
            console.error(error);
        }
      console.log('Uploaded file', name, file)
    })
    .on('aborted', () => {
      console.error('Request aborted by the user')
    })
    .on('error', (err) => {
      console.error('Error', err)
      throw err
    })
    // .on('end', () => {
    //   res.end()
    // })
    
});

module.exports = router;
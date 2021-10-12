const express = require('express');
const Tesseract = require('tesseract.js');
const createWorker = Tesseract.createWorker;
const router = express.Router();


router.post('/',function(req,res){
    var url = req.body.url;
    console.log(url);
    const worker = createWorker({
      logger: m => console.log(m)
    });
    
    (async () => {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(url);
      res.render('tesseract.ejs',{imageurl:url,
        imagetext:text});
      await worker.terminate();
    })();
    });
    
    
    module.exports = router;
    
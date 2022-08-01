var uuid = require('uuid');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send([
    {
      id: uuid.v4(),
      title: 'DJ 1',
      uri: 'https://res.cloudinary.com/cuit/video/upload/v1658998360/samples/dj1_xav8rm.mp3',
      durationMs: 292
    },
    {
      id: uuid.v4(),
      title: 'DJ 3',
      uri: 'https://res.cloudinary.com/cuit/video/upload/v1658998362/samples/dj3_ewh1lo.mp3',
      durationMs: 351
    },
    {
      id: uuid.v4(),
      title: 'DJ 2',
      uri: 'https://res.cloudinary.com/cuit/video/upload/v1659346767/samples/dj2_ym4dxl.mp3',
      durationMs: 313
    }
  ]);
});

module.exports = router;

const express = require('express');
const router = express.Router();

import {Request, Response, NextFunction} from "express";

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('hello');
});

module.exports = router;

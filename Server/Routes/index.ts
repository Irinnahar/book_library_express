/*
File name : app.ts
Student’s Name : Irin Nahar
StudentID: 301173198
Date: 21/06/2021
course : COMP 229
lab: Mid term
*/
// modules required for routing
import express from 'express';
const router = express.Router();
export default router;

import mongoose from 'mongoose';

// define the book model
import book from '../Models/books';

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    page: 'home',
    books: ''
   });
});

//module.exports = router;

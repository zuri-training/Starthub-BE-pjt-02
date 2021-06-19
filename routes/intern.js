const express = require('express');
const User = require('../models/user');
const router = new express.Router();

// Basic test route
router.get('/', (req, res) => {
    res.send('Starthub app!');
  });


// Signup controller
router.post('/signup', async(req, res) => {
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user);
    }catch (err) {
        res.status(400).send(err)
    }
})


module.exports = router;
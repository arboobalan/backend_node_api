const express = require('express');
const router = express.Router();
const mymodel = require('../model/usermodel');

router.get('/users', async (req, res) => {
    try {
        const users = await mymodel.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ msg: 'Internal Server Error', err: err });
    }
});

router.post('/users', async (req, res) => {
    const { username, date_of_birth, email_id, address, mobile_number } = req.body;
    try {
        const newUser = new mymodel({
            username, date_of_birth, email_id, address, mobile_number
        });
        await newUser.save();
        res.status(200).json({ msg: 'User Created', user: newUser });
    } catch (err) {
        res.status(500).json({ msg: 'Internal Server Error', err: err });
    }
});

router.get('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await mymodel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({ msg: 'Internal Server Error', err: err });
    }
});


router.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { username, date_of_birth, email_id, address, mobile_number } = req.body;
    try {
        const updateUser = await mymodel.findByIdAndUpdate(userId,
            { username, date_of_birth, email_id, address, mobile_number },
            { new: true });
        if (!updateUser) {
            return res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json({ msg: 'User Updated', user: updateUser });
        }
    } catch (err) {
        res.status(500).json({ msg: 'Internal Server Error', err: err });
    }
});


router.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const deleteUser = await mymodel.findByIdAndDelete(userId);

        if (!deleteUser) {
            return res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json({ msg: 'User Deleted', user: deleteUser });
        }

    } catch (err) {
        res.status(500).json({ msg: 'Internal Server Error', err: err });
    }
});

module.exports = router;
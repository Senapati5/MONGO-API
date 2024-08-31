const UserModel = require('../model/user-model');

module.exports = class UserController {
    constructor() {
    }


    getUserDetails = async (req, res) => {
        try {
            const userDetails = {
                name: "Test User",
                email: "test@gmail.com",
                phone: "999999999"
            }

            res.status(200).send({ msg: "User fetched successfully.", user_datils: userDetails })
        } catch (error) {
            console.log(error);
        }
    }


    registerUser = async (req, res) => {
        try {
            const { fname, lname, email, password } = req.body;

            /* const userDetails = {
                fname: fname,
                lname: lname,
                email: email,
                password: password
            } */

            const user = new UserModel({
                fname,
                lname,
                email,
                password
            })

            const newUser = await user.save();

            if (newUser) {
                res.status(200).send({ status: true, msg: "User registered successfully.", newUser })
            }

        } catch (error) {
            console.log(error);
            res.status(500).send({ status: false, msg: "Something went wrong!" })
        }
    }


}
const Users = require('../../api/v1/users/model');
const Organizers = require('../../api/v1/organizers/model');
const { BadRequestError } = require('../../errors');
const { StatusCodes } = require('http-status-codes');

const createOrganizer = async(req) => {
    const { organizer, role, email, password, confirmPassword, name } = req.body;

    if (password !== confirmPassword) {
        throw new BadRequestError('Password dan Confirm password tidak cocok');
    }

    const result = await Organizers.create({ organizer });

    const users = await Users.create({ name, email, password, organizer: result._id, role });

    delete users._doc.password;

    return users;
};

const createUsers = async(req) => {
    const { role, email, password, confirmPassword, name } = req.body;

    if (password !== confirmPassword) {
        throw new BadRequestError('Password dan Confirm password tidak cocok');
    }

    const result = await Users.create({
        name,
        email,
        role,
        organizer: req.user.organizer,
        password,
    });
    return result;
};

const getAllUsers = async(req) => {
    const result = await Users.find();

    return result;
};

module.exports = {
    createOrganizer,
    createUsers,
    getAllUsers,
};
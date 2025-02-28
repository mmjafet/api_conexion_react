const { User } = require("../models/userModel.js");

//funcion para la primer ruta 
//get --> /get-users
const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const createUser = async (username, password) => {
    try {
        const newUser = new User({ username, password });
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        return null;
    }
}

const login = async (username, password) => {
    const user = await getUserByNameAndPwd(username, password);
    if (user) {
        var token = `token-falso-${user._id}`;
        return { token };
    }
    return { message: "usuario o contraseña incorrectos" };
}

const getUserByNameAndPwd = async (username, password) => {
    try {
        const user = await User.findOne({ username, password });
        return user;
    } catch (error) {
        return null;
    }
}

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const getUserByName = async (username) => {
    try {
        const user = await User.findOne({ username });
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const deleteUser = async (id) => {
    try {
        const result = await User.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const updateUser = async (id, updateData) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
        return updatedUser;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = {
    getAllUsers,
    login,
    createUser,
    getUserById,
    getUserByName,
    deleteUser,
    updateUser
}
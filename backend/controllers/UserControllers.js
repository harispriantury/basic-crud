import { response } from "express";
import Users from "../models/UserModels.js";

export const getUsers = async (req, res) => {
    try {
        const response = await Users.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await Users.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const createUser = async (req, res) => {
    try {
        await Users.create(req.body)
        res.status(201).json({ message: "data success created" })
    } catch (error) {
        console.log(err.message);
    }
}

export const updateUser = async (req, res) => {
    try {
        await Users.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: "Data Update Successfully"
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async (req, res) => {
    try {
        await Users.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: "Data success deleted"
        })
    } catch (error) {
        console.log(error.message)
    }
}
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    // get data from user
    const { username, email, password } = req.body;
    // console.log(username); // just checkpoint

    // checking the all fields are present are not
    if (!username || !email || !password) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.create({
        username,
        email,
        password
    })

    // console.log(user)

    return res.status(200).json(
        new ApiResponse(201, user, "User created successfully")
    )
})

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    // console.log(req.body);

    if (!username || !password) {
        throw new ApiError(401, "All fields are required")
    }

    const user = await User.findOne({ username })
    // console.log(user)

    if (!user) {
        throw new ApiError(404, "User not found")
    }
    
    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(404, "Invalid Credential")
    }

    const loggedInUser = await User.findById(user._id)
    // console.log(loggedInUser);

    return res.status(201)
        .json(
            new ApiResponse(200, { user: loggedInUser }, "Login Successfully")
        )
})



export {
    registerUser,
    loginUser
}
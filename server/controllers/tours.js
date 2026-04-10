import Tour from "../models/Tour";
import dotenv from "dotenv";
dotenv.config();

const getTours = async (req, res) => {
    const tours = await Tour.find({ user: req.user.id }).populate(
        "user",
        "-password"
    );

    return res.json({
        success: true,
        message: "Fetched tours successfully",
        data: tours,
    });
};

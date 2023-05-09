import Admin from "../models/admin.model.js";

export const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    console.log(email, password)
    const user = await Admin.findOne({ email }); 
    if (user) {
      console.log("User Logged in");
      console.log(user)
      response.status(200).json(user);
    } else {
      console.log("No such user exists");
      response.status(201).json("No such user exists");
    }
  } catch (error) {
    response.status(202).json(error);
  }
};

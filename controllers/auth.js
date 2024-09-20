import {
  comparePassword,
  generateAccessToken,
  hashUserPassword,
  queryAsync,
} from "../helpers/helper.js";

export const login = async (req, res) => {
  try {
    console.log(`Route: ${req.method} ${req.originalUrl}`);
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(404).send({ message: "Fill in all required fields!" });

    const query = `SELECT * FROM auth_users WHERE username = "${username}"`;
    const data = await queryAsync(query);

    if (!data.length)
      return res
        .status(401)
        .send({ message: "Incorrect username or password" });

    let userpass = data[0].passwd;

    if (password != userpass)
      return res
        .status(401)
        .send({ message: "Incorrect username or password" });

    // const isPassword = await comparePassword(password, userpass);
    // if (!isPassword)
    //   return res
    //     .status(401)
    //     .send({ message: "Incorrect username or password" });

    const userId = data[0].auth_ID;
    const firstName = data[0].firstName;
    const lastName = data[0].lastName;
    const mobile = data[0].mobile;

    const token = generateAccessToken({
      userId,
      username,
      firstName,
      lastName,
      mobile,
    });

    const response = {
      userId,
      username,
      firstName,
      lastName,
      mobile,
      token: token,
      login: true,
    };

    res.status(200).send({ message: "Login successfull", response: response });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getToken = async (req, res) => {
  try {
    const { userId, username, firstName, lastName, mobile } = req.user;

    const token = generateAccessToken({
      userId,
      username,
      firstName,
      lastName,
      mobile,
    });

    const response = {
      access_token: token,
      token_type: "Bearer",
    };

    res.status(200).send({ message: "Token generated", response: response });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const resetAllPaswords = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const getAllUsers = `SELECT passwd, auth_ID, username FROM auth_users`;

    if (!newPassword)
      return res.status(404).send("Fill all required input fields");

    const allUsers = await queryAsync(getAllUsers);
    res
      .status(200)
      .send(
        `All passwords are being reset to '${newPassword}', the administrator would be prompted once the action is complete.`
      );

    for (const user of allUsers) {
      const password = await hashUserPassword(newPassword);
      const updatePasswordQuery = `UPDATE auth_users SET passwd = ? WHERE auth_ID = ?`;
      // const updatePasswor = await queryAsync(updatePasswordQuery, [password, user.auth_ID])

      console.log(`Password updated for ${user.username}`);
    }

    console.log(`All passwords have been reset to ${newPassword}`);
  } catch (error) {
    console.log(error);
  }
};

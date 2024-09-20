import { queryAsync } from "../helpers/helper.js";

export const getAllOwners = async (req, res) => {
  try {
    const query = `SELECT * FROM owners`;
    const data = await queryAsync(query);

    res.status(200).send({ message: "All divisions", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getSingleOwner = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).send({ message: "Invalid parameters" });
    // console.log(id)
    const query = `SELECT * FROM owners WHERE OwnerID = "${id}"`;
    const data = await queryAsync(query);
    if (!data.length)
      return res.status(401).send({ message: "Owner not found" });

    res.status(200).send({ message: "User found", response: data[0] });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

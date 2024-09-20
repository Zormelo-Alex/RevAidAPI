import { queryAsync } from "../helpers/helper.js";

export const getAllDivisions = async (req, res) => {
  try {
    const query = `SELECT * FROM divisions`;
    const data = await queryAsync(query);

    res.status(200).send({ message: "Divisions found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getSingleDivision = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).send({ message: "Invalid parameters" });
    // console.log(id)
    const query = `SELECT * FROM divisions WHERE divisionsID = "${id}"`;
    const data = await queryAsync(query);
    if (!data.length)
      return res.status(401).send({ message: "Division not found" });

    res.status(200).send({ message: "Division found", response: data[0] });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

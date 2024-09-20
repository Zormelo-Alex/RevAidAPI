import { queryAsync } from "../helpers/helper.js";

export const getAllBillboardPartyType = async (req, res) => {
  try {
    const query = `SELECT * FROM billboard_partytype`;
    const data = await queryAsync(query);

    res.status(200).send({ message: "Billboards found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getBillboardPartTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).send({ message: "Invalid parameters" });
    // console.log(id)
    const query = `SELECT * FROM billboard_partytype WHERE pkid = "${id}"`;
    const data = await queryAsync(query);
    if (!data.length)
      return res.status(401).send({ message: "Billboard not found" });

    res.status(200).send({ message: "Billboard found", response: data[0] });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getAllBillboardMakes = async (req, res) => {
  try {
    const query = `SELECT * FROM billboard_make`;
    const data = await queryAsync(query);

    res.status(200).send({ message: "Billboards found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getBillboardMakeById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).send({ message: "Invalid parameters" });
    // console.log(id)
    const query = `SELECT * FROM billboard_make WHERE makeID = "${id}"`;
    const data = await queryAsync(query);
    if (!data.length)
      return res
        .status(401)
        .send({ message: "Billboard not found" });

    res.status(200).send({ message: "Billboard found", response: data[0] });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

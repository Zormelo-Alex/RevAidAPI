import { queryAsync } from "../helpers/helper.js";

export const getGCRCodes = async (req, res) => {
  try {
    const query = `SELECT * FROM gcr_codes`;
    const data = await queryAsync(query);

    res.status(200).send({ message: "GCRCodes found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getGCRCodesbyTaxYear = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).send({ message: "Invalid parameters" });
    // console.log(id)
    const query = `SELECT * FROM gcr_codes WHERE taxyearID = "${id}"`;
    const data = await queryAsync(query);
    if (!data.length)
      return res.status(401).send({ message: "GCRCode not found" });

    res.status(200).send({ message: "GCRCode found", response: data[0] });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

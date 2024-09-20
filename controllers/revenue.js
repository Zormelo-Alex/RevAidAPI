import { queryAsync } from "../helpers/helper.js";

export const getAllRevenueAssets = async (req, res) => {
  try {
    const query = `SELECT * FROM revenue_assets`;
    const data = await queryAsync(query);

    res.status(200).send({ message: "Revenues found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getAllRevenueCategory = async (req, res) => {
  try {
    const query = `SELECT * FROM revenue_category`;
    const data = await queryAsync(query);

    res.status(200).send({ message: "Revenues found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};
export const getAllRevenueSource = async (req, res) => {
  try {
    const query = `SELECT * FROM revenue_sources`;
    const data = await queryAsync(query);

    res.status(200).send({ message: "Revenues found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};
export const getAllRevenueTypes = async (req, res) => {
  try {
    const query = `SELECT * FROM revenue_types`;
    const data = await queryAsync(query);

    res.status(200).send({ message: "Revenues found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getRevenueAssetsByCode = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).send({ message: "Invalid parameters" });
    // console.log(id)
    const query = `SELECT * FROM revenue_assets WHERE assetCode = "${id}"`;
    const data = await queryAsync(query);
    if (!data.length)
      return res.status(401).send({ message: "revenue not found" });

    res.status(200).send({ message: "revenue found", response: data[0] });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

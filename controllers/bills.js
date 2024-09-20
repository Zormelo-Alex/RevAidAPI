import { queryAsync } from "../helpers/helper.js";

export const getAllBills = async (req, res) => {
  try {
    const query = `SELECT * FROM billings`;
    const data = await queryAsync(query);

    res.status(200).send({ message: "Bills found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getBillByNumber = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).send({ message: "Invalid parameters" });
    // console.log(id)
    const query = `SELECT * FROM billings WHERE bill_number = "${id}"`;
    const data = await queryAsync(query);
    if (!data.length)
      return res
        .status(401)
        .send({ message: "Bill not found" });


    res.status(200).send({ message: "Bill found", response: data[0] });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getBillByAssetCode = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).send({ message: "Invalid parameters" });
    // console.log(id)
    const query = `SELECT * FROM billings WHERE assetCode = "${id}"`;
    const data = await queryAsync(query);
    if (!data.length)
      return res
        .status(401)
        .send({ message: "Bill not found" });

    res.status(200).send({ message: "Bill found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getAllBillDeliveries = async (req, res) => {
  try {
    const query = `SELECT * FROM bill_deliveries`;
    const data = await queryAsync(query);

    res.status(200).send({ message: "Bills found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getBillDeliveriesByNumber = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).send({ message: "Invalid parameters" });
    // console.log(id)
    const query = `SELECT * FROM bill_deliveries WHERE bill_number = "${id}"`;
    const data = await queryAsync(query);
    if (!data.length)
      return res
        .status(401)
        .send({ message: "Bill not found" });

    res.status(200).send({ message: "Bill found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

export const getBillByDevice = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(401).send({ message: "Invalid parameters" });
    // console.log(id)
    const query = `SELECT * FROM bill_deliveries WHERE deviceIMEI = "${id}"`;
    const data = await queryAsync(query);
    if (!data.length)
      return res
        .status(401)
        .send({ message: "Bill not found" });


    res.status(200).send({ message: "Bill found", response: data });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "sorry, something went wrong " + error });
  }
};

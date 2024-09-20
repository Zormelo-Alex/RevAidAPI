import { queryAsync } from "../helpers/helper.js";

export const getAllZones = async (req, res) => {
    try {
      const query = `SELECT * FROM zones`;
      const data = await queryAsync(query);
    
      res.status(200).send({ message: "Zones found", response: data });
    } catch (error) {
      console.log(error);
      res.status(401).send({ message: "sorry, something went wrong " + error });
    }
  };
  
  export const getSingleZone = async (req, res) => {
    try {
      const {id} = req.params
      if (!id) return res.status(401).send({ message: "Invalid parameters" });
      // console.log(id)
      const query = `SELECT * FROM zones WHERE divisionID = "${id}"`;
      const data = await queryAsync(query);
      if (!data.length)
        return res
          .status(401)
          .send({ message: "Zone not found" });
    
      res.status(200).send({ message: "Zone found", response: data[0] });
    } catch (error) {
      console.log(error);
      res.status(401).send({ message: "sorry, something went wrong " + error });
    }
  };
  
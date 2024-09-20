import { queryAsync } from "../helpers/helper.js";

export const getAllLocality = async (req, res) => {
    try {
      const query = `SELECT * FROM locality`;
      const data = await queryAsync(query);
  
      res.status(200).send({ message: "Localities found", response: data });
    } catch (error) {
      console.log(error);
      res.status(401).send({ message: "sorry, something went wrong " + error });
    }
  };
  
  export const getSingleLocality = async (req, res) => {
    try {
      const {id} = req.params
      if (!id) return res.status(401).send({ message: "Invalid parameters" });
      // console.log(id)
      const query = `SELECT * FROM locality WHERE zoneId = "${id}"`;
      const data = await queryAsync(query);
      if (!data.length)
        return res
          .status(401)
          .send({ message: "Locality not found" });
    
      res.status(200).send({ message: "Locality found", response: data[0] });
    } catch (error) {
      console.log(error);
      res.status(401).send({ message: "sorry, something went wrong " + error });
    }
  };
  
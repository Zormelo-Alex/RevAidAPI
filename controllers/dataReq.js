export const sendData = async (req, res) => {
    try {
      const {id} = req.params
      // console.log(id)
      // const query = `SELECT * FROM auth_users WHERE ownerID = "${username}"`;
      // const data = await queryAsync(query);
      // if (!data.length)
      //   return res
      //     .status(401)
      //     .send({ message: "Owner not found" });
  
      const data = [{}]
  
      res.status(200).send({ message: "Zone found", response: data[0] });
    } catch (error) {
      console.log(error);
      res.status(401).send({ message: "sorry, something went wrong " + error });
    }
  };

export const sendImage = async (req, res) => {
    try {
      const {id} = req.params
      // console.log(id)
      // const query = `SELECT * FROM auth_users WHERE ownerID = "${username}"`;
      // const data = await queryAsync(query);
      // if (!data.length)
      //   return res
      //     .status(401)
      //     .send({ message: "Owner not found" });
  
      const data = [{}]
  
      res.status(200).send({ message: "Zone found", response: data[0] });
    } catch (error) {
      console.log(error);
      res.status(401).send({ message: "sorry, something went wrong " + error });
    }
  };

export const getImageByName = async (req, res) => {
    try {
      const {id} = req.params
      // console.log(id)
      // const query = `SELECT * FROM auth_users WHERE ownerID = "${username}"`;
      // const data = await queryAsync(query);
      // if (!data.length)
      //   return res
      //     .status(401)
      //     .send({ message: "Owner not found" });
  
      const data = [{}]
  
      res.status(200).send({ message: "Zone found", response: data[0] });
    } catch (error) {
      console.log(error);
      res.status(401).send({ message: "sorry, something went wrong " + error });
    }
  };
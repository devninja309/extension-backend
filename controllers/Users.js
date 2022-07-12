import Users from "../models/UserModel.js";
import Selectors from "../models/Selector.js";
import Domains from "../models/Domain.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: [
        "id",
        "selector",
        "english",
        "spanish",
        "french",
        "createdAt"
      ]
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Update = async (req, res) => {
  const { id, selector, spanish, french } = req.body;
  // console.log(id, spanish, french);
  try {
    await Users.update(
      { selector: selector, spanish: spanish, french: french },
      {
        where: {
          id: id
        }
      }
    );
    return res.json({ msg: "updated" });
  } catch (err) {
    res.status(404).json({ msg: "faild update" });
  }
};

export const Delete = async (req, res) => {
  // console.log("----------", req.body.name);
  await Users.destroy({
    where: {
      english: req.body.english
    }
  });
  res.json({ msg: req.body.english + "----- successfully deleted" });
};

//extension field
export const getAttribute = async (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");

  try {
    const users = await Users.findAll({
      attributes: ["unique", "english", "spanish", "french"]
    });
    res.json(users);
    // console.log(res.json(users));
  } catch (error) {
    console.log(error);
  }
};

export const createAttribute = (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // let english = Json.parse(req.body)
  let index = 0;
  const myPromise = new Promise((resolve, reject) => {
    const result = [];
    Object.keys(req.body.english).forEach(function (k) {
      var key = Object.keys(req.body.english[k]);
      // console.log(req.body.english[k][key][0]);
      Users.count({
        where: {
          selector: key,
          english: req.body.english[k][key][0],
          unique: req.body.english[k][key][1]
        }
      }).then((count) => {
        index++;
        if (count == 0) {
          // console.log("aaaaaaaa", count);
          result.push({
            selector: key,
            english: req.body.english[k][key][0],
            unique: req.body.english[k][key][1],
            createdAt: new Date(),
            updatedAt: new Date()
          });
        }
        if (index == req.body.english.length) resolve(result);
      });
    });
  });

  myPromise.then((result) => {
    Users.bulkCreate(result);
  });
  // try {
  //   english.map((item, index) => {
  //     Users.update(
  //       {
  //         english: item[Object.keys(item)]
  //       },
  //       {
  //         where: {
  //           selector: Object.keys(item)
  //         }
  //       }
  //     )
  //   })

  //   // await Users.save({
  //   //   selector: selector,
  //   // });
  //   res.json({ msg: "Registration Successful" });
  // } catch (error) {
  //   console.log(error);
  // }
};

export const getSelector = async (req, res) => {
  try {
    const users = await Selectors.findAll({
      attributes: ["selector"]
    });
    res.json(users);
    // console.log(res.json(users));
  } catch (error) {
    console.log(error);
  }
};

// select function

export const Register = async (req, res) => {
  const { selector } = req.body;
  try {
    await Selectors.create({
      selector: selector
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};

export const getSelect = async (req, res) => {
  try {
    const users = await Selectors.findAll({
      attributes: ["id", "selector"]
    });
    res.json(users);
    // console.log(res.json(users));
  } catch (error) {
    console.log(error);
  }
};

export const sDelete = async (req, res) => {
  // console.log("----------", req.body.name);
  await Selectors.destroy({
    where: {
      selector: req.body.selector
    }
  });
  res.json({ msg: req.body.select + "----- successfully deleted" });
};


// Domain
export const postDomain = async (req, res) => {
  const { domain } = req.body;
  try {
    await Domains.create({
      domain: domain
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};

export const getDomain = async (req, res) => {
  try {
    const users = await Domains.findAll({
      attributes: ["id", "domain"]
    });
    res.json(users);
    // console.log(res.json(users));
  } catch (error) {
    console.log(error);
  }
};

export const deleteDomain = async (req, res) => {
  // console.log("----------", req.body.name);
  await Domains.destroy({
    where: {
      domain: req.body.domain
    }
  });
  res.json({ msg: req.body.select + "----- successfully deleted" });
};
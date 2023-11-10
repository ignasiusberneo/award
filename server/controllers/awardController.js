const { Award } = require("../models/index");
const { Op } = require("sequelize");

class awardController {
  static async getAwards(req, res, next) {
    try {
      let { page, minPoint, maxPoint, category } = req.query;
      if (!page) {
        page = 1;
      }
      const size = 5;
      let options = {
        limit: size,
        offset: (page - 1) * (size + 1),
        where: {},
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      };
      if (minPoint) {
        if (maxPoint) {
          options.where = {
            ...options.where,
            point: { [Op.between]: [+minPoint, +maxPoint] },
          };
        } else {
          options.where = {
            ...options.where,
            point: { [Op.gte]: minPoint },
          };
        }
      } else {
        if (maxPoint) {
          options.where = {
            ...options.where,
            point: { [Op.lte]: +maxPoint },
          };
        }
      }
      console.log(category);
      //   if (category) {
      //     options.where = {
      //       ...options.where,
      //       category: { [Op.contains]: category },
      //     };
      //   }
      const response = await Award.findAndCountAll(options);
      res.status(200).json({
        message: "Get awards success",
        data: response.rows,
        totalPage: Math.ceil(response.count / size),
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}

module.exports = awardController;

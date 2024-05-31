import { DataTypes } from "sequelize";
import sequelize from "@/server/sequelize";

const Projects = sequelize.define("Projects", {
  title: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  keywords: {
    type: DataTypes.ARRAY,
  },
  image: {
    type: DataTypes.STRING,
  },
});

export default Projects;
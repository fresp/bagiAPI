const models = require("../../src/models");
const Video = models.T_Videos;


class videoService {
  static async getAll() {
    try {
      return await Video.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async create(newVideos) {
    try {
      return await Video.create(newVideos);
    } catch (error) {
      throw error;
    }
  }

  static async getOne(id) {
    try {
      const theVideos = await Video.findOne({
        where: {
          id: id
        }
      });

      return theVideos;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, updateVideos) {
    try {
      const VideosToUpdate = await Video.findOne({
        where: { id: id }
      });

      if (VideosToUpdate) {
        await Video.update(updateVideos, {
          where: { id: id }
        });

        return updateVideos;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const VideosToDelete = await Video.findOne({
        where: { id: String(id) }
      });

      if (VideosToDelete) {
        const deletedVideos = await Video.destroy({
          where: { id: String(id) }
        });
        return deletedVideos;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = videoService;

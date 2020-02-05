const models = require("../../src/models");
const Likes = models.T_Likes;

class likeService {

    static async insertData(data) {
        try {
        return await Likes.create(data);
        } catch (error) {
        throw error;
        }
    }

    static async deleteData(id) {
        try {
            return await Likes.destroy({
                where: { id: String(id) }
            });
        } catch (error) {
            throw error;
        }
    }

    static async countData(videoId) {
        try {
            return  await Likes.count({
                where: { videoId: String(videoId) }
            });
        } catch (error) {
            throw error;
        }
    }
}
module.exports = likeService;


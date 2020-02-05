const models = require("../../src/models");
const DisLikes = models.T_Dislikes;

class dislikeService {

    static async insertData(data) {
        try {
        return await DisLikes.create(data);
        } catch (error) {
        throw error;
        }
    }

    static async deleteData(id) {
        try {
            return await DisLikes.destroy({
                where: { id: String(id) }
            });
            return deletedVideos;
        } catch (error) {
            throw error;
        }
    }

    static async countData(videoId) {
        try {
            return  await DisLikes.count({
                where: { videoId: String(videoId) }
            });
        } catch (error) {
            throw error;
        }
    }
}
module.exports = dislikeService;


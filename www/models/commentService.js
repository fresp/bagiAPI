const models = require("../../src/models");
const Comment = models.T_Komentars;

class commentService {

    static async insertData(data) {
        try {
        return await Comment.create(data);
        } catch (error) {
        throw error;
        }
    }

    static async deleteData(id) {
        try {
            let data = await Comment.destroy({
                where: { id: String(id) }
            });
            return data;
        } catch (error) {
            throw error;
        }
    }

    static async getData(id) {
        try {
            return await Comment.findAll({
                where: { videoId: String(id) }, raw: true
            });
        } catch (error) {
            throw error;
        }
    }
}
module.exports = commentService;


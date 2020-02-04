const models = require("../../src/models");
const User = models.T_Users;

class userService {

    static async checkedmail(email) {
        try {
        const checkmail = await User.findOne({
            where: { email: email.toLowerCase() }
        });

        return checkmail;
        } catch (error) {
        throw error;
        }
    }
    static async signup(newUser) {
        try {
        return await User.create(newUser);
        } catch (error) {
        throw error;
        }
    }

    static async deleteMe(id) {
        try {
        const userToDelete = await User.findOne({
            where: { id: String(id) }
        });

        if (userToDelete) {
            const deletedUser = await User.destroy({
            where: { id: String(id) }
            });
            return deletedUser;
        }
        return null;
        } catch (error) {
        throw error;
        }
    }

    static async genereteHash(req) {
        try {
            return await User.generateHash(req);
        } catch (error) {
            throw error;
        }
    }
}
module.exports = userService;


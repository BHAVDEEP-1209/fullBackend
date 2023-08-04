const service = require("../service");

const get_hello = async (req, res, next) => {
    try {
        service.userService.hello_world();
        res.send("hello user!")
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }

}


module.exports = {
    get_hello
}
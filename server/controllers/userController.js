const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');
const {User} = require('../models/models');

const generateJwt = (id, username) => {
    return jwt.sign(
        {id, username},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserController {
    async registration(req, res, next) {
        const {username, password} = req.body;
        if (!username || !password) {
            return next(ApiError.badRequest('Wrong username or password'));
        }
        const candidate = await User.findOne({where: {username}});
        if (candidate) {
            return next(ApiError.badRequest('User with this username already exists'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({username, password: hashPassword});
        const token = generateJwt(user.id, username);
        return res.json({token});
    };

    async authorization(req, res, next) {
        const {username, password} = req.body;
        const candidate = await User.findOne({where: {username}});
        if (!candidate) {
            return next(ApiError.badRequest('Username and password are wrong'));
        }
        const comparePassword = bcrypt.compareSync(password, candidate.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Wrong password'));
        }
        const token = generateJwt(candidate.id, username);
        return res.json({token});
    };

    async check(req, res, next) {
        const {id, username} = req.user;
        const token = generateJwt(id, username);
        return res.json({token});
    };
}

module.exports = new UserController();

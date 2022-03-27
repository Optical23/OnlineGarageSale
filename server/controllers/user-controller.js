const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [
                {_id: user ? user._id : params.id}, {full_name: params.full_name}
            ]
        });
        if(!foundUser){
            return res.status(400).json({message: 'User is not found'});
        }
        res.json(foundUser);
    },
    async createUser({body}, res){
        const user = await User.create(body);
        if(!user){
            return res.status(400).json({message: 'User could not be created'});
        }
        const token = signToken(user);
        res.json({token, user});
    },
    async login({body}, res){
        const user = await User.findOne({
            $or: [
                {full_name: body.full_name }, {email: body.email}
            ]
        });
        if(!user){
            return res.status(400).json({message: 'User is not found'});
        }
        const correctPassword = await user.isCorrectPassword(body.password);
        if(!correctPassword){
            return res.status(400).json({message: 'Incorrect Password'});
        }
        const token = signToken(user);
        res.json({token, user});
    }
}
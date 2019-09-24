const UserModel = require('../models/UserModel');

module.exports = {
  create: async (req, res) => {
    const {
      firstName,
      secondName,
      email,
      password,
      age,
      team
    } = req.body;
    try {
      const newUser = new UserModel({
        firstName,
        secondName,
        email,
        password,
        age,
        team
      });
      await newUser.save();
      return res.json({ success: true, result: newUser });
    } catch (e) {
      return res.json({ success: false, result: e.message });
    }
  },
  update: async (req, res) => {
    const {
      firstName,
      secondName,
      email,
      password,
      age,
      team
    } = req.body;
    try {
      let user = await UserModel.findById(req.params.id);
      if (!user) {
        return res.json({ success: false, result: 'User not found' })
      }
      const updatedUser = {
        firstName,
        secondName,
        email,
        password,
        age,
        team
      };
      user = await UserModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedUser },
        { new: true}
      );
      return res.json({ success: true, result: user });
    } catch (e) {
      return res.json({ success: false, result: e.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await UserModel.find();
      if (!users) {
        return res.json({ success: false, result: 'No users'});
      }
      return res.json({ success: true, result: users });
    } catch (e) {
      return res.json({ success: false, result: e.message })
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      if (!user) {
        return res.json({ success: false, result: 'User not found' });
      }
      await UserModel.findByIdAndDelete(req.params.id);
      return res.json({ success: true, result: 'User deleted' });
    } catch (e) {
      return res.json({ success: false, result: e.message });
    }
  }
};

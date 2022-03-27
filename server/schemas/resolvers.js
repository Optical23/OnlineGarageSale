const { AuthenticationError } = require('apollo-server-express');
const { User, Store, Order} = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('store')
                .populate('orders');
      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('store')
              .populate('orders');
        },
        user: async (parent, { full_name }) => {
            return User.findOne({ full_name })
              .select('-__v -password')
              .populate('store')
              .populate('orders');
        },
        store: async (parent, { _id }) => {
            return Store.findOne({_id});
        },
        stores: async () => {
            return Store.find()
        }
    },
    Mutations: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
        },
        addStore: async (parent, args, context) => {
            console.log("context is store" + context);
            if (context.user) {
              const Store = await Store.create({ ...args, owner: context.user.full_name });
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { Store: Store._id } },
                { new: true }
              );
      
              return Store;
            }
      
            throw new AuthenticationError('You need to be logged in!');
        },
        addItem: async (parent, args, context) => {
            if (context.user) {
              const updatedStore = await Store.findOneAndUpdate(
                { _id: storeId },
                { $push: { items: { ...args} } },
                { new: true, runValidators: true }
              );
      
              return updatedStore;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
        // addOrder: async (parent, args, context) => {
        //     console.log("context is order" + context);
        //     if (context.user) {
        //       const order = await Order.create({ ...args, buyer: context.user._id});
      
        //       await User.findByIdAndUpdate(
        //         { _id: context.user._id },
        //         { $push: { Store: order._id } },
        //         { new: true }
        //       );
      
        //       return Store;
        //     }
      
        //     throw new AuthenticationError('You need to be logged in!');
        // }
    }
};

module.exports = resolvers;
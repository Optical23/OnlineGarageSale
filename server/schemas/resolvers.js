const { AuthenticationError } = require('apollo-server-express');
const { User, Store, Item, Order} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('orders');
      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('orders');
        },
        user: async (parent, { _id }) => {
            return User.findOne({ _id })
              .select('-__v -password')
              .populate('orders');
        },
        store: async (parent, {_id }) => {
            return Store.findOne({_id}).populate('items');
        },
        stores: async () => {
            return Store.find().populate('items');
        },
        item: async (parent, {_id}) => {
          return Item.findOne({_id});
        }
    },
    Mutation: {
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
            if (context.user) {
              const store = await Store.create({ ...args, owner: context.user._id});
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { store: store._id }
              );
      
              return store;
            }
      
            throw new AuthenticationError('You need to be logged in!');
        },
        addItem: async (parent, args, context) => {
            if (context.user) {
              const item = await Item.create({...args})
              await Store.findOneAndUpdate(
                { _id: args.storeId},
                { $push: { items: item._id} },
                { new: true, runValidators: true }
              );
      
              return item;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
          deleteItems: async () => {
            return Item.deleteMany({});
          },
          deleteStores: async () => {
            return Store.deleteMany({});
          },
          clearStoreIds: async () => {
            return User.updateMany({},{store: null});
          }
    //     addOrder: async (parent, args, context) => {
    //         console.log("context is order" + context);
    //         if (context.user) {
    //           const order = await Order.create({ ...args, buyer: context.user._id});
      
    //           await User.findByIdAndUpdate(
    //             { _id: context.user._id },
    //             { $push: { Store: order._id } },
    //             { new: true }
    //           );
      
    //           return Store;
    //         }
      
    //         throw new AuthenticationError('You need to be logged in!');
    //     }
    }
};

module.exports = resolvers;
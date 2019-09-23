import Lynzi from '../../../models/Lynzi';

export default {
  Query: {
    getLynzi: (_, { id }) => Lynzi.findById(id),
    getLynzis: () => Lynzi.find({}),
  },
  Mutation: {
    createLynzi: (_, args) => Lynzi.create(args),
    updateLynzi: (_, { id, ...rest }) => Lynzi.findByIdAndUpdate(id, rest),
    deleteLynzi: async (_, { id }) => Lynzi.findByIdAndRemove(id),
  },
};

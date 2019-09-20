import Lynzi from '../../../models/Lynzi';

export default {
  Query: {
    getLynzis: () => Lynzi.find({}),
  },
};

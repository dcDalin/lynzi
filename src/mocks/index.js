import faker from 'faker';

import Lynzi from '../models/Lynzi';

const totalLynzis = 10;

export default async () => {
  await Lynzi.remove();

  // eslint-disable-next-line max-len
  Array.from({ length: totalLynzis }).forEach(async () => Lynzi.create({ lynzi: faker.lorem.paragraphs(1) }));
};

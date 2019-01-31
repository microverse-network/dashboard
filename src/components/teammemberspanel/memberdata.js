import faker from 'faker'

export default [
  { name: faker.name.findName(), role: 'Owner', avatar: faker.image.avatar() },
  {
    name: faker.name.findName(),
    role: 'Administrator',
    avatar: faker.image.avatar(),
  },
  {
    name: faker.name.findName(),
    role: 'Administrator',
    avatar: faker.image.avatar(),
  },
  { name: faker.name.findName(), role: 'User', avatar: faker.image.avatar() },
  { name: faker.name.findName(), role: 'User', avatar: faker.image.avatar() },
]

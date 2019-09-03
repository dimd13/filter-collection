const test = require('ava');
const { drop, keep } = require('../index');

const source = [
  { id: 1, name: 'John', slogan: 'be awesome', age: 13, hobby: ['football', 'socker', 'PC'] },
  { id: 2, name: 'Ian', slogan: 'be cool', age: 23, hobby: ['football', 'graffity'] },
  { id: 3, name: 'Roman', slogan: 'be happy', age: 48, hobby: ['snowboard', 'nodejs', 'PC'] },
];

const destination = [{ id: 1, name: 'John' }, { id: 2, name: 'Ian' }, { id: 3, name: 'Roman' }];

test('Drop "slogan", "age" and "hobby" properties', t => {
  const filtred = drop(source, ['slogan', 'age', 'hobby']);
  t.deepEqual(filtred, destination);
});

test('Keep only "id" and "name" properties', t => {
  const filtred = keep(source, ['id', 'name']);
  t.deepEqual(filtred, destination);
});

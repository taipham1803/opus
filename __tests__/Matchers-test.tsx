import 'react-native';

it('object assignment', () => {
  const data: any = {one: 1};
  data.two = 2;
  expect(data).toEqual({one: 1, two: 2});
});

it('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// Numbers
it('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4);
  expect(value).toEqual(4);
});

it('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// Strings

it('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

it('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

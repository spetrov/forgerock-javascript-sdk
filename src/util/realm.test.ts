import { getRealmUrlPath } from './realm';

describe('The realm utility', () => {
  it('creates the correct paths', () => {
    const tests = [
      [undefined, 'realms/root'],
      ['', 'realms/root'],
      ['root', 'realms/root'],
      ['foo', 'realms/root/realms/foo'],
      ['root/foo', 'realms/root/realms/foo'],
      ['foo/bar', 'realms/root/realms/foo/realms/bar'],
      ['foo/Bar', 'realms/root/realms/foo/realms/Bar'],
      ['/foo/baz/', 'realms/root/realms/foo/realms/baz'],
      [' /foo/baz ', 'realms/root/realms/foo/realms/baz'],
      [' foo / baz ', 'realms/root/realms/foo/realms/baz'],
      [' / foo / baz / ', 'realms/root/realms/foo/realms/baz'],
    ];

    tests.forEach((x) => {
      const urlPath = getRealmUrlPath(x[0]);
      expect(urlPath).toBe(x[1]);
    });
  });
});

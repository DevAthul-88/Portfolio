import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | stackoverflow-clone', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:stackoverflow-clone');
    assert.ok(route);
  });
});

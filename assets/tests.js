'use strict';

define('ipi-mdd-050-eval-web/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/artists.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/artists.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/artists/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/artists/detail.js should pass ESLint\n\n4:9 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/album.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/album.js should pass ESLint\n\n');
  });

  QUnit.test('models/artist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/artist.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/albums.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/albums.js should pass ESLint\n\n');
  });

  QUnit.test('routes/artist-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/artist-detail.js should pass ESLint\n\n10:18 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/artists.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/artists.js should pass ESLint\n\n');
  });

  QUnit.test('routes/artists/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/artists/detail.js should pass ESLint\n\n12:18 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/album.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/album.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass ESLint\n\n61:31 - \'options\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/artist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/artist.js should pass ESLint\n\n');
  });
});
define('ipi-mdd-050-eval-web/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ipi-mdd-050-eval-web/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ipi-mdd-050-eval-web/tests/helpers/start-app', 'ipi-mdd-050-eval-web/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ipi-mdd-050-eval-web/tests/helpers/resolver', ['exports', 'ipi-mdd-050-eval-web/resolver', 'ipi-mdd-050-eval-web/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('ipi-mdd-050-eval-web/tests/helpers/start-app', ['exports', 'ipi-mdd-050-eval-web/app', 'ipi-mdd-050-eval-web/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ipi-mdd-050-eval-web/tests/test-helper', ['ipi-mdd-050-eval-web/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('ipi-mdd-050-eval-web/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/artist-detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/artist-detail-test.js should pass ESLint\n\n');
  });
});
define('ipi-mdd-050-eval-web/tests/unit/routes/artist-detail-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:artist-detail', 'Unit | Route | artist detail', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('ipi-mdd-050-eval-web/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

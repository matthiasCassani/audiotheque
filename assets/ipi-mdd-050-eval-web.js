"use strict";



define("ipi-mdd-050-eval-web/adapters/application", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.RESTAdapter.extend({
    host: "http://localhost:5366",
    handleResponse: function handleResponse(status, headers, payload) {
      if (status !== 200 && payload && payload.error) {
        return payload;
      } else if (status === 0 && payload === "") {
        return { error: "Une erreur technique est survenue" };
      } else {
        return this._super.apply(this, arguments);
      }
    }
  });
});
define('ipi-mdd-050-eval-web/app', ['exports', 'ipi-mdd-050-eval-web/resolver', 'ember-load-initializers', 'ipi-mdd-050-eval-web/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ipi-mdd-050-eval-web/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define("ipi-mdd-050-eval-web/controllers/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    name: null,
    actions: {
      rechercher: function rechercher() {
        this.transitionToRoute("artists.index", { queryParams: { name: this.get("name"), page: 0, size: 10, sortProperty: "name", sortDirection: "ASC" } });
      }
    }
  });
});
define('ipi-mdd-050-eval-web/controllers/artists', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    queryParams: ['name', 'page', 'size', 'sortDirection', 'sortProperty'],
    page: 0,
    name: null,
    size: 10,
    sortDirection: "ASC",
    sortProperty: "name",
    actions: {
      sortBy: function sortBy(sortProperty) {
        this.transitionToRoute("artists.index", { queryParams: { name: this.get("name"), page: this.get("page"), size: this.get("size"), sortProperty: sortProperty, sortDirection: this.get("sortDirection") === "ASC" ? "DESC" : "ASC" } });
      }
    }
  });
});
define('ipi-mdd-050-eval-web/controllers/artists/detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    ajax: Ember.inject.service(),
    titleToAdd: null,
    actions: {
      save: function save() {
        var _this = this;

        this.get("model").save().then(function () {
          _this.toast.success('Modification effectuée !');
        }).catch(function (reason) {
          _this.toast.error("Erreur lors de la sauvegarde ! " + reason);
        });
      },
      delete: function _delete() {
        var _this2 = this;

        this.get("model").deleteRecord();
        this.get("model").save().then(function () {
          _this2.toast.success('Suppression effectuée !');
          _this2.transitionToRoute("artists.index");
        }).catch(function (reason) {
          _this2.toast.error("Erreur lors de la suppression ! " + reason);
        });
      },
      deleteAlbum: function deleteAlbum(id) {
        var _this3 = this;

        var album = this.store.peekRecord('album', id);
        album.deleteRecord();
        album.save().then(function () {
          _this3.toast.success('Suppression effectuée !');
        }).catch(function (reason) {
          _this3.toast.error("Erreur lors de la suppression ! " + reason);
        });
      },
      addAlbum: function addAlbum(title) {
        var _this4 = this;

        var album = this.store.createRecord("album", {
          title: title,
          artist: this.get("model")
        });
        album.save().then(function () {
          _this4.get("model").reload();
          _this4.toast.success('Ajout effectué !');
          _this4.set("titleToAdd", null);
        }).catch(function (reason) {
          _this4.toast.error("Erreur lors de l'ajout ! " + reason);
        });
      }
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/abs', ['exports', 'ember-math-helpers/helpers/abs'], function (exports, _abs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _abs.default;
    }
  });
  Object.defineProperty(exports, 'abs', {
    enumerable: true,
    get: function () {
      return _abs.abs;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/acos', ['exports', 'ember-math-helpers/helpers/acos'], function (exports, _acos) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _acos.default;
    }
  });
  Object.defineProperty(exports, 'acos', {
    enumerable: true,
    get: function () {
      return _acos.acos;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/acosh', ['exports', 'ember-math-helpers/helpers/acosh'], function (exports, _acosh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _acosh.default;
    }
  });
  Object.defineProperty(exports, 'acosh', {
    enumerable: true,
    get: function () {
      return _acosh.acosh;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/add', ['exports', 'ember-math-helpers/helpers/add'], function (exports, _add) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _add.default;
    }
  });
  Object.defineProperty(exports, 'add', {
    enumerable: true,
    get: function () {
      return _add.add;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/app-version', ['exports', 'ipi-mdd-050-eval-web/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ipi-mdd-050-eval-web/helpers/asin', ['exports', 'ember-math-helpers/helpers/asin'], function (exports, _asin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _asin.default;
    }
  });
  Object.defineProperty(exports, 'asin', {
    enumerable: true,
    get: function () {
      return _asin.asin;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/asinh', ['exports', 'ember-math-helpers/helpers/asinh'], function (exports, _asinh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _asinh.default;
    }
  });
  Object.defineProperty(exports, 'asinh', {
    enumerable: true,
    get: function () {
      return _asinh.asinh;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/atan', ['exports', 'ember-math-helpers/helpers/atan'], function (exports, _atan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  Object.defineProperty(exports, 'atan', {
    enumerable: true,
    get: function () {
      return _atan.atan;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/atan2', ['exports', 'ember-math-helpers/helpers/atan2'], function (exports, _atan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  Object.defineProperty(exports, 'atan2', {
    enumerable: true,
    get: function () {
      return _atan.atan2;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/atanh', ['exports', 'ember-math-helpers/helpers/atanh'], function (exports, _atanh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _atanh.default;
    }
  });
  Object.defineProperty(exports, 'atanh', {
    enumerable: true,
    get: function () {
      return _atanh.atanh;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/cbrt', ['exports', 'ember-math-helpers/helpers/cbrt'], function (exports, _cbrt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cbrt.default;
    }
  });
  Object.defineProperty(exports, 'cbrt', {
    enumerable: true,
    get: function () {
      return _cbrt.cbrt;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/ceil', ['exports', 'ember-math-helpers/helpers/ceil'], function (exports, _ceil) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ceil.default;
    }
  });
  Object.defineProperty(exports, 'ceil', {
    enumerable: true,
    get: function () {
      return _ceil.ceil;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/clz32', ['exports', 'ember-math-helpers/helpers/clz32'], function (exports, _clz) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clz.default;
    }
  });
  Object.defineProperty(exports, 'clz32', {
    enumerable: true,
    get: function () {
      return _clz.clz32;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/cos', ['exports', 'ember-math-helpers/helpers/cos'], function (exports, _cos) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cos.default;
    }
  });
  Object.defineProperty(exports, 'cos', {
    enumerable: true,
    get: function () {
      return _cos.cos;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/cosh', ['exports', 'ember-math-helpers/helpers/cosh'], function (exports, _cosh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cosh.default;
    }
  });
  Object.defineProperty(exports, 'cosh', {
    enumerable: true,
    get: function () {
      return _cosh.cosh;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/div', ['exports', 'ember-math-helpers/helpers/div'], function (exports, _div) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _div.default;
    }
  });
  Object.defineProperty(exports, 'div', {
    enumerable: true,
    get: function () {
      return _div.div;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/exp', ['exports', 'ember-math-helpers/helpers/exp'], function (exports, _exp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exp.default;
    }
  });
  Object.defineProperty(exports, 'exp', {
    enumerable: true,
    get: function () {
      return _exp.exp;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/expm1', ['exports', 'ember-math-helpers/helpers/expm1'], function (exports, _expm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _expm.default;
    }
  });
  Object.defineProperty(exports, 'expm1', {
    enumerable: true,
    get: function () {
      return _expm.expm1;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/floor', ['exports', 'ember-math-helpers/helpers/floor'], function (exports, _floor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _floor.default;
    }
  });
  Object.defineProperty(exports, 'floor', {
    enumerable: true,
    get: function () {
      return _floor.floor;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/fround', ['exports', 'ember-math-helpers/helpers/fround'], function (exports, _fround) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fround.default;
    }
  });
  Object.defineProperty(exports, 'fround', {
    enumerable: true,
    get: function () {
      return _fround.fround;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/gcd', ['exports', 'ember-math-helpers/helpers/gcd'], function (exports, _gcd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gcd.default;
    }
  });
  Object.defineProperty(exports, 'gcd', {
    enumerable: true,
    get: function () {
      return _gcd.gcd;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/hypot', ['exports', 'ember-math-helpers/helpers/hypot'], function (exports, _hypot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hypot.default;
    }
  });
  Object.defineProperty(exports, 'hypot', {
    enumerable: true,
    get: function () {
      return _hypot.hypot;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/imul', ['exports', 'ember-math-helpers/helpers/imul'], function (exports, _imul) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _imul.default;
    }
  });
  Object.defineProperty(exports, 'imul', {
    enumerable: true,
    get: function () {
      return _imul.imul;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/lcm', ['exports', 'ember-math-helpers/helpers/lcm'], function (exports, _lcm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lcm.default;
    }
  });
  Object.defineProperty(exports, 'lcm', {
    enumerable: true,
    get: function () {
      return _lcm.lcm;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/log-e', ['exports', 'ember-math-helpers/helpers/log-e'], function (exports, _logE) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _logE.default;
    }
  });
  Object.defineProperty(exports, 'logE', {
    enumerable: true,
    get: function () {
      return _logE.logE;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/log10', ['exports', 'ember-math-helpers/helpers/log10'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'log10', {
    enumerable: true,
    get: function () {
      return _log.log10;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/log1p', ['exports', 'ember-math-helpers/helpers/log1p'], function (exports, _log1p) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log1p.default;
    }
  });
  Object.defineProperty(exports, 'log1p', {
    enumerable: true,
    get: function () {
      return _log1p.log1p;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/log2', ['exports', 'ember-math-helpers/helpers/log2'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'log2', {
    enumerable: true,
    get: function () {
      return _log.log2;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/max', ['exports', 'ember-math-helpers/helpers/max'], function (exports, _max) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _max.default;
    }
  });
  Object.defineProperty(exports, 'max', {
    enumerable: true,
    get: function () {
      return _max.max;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/min', ['exports', 'ember-math-helpers/helpers/min'], function (exports, _min) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _min.default;
    }
  });
  Object.defineProperty(exports, 'min', {
    enumerable: true,
    get: function () {
      return _min.min;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/mod', ['exports', 'ember-math-helpers/helpers/mod'], function (exports, _mod) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mod.default;
    }
  });
  Object.defineProperty(exports, 'mod', {
    enumerable: true,
    get: function () {
      return _mod.mod;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/mult', ['exports', 'ember-math-helpers/helpers/mult'], function (exports, _mult) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mult.default;
    }
  });
  Object.defineProperty(exports, 'mult', {
    enumerable: true,
    get: function () {
      return _mult.mult;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ipi-mdd-050-eval-web/helpers/pow', ['exports', 'ember-math-helpers/helpers/pow'], function (exports, _pow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pow.default;
    }
  });
  Object.defineProperty(exports, 'pow', {
    enumerable: true,
    get: function () {
      return _pow.pow;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/random', ['exports', 'ember-math-helpers/helpers/random'], function (exports, _random) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _random.default;
    }
  });
  Object.defineProperty(exports, 'random', {
    enumerable: true,
    get: function () {
      return _random.random;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/round', ['exports', 'ember-math-helpers/helpers/round'], function (exports, _round) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _round.default;
    }
  });
  Object.defineProperty(exports, 'round', {
    enumerable: true,
    get: function () {
      return _round.round;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/sign', ['exports', 'ember-math-helpers/helpers/sign'], function (exports, _sign) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sign.default;
    }
  });
  Object.defineProperty(exports, 'sign', {
    enumerable: true,
    get: function () {
      return _sign.sign;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/sin', ['exports', 'ember-math-helpers/helpers/sin'], function (exports, _sin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sin.default;
    }
  });
  Object.defineProperty(exports, 'sin', {
    enumerable: true,
    get: function () {
      return _sin.sin;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ipi-mdd-050-eval-web/helpers/sqrt', ['exports', 'ember-math-helpers/helpers/sqrt'], function (exports, _sqrt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sqrt.default;
    }
  });
  Object.defineProperty(exports, 'sqrt', {
    enumerable: true,
    get: function () {
      return _sqrt.sqrt;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/sub', ['exports', 'ember-math-helpers/helpers/sub'], function (exports, _sub) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sub.default;
    }
  });
  Object.defineProperty(exports, 'sub', {
    enumerable: true,
    get: function () {
      return _sub.sub;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/tan', ['exports', 'ember-math-helpers/helpers/tan'], function (exports, _tan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tan.default;
    }
  });
  Object.defineProperty(exports, 'tan', {
    enumerable: true,
    get: function () {
      return _tan.tan;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/tanh', ['exports', 'ember-math-helpers/helpers/tanh'], function (exports, _tanh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tanh.default;
    }
  });
  Object.defineProperty(exports, 'tanh', {
    enumerable: true,
    get: function () {
      return _tanh.tanh;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/trunc', ['exports', 'ember-math-helpers/helpers/trunc'], function (exports, _trunc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trunc.default;
    }
  });
  Object.defineProperty(exports, 'trunc', {
    enumerable: true,
    get: function () {
      return _trunc.trunc;
    }
  });
});
define('ipi-mdd-050-eval-web/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('ipi-mdd-050-eval-web/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ipi-mdd-050-eval-web/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ipi-mdd-050-eval-web/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ipi-mdd-050-eval-web/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ipi-mdd-050-eval-web/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ipi-mdd-050-eval-web/initializers/export-application-global', ['exports', 'ipi-mdd-050-eval-web/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ipi-mdd-050-eval-web/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ipi-mdd-050-eval-web/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ipi-mdd-050-eval-web/initializers/toastr', ['exports', 'ember-toastr/initializers/toastr', 'ipi-mdd-050-eval-web/config/environment'], function (exports, _toastr, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var toastrOptions = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '4000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  };
  var config = _environment.default['ember-toastr'] || {
    injectAs: 'toast',
    toastrOptions: toastrOptions
  };

  exports.default = {
    name: 'ember-toastr',
    initialize: function initialize() {
      // support 1.x and 2.x
      var application = arguments[1] || arguments[0];

      if (!config.toastrOptions) {
        config.toastrOptions = toastrOptions;
      }

      if (!config.injectAs) {
        config.injectAs = 'toast';
      }

      (0, _toastr.initialize)(application, config);
    }
  };
});
define('ipi-mdd-050-eval-web/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ipi-mdd-050-eval-web/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define("ipi-mdd-050-eval-web/models/album", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr("string"),
    artist: _emberData.default.belongsTo("artist")
  });
});
define("ipi-mdd-050-eval-web/models/artist", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr("string"),
    albums: _emberData.default.hasMany("album")
  });
});
define('ipi-mdd-050-eval-web/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ipi-mdd-050-eval-web/router', ['exports', 'ipi-mdd-050-eval-web/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('artists', function () {
      this.route('detail', {
        path: '/detail/:artistId'
      });
    });
    this.route('albums');
    this.route('artist-detail', {
      path: '/detail/:artistId'
    });
  });

  exports.default = Router;
});
define('ipi-mdd-050-eval-web/routes/albums', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('ipi-mdd-050-eval-web/routes/artist-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    templateName: 'artists/detail',
    controllerName: 'artists/detail',
    model: function model(params) {
      return this.store.find('artist', params.artistId).catch();
    },

    actions: {
      error: function error(_error, transition) {
        var _this = this;

        if (_error.errors) {
          _error.errors.forEach(function (er) {
            _this.toast.error("Erreur " + er.status + ", " + er.detail);
          });
        }
      }
    }
  });
});
define("ipi-mdd-050-eval-web/routes/artists", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    page: 0,
    size: 10,
    sortDirection: "ASC",
    sortProperty: "name",
    name: null,
    queryParams: {
      name: {
        refreshModel: true
      },
      page: {
        refreshModel: true
      },
      size: {
        refreshModel: true
      },
      sortDirection: {
        refreshModel: true
      },
      sortProperty: {
        refreshModel: true
      }
    },
    model: function model(params) {
      if (params.name) {
        return this.store.query('artist', {
          name: params.name,
          page: params.page ? params.page : this.get("page"),
          size: params.size ? params.size : this.get("size"),
          sortDirection: params.sortDirection ? params.sortDirection : this.get("sortDirection"),
          sortProperty: params.sortProperty ? params.sortProperty : this.get("sortProperty")
        });
      }
      return this.store.query('artist', {
        page: params.page ? params.page : this.get("page"),
        size: params.size ? params.size : this.get("size"),
        sortDirection: params.sortDirection ? params.sortDirection : this.get("sortDirection"),
        sortProperty: params.sortProperty ? params.sortProperty : this.get("sortProperty")
      });
    }
  });
});
define("ipi-mdd-050-eval-web/routes/artists/detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {
      if (params.artistId === "new") {
        return this.store.createRecord("artist", { albums: [] });
      } else {
        return this.store.find('artist', params.artistId).catch();
      }
    },

    actions: {
      error: function error(_error, transition) {
        var _this = this;

        if (_error.errors) {
          _error.errors.forEach(function (er) {
            _this.toast.error("Erreur " + er.status + ", " + er.detail);
          });
        }
      }
    }
  });
});
define('ipi-mdd-050-eval-web/serializers/album', ['exports', 'ipi-mdd-050-eval-web/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    attrs: {
      artist: { embedded: 'always' }
    }
  });
});
define('ipi-mdd-050-eval-web/serializers/application', ['exports', 'ember-data', 'lodash'], function (exports, _emberData, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var wrapPayload = function wrapPayload(payload, typeName) {
    var wrapped = {};

    wrapped[typeName] = payload;

    return wrapped;
  };

  exports.default = _emberData.default.RESTSerializer.extend(_emberData.default.EmbeddedRecordsMixin, {
    normalizeResponse: function normalizeResponse(store, modelClass, payload, id, requestType) {
      var normalizedPayload = payload;

      // les pages et tableaux ne doivent pas être traitées ici
      if (payload.content === undefined && !_lodash.default.isArray(payload)) {
        normalizedPayload = wrapPayload(payload, modelClass.modelName);
      }

      if (payload.albums) {
        payload.relationships = {
          "albums": {
            "data": payload.albums
          }
        };
      }

      return this._super(store, modelClass, normalizedPayload, id, requestType);
    },
    normalizeArrayResponse: function normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
      var metadata = void 0;

      if (payload.content) {
        // paged response
        metadata = _lodash.default.omit(payload, 'content');
        payload = payload.content;
      }

      var wrapped = wrapPayload(payload, primaryModelClass.modelName + 's');
      if (metadata) {
        wrapped.meta = metadata;
      }

      return this._super(store, primaryModelClass, wrapped, id, requestType);
    },


    // Suppression du json root à la serialisation
    serializeIntoHash: function serializeIntoHash(hash, type, record, options) {
      Ember.merge(hash, this.serialize(record, options));
    },

    // Gestion des suppression de manière à ce que le retour en 200 ne pose pas de problème
    normalizeDeleteRecordResponse: function normalizeDeleteRecordResponse(store, primaryModelClass, payload, id, requestType) {
      var payload_ = {};
      payload_[primaryModelClass.modelName] = { id: id };
      return this._super(store, primaryModelClass, payload_, id, requestType);
    },


    serialize: function serialize(record, options) {
      var json = this._super.apply(this, arguments); // Get default serialization
      json = _lodash.default.omit(json, 'albums');

      json.id = parseInt(record.id); // tack on the id

      return json;
    }
  });
});
define('ipi-mdd-050-eval-web/serializers/artist', ['exports', 'ipi-mdd-050-eval-web/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    attrs: {
      albums: {
        embedded: 'always',
        serialize: 'id'
      }
    }
  });
});
define('ipi-mdd-050-eval-web/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('ipi-mdd-050-eval-web/services/toast', ['exports', 'ember-toastr/services/toast'], function (exports, _toast) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toast.default;
    }
  });
});
define("ipi-mdd-050-eval-web/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wAsECBzB", "block": "{\"symbols\":[],\"statements\":[[6,\"nav\"],[9,\"class\",\"navbar navbar-default\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container-fluid\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"navbar-toggle collapsed\"],[9,\"data-toggle\",\"collapse\"],[9,\"data-target\",\"#bs-example-navbar-collapse-1\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"sr-only\"],[7],[0,\"Toggle navigation\"],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[4,\"link-to\",[\"index\"],[[\"classNames\"],[\"navbar-brand\"]],{\"statements\":[[0,\"Librairie Audio\"]],\"parameters\":[]},null],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"collapse navbar-collapse\"],[9,\"id\",\"bs-example-navbar-collapse-1\"],[7],[0,\"\\n      \"],[6,\"ul\"],[9,\"class\",\"nav navbar-nav\"],[7],[0,\"\\n        \"],[6,\"li\"],[9,\"class\",\"active\"],[7],[4,\"link-to\",[\"artists.index\",[25,\"query-params\",null,[[\"name\"],[null]]]],[[\"classNames\"],[\"nav-link\"]],{\"statements\":[[0,\"Liste des artistes\"]],\"parameters\":[]},null],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"form\"],[9,\"class\",\"navbar-form navbar-right\"],[9,\"role\",\"search\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"value\",\"classNames\",\"placeholder\",\"type\"],[[20,[\"name\"]],\"form-control\",\"Rechercher par nom\",\"text\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],\"rechercher\"]],[7],[0,\"Rechercher\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ipi-mdd-050-eval-web/templates/application.hbs" } });
});
define("ipi-mdd-050-eval-web/templates/artists", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "e0x0+/+q", "block": "{\"symbols\":[\"artist\"],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"Liste des artistes\"],[8],[0,\"\\n    \"],[4,\"link-to\",[\"artists.detail\",\"new\"],[[\"classNames\"],[\"btn btn-primary\"]],{\"statements\":[[0,\"Nouvel artiste\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"table\"],[9,\"class\",\"table table-hover table-striped\"],[7],[0,\"\\n      \"],[6,\"thead\"],[7],[0,\"\\n      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"col\"],[3,\"action\",[[19,0,[]],\"sortBy\",\"name\"]],[7],[0,\"Nom\\n\"],[4,\"if\",[[25,\"eq\",[[20,[\"sortProperty\"]],\"name\"],null]],null,{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"sortDirection\"]],\"DESC\"],null]],null,{\"statements\":[[0,\"              \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-chevron-down\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-chevron-up\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"]],\"parameters\":[]},null],[8],[0,\"\\n        \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[7],[0,\"\\n          \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[1,[19,1,[\"name\"]],false],[8],[0,\"\\n          \"],[6,\"td\"],[7],[4,\"link-to\",[\"artists.detail\",[19,1,[\"id\"]]],[[\"classNames\"],[\"btn btn-primary\"]],{\"statements\":[[0,\"Détail\"]],\"parameters\":[]},null],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[6,\"p\"],[7],[0,\"Affichage des artistes \"],[1,[25,\"add\",[[25,\"mult\",[[20,[\"model\",\"meta\",\"number\"]],[20,[\"model\",\"meta\",\"size\"]]],null],1],null],false],[0,\" à \"],[1,[25,\"add\",[[25,\"mult\",[[20,[\"model\",\"meta\",\"number\"]],[20,[\"model\",\"meta\",\"size\"]]],null],[20,[\"model\",\"meta\",\"size\"]]],null],false],[0,\" sur un total de \"],[1,[20,[\"model\",\"meta\",\"totalElements\"]],false],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n        \"],[6,\"ul\"],[9,\"class\",\"pagination\"],[7],[0,\"\\n          \"],[6,\"li\"],[10,\"class\",[26,[[25,\"if\",[[25,\"eq\",[[20,[\"model\",\"meta\",\"number\"]],0],null],\"disabled\",\"\"],null]]]],[7],[0,\"\\n\"],[4,\"link-to\",[\"artists.index\",[25,\"query-params\",null,[[\"page\"],[[25,\"sub\",[[20,[\"model\",\"meta\",\"number\"]],1],null]]]]],null,{\"statements\":[[0,\"              «\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n          \"],[6,\"li\"],[7],[6,\"a\"],[9,\"href\",\"#\"],[7],[0,\"Page \"],[1,[25,\"add\",[[20,[\"model\",\"meta\",\"number\"]],1],null],false],[8],[8],[0,\"\\n          \"],[6,\"li\"],[10,\"class\",[26,[[25,\"if\",[[25,\"eq\",[[25,\"add\",[[20,[\"model\",\"meta\",\"number\"]],1],null],[20,[\"model\",\"meta\",\"totalPages\"]]],null],\"disabled\",\"\"],null]]]],[7],[0,\"\\n\"],[4,\"link-to\",[\"artists.index\",[25,\"query-params\",null,[[\"page\",\"size\",\"sortProperty\",\"sortDirection\"],[[25,\"add\",[[20,[\"model\",\"meta\",\"number\"]],1],null],[20,[\"size\"]],[20,[\"sortProperty\"]],[20,[\"sortDirection\"]]]]]],null,{\"statements\":[[0,\"              »\\n\"]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n        \"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "ipi-mdd-050-eval-web/templates/artists.hbs" } });
});
define("ipi-mdd-050-eval-web/templates/artists/detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YzquCvrr", "block": "{\"symbols\":[\"album\",\"album\"],\"statements\":[[6,\"h2\"],[7],[0,\"Détail de l'artiste \"],[1,[20,[\"model\",\"name\"]],false],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-lg-12\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n      \"],[6,\"label\"],[9,\"class\",\"form-control-label\"],[9,\"for\",\"name\"],[7],[0,\"Nom\"],[8],[0,\"\\n      \"],[1,[25,\"input\",null,[[\"type\",\"value\",\"classNames\",\"id\"],[\"text\",[20,[\"model\",\"name\"]],\"form-control\",\"name\"]]],false],[0,\"\\n\\n\\n\"],[4,\"if\",[[20,[\"model\",\"isNew\"]]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"label\"],[9,\"class\",\"form-control-label\"],[9,\"for\",\"performance\"],[7],[0,\"Albums\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-lg-10\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"albums\"]]],null,{\"statements\":[[0,\"              \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\" \"],[1,[19,2,[\"title\"]],false],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-lg-2 text-center\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"list-group text-center\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"albums\"]]],null,{\"statements\":[[0,\"              \"],[6,\"button\"],[9,\"class\",\"btn-danger list-group-item list-group-item-action\"],[3,\"action\",[[19,0,[]],\"deleteAlbum\",[19,1,[\"id\"]]]],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-remove\"],[7],[8],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"isNew\"]]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-lg-10\"],[7],[0,\"\\n          \"],[1,[25,\"input\",null,[[\"type\",\"value\",\"placeholder\",\"class\"],[\"text\",[20,[\"titleToAdd\"]],\"Ajouter un album...\",\"form-control\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-lg-2 text-center\"],[7],[0,\"\\n          \"],[6,\"button\"],[9,\"class\",\"btn-success list-group-item list-group-item-action\"],[3,\"action\",[[19,0,[]],\"addAlbum\",[20,[\"titleToAdd\"]]]],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-plus\"],[7],[8],[8],[0,\"\\n\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"button\"],[10,\"disabled\",[26,[[25,\"if\",[[20,[\"model\",\"hasDirtyAttributes\"]],\"\",\"disabled\"],null]]]],[9,\"class\",\"btn btn-primary\"],[3,\"action\",[[19,0,[]],\"save\"]],[7],[0,\"Enregistrer\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"isNew\"]]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"button\"],[9,\"class\",\"btn btn-danger\"],[3,\"action\",[[19,0,[]],\"delete\"]],[7],[0,\"Supprimer\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ipi-mdd-050-eval-web/templates/artists/detail.hbs" } });
});
define("ipi-mdd-050-eval-web/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iNPkFo4n", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbotron\"],[7],[0,\"\\n  \"],[6,\"h1\"],[7],[0,\"Bienvenue dans votre librairie audio !\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"Cette application web est paramétrée pour communiquer avec une API REST accessible à l'adresse \"],[6,\"code\"],[7],[0,\"http://localhost:5366\"],[8],[0,\". Vous trouverez\\n    \"],[6,\"a\"],[9,\"href\",\"https://raw.githubusercontent.com/pjvilloud/ipi-mdd-050-eval-web/master/public/database.sql\"],[7],[0,\"ici\"],[8],[0,\" le fichier \"],[6,\"code\"],[7],[0,\"database.sql\"],[8],[0,\" qu'il est nécessaire d'exécuter sur votre serveur MySQL. Vous devez créer le projet Java from scratch. Pour cela utilisez\\n    \"],[6,\"a\"],[9,\"href\",\"https://start.spring.io/\"],[7],[0,\"https://start.spring.io/\"],[8],[0,\" et regardez le schéma SQL pour créer les entités Java correspondantes.\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"Il est nécessaire de développer les services webs nécessaires pour que cette application fonctionne. Voici l'ensemble des fonctionnalités :\"],[8],[0,\"\\n  \"],[6,\"ul\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n    \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"list-group-item-heading\"],[7],[0,\"1 - Afficher un artiste\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"list-group-item-text\"],[7],[0,\"En cliquant \"],[4,\"link-to\",[\"artist-detail\",1],null,{\"statements\":[[0,\"ici\"]],\"parameters\":[]},null],[0,\", on peut afficher les informations basiques de l'artiste d'identifiant 1 (AC/DC). L'appel qui est effectué est \"],[6,\"code\"],[7],[0,\"GET /artists/1\"],[8],[0,\". En cliquant \"],[4,\"link-to\",[\"artist-detail\",0],null,{\"statements\":[[0,\"ici\"]],\"parameters\":[]},null],[0,\", on essaye d'afficher l'artiste d'identifiant 0 mais on doit obtenir une erreur 404 car il n'existe pas.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"list-group-item-heading\"],[7],[0,\"2 - Recherche par nom\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"list-group-item-text\"],[7],[0,\"Lorsqu'on recherche le nom \"],[6,\"em\"],[7],[0,\"aerosmith\"],[8],[0,\" dans la barre de recherche, on tombe bien sur \"],[6,\"em\"],[7],[0,\"Aerosmith\"],[8],[0,\" ainsi que sur \"],[6,\"em\"],[7],[0,\"Aerosmith & Sierra Leone's Refugee Allstars\"],[8],[0,\". L'appel qui est effectué est \"],[6,\"code\"],[7],[0,\"GET /artists?name=aerosmith\"],[8],[0,\". Lorsqu'on recherche un artiste inexistant commme \"],[6,\"em\"],[7],[0,\"ABCDEF\"],[8],[0,\", on obtient une liste vide.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"list-group-item-heading\"],[7],[0,\"3 - Liste des artistes\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"list-group-item-text\"],[7],[0,\"En cliquant \"],[4,\"link-to\",[\"artists.index\"],null,{\"statements\":[[0,\"ici\"]],\"parameters\":[]},null],[0,\", tous les artistes sont affichés, de manière paginée. Il est possible de changer de page en utilisant les boutons. L'appel effectué est \"],[6,\"code\"],[7],[0,\"GET /artists?page=0&size=10&sortProperty=name&sortDirection=ASC\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"list-group-item-heading\"],[7],[0,\"4 - Création d'un artiste\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"list-group-item-text\"],[7],[0,\"En cliquant \"],[4,\"link-to\",[\"artists.detail\",\"new\"],null,{\"statements\":[[0,\"ici\"]],\"parameters\":[]},null],[0,\" ou via le bouton \"],[6,\"em\"],[7],[0,\"Nouvel artiste\"],[8],[0,\", présent dans la liste des artistes, on accède au formulaire de création d'un artiste. L'appel qui est effectué est \"],[6,\"code\"],[7],[0,\"POST /artists\"],[8],[0,\" avec les données de l'artiste en JSON dans le champ \"],[6,\"code\"],[7],[0,\"data\"],[8],[0,\" de la requête. Créer un artiste qui existe déjà (même nom) lance une erreur 409.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"list-group-item-heading\"],[7],[0,\"5 - Modification d'un artiste\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"list-group-item-text\"],[7],[0,\"En cliquant \"],[4,\"link-to\",[\"artists.detail\",4],null,{\"statements\":[[0,\"ici\"]],\"parameters\":[]},null],[0,\" ou en consultant les détails de l'artiste \"],[6,\"em\"],[7],[0,\"Alanis Morissette\"],[8],[0,\" (id 4), il est possible de modifier les informations de l'artiste d'identifiant 4 qui sont persistées en base de donnée lorsqu'on clique sur le bouton \"],[6,\"em\"],[7],[0,\"Enregistrer\"],[8],[0,\". L'appel qui est effectué est \"],[6,\"code\"],[7],[0,\"PUT /artists/4\"],[8],[0,\" avec les données de l'artiste en JSON dans le champ \"],[6,\"code\"],[7],[0,\"data\"],[8],[0,\" de la requête.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"list-group-item-heading\"],[7],[0,\"6 - Suppression d'un artiste\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"list-group-item-text\"],[7],[0,\"En cliquant \"],[4,\"link-to\",[\"artists.detail\",5],null,{\"statements\":[[0,\"ici\"]],\"parameters\":[]},null],[0,\" ou en consultant les détails de l'artiste \"],[6,\"em\"],[7],[0,\"Alice In Chains\"],[8],[0,\" (id 5), il est possible de supprimer ce dernier lorsqu'on clique sur le bouton \"],[6,\"em\"],[7],[0,\"Supprimer\"],[8],[0,\". L'appel qui est effectué est \"],[6,\"code\"],[7],[0,\"DELETE /artists/5\"],[8],[0,\".\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"list-group-item-heading\"],[7],[0,\"7 - Ajout d'un album\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"list-group-item-text\"],[7],[0,\"En cliquant \"],[4,\"link-to\",[\"artists.detail\",5],null,{\"statements\":[[0,\"ici\"]],\"parameters\":[]},null],[0,\" ou en consultant les détails de l'artiste \"],[6,\"em\"],[7],[0,\"Alice In Chains\"],[8],[0,\" (id 5), il est possible d'ajouter un album en renseignant le champ et en cliquant sur le \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-plus\"],[7],[8],[0,\". L'appel qui est effectué est \"],[6,\"code\"],[7],[0,\"POST /albums\"],[8],[0,\".\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"\\n      \"],[6,\"h4\"],[9,\"class\",\"list-group-item-heading\"],[7],[0,\"8 - Suppression d'un album\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"list-group-item-text\"],[7],[0,\"En cliquant \"],[4,\"link-to\",[\"artists.detail\",5],null,{\"statements\":[[0,\"ici\"]],\"parameters\":[]},null],[0,\" ou en consultant les détails de l'artiste \"],[6,\"em\"],[7],[0,\"Alice In Chains\"],[8],[0,\" (id 5), il est possible de supprimer un album en cliquant sur le \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-minus\"],[7],[8],[0,\". L'appel qui est effectué est \"],[6,\"code\"],[7],[0,\"DELETE /albums/X\"],[8],[0,\" avec \"],[6,\"em\"],[7],[0,\"X\"],[8],[0,\" correspondant à l'identifiant technique de l'album.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "ipi-mdd-050-eval-web/templates/index.hbs" } });
});


define('ipi-mdd-050-eval-web/config/environment', [], function() {
  var prefix = 'ipi-mdd-050-eval-web';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ipi-mdd-050-eval-web/app")["default"].create({"name":"ipi-mdd-050-eval-web","version":"0.0.0+a80e5d96"});
}
//# sourceMappingURL=ipi-mdd-050-eval-web.map

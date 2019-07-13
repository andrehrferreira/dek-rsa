"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _nodeRsa = require("node-rsa");

var _nodeRsa2 = _interopRequireDefault(_nodeRsa);

var _scope = require("@dekproject/scope");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var env, key;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    try {
                        env = process.env;


                        if (_fs2.default.existsSync(_path2.default.join(process.cwd(), "application.key"))) {
                            key = new _nodeRsa2.default(_fs2.default.readFileSync(_path2.default.join(process.cwd(), "application.key")), "pkcs8-private-pem");

                            key.importKey(_fs2.default.readFileSync(_path2.default.join(process.cwd(), "application.public")), "pkcs8-public-pem");
                        } else {
                            key = new _nodeRsa2.default({ b: 1024 });

                            _fs2.default.writeFileSync(_path2.default.join(process.cwd(), "application.public"), key.exportKey("pkcs8-public-pem"));
                            _fs2.default.writeFileSync(_path2.default.join(process.cwd(), "application.key"), key.exportKey("pkcs8-private-pem"));
                        }

                        if (process.env.DEBUG == 'true') console.log("[ RSA ] - RSA successfully signed");

                        _scope.$.set("rsa", key);
                    } catch (e) {
                        console.log("[ RSA ] - " + e.message);
                        reject();
                    }

                case 1:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, undefined);
}));
//# sourceMappingURL=index.js.map
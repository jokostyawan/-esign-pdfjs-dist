/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pdfjs-dist/image_decoders/pdf.image_decoders", [], factory);
	else if(typeof exports === 'object')
		exports["pdfjs-dist/image_decoders/pdf.image_decoders"] = factory();
	else
		root["pdfjs-dist/image_decoders/pdf.image_decoders"] = root.pdfjsImageDecoders = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "getVerbosityLevel", ({
  enumerable: true,
  get: function get() {
    return _util.getVerbosityLevel;
  }
}));
Object.defineProperty(exports, "setVerbosityLevel", ({
  enumerable: true,
  get: function get() {
    return _util.setVerbosityLevel;
  }
}));
Object.defineProperty(exports, "Jbig2mage", ({
  enumerable: true,
  get: function get() {
    return _jbig.Jbig2mage;
  }
}));
Object.defineProperty(exports, "JpegImage", ({
  enumerable: true,
  get: function get() {
    return _jpg.JpegImage;
  }
}));
Object.defineProperty(exports, "JpxImage", ({
  enumerable: true,
  get: function get() {
    return _jpx.JpxImage;
  }
}));

var _util = __w_pdfjs_require__(1);

var _jbig = __w_pdfjs_require__(93);

var _jpg = __w_pdfjs_require__(100);

var _jpx = __w_pdfjs_require__(101);

var pdfjsVersion = '2.7.572';
var pdfjsBuild = 'ee20c380e';

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayByteLength = arrayByteLength;
exports.arraysToBytes = arraysToBytes;
exports.assert = assert;
exports.bytesToString = bytesToString;
exports.createPromiseCapability = createPromiseCapability;
exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
exports.encodeToXmlString = encodeToXmlString;
exports.escapeString = escapeString;
exports.getModificationDate = getModificationDate;
exports.getVerbosityLevel = getVerbosityLevel;
exports.info = info;
exports.isArrayBuffer = isArrayBuffer;
exports.isArrayEqual = isArrayEqual;
exports.isAscii = isAscii;
exports.isBool = isBool;
exports.isNum = isNum;
exports.isSameOrigin = isSameOrigin;
exports.isString = isString;
exports.objectFromEntries = objectFromEntries;
exports.objectSize = objectSize;
exports.removeNullCharacters = removeNullCharacters;
exports.setVerbosityLevel = setVerbosityLevel;
exports.shadow = shadow;
exports.string32 = string32;
exports.stringToBytes = stringToBytes;
exports.stringToPDFString = stringToPDFString;
exports.stringToUTF16BEString = stringToUTF16BEString;
exports.stringToUTF8String = stringToUTF8String;
exports.unreachable = unreachable;
exports.utf8StringToString = utf8StringToString;
exports.warn = warn;
exports.VerbosityLevel = exports.Util = exports.UNSUPPORTED_FEATURES = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.PermissionFlag = exports.PasswordResponses = exports.PasswordException = exports.PageActionEventType = exports.OPS = exports.MissingPDFException = exports.IsLittleEndianCached = exports.IsEvalSupportedCached = exports.InvalidPDFException = exports.ImageKind = exports.IDENTITY_MATRIX = exports.FormatError = exports.FontType = exports.FONT_IDENTITY_MATRIX = exports.DocumentActionEventType = exports.createObjectURL = exports.CMapCompressionType = exports.BaseException = exports.AnnotationType = exports.AnnotationStateModelType = exports.AnnotationReviewState = exports.AnnotationReplyType = exports.AnnotationMarkedState = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.AnnotationActionEventType = exports.AbortException = void 0;

__w_pdfjs_require__(2);

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
var PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800
};
exports.PermissionFlag = PermissionFlag;
var TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
exports.TextRenderingMode = TextRenderingMode;
var ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
exports.ImageKind = ImageKind;
var AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
exports.AnnotationType = AnnotationType;
var AnnotationStateModelType = {
  MARKED: "Marked",
  REVIEW: "Review"
};
exports.AnnotationStateModelType = AnnotationStateModelType;
var AnnotationMarkedState = {
  MARKED: "Marked",
  UNMARKED: "Unmarked"
};
exports.AnnotationMarkedState = AnnotationMarkedState;
var AnnotationReviewState = {
  ACCEPTED: "Accepted",
  REJECTED: "Rejected",
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
  NONE: "None"
};
exports.AnnotationReviewState = AnnotationReviewState;
var AnnotationReplyType = {
  GROUP: "Group",
  REPLY: "R"
};
exports.AnnotationReplyType = AnnotationReplyType;
var AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
exports.AnnotationFlag = AnnotationFlag;
var AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
exports.AnnotationFieldFlag = AnnotationFieldFlag;
var AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
var AnnotationActionEventType = {
  E: "Mouse Enter",
  X: "Mouse Exit",
  D: "Mouse Down",
  U: "Mouse Up",
  Fo: "Focus",
  Bl: "Blur",
  PO: "PageOpen",
  PC: "PageClose",
  PV: "PageVisible",
  PI: "PageInvisible",
  K: "Keystroke",
  F: "Format",
  V: "Validate",
  C: "Calculate"
};
exports.AnnotationActionEventType = AnnotationActionEventType;
var DocumentActionEventType = {
  WC: "WillClose",
  WS: "WillSave",
  DS: "DidSave",
  WP: "WillPrint",
  DP: "DidPrint"
};
exports.DocumentActionEventType = DocumentActionEventType;
var PageActionEventType = {
  O: "PageOpen",
  C: "PageClose"
};
exports.PageActionEventType = PageActionEventType;
var StreamType = {
  UNKNOWN: "UNKNOWN",
  FLATE: "FLATE",
  LZW: "LZW",
  DCT: "DCT",
  JPX: "JPX",
  JBIG: "JBIG",
  A85: "A85",
  AHX: "AHX",
  CCF: "CCF",
  RLX: "RLX"
};
exports.StreamType = StreamType;
var FontType = {
  UNKNOWN: "UNKNOWN",
  TYPE1: "TYPE1",
  TYPE1C: "TYPE1C",
  CIDFONTTYPE0: "CIDFONTTYPE0",
  CIDFONTTYPE0C: "CIDFONTTYPE0C",
  TRUETYPE: "TRUETYPE",
  CIDFONTTYPE2: "CIDFONTTYPE2",
  TYPE3: "TYPE3",
  OPENTYPE: "OPENTYPE",
  TYPE0: "TYPE0",
  MMTYPE1: "MMTYPE1"
};
exports.FontType = FontType;
var VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
exports.VerbosityLevel = VerbosityLevel;
var CMapCompressionType = {
  NONE: 0,
  BINARY: 1,
  STREAM: 2
};
exports.CMapCompressionType = CMapCompressionType;
var OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotations: 78,
  endAnnotations: 79,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintJpegXObject: 82,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
};
exports.OPS = OPS;
var UNSUPPORTED_FEATURES = {
  unknown: "unknown",
  forms: "forms",
  javaScript: "javaScript",
  smask: "smask",
  shadingPattern: "shadingPattern",
  font: "font",
  errorTilingPattern: "errorTilingPattern",
  errorExtGState: "errorExtGState",
  errorXObject: "errorXObject",
  errorFontLoadType3: "errorFontLoadType3",
  errorFontState: "errorFontState",
  errorFontMissing: "errorFontMissing",
  errorFontTranslate: "errorFontTranslate",
  errorColorSpace: "errorColorSpace",
  errorOperatorList: "errorOperatorList",
  errorFontToUnicode: "errorFontToUnicode",
  errorFontLoadNative: "errorFontLoadNative",
  errorFontGetPath: "errorFontGetPath",
  errorMarkedContent: "errorMarkedContent"
};
exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
exports.PasswordResponses = PasswordResponses;
var verbosity = VerbosityLevel.WARNINGS;

function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}

function getVerbosityLevel() {
  return verbosity;
}

function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log("Info: ".concat(msg));
  }
}

function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log("Warning: ".concat(msg));
  }
}

function unreachable(msg) {
  throw new Error(msg);
}

function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}

function isSameOrigin(baseUrl, otherUrl) {
  var base;

  try {
    base = new URL(baseUrl);

    if (!base.origin || base.origin === "null") {
      return false;
    }
  } catch (e) {
    return false;
  }

  var other = new URL(otherUrl, base);
  return base.origin === other.origin;
}

function _isValidProtocol(url) {
  if (!url) {
    return false;
  }

  switch (url.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;

    default:
      return false;
  }
}

function createValidAbsoluteUrl(url, baseUrl) {
  if (!url) {
    return null;
  }

  try {
    var absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);

    if (_isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch (ex) {}

  return null;
}

function shadow(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    value: value,
    enumerable: true,
    configurable: true,
    writable: false
  });
  return value;
}

var BaseException = function BaseExceptionClosure() {
  function BaseException(message) {
    if (this.constructor === BaseException) {
      unreachable("Cannot initialize BaseException.");
    }

    this.message = message;
    this.name = this.constructor.name;
  }

  BaseException.prototype = new Error();
  BaseException.constructor = BaseException;
  return BaseException;
}();

exports.BaseException = BaseException;

var PasswordException = /*#__PURE__*/function (_BaseException) {
  _inherits(PasswordException, _BaseException);

  var _super = _createSuper(PasswordException);

  function PasswordException(msg, code) {
    var _this;

    _classCallCheck(this, PasswordException);

    _this = _super.call(this, msg);
    _this.code = code;
    return _this;
  }

  return PasswordException;
}(BaseException);

exports.PasswordException = PasswordException;

var UnknownErrorException = /*#__PURE__*/function (_BaseException2) {
  _inherits(UnknownErrorException, _BaseException2);

  var _super2 = _createSuper(UnknownErrorException);

  function UnknownErrorException(msg, details) {
    var _this2;

    _classCallCheck(this, UnknownErrorException);

    _this2 = _super2.call(this, msg);
    _this2.details = details;
    return _this2;
  }

  return UnknownErrorException;
}(BaseException);

exports.UnknownErrorException = UnknownErrorException;

var InvalidPDFException = /*#__PURE__*/function (_BaseException3) {
  _inherits(InvalidPDFException, _BaseException3);

  var _super3 = _createSuper(InvalidPDFException);

  function InvalidPDFException() {
    _classCallCheck(this, InvalidPDFException);

    return _super3.apply(this, arguments);
  }

  return InvalidPDFException;
}(BaseException);

exports.InvalidPDFException = InvalidPDFException;

var MissingPDFException = /*#__PURE__*/function (_BaseException4) {
  _inherits(MissingPDFException, _BaseException4);

  var _super4 = _createSuper(MissingPDFException);

  function MissingPDFException() {
    _classCallCheck(this, MissingPDFException);

    return _super4.apply(this, arguments);
  }

  return MissingPDFException;
}(BaseException);

exports.MissingPDFException = MissingPDFException;

var UnexpectedResponseException = /*#__PURE__*/function (_BaseException5) {
  _inherits(UnexpectedResponseException, _BaseException5);

  var _super5 = _createSuper(UnexpectedResponseException);

  function UnexpectedResponseException(msg, status) {
    var _this3;

    _classCallCheck(this, UnexpectedResponseException);

    _this3 = _super5.call(this, msg);
    _this3.status = status;
    return _this3;
  }

  return UnexpectedResponseException;
}(BaseException);

exports.UnexpectedResponseException = UnexpectedResponseException;

var FormatError = /*#__PURE__*/function (_BaseException6) {
  _inherits(FormatError, _BaseException6);

  var _super6 = _createSuper(FormatError);

  function FormatError() {
    _classCallCheck(this, FormatError);

    return _super6.apply(this, arguments);
  }

  return FormatError;
}(BaseException);

exports.FormatError = FormatError;

var AbortException = /*#__PURE__*/function (_BaseException7) {
  _inherits(AbortException, _BaseException7);

  var _super7 = _createSuper(AbortException);

  function AbortException() {
    _classCallCheck(this, AbortException);

    return _super7.apply(this, arguments);
  }

  return AbortException;
}(BaseException);

exports.AbortException = AbortException;
var NullCharactersRegExp = /\x00/g;

function removeNullCharacters(str) {
  if (typeof str !== "string") {
    warn("The argument for removeNullCharacters must be a string.");
    return str;
  }

  return str.replace(NullCharactersRegExp, "");
}

function bytesToString(bytes) {
  assert(bytes !== null && _typeof(bytes) === "object" && bytes.length !== undefined, "Invalid argument for bytesToString");
  var length = bytes.length;
  var MAX_ARGUMENT_COUNT = 8192;

  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }

  var strBuf = [];

  for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    var chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }

  return strBuf.join("");
}

function stringToBytes(str) {
  assert(typeof str === "string", "Invalid argument for stringToBytes");
  var length = str.length;
  var bytes = new Uint8Array(length);

  for (var i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xff;
  }

  return bytes;
}

function arrayByteLength(arr) {
  if (arr.length !== undefined) {
    return arr.length;
  }

  assert(arr.byteLength !== undefined, "arrayByteLength - invalid argument.");
  return arr.byteLength;
}

function arraysToBytes(arr) {
  var length = arr.length;

  if (length === 1 && arr[0] instanceof Uint8Array) {
    return arr[0];
  }

  var resultLength = 0;

  for (var i = 0; i < length; i++) {
    resultLength += arrayByteLength(arr[i]);
  }

  var pos = 0;
  var data = new Uint8Array(resultLength);

  for (var _i = 0; _i < length; _i++) {
    var item = arr[_i];

    if (!(item instanceof Uint8Array)) {
      if (typeof item === "string") {
        item = stringToBytes(item);
      } else {
        item = new Uint8Array(item);
      }
    }

    var itemLength = item.byteLength;
    data.set(item, pos);
    pos += itemLength;
  }

  return data;
}

function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}

function objectSize(obj) {
  return Object.keys(obj).length;
}

function objectFromEntries(iterable) {
  return Object.assign(Object.create(null), Object.fromEntries(iterable));
}

function isLittleEndian() {
  var buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  var view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}

var IsLittleEndianCached = {
  get value() {
    return shadow(this, "value", isLittleEndian());
  }

};
exports.IsLittleEndianCached = IsLittleEndianCached;

function isEvalSupported() {
  try {
    new Function("");
    return true;
  } catch (e) {
    return false;
  }
}

var IsEvalSupportedCached = {
  get value() {
    return shadow(this, "value", isEvalSupported());
  }

};
exports.IsEvalSupportedCached = IsEvalSupportedCached;

var hexNumbers = _toConsumableArray(Array(256).keys()).map(function (n) {
  return n.toString(16).padStart(2, "0");
});

var Util = /*#__PURE__*/function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "makeHexColor",
    value: function makeHexColor(r, g, b) {
      return "#".concat(hexNumbers[r]).concat(hexNumbers[g]).concat(hexNumbers[b]);
    }
  }, {
    key: "transform",
    value: function transform(m1, m2) {
      return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(p, m) {
      var xt = p[0] * m[0] + p[1] * m[2] + m[4];
      var yt = p[0] * m[1] + p[1] * m[3] + m[5];
      return [xt, yt];
    }
  }, {
    key: "applyInverseTransform",
    value: function applyInverseTransform(p, m) {
      var d = m[0] * m[3] - m[1] * m[2];
      var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
      var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
      return [xt, yt];
    }
  }, {
    key: "getAxialAlignedBoundingBox",
    value: function getAxialAlignedBoundingBox(r, m) {
      var p1 = Util.applyTransform(r, m);
      var p2 = Util.applyTransform(r.slice(2, 4), m);
      var p3 = Util.applyTransform([r[0], r[3]], m);
      var p4 = Util.applyTransform([r[2], r[1]], m);
      return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
    }
  }, {
    key: "inverseTransform",
    value: function inverseTransform(m) {
      var d = m[0] * m[3] - m[1] * m[2];
      return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
    }
  }, {
    key: "apply3dTransform",
    value: function apply3dTransform(m, v) {
      return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
    }
  }, {
    key: "singularValueDecompose2dScale",
    value: function singularValueDecompose2dScale(m) {
      var transpose = [m[0], m[2], m[1], m[3]];
      var a = m[0] * transpose[0] + m[1] * transpose[2];
      var b = m[0] * transpose[1] + m[1] * transpose[3];
      var c = m[2] * transpose[0] + m[3] * transpose[2];
      var d = m[2] * transpose[1] + m[3] * transpose[3];
      var first = (a + d) / 2;
      var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
      var sx = first + second || 1;
      var sy = first - second || 1;
      return [Math.sqrt(sx), Math.sqrt(sy)];
    }
  }, {
    key: "normalizeRect",
    value: function normalizeRect(rect) {
      var r = rect.slice(0);

      if (rect[0] > rect[2]) {
        r[0] = rect[2];
        r[2] = rect[0];
      }

      if (rect[1] > rect[3]) {
        r[1] = rect[3];
        r[3] = rect[1];
      }

      return r;
    }
  }, {
    key: "intersect",
    value: function intersect(rect1, rect2) {
      function compare(a, b) {
        return a - b;
      }

      var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare);
      var orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare);
      var result = [];
      rect1 = Util.normalizeRect(rect1);
      rect2 = Util.normalizeRect(rect2);

      if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
        result[0] = orderedX[1];
        result[2] = orderedX[2];
      } else {
        return null;
      }

      if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
        result[1] = orderedY[1];
        result[3] = orderedY[2];
      } else {
        return null;
      }

      return result;
    }
  }]);

  return Util;
}();

exports.Util = Util;
var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];

function stringToPDFString(str) {
  var length = str.length,
      strBuf = [];

  if (str[0] === "\xFE" && str[1] === "\xFF") {
    for (var i = 2; i < length; i += 2) {
      strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
    }
  } else if (str[0] === "\xFF" && str[1] === "\xFE") {
    for (var _i2 = 2; _i2 < length; _i2 += 2) {
      strBuf.push(String.fromCharCode(str.charCodeAt(_i2 + 1) << 8 | str.charCodeAt(_i2)));
    }
  } else {
    for (var _i3 = 0; _i3 < length; ++_i3) {
      var code = PDFStringTranslateTable[str.charCodeAt(_i3)];
      strBuf.push(code ? String.fromCharCode(code) : str.charAt(_i3));
    }
  }

  return strBuf.join("");
}

function escapeString(str) {
  return str.replace(/([()\\\n\r])/g, function (match) {
    if (match === "\n") {
      return "\\n";
    } else if (match === "\r") {
      return "\\r";
    }

    return "\\".concat(match);
  });
}

function isAscii(str) {
  return /^[\x00-\x7F]*$/.test(str);
}

function stringToUTF16BEString(str) {
  var buf = ["\xFE\xFF"];

  for (var i = 0, ii = str.length; i < ii; i++) {
    var _char = str.charCodeAt(i);

    buf.push(String.fromCharCode(_char >> 8 & 0xff));
    buf.push(String.fromCharCode(_char & 0xff));
  }

  return buf.join("");
}

function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}

function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}

function isBool(v) {
  return typeof v === "boolean";
}

function isNum(v) {
  return typeof v === "number";
}

function isString(v) {
  return typeof v === "string";
}

function isArrayBuffer(v) {
  return _typeof(v) === "object" && v !== null && v.byteLength !== undefined;
}

function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every(function (element, index) {
    return element === arr2[index];
  });
}

function getModificationDate() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
  return buffer.join("");
}

function createPromiseCapability() {
  var capability = Object.create(null);
  var isSettled = false;
  Object.defineProperty(capability, "settled", {
    get: function get() {
      return isSettled;
    }
  });
  capability.promise = new Promise(function (resolve, reject) {
    capability.resolve = function (data) {
      isSettled = true;
      resolve(data);
    };

    capability.reject = function (reason) {
      isSettled = true;
      reject(reason);
    };
  });
  return capability;
}

var createObjectURL = function createObjectURLClosure() {
  var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return function createObjectURL(data, contentType) {
    var forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!forceDataSchema && URL.createObjectURL) {
      var blob = new Blob([data], {
        type: contentType
      });
      return URL.createObjectURL(blob);
    }

    var buffer = "data:".concat(contentType, ";base64,");

    for (var i = 0, ii = data.length; i < ii; i += 3) {
      var b1 = data[i] & 0xff;
      var b2 = data[i + 1] & 0xff;
      var b3 = data[i + 2] & 0xff;
      var d1 = b1 >> 2,
          d2 = (b1 & 3) << 4 | b2 >> 4;
      var d3 = i + 1 < ii ? (b2 & 0xf) << 2 | b3 >> 6 : 64;
      var d4 = i + 2 < ii ? b3 & 0x3f : 64;
      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
    }

    return buffer;
  };
}();

exports.createObjectURL = createObjectURL;
var XMLEntities = {
  0x3c: "&lt;",
  0x3e: "&gt;",
  0x26: "&amp;",
  0x22: "&quot;",
  0x27: "&apos;"
};

function encodeToXmlString(str) {
  var buffer = [];
  var start = 0;

  for (var i = 0, ii = str.length; i < ii; i++) {
    var _char2 = str.codePointAt(i);

    if (0x20 <= _char2 && _char2 <= 0x7e) {
      var entity = XMLEntities[_char2];

      if (entity) {
        if (start < i) {
          buffer.push(str.substring(start, i));
        }

        buffer.push(entity);
        start = i + 1;
      }
    } else {
      if (start < i) {
        buffer.push(str.substring(start, i));
      }

      buffer.push("&#x".concat(_char2.toString(16).toUpperCase(), ";"));

      if (_char2 > 0xd7ff && (_char2 < 0xe000 || _char2 > 0xfffd)) {
        i++;
      }

      start = i + 1;
    }
  }

  if (buffer.length === 0) {
    return str;
  }

  if (start < str.length) {
    buffer.push(str.substring(start, str.length));
  }

  return buffer.join("");
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";


var _is_node = __w_pdfjs_require__(3);

if (typeof globalThis === "undefined" || !globalThis._pdfjsCompatibilityChecked) {
  if (typeof globalThis === "undefined" || globalThis.Math !== Math) {
    globalThis = __w_pdfjs_require__(4);
  }

  globalThis._pdfjsCompatibilityChecked = true;

  (function checkNodeBtoa() {
    if (globalThis.btoa || !_is_node.isNodeJS) {
      return;
    }

    globalThis.btoa = function (chars) {
      return Buffer.from(chars, "binary").toString("base64");
    };
  })();

  (function checkNodeAtob() {
    if (globalThis.atob || !_is_node.isNodeJS) {
      return;
    }

    globalThis.atob = function (input) {
      return Buffer.from(input, "base64").toString("binary");
    };
  })();

  (function checkObjectFromEntries() {
    if (Object.fromEntries) {
      return;
    }

    __w_pdfjs_require__(49);
  })();

  (function checkPromise() {})();

  (function checkURL() {})();

  (function checkReadableStream() {})();

  (function checkStringPadStart() {
    if (String.prototype.padStart) {
      return;
    }

    __w_pdfjs_require__(79);
  })();

  (function checkStringPadEnd() {
    if (String.prototype.padEnd) {
      return;
    }

    __w_pdfjs_require__(86);
  })();

  (function checkObjectValues() {
    if (Object.values) {
      return;
    }

    Object.values = __w_pdfjs_require__(88);
  })();

  (function checkObjectEntries() {
    if (Object.entries) {
      return;
    }

    Object.entries = __w_pdfjs_require__(91);
  })();
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNodeJS = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isNodeJS = (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
exports.isNodeJS = isNodeJS;

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

__w_pdfjs_require__(5);
module.exports = __w_pdfjs_require__(7);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

var $ = __w_pdfjs_require__(6);
var global = __w_pdfjs_require__(7);
$({ global: true }, { globalThis: global });

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var global = __w_pdfjs_require__(7);
var getOwnPropertyDescriptor = __w_pdfjs_require__(8).f;
var createNonEnumerableProperty = __w_pdfjs_require__(22);
var redefine = __w_pdfjs_require__(25);
var setGlobal = __w_pdfjs_require__(26);
var copyConstructorProperties = __w_pdfjs_require__(36);
var isForced = __w_pdfjs_require__(48);
module.exports = function (options, source) {
 var TARGET = options.target;
 var GLOBAL = options.global;
 var STATIC = options.stat;
 var FORCED, target, key, targetProperty, sourceProperty, descriptor;
 if (GLOBAL) {
  target = global;
 } else if (STATIC) {
  target = global[TARGET] || setGlobal(TARGET, {});
 } else {
  target = (global[TARGET] || {}).prototype;
 }
 if (target)
  for (key in source) {
   sourceProperty = source[key];
   if (options.noTargetGet) {
    descriptor = getOwnPropertyDescriptor(target, key);
    targetProperty = descriptor && descriptor.value;
   } else
    targetProperty = target[key];
   FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
   if (!FORCED && targetProperty !== undefined) {
    if (typeof sourceProperty === typeof targetProperty)
     continue;
    copyConstructorProperties(sourceProperty, targetProperty);
   }
   if (options.sham || targetProperty && targetProperty.sham) {
    createNonEnumerableProperty(sourceProperty, 'sham', true);
   }
   redefine(target, key, sourceProperty, options);
  }
};

/***/ }),
/* 7 */
/***/ ((module) => {

var check = function (it) {
 return it && it.Math == Math && it;
};
module.exports = check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || function () {
 return this;
}() || Function('return this')();

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

var DESCRIPTORS = __w_pdfjs_require__(9);
var propertyIsEnumerableModule = __w_pdfjs_require__(11);
var createPropertyDescriptor = __w_pdfjs_require__(12);
var toIndexedObject = __w_pdfjs_require__(13);
var toPrimitive = __w_pdfjs_require__(17);
var has = __w_pdfjs_require__(19);
var IE8_DOM_DEFINE = __w_pdfjs_require__(20);
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
 O = toIndexedObject(O);
 P = toPrimitive(P, true);
 if (IE8_DOM_DEFINE)
  try {
   return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) {
  }
 if (has(O, P))
  return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var fails = __w_pdfjs_require__(10);
module.exports = !fails(function () {
 return Object.defineProperty({}, 1, {
  get: function () {
   return 7;
  }
 })[1] != 7;
});

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = function (exec) {
 try {
  return !!exec();
 } catch (error) {
  return true;
 }
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
 var descriptor = getOwnPropertyDescriptor(this, V);
 return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = function (bitmap, value) {
 return {
  enumerable: !(bitmap & 1),
  configurable: !(bitmap & 2),
  writable: !(bitmap & 4),
  value: value
 };
};

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var IndexedObject = __w_pdfjs_require__(14);
var requireObjectCoercible = __w_pdfjs_require__(16);
module.exports = function (it) {
 return IndexedObject(requireObjectCoercible(it));
};

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var fails = __w_pdfjs_require__(10);
var classof = __w_pdfjs_require__(15);
var split = ''.split;
module.exports = fails(function () {
 return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
 return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),
/* 15 */
/***/ ((module) => {

var toString = {}.toString;
module.exports = function (it) {
 return toString.call(it).slice(8, -1);
};

/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = function (it) {
 if (it == undefined)
  throw TypeError("Can't call method on " + it);
 return it;
};

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var isObject = __w_pdfjs_require__(18);
module.exports = function (input, PREFERRED_STRING) {
 if (!isObject(input))
  return input;
 var fn, val;
 if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input)))
  return val;
 if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input)))
  return val;
 if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input)))
  return val;
 throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = function (it) {
 return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 19 */
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
 return hasOwnProperty.call(it, key);
};

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var DESCRIPTORS = __w_pdfjs_require__(9);
var fails = __w_pdfjs_require__(10);
var createElement = __w_pdfjs_require__(21);
module.exports = !DESCRIPTORS && !fails(function () {
 return Object.defineProperty(createElement('div'), 'a', {
  get: function () {
   return 7;
  }
 }).a != 7;
});

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var global = __w_pdfjs_require__(7);
var isObject = __w_pdfjs_require__(18);
var document = global.document;
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
 return EXISTS ? document.createElement(it) : {};
};

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var DESCRIPTORS = __w_pdfjs_require__(9);
var definePropertyModule = __w_pdfjs_require__(23);
var createPropertyDescriptor = __w_pdfjs_require__(12);
module.exports = DESCRIPTORS ? function (object, key, value) {
 return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
 object[key] = value;
 return object;
};

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

var DESCRIPTORS = __w_pdfjs_require__(9);
var IE8_DOM_DEFINE = __w_pdfjs_require__(20);
var anObject = __w_pdfjs_require__(24);
var toPrimitive = __w_pdfjs_require__(17);
var nativeDefineProperty = Object.defineProperty;
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
 anObject(O);
 P = toPrimitive(P, true);
 anObject(Attributes);
 if (IE8_DOM_DEFINE)
  try {
   return nativeDefineProperty(O, P, Attributes);
  } catch (error) {
  }
 if ('get' in Attributes || 'set' in Attributes)
  throw TypeError('Accessors not supported');
 if ('value' in Attributes)
  O[P] = Attributes.value;
 return O;
};

/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var isObject = __w_pdfjs_require__(18);
module.exports = function (it) {
 if (!isObject(it)) {
  throw TypeError(String(it) + ' is not an object');
 }
 return it;
};

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var global = __w_pdfjs_require__(7);
var createNonEnumerableProperty = __w_pdfjs_require__(22);
var has = __w_pdfjs_require__(19);
var setGlobal = __w_pdfjs_require__(26);
var inspectSource = __w_pdfjs_require__(27);
var InternalStateModule = __w_pdfjs_require__(29);
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function (O, key, value, options) {
 var unsafe = options ? !!options.unsafe : false;
 var simple = options ? !!options.enumerable : false;
 var noTargetGet = options ? !!options.noTargetGet : false;
 var state;
 if (typeof value == 'function') {
  if (typeof key == 'string' && !has(value, 'name')) {
   createNonEnumerableProperty(value, 'name', key);
  }
  state = enforceInternalState(value);
  if (!state.source) {
   state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
 }
 if (O === global) {
  if (simple)
   O[key] = value;
  else
   setGlobal(key, value);
  return;
 } else if (!unsafe) {
  delete O[key];
 } else if (!noTargetGet && O[key]) {
  simple = true;
 }
 if (simple)
  O[key] = value;
 else
  createNonEnumerableProperty(O, key, value);
})(Function.prototype, 'toString', function toString() {
 return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var global = __w_pdfjs_require__(7);
var createNonEnumerableProperty = __w_pdfjs_require__(22);
module.exports = function (key, value) {
 try {
  createNonEnumerableProperty(global, key, value);
 } catch (error) {
  global[key] = value;
 }
 return value;
};

/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var store = __w_pdfjs_require__(28);
var functionToString = Function.toString;
if (typeof store.inspectSource != 'function') {
 store.inspectSource = function (it) {
  return functionToString.call(it);
 };
}
module.exports = store.inspectSource;

/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var global = __w_pdfjs_require__(7);
var setGlobal = __w_pdfjs_require__(26);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var NATIVE_WEAK_MAP = __w_pdfjs_require__(30);
var global = __w_pdfjs_require__(7);
var isObject = __w_pdfjs_require__(18);
var createNonEnumerableProperty = __w_pdfjs_require__(22);
var objectHas = __w_pdfjs_require__(19);
var shared = __w_pdfjs_require__(28);
var sharedKey = __w_pdfjs_require__(31);
var hiddenKeys = __w_pdfjs_require__(35);
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function (it) {
 return has(it) ? get(it) : set(it, {});
};
var getterFor = function (TYPE) {
 return function (it) {
  var state;
  if (!isObject(it) || (state = get(it)).type !== TYPE) {
   throw TypeError('Incompatible receiver, ' + TYPE + ' required');
  }
  return state;
 };
};
if (NATIVE_WEAK_MAP) {
 var store = shared.state || (shared.state = new WeakMap());
 var wmget = store.get;
 var wmhas = store.has;
 var wmset = store.set;
 set = function (it, metadata) {
  metadata.facade = it;
  wmset.call(store, it, metadata);
  return metadata;
 };
 get = function (it) {
  return wmget.call(store, it) || {};
 };
 has = function (it) {
  return wmhas.call(store, it);
 };
} else {
 var STATE = sharedKey('state');
 hiddenKeys[STATE] = true;
 set = function (it, metadata) {
  metadata.facade = it;
  createNonEnumerableProperty(it, STATE, metadata);
  return metadata;
 };
 get = function (it) {
  return objectHas(it, STATE) ? it[STATE] : {};
 };
 has = function (it) {
  return objectHas(it, STATE);
 };
}
module.exports = {
 set: set,
 get: get,
 has: has,
 enforce: enforce,
 getterFor: getterFor
};

/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var global = __w_pdfjs_require__(7);
var inspectSource = __w_pdfjs_require__(27);
var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var shared = __w_pdfjs_require__(32);
var uid = __w_pdfjs_require__(34);
var keys = shared('keys');
module.exports = function (key) {
 return keys[key] || (keys[key] = uid(key));
};

/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var IS_PURE = __w_pdfjs_require__(33);
var store = __w_pdfjs_require__(28);
(module.exports = function (key, value) {
 return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
 version: '3.8.3',
 mode: IS_PURE ? 'pure' : 'global',
 copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 33 */
/***/ ((module) => {

module.exports = false;

/***/ }),
/* 34 */
/***/ ((module) => {

var id = 0;
var postfix = Math.random();
module.exports = function (key) {
 return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = {};

/***/ }),
/* 36 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var has = __w_pdfjs_require__(19);
var ownKeys = __w_pdfjs_require__(37);
var getOwnPropertyDescriptorModule = __w_pdfjs_require__(8);
var definePropertyModule = __w_pdfjs_require__(23);
module.exports = function (target, source) {
 var keys = ownKeys(source);
 var defineProperty = definePropertyModule.f;
 var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
 for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  if (!has(target, key))
   defineProperty(target, key, getOwnPropertyDescriptor(source, key));
 }
};

/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var getBuiltIn = __w_pdfjs_require__(38);
var getOwnPropertyNamesModule = __w_pdfjs_require__(40);
var getOwnPropertySymbolsModule = __w_pdfjs_require__(47);
var anObject = __w_pdfjs_require__(24);
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
 var keys = getOwnPropertyNamesModule.f(anObject(it));
 var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
 return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),
/* 38 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var path = __w_pdfjs_require__(39);
var global = __w_pdfjs_require__(7);
var aFunction = function (variable) {
 return typeof variable == 'function' ? variable : undefined;
};
module.exports = function (namespace, method) {
 return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),
/* 39 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var global = __w_pdfjs_require__(7);
module.exports = global;

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

var internalObjectKeys = __w_pdfjs_require__(41);
var enumBugKeys = __w_pdfjs_require__(46);
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
 return internalObjectKeys(O, hiddenKeys);
};

/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var has = __w_pdfjs_require__(19);
var toIndexedObject = __w_pdfjs_require__(13);
var indexOf = __w_pdfjs_require__(42).indexOf;
var hiddenKeys = __w_pdfjs_require__(35);
module.exports = function (object, names) {
 var O = toIndexedObject(object);
 var i = 0;
 var result = [];
 var key;
 for (key in O)
  !has(hiddenKeys, key) && has(O, key) && result.push(key);
 while (names.length > i)
  if (has(O, key = names[i++])) {
   ~indexOf(result, key) || result.push(key);
  }
 return result;
};

/***/ }),
/* 42 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var toIndexedObject = __w_pdfjs_require__(13);
var toLength = __w_pdfjs_require__(43);
var toAbsoluteIndex = __w_pdfjs_require__(45);
var createMethod = function (IS_INCLUDES) {
 return function ($this, el, fromIndex) {
  var O = toIndexedObject($this);
  var length = toLength(O.length);
  var index = toAbsoluteIndex(fromIndex, length);
  var value;
  if (IS_INCLUDES && el != el)
   while (length > index) {
    value = O[index++];
    if (value != value)
     return true;
   }
  else
   for (; length > index; index++) {
    if ((IS_INCLUDES || index in O) && O[index] === el)
     return IS_INCLUDES || index || 0;
   }
  return !IS_INCLUDES && -1;
 };
};
module.exports = {
 includes: createMethod(true),
 indexOf: createMethod(false)
};

/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var toInteger = __w_pdfjs_require__(44);
var min = Math.min;
module.exports = function (argument) {
 return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0;
};

/***/ }),
/* 44 */
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (argument) {
 return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),
/* 45 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var toInteger = __w_pdfjs_require__(44);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
 var integer = toInteger(index);
 return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),
/* 46 */
/***/ ((module) => {

module.exports = [
 'constructor',
 'hasOwnProperty',
 'isPrototypeOf',
 'propertyIsEnumerable',
 'toLocaleString',
 'toString',
 'valueOf'
];

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 48 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var fails = __w_pdfjs_require__(10);
var replacement = /#|\.prototype\./;
var isForced = function (feature, detection) {
 var value = data[normalize(feature)];
 return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function (string) {
 return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

__w_pdfjs_require__(50);
__w_pdfjs_require__(69);
var path = __w_pdfjs_require__(39);
module.exports = path.Object.fromEntries;

/***/ }),
/* 50 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var toIndexedObject = __w_pdfjs_require__(13);
var addToUnscopables = __w_pdfjs_require__(51);
var Iterators = __w_pdfjs_require__(59);
var InternalStateModule = __w_pdfjs_require__(29);
var defineIterator = __w_pdfjs_require__(60);
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
 setInternalState(this, {
  type: ARRAY_ITERATOR,
  target: toIndexedObject(iterated),
  index: 0,
  kind: kind
 });
}, function () {
 var state = getInternalState(this);
 var target = state.target;
 var kind = state.kind;
 var index = state.index++;
 if (!target || index >= target.length) {
  state.target = undefined;
  return {
   value: undefined,
   done: true
  };
 }
 if (kind == 'keys')
  return {
   value: index,
   done: false
  };
 if (kind == 'values')
  return {
   value: target[index],
   done: false
  };
 return {
  value: [
   index,
   target[index]
  ],
  done: false
 };
}, 'values');
Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 51 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var wellKnownSymbol = __w_pdfjs_require__(52);
var create = __w_pdfjs_require__(55);
var definePropertyModule = __w_pdfjs_require__(23);
var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;
if (ArrayPrototype[UNSCOPABLES] == undefined) {
 definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
  configurable: true,
  value: create(null)
 });
}
module.exports = function (key) {
 ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),
/* 52 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var global = __w_pdfjs_require__(7);
var shared = __w_pdfjs_require__(32);
var has = __w_pdfjs_require__(19);
var uid = __w_pdfjs_require__(34);
var NATIVE_SYMBOL = __w_pdfjs_require__(53);
var USE_SYMBOL_AS_UID = __w_pdfjs_require__(54);
var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function (name) {
 if (!has(WellKnownSymbolsStore, name)) {
  if (NATIVE_SYMBOL && has(Symbol, name))
   WellKnownSymbolsStore[name] = Symbol[name];
  else
   WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
 }
 return WellKnownSymbolsStore[name];
};

/***/ }),
/* 53 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var fails = __w_pdfjs_require__(10);
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
 return !String(Symbol());
});

/***/ }),
/* 54 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var NATIVE_SYMBOL = __w_pdfjs_require__(53);
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),
/* 55 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var anObject = __w_pdfjs_require__(24);
var defineProperties = __w_pdfjs_require__(56);
var enumBugKeys = __w_pdfjs_require__(46);
var hiddenKeys = __w_pdfjs_require__(35);
var html = __w_pdfjs_require__(58);
var documentCreateElement = __w_pdfjs_require__(21);
var sharedKey = __w_pdfjs_require__(31);
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function () {
};
var scriptTag = function (content) {
 return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function (activeXDocument) {
 activeXDocument.write(scriptTag(''));
 activeXDocument.close();
 var temp = activeXDocument.parentWindow.Object;
 activeXDocument = null;
 return temp;
};
var NullProtoObjectViaIFrame = function () {
 var iframe = documentCreateElement('iframe');
 var JS = 'java' + SCRIPT + ':';
 var iframeDocument;
 iframe.style.display = 'none';
 html.appendChild(iframe);
 iframe.src = String(JS);
 iframeDocument = iframe.contentWindow.document;
 iframeDocument.open();
 iframeDocument.write(scriptTag('document.F=Object'));
 iframeDocument.close();
 return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function () {
 try {
  activeXDocument = document.domain && new ActiveXObject('htmlfile');
 } catch (error) {
 }
 NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
 var length = enumBugKeys.length;
 while (length--)
  delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
 return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
module.exports = Object.create || function create(O, Properties) {
 var result;
 if (O !== null) {
  EmptyConstructor[PROTOTYPE] = anObject(O);
  result = new EmptyConstructor();
  EmptyConstructor[PROTOTYPE] = null;
  result[IE_PROTO] = O;
 } else
  result = NullProtoObject();
 return Properties === undefined ? result : defineProperties(result, Properties);
};

/***/ }),
/* 56 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var DESCRIPTORS = __w_pdfjs_require__(9);
var definePropertyModule = __w_pdfjs_require__(23);
var anObject = __w_pdfjs_require__(24);
var objectKeys = __w_pdfjs_require__(57);
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
 anObject(O);
 var keys = objectKeys(Properties);
 var length = keys.length;
 var index = 0;
 var key;
 while (length > index)
  definePropertyModule.f(O, key = keys[index++], Properties[key]);
 return O;
};

/***/ }),
/* 57 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var internalObjectKeys = __w_pdfjs_require__(41);
var enumBugKeys = __w_pdfjs_require__(46);
module.exports = Object.keys || function keys(O) {
 return internalObjectKeys(O, enumBugKeys);
};

/***/ }),
/* 58 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var getBuiltIn = __w_pdfjs_require__(38);
module.exports = getBuiltIn('document', 'documentElement');

/***/ }),
/* 59 */
/***/ ((module) => {

module.exports = {};

/***/ }),
/* 60 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(6);
var createIteratorConstructor = __w_pdfjs_require__(61);
var getPrototypeOf = __w_pdfjs_require__(63);
var setPrototypeOf = __w_pdfjs_require__(67);
var setToStringTag = __w_pdfjs_require__(66);
var createNonEnumerableProperty = __w_pdfjs_require__(22);
var redefine = __w_pdfjs_require__(25);
var wellKnownSymbol = __w_pdfjs_require__(52);
var IS_PURE = __w_pdfjs_require__(33);
var Iterators = __w_pdfjs_require__(59);
var IteratorsCore = __w_pdfjs_require__(62);
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function () {
 return this;
};
module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
 createIteratorConstructor(IteratorConstructor, NAME, next);
 var getIterationMethod = function (KIND) {
  if (KIND === DEFAULT && defaultIterator)
   return defaultIterator;
  if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
   return IterablePrototype[KIND];
  switch (KIND) {
  case KEYS:
   return function keys() {
    return new IteratorConstructor(this, KIND);
   };
  case VALUES:
   return function values() {
    return new IteratorConstructor(this, KIND);
   };
  case ENTRIES:
   return function entries() {
    return new IteratorConstructor(this, KIND);
   };
  }
  return function () {
   return new IteratorConstructor(this);
  };
 };
 var TO_STRING_TAG = NAME + ' Iterator';
 var INCORRECT_VALUES_NAME = false;
 var IterablePrototype = Iterable.prototype;
 var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
 var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
 var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
 var CurrentIteratorPrototype, methods, KEY;
 if (anyNativeIterator) {
  CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
  if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
   if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
    if (setPrototypeOf) {
     setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
    } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
     createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
    }
   }
   setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
   if (IS_PURE)
    Iterators[TO_STRING_TAG] = returnThis;
  }
 }
 if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
  INCORRECT_VALUES_NAME = true;
  defaultIterator = function values() {
   return nativeIterator.call(this);
  };
 }
 if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
  createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
 }
 Iterators[NAME] = defaultIterator;
 if (DEFAULT) {
  methods = {
   values: getIterationMethod(VALUES),
   keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
   entries: getIterationMethod(ENTRIES)
  };
  if (FORCED)
   for (KEY in methods) {
    if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
     redefine(IterablePrototype, KEY, methods[KEY]);
    }
   }
  else
   $({
    target: NAME,
    proto: true,
    forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
   }, methods);
 }
 return methods;
};

/***/ }),
/* 61 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var IteratorPrototype = __w_pdfjs_require__(62).IteratorPrototype;
var create = __w_pdfjs_require__(55);
var createPropertyDescriptor = __w_pdfjs_require__(12);
var setToStringTag = __w_pdfjs_require__(66);
var Iterators = __w_pdfjs_require__(59);
var returnThis = function () {
 return this;
};
module.exports = function (IteratorConstructor, NAME, next) {
 var TO_STRING_TAG = NAME + ' Iterator';
 IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
 setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
 Iterators[TO_STRING_TAG] = returnThis;
 return IteratorConstructor;
};

/***/ }),
/* 62 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var fails = __w_pdfjs_require__(10);
var getPrototypeOf = __w_pdfjs_require__(63);
var createNonEnumerableProperty = __w_pdfjs_require__(22);
var has = __w_pdfjs_require__(19);
var wellKnownSymbol = __w_pdfjs_require__(52);
var IS_PURE = __w_pdfjs_require__(33);
var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;
var returnThis = function () {
 return this;
};
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
 arrayIterator = [].keys();
 if (!('next' in arrayIterator))
  BUGGY_SAFARI_ITERATORS = true;
 else {
  PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
  if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
   IteratorPrototype = PrototypeOfArrayIteratorPrototype;
 }
}
var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
 var test = {};
 return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE)
 IteratorPrototype = {};
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
 createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}
module.exports = {
 IteratorPrototype: IteratorPrototype,
 BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),
/* 63 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var has = __w_pdfjs_require__(19);
var toObject = __w_pdfjs_require__(64);
var sharedKey = __w_pdfjs_require__(31);
var CORRECT_PROTOTYPE_GETTER = __w_pdfjs_require__(65);
var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
 O = toObject(O);
 if (has(O, IE_PROTO))
  return O[IE_PROTO];
 if (typeof O.constructor == 'function' && O instanceof O.constructor) {
  return O.constructor.prototype;
 }
 return O instanceof Object ? ObjectPrototype : null;
};

/***/ }),
/* 64 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var requireObjectCoercible = __w_pdfjs_require__(16);
module.exports = function (argument) {
 return Object(requireObjectCoercible(argument));
};

/***/ }),
/* 65 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var fails = __w_pdfjs_require__(10);
module.exports = !fails(function () {
 function F() {
 }
 F.prototype.constructor = null;
 return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),
/* 66 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var defineProperty = __w_pdfjs_require__(23).f;
var has = __w_pdfjs_require__(19);
var wellKnownSymbol = __w_pdfjs_require__(52);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
module.exports = function (it, TAG, STATIC) {
 if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
  defineProperty(it, TO_STRING_TAG, {
   configurable: true,
   value: TAG
  });
 }
};

/***/ }),
/* 67 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var anObject = __w_pdfjs_require__(24);
var aPossiblePrototype = __w_pdfjs_require__(68);
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
 var CORRECT_SETTER = false;
 var test = {};
 var setter;
 try {
  setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
  setter.call(test, []);
  CORRECT_SETTER = test instanceof Array;
 } catch (error) {
 }
 return function setPrototypeOf(O, proto) {
  anObject(O);
  aPossiblePrototype(proto);
  if (CORRECT_SETTER)
   setter.call(O, proto);
  else
   O.__proto__ = proto;
  return O;
 };
}() : undefined);

/***/ }),
/* 68 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var isObject = __w_pdfjs_require__(18);
module.exports = function (it) {
 if (!isObject(it) && it !== null) {
  throw TypeError("Can't set " + String(it) + ' as a prototype');
 }
 return it;
};

/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

var $ = __w_pdfjs_require__(6);
var iterate = __w_pdfjs_require__(70);
var createProperty = __w_pdfjs_require__(78);
$({
 target: 'Object',
 stat: true
}, {
 fromEntries: function fromEntries(iterable) {
  var obj = {};
  iterate(iterable, function (k, v) {
   createProperty(obj, k, v);
  }, { AS_ENTRIES: true });
  return obj;
 }
});

/***/ }),
/* 70 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var anObject = __w_pdfjs_require__(24);
var isArrayIteratorMethod = __w_pdfjs_require__(71);
var toLength = __w_pdfjs_require__(43);
var bind = __w_pdfjs_require__(72);
var getIteratorMethod = __w_pdfjs_require__(74);
var iteratorClose = __w_pdfjs_require__(77);
var Result = function (stopped, result) {
 this.stopped = stopped;
 this.result = result;
};
module.exports = function (iterable, unboundFunction, options) {
 var that = options && options.that;
 var AS_ENTRIES = !!(options && options.AS_ENTRIES);
 var IS_ITERATOR = !!(options && options.IS_ITERATOR);
 var INTERRUPTED = !!(options && options.INTERRUPTED);
 var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
 var iterator, iterFn, index, length, result, next, step;
 var stop = function (condition) {
  if (iterator)
   iteratorClose(iterator);
  return new Result(true, condition);
 };
 var callFn = function (value) {
  if (AS_ENTRIES) {
   anObject(value);
   return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
  }
  return INTERRUPTED ? fn(value, stop) : fn(value);
 };
 if (IS_ITERATOR) {
  iterator = iterable;
 } else {
  iterFn = getIteratorMethod(iterable);
  if (typeof iterFn != 'function')
   throw TypeError('Target is not iterable');
  if (isArrayIteratorMethod(iterFn)) {
   for (index = 0, length = toLength(iterable.length); length > index; index++) {
    result = callFn(iterable[index]);
    if (result && result instanceof Result)
     return result;
   }
   return new Result(false);
  }
  iterator = iterFn.call(iterable);
 }
 next = iterator.next;
 while (!(step = next.call(iterator)).done) {
  try {
   result = callFn(step.value);
  } catch (error) {
   iteratorClose(iterator);
   throw error;
  }
  if (typeof result == 'object' && result && result instanceof Result)
   return result;
 }
 return new Result(false);
};

/***/ }),
/* 71 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var wellKnownSymbol = __w_pdfjs_require__(52);
var Iterators = __w_pdfjs_require__(59);
var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
 return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),
/* 72 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var aFunction = __w_pdfjs_require__(73);
module.exports = function (fn, that, length) {
 aFunction(fn);
 if (that === undefined)
  return fn;
 switch (length) {
 case 0:
  return function () {
   return fn.call(that);
  };
 case 1:
  return function (a) {
   return fn.call(that, a);
  };
 case 2:
  return function (a, b) {
   return fn.call(that, a, b);
  };
 case 3:
  return function (a, b, c) {
   return fn.call(that, a, b, c);
  };
 }
 return function () {
  return fn.apply(that, arguments);
 };
};

/***/ }),
/* 73 */
/***/ ((module) => {

module.exports = function (it) {
 if (typeof it != 'function') {
  throw TypeError(String(it) + ' is not a function');
 }
 return it;
};

/***/ }),
/* 74 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var classof = __w_pdfjs_require__(75);
var Iterators = __w_pdfjs_require__(59);
var wellKnownSymbol = __w_pdfjs_require__(52);
var ITERATOR = wellKnownSymbol('iterator');
module.exports = function (it) {
 if (it != undefined)
  return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 75 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var TO_STRING_TAG_SUPPORT = __w_pdfjs_require__(76);
var classofRaw = __w_pdfjs_require__(15);
var wellKnownSymbol = __w_pdfjs_require__(52);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var CORRECT_ARGUMENTS = classofRaw(function () {
 return arguments;
}()) == 'Arguments';
var tryGet = function (it, key) {
 try {
  return it[key];
 } catch (error) {
 }
};
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
 var O, tag, result;
 return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),
/* 76 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var wellKnownSymbol = __w_pdfjs_require__(52);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),
/* 77 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var anObject = __w_pdfjs_require__(24);
module.exports = function (iterator) {
 var returnMethod = iterator['return'];
 if (returnMethod !== undefined) {
  return anObject(returnMethod.call(iterator)).value;
 }
};

/***/ }),
/* 78 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var toPrimitive = __w_pdfjs_require__(17);
var definePropertyModule = __w_pdfjs_require__(23);
var createPropertyDescriptor = __w_pdfjs_require__(12);
module.exports = function (object, key, value) {
 var propertyKey = toPrimitive(key);
 if (propertyKey in object)
  definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
 else
  object[propertyKey] = value;
};

/***/ }),
/* 79 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

__w_pdfjs_require__(80);
var entryUnbind = __w_pdfjs_require__(85);
module.exports = entryUnbind('String', 'padStart');

/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(6);
var $padStart = __w_pdfjs_require__(81).start;
var WEBKIT_BUG = __w_pdfjs_require__(83);
$({
 target: 'String',
 proto: true,
 forced: WEBKIT_BUG
}, {
 padStart: function padStart(maxLength) {
  return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
 }
});

/***/ }),
/* 81 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var toLength = __w_pdfjs_require__(43);
var repeat = __w_pdfjs_require__(82);
var requireObjectCoercible = __w_pdfjs_require__(16);
var ceil = Math.ceil;
var createMethod = function (IS_END) {
 return function ($this, maxLength, fillString) {
  var S = String(requireObjectCoercible($this));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  var fillLen, stringFiller;
  if (intMaxLength <= stringLength || fillStr == '')
   return S;
  fillLen = intMaxLength - stringLength;
  stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen)
   stringFiller = stringFiller.slice(0, fillLen);
  return IS_END ? S + stringFiller : stringFiller + S;
 };
};
module.exports = {
 start: createMethod(false),
 end: createMethod(true)
};

/***/ }),
/* 82 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var toInteger = __w_pdfjs_require__(44);
var requireObjectCoercible = __w_pdfjs_require__(16);
module.exports = ''.repeat || function repeat(count) {
 var str = String(requireObjectCoercible(this));
 var result = '';
 var n = toInteger(count);
 if (n < 0 || n == Infinity)
  throw RangeError('Wrong number of repetitions');
 for (; n > 0; (n >>>= 1) && (str += str))
  if (n & 1)
   result += str;
 return result;
};

/***/ }),
/* 83 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var userAgent = __w_pdfjs_require__(84);
module.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

/***/ }),
/* 84 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var getBuiltIn = __w_pdfjs_require__(38);
module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),
/* 85 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var global = __w_pdfjs_require__(7);
var bind = __w_pdfjs_require__(72);
var call = Function.call;
module.exports = function (CONSTRUCTOR, METHOD, length) {
 return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};

/***/ }),
/* 86 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

__w_pdfjs_require__(87);
var entryUnbind = __w_pdfjs_require__(85);
module.exports = entryUnbind('String', 'padEnd');

/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";

var $ = __w_pdfjs_require__(6);
var $padEnd = __w_pdfjs_require__(81).end;
var WEBKIT_BUG = __w_pdfjs_require__(83);
$({
 target: 'String',
 proto: true,
 forced: WEBKIT_BUG
}, {
 padEnd: function padEnd(maxLength) {
  return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
 }
});

/***/ }),
/* 88 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

__w_pdfjs_require__(89);
var path = __w_pdfjs_require__(39);
module.exports = path.Object.values;

/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

var $ = __w_pdfjs_require__(6);
var $values = __w_pdfjs_require__(90).values;
$({
 target: 'Object',
 stat: true
}, {
 values: function values(O) {
  return $values(O);
 }
});

/***/ }),
/* 90 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

var DESCRIPTORS = __w_pdfjs_require__(9);
var objectKeys = __w_pdfjs_require__(57);
var toIndexedObject = __w_pdfjs_require__(13);
var propertyIsEnumerable = __w_pdfjs_require__(11).f;
var createMethod = function (TO_ENTRIES) {
 return function (it) {
  var O = toIndexedObject(it);
  var keys = objectKeys(O);
  var length = keys.length;
  var i = 0;
  var result = [];
  var key;
  while (length > i) {
   key = keys[i++];
   if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
    result.push(TO_ENTRIES ? [
     key,
     O[key]
    ] : O[key]);
   }
  }
  return result;
 };
};
module.exports = {
 entries: createMethod(true),
 values: createMethod(false)
};

/***/ }),
/* 91 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

__w_pdfjs_require__(92);
var path = __w_pdfjs_require__(39);
module.exports = path.Object.entries;

/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {

var $ = __w_pdfjs_require__(6);
var $entries = __w_pdfjs_require__(90).entries;
$({
 target: 'Object',
 stat: true
}, {
 entries: function entries(O) {
  return $entries(O);
 }
});

/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Jbig2Image = void 0;

var _util = __w_pdfjs_require__(1);

var _core_utils = __w_pdfjs_require__(94);

var _arithmetic_decoder = __w_pdfjs_require__(98);

var _ccitt = __w_pdfjs_require__(99);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Jbig2Error = /*#__PURE__*/function (_BaseException) {
  _inherits(Jbig2Error, _BaseException);

  var _super = _createSuper(Jbig2Error);

  function Jbig2Error(msg) {
    _classCallCheck(this, Jbig2Error);

    return _super.call(this, "JBIG2 error: ".concat(msg));
  }

  return Jbig2Error;
}(_util.BaseException);

var Jbig2Image = function Jbig2ImageClosure() {
  function ContextCache() {}

  ContextCache.prototype = {
    getContexts: function getContexts(id) {
      if (id in this) {
        return this[id];
      }

      return this[id] = new Int8Array(1 << 16);
    }
  };

  function DecodingContext(data, start, end) {
    this.data = data;
    this.start = start;
    this.end = end;
  }

  DecodingContext.prototype = {
    get decoder() {
      var decoder = new _arithmetic_decoder.ArithmeticDecoder(this.data, this.start, this.end);
      return (0, _util.shadow)(this, "decoder", decoder);
    },

    get contextCache() {
      var cache = new ContextCache();
      return (0, _util.shadow)(this, "contextCache", cache);
    }

  };

  function decodeInteger(contextCache, procedure, decoder) {
    var contexts = contextCache.getContexts(procedure);
    var prev = 1;

    function readBits(length) {
      var v = 0;

      for (var i = 0; i < length; i++) {
        var bit = decoder.readBit(contexts, prev);
        prev = prev < 256 ? prev << 1 | bit : (prev << 1 | bit) & 511 | 256;
        v = v << 1 | bit;
      }

      return v >>> 0;
    }

    var sign = readBits(1);
    var value = readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(32) + 4436 : readBits(12) + 340 : readBits(8) + 84 : readBits(6) + 20 : readBits(4) + 4 : readBits(2);

    if (sign === 0) {
      return value;
    } else if (value > 0) {
      return -value;
    }

    return null;
  }

  function decodeIAID(contextCache, decoder, codeLength) {
    var contexts = contextCache.getContexts("IAID");
    var prev = 1;

    for (var i = 0; i < codeLength; i++) {
      var bit = decoder.readBit(contexts, prev);
      prev = prev << 1 | bit;
    }

    if (codeLength < 31) {
      return prev & (1 << codeLength) - 1;
    }

    return prev & 0x7fffffff;
  }

  var SegmentTypes = ["SymbolDictionary", null, null, null, "IntermediateTextRegion", null, "ImmediateTextRegion", "ImmediateLosslessTextRegion", null, null, null, null, null, null, null, null, "PatternDictionary", null, null, null, "IntermediateHalftoneRegion", null, "ImmediateHalftoneRegion", "ImmediateLosslessHalftoneRegion", null, null, null, null, null, null, null, null, null, null, null, null, "IntermediateGenericRegion", null, "ImmediateGenericRegion", "ImmediateLosslessGenericRegion", "IntermediateGenericRefinementRegion", null, "ImmediateGenericRefinementRegion", "ImmediateLosslessGenericRefinementRegion", null, null, null, null, "PageInformation", "EndOfPage", "EndOfStripe", "EndOfFile", "Profiles", "Tables", null, null, null, null, null, null, null, null, "Extension"];
  var CodingTemplates = [[{
    x: -1,
    y: -2
  }, {
    x: 0,
    y: -2
  }, {
    x: 1,
    y: -2
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: 2,
    y: -1
  }, {
    x: -4,
    y: 0
  }, {
    x: -3,
    y: 0
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }], [{
    x: -1,
    y: -2
  }, {
    x: 0,
    y: -2
  }, {
    x: 1,
    y: -2
  }, {
    x: 2,
    y: -2
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: 2,
    y: -1
  }, {
    x: -3,
    y: 0
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }], [{
    x: -1,
    y: -2
  }, {
    x: 0,
    y: -2
  }, {
    x: 1,
    y: -2
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }], [{
    x: -3,
    y: -1
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -4,
    y: 0
  }, {
    x: -3,
    y: 0
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }]];
  var RefinementTemplates = [{
    coding: [{
      x: 0,
      y: -1
    }, {
      x: 1,
      y: -1
    }, {
      x: -1,
      y: 0
    }],
    reference: [{
      x: 0,
      y: -1
    }, {
      x: 1,
      y: -1
    }, {
      x: -1,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 0
    }, {
      x: -1,
      y: 1
    }, {
      x: 0,
      y: 1
    }, {
      x: 1,
      y: 1
    }]
  }, {
    coding: [{
      x: -1,
      y: -1
    }, {
      x: 0,
      y: -1
    }, {
      x: 1,
      y: -1
    }, {
      x: -1,
      y: 0
    }],
    reference: [{
      x: 0,
      y: -1
    }, {
      x: -1,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 0
    }, {
      x: 0,
      y: 1
    }, {
      x: 1,
      y: 1
    }]
  }];
  var ReusedContexts = [0x9b25, 0x0795, 0x00e5, 0x0195];
  var RefinementReusedContexts = [0x0020, 0x0008];

  function decodeBitmapTemplate0(width, height, decodingContext) {
    var decoder = decodingContext.decoder;
    var contexts = decodingContext.contextCache.getContexts("GB");
    var contextLabel,
        i,
        j,
        pixel,
        row,
        row1,
        row2,
        bitmap = [];
    var OLD_PIXEL_MASK = 0x7bf7;

    for (i = 0; i < height; i++) {
      row = bitmap[i] = new Uint8Array(width);
      row1 = i < 1 ? row : bitmap[i - 1];
      row2 = i < 2 ? row : bitmap[i - 2];
      contextLabel = row2[0] << 13 | row2[1] << 12 | row2[2] << 11 | row1[0] << 7 | row1[1] << 6 | row1[2] << 5 | row1[3] << 4;

      for (j = 0; j < width; j++) {
        row[j] = pixel = decoder.readBit(contexts, contextLabel);
        contextLabel = (contextLabel & OLD_PIXEL_MASK) << 1 | (j + 3 < width ? row2[j + 3] << 11 : 0) | (j + 4 < width ? row1[j + 4] << 4 : 0) | pixel;
      }
    }

    return bitmap;
  }

  function decodeBitmap(mmr, width, height, templateIndex, prediction, skip, at, decodingContext) {
    if (mmr) {
      var input = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
      return decodeMMRBitmap(input, width, height, false);
    }

    if (templateIndex === 0 && !skip && !prediction && at.length === 4 && at[0].x === 3 && at[0].y === -1 && at[1].x === -3 && at[1].y === -1 && at[2].x === 2 && at[2].y === -2 && at[3].x === -2 && at[3].y === -2) {
      return decodeBitmapTemplate0(width, height, decodingContext);
    }

    var useskip = !!skip;
    var template = CodingTemplates[templateIndex].concat(at);
    template.sort(function (a, b) {
      return a.y - b.y || a.x - b.x;
    });
    var templateLength = template.length;
    var templateX = new Int8Array(templateLength);
    var templateY = new Int8Array(templateLength);
    var changingTemplateEntries = [];
    var reuseMask = 0,
        minX = 0,
        maxX = 0,
        minY = 0;
    var c, k;

    for (k = 0; k < templateLength; k++) {
      templateX[k] = template[k].x;
      templateY[k] = template[k].y;
      minX = Math.min(minX, template[k].x);
      maxX = Math.max(maxX, template[k].x);
      minY = Math.min(minY, template[k].y);

      if (k < templateLength - 1 && template[k].y === template[k + 1].y && template[k].x === template[k + 1].x - 1) {
        reuseMask |= 1 << templateLength - 1 - k;
      } else {
        changingTemplateEntries.push(k);
      }
    }

    var changingEntriesLength = changingTemplateEntries.length;
    var changingTemplateX = new Int8Array(changingEntriesLength);
    var changingTemplateY = new Int8Array(changingEntriesLength);
    var changingTemplateBit = new Uint16Array(changingEntriesLength);

    for (c = 0; c < changingEntriesLength; c++) {
      k = changingTemplateEntries[c];
      changingTemplateX[c] = template[k].x;
      changingTemplateY[c] = template[k].y;
      changingTemplateBit[c] = 1 << templateLength - 1 - k;
    }

    var sbb_left = -minX;
    var sbb_top = -minY;
    var sbb_right = width - maxX;
    var pseudoPixelContext = ReusedContexts[templateIndex];
    var row = new Uint8Array(width);
    var bitmap = [];
    var decoder = decodingContext.decoder;
    var contexts = decodingContext.contextCache.getContexts("GB");
    var ltp = 0,
        j,
        i0,
        j0,
        contextLabel = 0,
        bit,
        shift;

    for (var i = 0; i < height; i++) {
      if (prediction) {
        var sltp = decoder.readBit(contexts, pseudoPixelContext);
        ltp ^= sltp;

        if (ltp) {
          bitmap.push(row);
          continue;
        }
      }

      row = new Uint8Array(row);
      bitmap.push(row);

      for (j = 0; j < width; j++) {
        if (useskip && skip[i][j]) {
          row[j] = 0;
          continue;
        }

        if (j >= sbb_left && j < sbb_right && i >= sbb_top) {
          contextLabel = contextLabel << 1 & reuseMask;

          for (k = 0; k < changingEntriesLength; k++) {
            i0 = i + changingTemplateY[k];
            j0 = j + changingTemplateX[k];
            bit = bitmap[i0][j0];

            if (bit) {
              bit = changingTemplateBit[k];
              contextLabel |= bit;
            }
          }
        } else {
          contextLabel = 0;
          shift = templateLength - 1;

          for (k = 0; k < templateLength; k++, shift--) {
            j0 = j + templateX[k];

            if (j0 >= 0 && j0 < width) {
              i0 = i + templateY[k];

              if (i0 >= 0) {
                bit = bitmap[i0][j0];

                if (bit) {
                  contextLabel |= bit << shift;
                }
              }
            }
          }
        }

        var pixel = decoder.readBit(contexts, contextLabel);
        row[j] = pixel;
      }
    }

    return bitmap;
  }

  function decodeRefinement(width, height, templateIndex, referenceBitmap, offsetX, offsetY, prediction, at, decodingContext) {
    var codingTemplate = RefinementTemplates[templateIndex].coding;

    if (templateIndex === 0) {
      codingTemplate = codingTemplate.concat([at[0]]);
    }

    var codingTemplateLength = codingTemplate.length;
    var codingTemplateX = new Int32Array(codingTemplateLength);
    var codingTemplateY = new Int32Array(codingTemplateLength);
    var k;

    for (k = 0; k < codingTemplateLength; k++) {
      codingTemplateX[k] = codingTemplate[k].x;
      codingTemplateY[k] = codingTemplate[k].y;
    }

    var referenceTemplate = RefinementTemplates[templateIndex].reference;

    if (templateIndex === 0) {
      referenceTemplate = referenceTemplate.concat([at[1]]);
    }

    var referenceTemplateLength = referenceTemplate.length;
    var referenceTemplateX = new Int32Array(referenceTemplateLength);
    var referenceTemplateY = new Int32Array(referenceTemplateLength);

    for (k = 0; k < referenceTemplateLength; k++) {
      referenceTemplateX[k] = referenceTemplate[k].x;
      referenceTemplateY[k] = referenceTemplate[k].y;
    }

    var referenceWidth = referenceBitmap[0].length;
    var referenceHeight = referenceBitmap.length;
    var pseudoPixelContext = RefinementReusedContexts[templateIndex];
    var bitmap = [];
    var decoder = decodingContext.decoder;
    var contexts = decodingContext.contextCache.getContexts("GR");
    var ltp = 0;

    for (var i = 0; i < height; i++) {
      if (prediction) {
        var sltp = decoder.readBit(contexts, pseudoPixelContext);
        ltp ^= sltp;

        if (ltp) {
          throw new Jbig2Error("prediction is not supported");
        }
      }

      var row = new Uint8Array(width);
      bitmap.push(row);

      for (var j = 0; j < width; j++) {
        var i0, j0;
        var contextLabel = 0;

        for (k = 0; k < codingTemplateLength; k++) {
          i0 = i + codingTemplateY[k];
          j0 = j + codingTemplateX[k];

          if (i0 < 0 || j0 < 0 || j0 >= width) {
            contextLabel <<= 1;
          } else {
            contextLabel = contextLabel << 1 | bitmap[i0][j0];
          }
        }

        for (k = 0; k < referenceTemplateLength; k++) {
          i0 = i + referenceTemplateY[k] - offsetY;
          j0 = j + referenceTemplateX[k] - offsetX;

          if (i0 < 0 || i0 >= referenceHeight || j0 < 0 || j0 >= referenceWidth) {
            contextLabel <<= 1;
          } else {
            contextLabel = contextLabel << 1 | referenceBitmap[i0][j0];
          }
        }

        var pixel = decoder.readBit(contexts, contextLabel);
        row[j] = pixel;
      }
    }

    return bitmap;
  }

  function decodeSymbolDictionary(huffman, refinement, symbols, numberOfNewSymbols, numberOfExportedSymbols, huffmanTables, templateIndex, at, refinementTemplateIndex, refinementAt, decodingContext, huffmanInput) {
    if (huffman && refinement) {
      throw new Jbig2Error("symbol refinement with Huffman is not supported");
    }

    var newSymbols = [];
    var currentHeight = 0;
    var symbolCodeLength = (0, _core_utils.log2)(symbols.length + numberOfNewSymbols);
    var decoder = decodingContext.decoder;
    var contextCache = decodingContext.contextCache;
    var tableB1, symbolWidths;

    if (huffman) {
      tableB1 = getStandardTable(1);
      symbolWidths = [];
      symbolCodeLength = Math.max(symbolCodeLength, 1);
    }

    while (newSymbols.length < numberOfNewSymbols) {
      var deltaHeight = huffman ? huffmanTables.tableDeltaHeight.decode(huffmanInput) : decodeInteger(contextCache, "IADH", decoder);
      currentHeight += deltaHeight;
      var currentWidth = 0,
          totalWidth = 0;
      var firstSymbol = huffman ? symbolWidths.length : 0;

      while (true) {
        var deltaWidth = huffman ? huffmanTables.tableDeltaWidth.decode(huffmanInput) : decodeInteger(contextCache, "IADW", decoder);

        if (deltaWidth === null) {
          break;
        }

        currentWidth += deltaWidth;
        totalWidth += currentWidth;
        var bitmap;

        if (refinement) {
          var numberOfInstances = decodeInteger(contextCache, "IAAI", decoder);

          if (numberOfInstances > 1) {
            bitmap = decodeTextRegion(huffman, refinement, currentWidth, currentHeight, 0, numberOfInstances, 1, symbols.concat(newSymbols), symbolCodeLength, 0, 0, 1, 0, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, 0, huffmanInput);
          } else {
            var symbolId = decodeIAID(contextCache, decoder, symbolCodeLength);
            var rdx = decodeInteger(contextCache, "IARDX", decoder);
            var rdy = decodeInteger(contextCache, "IARDY", decoder);
            var symbol = symbolId < symbols.length ? symbols[symbolId] : newSymbols[symbolId - symbols.length];
            bitmap = decodeRefinement(currentWidth, currentHeight, refinementTemplateIndex, symbol, rdx, rdy, false, refinementAt, decodingContext);
          }

          newSymbols.push(bitmap);
        } else if (huffman) {
          symbolWidths.push(currentWidth);
        } else {
          bitmap = decodeBitmap(false, currentWidth, currentHeight, templateIndex, false, null, at, decodingContext);
          newSymbols.push(bitmap);
        }
      }

      if (huffman && !refinement) {
        var bitmapSize = huffmanTables.tableBitmapSize.decode(huffmanInput);
        huffmanInput.byteAlign();
        var collectiveBitmap = void 0;

        if (bitmapSize === 0) {
          collectiveBitmap = readUncompressedBitmap(huffmanInput, totalWidth, currentHeight);
        } else {
          var originalEnd = huffmanInput.end;
          var bitmapEnd = huffmanInput.position + bitmapSize;
          huffmanInput.end = bitmapEnd;
          collectiveBitmap = decodeMMRBitmap(huffmanInput, totalWidth, currentHeight, false);
          huffmanInput.end = originalEnd;
          huffmanInput.position = bitmapEnd;
        }

        var numberOfSymbolsDecoded = symbolWidths.length;

        if (firstSymbol === numberOfSymbolsDecoded - 1) {
          newSymbols.push(collectiveBitmap);
        } else {
          var _i = void 0,
              y = void 0,
              xMin = 0,
              xMax = void 0,
              bitmapWidth = void 0,
              symbolBitmap = void 0;

          for (_i = firstSymbol; _i < numberOfSymbolsDecoded; _i++) {
            bitmapWidth = symbolWidths[_i];
            xMax = xMin + bitmapWidth;
            symbolBitmap = [];

            for (y = 0; y < currentHeight; y++) {
              symbolBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
            }

            newSymbols.push(symbolBitmap);
            xMin = xMax;
          }
        }
      }
    }

    var exportedSymbols = [];
    var flags = [],
        currentFlag = false;
    var totalSymbolsLength = symbols.length + numberOfNewSymbols;

    while (flags.length < totalSymbolsLength) {
      var runLength = huffman ? tableB1.decode(huffmanInput) : decodeInteger(contextCache, "IAEX", decoder);

      while (runLength--) {
        flags.push(currentFlag);
      }

      currentFlag = !currentFlag;
    }

    for (var i = 0, ii = symbols.length; i < ii; i++) {
      if (flags[i]) {
        exportedSymbols.push(symbols[i]);
      }
    }

    for (var j = 0; j < numberOfNewSymbols; i++, j++) {
      if (flags[i]) {
        exportedSymbols.push(newSymbols[j]);
      }
    }

    return exportedSymbols;
  }

  function decodeTextRegion(huffman, refinement, width, height, defaultPixelValue, numberOfSymbolInstances, stripSize, inputSymbols, symbolCodeLength, transposed, dsOffset, referenceCorner, combinationOperator, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, logStripSize, huffmanInput) {
    if (huffman && refinement) {
      throw new Jbig2Error("refinement with Huffman is not supported");
    }

    var bitmap = [];
    var i, row;

    for (i = 0; i < height; i++) {
      row = new Uint8Array(width);

      if (defaultPixelValue) {
        for (var j = 0; j < width; j++) {
          row[j] = defaultPixelValue;
        }
      }

      bitmap.push(row);
    }

    var decoder = decodingContext.decoder;
    var contextCache = decodingContext.contextCache;
    var stripT = huffman ? -huffmanTables.tableDeltaT.decode(huffmanInput) : -decodeInteger(contextCache, "IADT", decoder);
    var firstS = 0;
    i = 0;

    while (i < numberOfSymbolInstances) {
      var deltaT = huffman ? huffmanTables.tableDeltaT.decode(huffmanInput) : decodeInteger(contextCache, "IADT", decoder);
      stripT += deltaT;
      var deltaFirstS = huffman ? huffmanTables.tableFirstS.decode(huffmanInput) : decodeInteger(contextCache, "IAFS", decoder);
      firstS += deltaFirstS;
      var currentS = firstS;

      do {
        var currentT = 0;

        if (stripSize > 1) {
          currentT = huffman ? huffmanInput.readBits(logStripSize) : decodeInteger(contextCache, "IAIT", decoder);
        }

        var t = stripSize * stripT + currentT;
        var symbolId = huffman ? huffmanTables.symbolIDTable.decode(huffmanInput) : decodeIAID(contextCache, decoder, symbolCodeLength);
        var applyRefinement = refinement && (huffman ? huffmanInput.readBit() : decodeInteger(contextCache, "IARI", decoder));
        var symbolBitmap = inputSymbols[symbolId];
        var symbolWidth = symbolBitmap[0].length;
        var symbolHeight = symbolBitmap.length;

        if (applyRefinement) {
          var rdw = decodeInteger(contextCache, "IARDW", decoder);
          var rdh = decodeInteger(contextCache, "IARDH", decoder);
          var rdx = decodeInteger(contextCache, "IARDX", decoder);
          var rdy = decodeInteger(contextCache, "IARDY", decoder);
          symbolWidth += rdw;
          symbolHeight += rdh;
          symbolBitmap = decodeRefinement(symbolWidth, symbolHeight, refinementTemplateIndex, symbolBitmap, (rdw >> 1) + rdx, (rdh >> 1) + rdy, false, refinementAt, decodingContext);
        }

        var offsetT = t - (referenceCorner & 1 ? 0 : symbolHeight - 1);
        var offsetS = currentS - (referenceCorner & 2 ? symbolWidth - 1 : 0);
        var s2, t2, symbolRow;

        if (transposed) {
          for (s2 = 0; s2 < symbolHeight; s2++) {
            row = bitmap[offsetS + s2];

            if (!row) {
              continue;
            }

            symbolRow = symbolBitmap[s2];
            var maxWidth = Math.min(width - offsetT, symbolWidth);

            switch (combinationOperator) {
              case 0:
                for (t2 = 0; t2 < maxWidth; t2++) {
                  row[offsetT + t2] |= symbolRow[t2];
                }

                break;

              case 2:
                for (t2 = 0; t2 < maxWidth; t2++) {
                  row[offsetT + t2] ^= symbolRow[t2];
                }

                break;

              default:
                throw new Jbig2Error("operator ".concat(combinationOperator, " is not supported"));
            }
          }

          currentS += symbolHeight - 1;
        } else {
          for (t2 = 0; t2 < symbolHeight; t2++) {
            row = bitmap[offsetT + t2];

            if (!row) {
              continue;
            }

            symbolRow = symbolBitmap[t2];

            switch (combinationOperator) {
              case 0:
                for (s2 = 0; s2 < symbolWidth; s2++) {
                  row[offsetS + s2] |= symbolRow[s2];
                }

                break;

              case 2:
                for (s2 = 0; s2 < symbolWidth; s2++) {
                  row[offsetS + s2] ^= symbolRow[s2];
                }

                break;

              default:
                throw new Jbig2Error("operator ".concat(combinationOperator, " is not supported"));
            }
          }

          currentS += symbolWidth - 1;
        }

        i++;
        var deltaS = huffman ? huffmanTables.tableDeltaS.decode(huffmanInput) : decodeInteger(contextCache, "IADS", decoder);

        if (deltaS === null) {
          break;
        }

        currentS += deltaS + dsOffset;
      } while (true);
    }

    return bitmap;
  }

  function decodePatternDictionary(mmr, patternWidth, patternHeight, maxPatternIndex, template, decodingContext) {
    var at = [];

    if (!mmr) {
      at.push({
        x: -patternWidth,
        y: 0
      });

      if (template === 0) {
        at.push({
          x: -3,
          y: -1
        });
        at.push({
          x: 2,
          y: -2
        });
        at.push({
          x: -2,
          y: -2
        });
      }
    }

    var collectiveWidth = (maxPatternIndex + 1) * patternWidth;
    var collectiveBitmap = decodeBitmap(mmr, collectiveWidth, patternHeight, template, false, null, at, decodingContext);
    var patterns = [];

    for (var i = 0; i <= maxPatternIndex; i++) {
      var patternBitmap = [];
      var xMin = patternWidth * i;
      var xMax = xMin + patternWidth;

      for (var y = 0; y < patternHeight; y++) {
        patternBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
      }

      patterns.push(patternBitmap);
    }

    return patterns;
  }

  function decodeHalftoneRegion(mmr, patterns, template, regionWidth, regionHeight, defaultPixelValue, enableSkip, combinationOperator, gridWidth, gridHeight, gridOffsetX, gridOffsetY, gridVectorX, gridVectorY, decodingContext) {
    var skip = null;

    if (enableSkip) {
      throw new Jbig2Error("skip is not supported");
    }

    if (combinationOperator !== 0) {
      throw new Jbig2Error("operator " + combinationOperator + " is not supported in halftone region");
    }

    var regionBitmap = [];
    var i, j, row;

    for (i = 0; i < regionHeight; i++) {
      row = new Uint8Array(regionWidth);

      if (defaultPixelValue) {
        for (j = 0; j < regionWidth; j++) {
          row[j] = defaultPixelValue;
        }
      }

      regionBitmap.push(row);
    }

    var numberOfPatterns = patterns.length;
    var pattern0 = patterns[0];
    var patternWidth = pattern0[0].length,
        patternHeight = pattern0.length;
    var bitsPerValue = (0, _core_utils.log2)(numberOfPatterns);
    var at = [];

    if (!mmr) {
      at.push({
        x: template <= 1 ? 3 : 2,
        y: -1
      });

      if (template === 0) {
        at.push({
          x: -3,
          y: -1
        });
        at.push({
          x: 2,
          y: -2
        });
        at.push({
          x: -2,
          y: -2
        });
      }
    }

    var grayScaleBitPlanes = [];
    var mmrInput, bitmap;

    if (mmr) {
      mmrInput = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
    }

    for (i = bitsPerValue - 1; i >= 0; i--) {
      if (mmr) {
        bitmap = decodeMMRBitmap(mmrInput, gridWidth, gridHeight, true);
      } else {
        bitmap = decodeBitmap(false, gridWidth, gridHeight, template, false, skip, at, decodingContext);
      }

      grayScaleBitPlanes[i] = bitmap;
    }

    var mg, ng, bit, patternIndex, patternBitmap, x, y, patternRow, regionRow;

    for (mg = 0; mg < gridHeight; mg++) {
      for (ng = 0; ng < gridWidth; ng++) {
        bit = 0;
        patternIndex = 0;

        for (j = bitsPerValue - 1; j >= 0; j--) {
          bit = grayScaleBitPlanes[j][mg][ng] ^ bit;
          patternIndex |= bit << j;
        }

        patternBitmap = patterns[patternIndex];
        x = gridOffsetX + mg * gridVectorY + ng * gridVectorX >> 8;
        y = gridOffsetY + mg * gridVectorX - ng * gridVectorY >> 8;

        if (x >= 0 && x + patternWidth <= regionWidth && y >= 0 && y + patternHeight <= regionHeight) {
          for (i = 0; i < patternHeight; i++) {
            regionRow = regionBitmap[y + i];
            patternRow = patternBitmap[i];

            for (j = 0; j < patternWidth; j++) {
              regionRow[x + j] |= patternRow[j];
            }
          }
        } else {
          var regionX = void 0,
              regionY = void 0;

          for (i = 0; i < patternHeight; i++) {
            regionY = y + i;

            if (regionY < 0 || regionY >= regionHeight) {
              continue;
            }

            regionRow = regionBitmap[regionY];
            patternRow = patternBitmap[i];

            for (j = 0; j < patternWidth; j++) {
              regionX = x + j;

              if (regionX >= 0 && regionX < regionWidth) {
                regionRow[regionX] |= patternRow[j];
              }
            }
          }
        }
      }
    }

    return regionBitmap;
  }

  function readSegmentHeader(data, start) {
    var segmentHeader = {};
    segmentHeader.number = (0, _core_utils.readUint32)(data, start);
    var flags = data[start + 4];
    var segmentType = flags & 0x3f;

    if (!SegmentTypes[segmentType]) {
      throw new Jbig2Error("invalid segment type: " + segmentType);
    }

    segmentHeader.type = segmentType;
    segmentHeader.typeName = SegmentTypes[segmentType];
    segmentHeader.deferredNonRetain = !!(flags & 0x80);
    var pageAssociationFieldSize = !!(flags & 0x40);
    var referredFlags = data[start + 5];
    var referredToCount = referredFlags >> 5 & 7;
    var retainBits = [referredFlags & 31];
    var position = start + 6;

    if (referredFlags === 7) {
      referredToCount = (0, _core_utils.readUint32)(data, position - 1) & 0x1fffffff;
      position += 3;
      var bytes = referredToCount + 7 >> 3;
      retainBits[0] = data[position++];

      while (--bytes > 0) {
        retainBits.push(data[position++]);
      }
    } else if (referredFlags === 5 || referredFlags === 6) {
      throw new Jbig2Error("invalid referred-to flags");
    }

    segmentHeader.retainBits = retainBits;
    var referredToSegmentNumberSize = 4;

    if (segmentHeader.number <= 256) {
      referredToSegmentNumberSize = 1;
    } else if (segmentHeader.number <= 65536) {
      referredToSegmentNumberSize = 2;
    }

    var referredTo = [];
    var i, ii;

    for (i = 0; i < referredToCount; i++) {
      var number = void 0;

      if (referredToSegmentNumberSize === 1) {
        number = data[position];
      } else if (referredToSegmentNumberSize === 2) {
        number = (0, _core_utils.readUint16)(data, position);
      } else {
        number = (0, _core_utils.readUint32)(data, position);
      }

      referredTo.push(number);
      position += referredToSegmentNumberSize;
    }

    segmentHeader.referredTo = referredTo;

    if (!pageAssociationFieldSize) {
      segmentHeader.pageAssociation = data[position++];
    } else {
      segmentHeader.pageAssociation = (0, _core_utils.readUint32)(data, position);
      position += 4;
    }

    segmentHeader.length = (0, _core_utils.readUint32)(data, position);
    position += 4;

    if (segmentHeader.length === 0xffffffff) {
      if (segmentType === 38) {
        var genericRegionInfo = readRegionSegmentInformation(data, position);
        var genericRegionSegmentFlags = data[position + RegionSegmentInformationFieldLength];
        var genericRegionMmr = !!(genericRegionSegmentFlags & 1);
        var searchPatternLength = 6;
        var searchPattern = new Uint8Array(searchPatternLength);

        if (!genericRegionMmr) {
          searchPattern[0] = 0xff;
          searchPattern[1] = 0xac;
        }

        searchPattern[2] = genericRegionInfo.height >>> 24 & 0xff;
        searchPattern[3] = genericRegionInfo.height >> 16 & 0xff;
        searchPattern[4] = genericRegionInfo.height >> 8 & 0xff;
        searchPattern[5] = genericRegionInfo.height & 0xff;

        for (i = position, ii = data.length; i < ii; i++) {
          var j = 0;

          while (j < searchPatternLength && searchPattern[j] === data[i + j]) {
            j++;
          }

          if (j === searchPatternLength) {
            segmentHeader.length = i + searchPatternLength;
            break;
          }
        }

        if (segmentHeader.length === 0xffffffff) {
          throw new Jbig2Error("segment end was not found");
        }
      } else {
        throw new Jbig2Error("invalid unknown segment length");
      }
    }

    segmentHeader.headerEnd = position;
    return segmentHeader;
  }

  function readSegments(header, data, start, end) {
    var segments = [];
    var position = start;

    while (position < end) {
      var segmentHeader = readSegmentHeader(data, position);
      position = segmentHeader.headerEnd;
      var segment = {
        header: segmentHeader,
        data: data
      };

      if (!header.randomAccess) {
        segment.start = position;
        position += segmentHeader.length;
        segment.end = position;
      }

      segments.push(segment);

      if (segmentHeader.type === 51) {
        break;
      }
    }

    if (header.randomAccess) {
      for (var i = 0, ii = segments.length; i < ii; i++) {
        segments[i].start = position;
        position += segments[i].header.length;
        segments[i].end = position;
      }
    }

    return segments;
  }

  function readRegionSegmentInformation(data, start) {
    return {
      width: (0, _core_utils.readUint32)(data, start),
      height: (0, _core_utils.readUint32)(data, start + 4),
      x: (0, _core_utils.readUint32)(data, start + 8),
      y: (0, _core_utils.readUint32)(data, start + 12),
      combinationOperator: data[start + 16] & 7
    };
  }

  var RegionSegmentInformationFieldLength = 17;

  function processSegment(segment, visitor) {
    var header = segment.header;
    var data = segment.data,
        position = segment.start,
        end = segment.end;
    var args, at, i, atLength;

    switch (header.type) {
      case 0:
        var dictionary = {};
        var dictionaryFlags = (0, _core_utils.readUint16)(data, position);
        dictionary.huffman = !!(dictionaryFlags & 1);
        dictionary.refinement = !!(dictionaryFlags & 2);
        dictionary.huffmanDHSelector = dictionaryFlags >> 2 & 3;
        dictionary.huffmanDWSelector = dictionaryFlags >> 4 & 3;
        dictionary.bitmapSizeSelector = dictionaryFlags >> 6 & 1;
        dictionary.aggregationInstancesSelector = dictionaryFlags >> 7 & 1;
        dictionary.bitmapCodingContextUsed = !!(dictionaryFlags & 256);
        dictionary.bitmapCodingContextRetained = !!(dictionaryFlags & 512);
        dictionary.template = dictionaryFlags >> 10 & 3;
        dictionary.refinementTemplate = dictionaryFlags >> 12 & 1;
        position += 2;

        if (!dictionary.huffman) {
          atLength = dictionary.template === 0 ? 4 : 1;
          at = [];

          for (i = 0; i < atLength; i++) {
            at.push({
              x: (0, _core_utils.readInt8)(data, position),
              y: (0, _core_utils.readInt8)(data, position + 1)
            });
            position += 2;
          }

          dictionary.at = at;
        }

        if (dictionary.refinement && !dictionary.refinementTemplate) {
          at = [];

          for (i = 0; i < 2; i++) {
            at.push({
              x: (0, _core_utils.readInt8)(data, position),
              y: (0, _core_utils.readInt8)(data, position + 1)
            });
            position += 2;
          }

          dictionary.refinementAt = at;
        }

        dictionary.numberOfExportedSymbols = (0, _core_utils.readUint32)(data, position);
        position += 4;
        dictionary.numberOfNewSymbols = (0, _core_utils.readUint32)(data, position);
        position += 4;
        args = [dictionary, header.number, header.referredTo, data, position, end];
        break;

      case 6:
      case 7:
        var textRegion = {};
        textRegion.info = readRegionSegmentInformation(data, position);
        position += RegionSegmentInformationFieldLength;
        var textRegionSegmentFlags = (0, _core_utils.readUint16)(data, position);
        position += 2;
        textRegion.huffman = !!(textRegionSegmentFlags & 1);
        textRegion.refinement = !!(textRegionSegmentFlags & 2);
        textRegion.logStripSize = textRegionSegmentFlags >> 2 & 3;
        textRegion.stripSize = 1 << textRegion.logStripSize;
        textRegion.referenceCorner = textRegionSegmentFlags >> 4 & 3;
        textRegion.transposed = !!(textRegionSegmentFlags & 64);
        textRegion.combinationOperator = textRegionSegmentFlags >> 7 & 3;
        textRegion.defaultPixelValue = textRegionSegmentFlags >> 9 & 1;
        textRegion.dsOffset = textRegionSegmentFlags << 17 >> 27;
        textRegion.refinementTemplate = textRegionSegmentFlags >> 15 & 1;

        if (textRegion.huffman) {
          var textRegionHuffmanFlags = (0, _core_utils.readUint16)(data, position);
          position += 2;
          textRegion.huffmanFS = textRegionHuffmanFlags & 3;
          textRegion.huffmanDS = textRegionHuffmanFlags >> 2 & 3;
          textRegion.huffmanDT = textRegionHuffmanFlags >> 4 & 3;
          textRegion.huffmanRefinementDW = textRegionHuffmanFlags >> 6 & 3;
          textRegion.huffmanRefinementDH = textRegionHuffmanFlags >> 8 & 3;
          textRegion.huffmanRefinementDX = textRegionHuffmanFlags >> 10 & 3;
          textRegion.huffmanRefinementDY = textRegionHuffmanFlags >> 12 & 3;
          textRegion.huffmanRefinementSizeSelector = !!(textRegionHuffmanFlags & 0x4000);
        }

        if (textRegion.refinement && !textRegion.refinementTemplate) {
          at = [];

          for (i = 0; i < 2; i++) {
            at.push({
              x: (0, _core_utils.readInt8)(data, position),
              y: (0, _core_utils.readInt8)(data, position + 1)
            });
            position += 2;
          }

          textRegion.refinementAt = at;
        }

        textRegion.numberOfSymbolInstances = (0, _core_utils.readUint32)(data, position);
        position += 4;
        args = [textRegion, header.referredTo, data, position, end];
        break;

      case 16:
        var patternDictionary = {};
        var patternDictionaryFlags = data[position++];
        patternDictionary.mmr = !!(patternDictionaryFlags & 1);
        patternDictionary.template = patternDictionaryFlags >> 1 & 3;
        patternDictionary.patternWidth = data[position++];
        patternDictionary.patternHeight = data[position++];
        patternDictionary.maxPatternIndex = (0, _core_utils.readUint32)(data, position);
        position += 4;
        args = [patternDictionary, header.number, data, position, end];
        break;

      case 22:
      case 23:
        var halftoneRegion = {};
        halftoneRegion.info = readRegionSegmentInformation(data, position);
        position += RegionSegmentInformationFieldLength;
        var halftoneRegionFlags = data[position++];
        halftoneRegion.mmr = !!(halftoneRegionFlags & 1);
        halftoneRegion.template = halftoneRegionFlags >> 1 & 3;
        halftoneRegion.enableSkip = !!(halftoneRegionFlags & 8);
        halftoneRegion.combinationOperator = halftoneRegionFlags >> 4 & 7;
        halftoneRegion.defaultPixelValue = halftoneRegionFlags >> 7 & 1;
        halftoneRegion.gridWidth = (0, _core_utils.readUint32)(data, position);
        position += 4;
        halftoneRegion.gridHeight = (0, _core_utils.readUint32)(data, position);
        position += 4;
        halftoneRegion.gridOffsetX = (0, _core_utils.readUint32)(data, position) & 0xffffffff;
        position += 4;
        halftoneRegion.gridOffsetY = (0, _core_utils.readUint32)(data, position) & 0xffffffff;
        position += 4;
        halftoneRegion.gridVectorX = (0, _core_utils.readUint16)(data, position);
        position += 2;
        halftoneRegion.gridVectorY = (0, _core_utils.readUint16)(data, position);
        position += 2;
        args = [halftoneRegion, header.referredTo, data, position, end];
        break;

      case 38:
      case 39:
        var genericRegion = {};
        genericRegion.info = readRegionSegmentInformation(data, position);
        position += RegionSegmentInformationFieldLength;
        var genericRegionSegmentFlags = data[position++];
        genericRegion.mmr = !!(genericRegionSegmentFlags & 1);
        genericRegion.template = genericRegionSegmentFlags >> 1 & 3;
        genericRegion.prediction = !!(genericRegionSegmentFlags & 8);

        if (!genericRegion.mmr) {
          atLength = genericRegion.template === 0 ? 4 : 1;
          at = [];

          for (i = 0; i < atLength; i++) {
            at.push({
              x: (0, _core_utils.readInt8)(data, position),
              y: (0, _core_utils.readInt8)(data, position + 1)
            });
            position += 2;
          }

          genericRegion.at = at;
        }

        args = [genericRegion, data, position, end];
        break;

      case 48:
        var pageInfo = {
          width: (0, _core_utils.readUint32)(data, position),
          height: (0, _core_utils.readUint32)(data, position + 4),
          resolutionX: (0, _core_utils.readUint32)(data, position + 8),
          resolutionY: (0, _core_utils.readUint32)(data, position + 12)
        };

        if (pageInfo.height === 0xffffffff) {
          delete pageInfo.height;
        }

        var pageSegmentFlags = data[position + 16];
        (0, _core_utils.readUint16)(data, position + 17);
        pageInfo.lossless = !!(pageSegmentFlags & 1);
        pageInfo.refinement = !!(pageSegmentFlags & 2);
        pageInfo.defaultPixelValue = pageSegmentFlags >> 2 & 1;
        pageInfo.combinationOperator = pageSegmentFlags >> 3 & 3;
        pageInfo.requiresBuffer = !!(pageSegmentFlags & 32);
        pageInfo.combinationOperatorOverride = !!(pageSegmentFlags & 64);
        args = [pageInfo];
        break;

      case 49:
        break;

      case 50:
        break;

      case 51:
        break;

      case 53:
        args = [header.number, data, position, end];
        break;

      case 62:
        break;

      default:
        throw new Jbig2Error("segment type ".concat(header.typeName, "(").concat(header.type, ")") + " is not implemented");
    }

    var callbackName = "on" + header.typeName;

    if (callbackName in visitor) {
      visitor[callbackName].apply(visitor, args);
    }
  }

  function processSegments(segments, visitor) {
    for (var i = 0, ii = segments.length; i < ii; i++) {
      processSegment(segments[i], visitor);
    }
  }

  function parseJbig2Chunks(chunks) {
    var visitor = new SimpleSegmentVisitor();

    for (var i = 0, ii = chunks.length; i < ii; i++) {
      var chunk = chunks[i];
      var segments = readSegments({}, chunk.data, chunk.start, chunk.end);
      processSegments(segments, visitor);
    }

    return visitor.buffer;
  }

  function parseJbig2(data) {
    var end = data.length;
    var position = 0;

    if (data[position] !== 0x97 || data[position + 1] !== 0x4a || data[position + 2] !== 0x42 || data[position + 3] !== 0x32 || data[position + 4] !== 0x0d || data[position + 5] !== 0x0a || data[position + 6] !== 0x1a || data[position + 7] !== 0x0a) {
      throw new Jbig2Error("parseJbig2 - invalid header.");
    }

    var header = Object.create(null);
    position += 8;
    var flags = data[position++];
    header.randomAccess = !(flags & 1);

    if (!(flags & 2)) {
      header.numberOfPages = (0, _core_utils.readUint32)(data, position);
      position += 4;
    }

    var segments = readSegments(header, data, position, end);
    var visitor = new SimpleSegmentVisitor();
    processSegments(segments, visitor);
    var _visitor$currentPageI = visitor.currentPageInfo,
        width = _visitor$currentPageI.width,
        height = _visitor$currentPageI.height;
    var bitPacked = visitor.buffer;
    var imgData = new Uint8ClampedArray(width * height);
    var q = 0,
        k = 0;

    for (var i = 0; i < height; i++) {
      var mask = 0,
          buffer = void 0;

      for (var j = 0; j < width; j++) {
        if (!mask) {
          mask = 128;
          buffer = bitPacked[k++];
        }

        imgData[q++] = buffer & mask ? 0 : 255;
        mask >>= 1;
      }
    }

    return {
      imgData: imgData,
      width: width,
      height: height
    };
  }

  function SimpleSegmentVisitor() {}

  SimpleSegmentVisitor.prototype = {
    onPageInformation: function SimpleSegmentVisitor_onPageInformation(info) {
      this.currentPageInfo = info;
      var rowSize = info.width + 7 >> 3;
      var buffer = new Uint8ClampedArray(rowSize * info.height);

      if (info.defaultPixelValue) {
        for (var i = 0, ii = buffer.length; i < ii; i++) {
          buffer[i] = 0xff;
        }
      }

      this.buffer = buffer;
    },
    drawBitmap: function SimpleSegmentVisitor_drawBitmap(regionInfo, bitmap) {
      var pageInfo = this.currentPageInfo;
      var width = regionInfo.width,
          height = regionInfo.height;
      var rowSize = pageInfo.width + 7 >> 3;
      var combinationOperator = pageInfo.combinationOperatorOverride ? regionInfo.combinationOperator : pageInfo.combinationOperator;
      var buffer = this.buffer;
      var mask0 = 128 >> (regionInfo.x & 7);
      var offset0 = regionInfo.y * rowSize + (regionInfo.x >> 3);
      var i, j, mask, offset;

      switch (combinationOperator) {
        case 0:
          for (i = 0; i < height; i++) {
            mask = mask0;
            offset = offset0;

            for (j = 0; j < width; j++) {
              if (bitmap[i][j]) {
                buffer[offset] |= mask;
              }

              mask >>= 1;

              if (!mask) {
                mask = 128;
                offset++;
              }
            }

            offset0 += rowSize;
          }

          break;

        case 2:
          for (i = 0; i < height; i++) {
            mask = mask0;
            offset = offset0;

            for (j = 0; j < width; j++) {
              if (bitmap[i][j]) {
                buffer[offset] ^= mask;
              }

              mask >>= 1;

              if (!mask) {
                mask = 128;
                offset++;
              }
            }

            offset0 += rowSize;
          }

          break;

        default:
          throw new Jbig2Error("operator ".concat(combinationOperator, " is not supported"));
      }
    },
    onImmediateGenericRegion: function SimpleSegmentVisitor_onImmediateGenericRegion(region, data, start, end) {
      var regionInfo = region.info;
      var decodingContext = new DecodingContext(data, start, end);
      var bitmap = decodeBitmap(region.mmr, regionInfo.width, regionInfo.height, region.template, region.prediction, null, region.at, decodingContext);
      this.drawBitmap(regionInfo, bitmap);
    },
    onImmediateLosslessGenericRegion: function SimpleSegmentVisitor_onImmediateLosslessGenericRegion() {
      this.onImmediateGenericRegion.apply(this, arguments);
    },
    onSymbolDictionary: function SimpleSegmentVisitor_onSymbolDictionary(dictionary, currentSegment, referredSegments, data, start, end) {
      var huffmanTables, huffmanInput;

      if (dictionary.huffman) {
        huffmanTables = getSymbolDictionaryHuffmanTables(dictionary, referredSegments, this.customTables);
        huffmanInput = new Reader(data, start, end);
      }

      var symbols = this.symbols;

      if (!symbols) {
        this.symbols = symbols = {};
      }

      var inputSymbols = [];

      for (var i = 0, ii = referredSegments.length; i < ii; i++) {
        var referredSymbols = symbols[referredSegments[i]];

        if (referredSymbols) {
          inputSymbols = inputSymbols.concat(referredSymbols);
        }
      }

      var decodingContext = new DecodingContext(data, start, end);
      symbols[currentSegment] = decodeSymbolDictionary(dictionary.huffman, dictionary.refinement, inputSymbols, dictionary.numberOfNewSymbols, dictionary.numberOfExportedSymbols, huffmanTables, dictionary.template, dictionary.at, dictionary.refinementTemplate, dictionary.refinementAt, decodingContext, huffmanInput);
    },
    onImmediateTextRegion: function SimpleSegmentVisitor_onImmediateTextRegion(region, referredSegments, data, start, end) {
      var regionInfo = region.info;
      var huffmanTables, huffmanInput;
      var symbols = this.symbols;
      var inputSymbols = [];

      for (var i = 0, ii = referredSegments.length; i < ii; i++) {
        var referredSymbols = symbols[referredSegments[i]];

        if (referredSymbols) {
          inputSymbols = inputSymbols.concat(referredSymbols);
        }
      }

      var symbolCodeLength = (0, _core_utils.log2)(inputSymbols.length);

      if (region.huffman) {
        huffmanInput = new Reader(data, start, end);
        huffmanTables = getTextRegionHuffmanTables(region, referredSegments, this.customTables, inputSymbols.length, huffmanInput);
      }

      var decodingContext = new DecodingContext(data, start, end);
      var bitmap = decodeTextRegion(region.huffman, region.refinement, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.numberOfSymbolInstances, region.stripSize, inputSymbols, symbolCodeLength, region.transposed, region.dsOffset, region.referenceCorner, region.combinationOperator, huffmanTables, region.refinementTemplate, region.refinementAt, decodingContext, region.logStripSize, huffmanInput);
      this.drawBitmap(regionInfo, bitmap);
    },
    onImmediateLosslessTextRegion: function SimpleSegmentVisitor_onImmediateLosslessTextRegion() {
      this.onImmediateTextRegion.apply(this, arguments);
    },
    onPatternDictionary: function onPatternDictionary(dictionary, currentSegment, data, start, end) {
      var patterns = this.patterns;

      if (!patterns) {
        this.patterns = patterns = {};
      }

      var decodingContext = new DecodingContext(data, start, end);
      patterns[currentSegment] = decodePatternDictionary(dictionary.mmr, dictionary.patternWidth, dictionary.patternHeight, dictionary.maxPatternIndex, dictionary.template, decodingContext);
    },
    onImmediateHalftoneRegion: function onImmediateHalftoneRegion(region, referredSegments, data, start, end) {
      var patterns = this.patterns[referredSegments[0]];
      var regionInfo = region.info;
      var decodingContext = new DecodingContext(data, start, end);
      var bitmap = decodeHalftoneRegion(region.mmr, patterns, region.template, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.enableSkip, region.combinationOperator, region.gridWidth, region.gridHeight, region.gridOffsetX, region.gridOffsetY, region.gridVectorX, region.gridVectorY, decodingContext);
      this.drawBitmap(regionInfo, bitmap);
    },
    onImmediateLosslessHalftoneRegion: function onImmediateLosslessHalftoneRegion() {
      this.onImmediateHalftoneRegion.apply(this, arguments);
    },
    onTables: function onTables(currentSegment, data, start, end) {
      var customTables = this.customTables;

      if (!customTables) {
        this.customTables = customTables = {};
      }

      customTables[currentSegment] = decodeTablesSegment(data, start, end);
    }
  };

  function HuffmanLine(lineData) {
    if (lineData.length === 2) {
      this.isOOB = true;
      this.rangeLow = 0;
      this.prefixLength = lineData[0];
      this.rangeLength = 0;
      this.prefixCode = lineData[1];
      this.isLowerRange = false;
    } else {
      this.isOOB = false;
      this.rangeLow = lineData[0];
      this.prefixLength = lineData[1];
      this.rangeLength = lineData[2];
      this.prefixCode = lineData[3];
      this.isLowerRange = lineData[4] === "lower";
    }
  }

  function HuffmanTreeNode(line) {
    this.children = [];

    if (line) {
      this.isLeaf = true;
      this.rangeLength = line.rangeLength;
      this.rangeLow = line.rangeLow;
      this.isLowerRange = line.isLowerRange;
      this.isOOB = line.isOOB;
    } else {
      this.isLeaf = false;
    }
  }

  HuffmanTreeNode.prototype = {
    buildTree: function buildTree(line, shift) {
      var bit = line.prefixCode >> shift & 1;

      if (shift <= 0) {
        this.children[bit] = new HuffmanTreeNode(line);
      } else {
        var node = this.children[bit];

        if (!node) {
          this.children[bit] = node = new HuffmanTreeNode(null);
        }

        node.buildTree(line, shift - 1);
      }
    },
    decodeNode: function decodeNode(reader) {
      if (this.isLeaf) {
        if (this.isOOB) {
          return null;
        }

        var htOffset = reader.readBits(this.rangeLength);
        return this.rangeLow + (this.isLowerRange ? -htOffset : htOffset);
      }

      var node = this.children[reader.readBit()];

      if (!node) {
        throw new Jbig2Error("invalid Huffman data");
      }

      return node.decodeNode(reader);
    }
  };

  function HuffmanTable(lines, prefixCodesDone) {
    if (!prefixCodesDone) {
      this.assignPrefixCodes(lines);
    }

    this.rootNode = new HuffmanTreeNode(null);

    for (var i = 0, ii = lines.length; i < ii; i++) {
      var line = lines[i];

      if (line.prefixLength > 0) {
        this.rootNode.buildTree(line, line.prefixLength - 1);
      }
    }
  }

  HuffmanTable.prototype = {
    decode: function decode(reader) {
      return this.rootNode.decodeNode(reader);
    },
    assignPrefixCodes: function assignPrefixCodes(lines) {
      var linesLength = lines.length;
      var prefixLengthMax = 0;

      for (var i = 0; i < linesLength; i++) {
        prefixLengthMax = Math.max(prefixLengthMax, lines[i].prefixLength);
      }

      var histogram = new Uint32Array(prefixLengthMax + 1);

      for (var _i2 = 0; _i2 < linesLength; _i2++) {
        histogram[lines[_i2].prefixLength]++;
      }

      var currentLength = 1,
          firstCode = 0,
          currentCode,
          currentTemp,
          line;
      histogram[0] = 0;

      while (currentLength <= prefixLengthMax) {
        firstCode = firstCode + histogram[currentLength - 1] << 1;
        currentCode = firstCode;
        currentTemp = 0;

        while (currentTemp < linesLength) {
          line = lines[currentTemp];

          if (line.prefixLength === currentLength) {
            line.prefixCode = currentCode;
            currentCode++;
          }

          currentTemp++;
        }

        currentLength++;
      }
    }
  };

  function decodeTablesSegment(data, start, end) {
    var flags = data[start];
    var lowestValue = (0, _core_utils.readUint32)(data, start + 1) & 0xffffffff;
    var highestValue = (0, _core_utils.readUint32)(data, start + 5) & 0xffffffff;
    var reader = new Reader(data, start + 9, end);
    var prefixSizeBits = (flags >> 1 & 7) + 1;
    var rangeSizeBits = (flags >> 4 & 7) + 1;
    var lines = [];
    var prefixLength,
        rangeLength,
        currentRangeLow = lowestValue;

    do {
      prefixLength = reader.readBits(prefixSizeBits);
      rangeLength = reader.readBits(rangeSizeBits);
      lines.push(new HuffmanLine([currentRangeLow, prefixLength, rangeLength, 0]));
      currentRangeLow += 1 << rangeLength;
    } while (currentRangeLow < highestValue);

    prefixLength = reader.readBits(prefixSizeBits);
    lines.push(new HuffmanLine([lowestValue - 1, prefixLength, 32, 0, "lower"]));
    prefixLength = reader.readBits(prefixSizeBits);
    lines.push(new HuffmanLine([highestValue, prefixLength, 32, 0]));

    if (flags & 1) {
      prefixLength = reader.readBits(prefixSizeBits);
      lines.push(new HuffmanLine([prefixLength, 0]));
    }

    return new HuffmanTable(lines, false);
  }

  var standardTablesCache = {};

  function getStandardTable(number) {
    var table = standardTablesCache[number];

    if (table) {
      return table;
    }

    var lines;

    switch (number) {
      case 1:
        lines = [[0, 1, 4, 0x0], [16, 2, 8, 0x2], [272, 3, 16, 0x6], [65808, 3, 32, 0x7]];
        break;

      case 2:
        lines = [[0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xe], [11, 5, 6, 0x1e], [75, 6, 32, 0x3e], [6, 0x3f]];
        break;

      case 3:
        lines = [[-256, 8, 8, 0xfe], [0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xe], [11, 5, 6, 0x1e], [-257, 8, 32, 0xff, "lower"], [75, 7, 32, 0x7e], [6, 0x3e]];
        break;

      case 4:
        lines = [[1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xe], [12, 5, 6, 0x1e], [76, 5, 32, 0x1f]];
        break;

      case 5:
        lines = [[-255, 7, 8, 0x7e], [1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xe], [12, 5, 6, 0x1e], [-256, 7, 32, 0x7f, "lower"], [76, 6, 32, 0x3e]];
        break;

      case 6:
        lines = [[-2048, 5, 10, 0x1c], [-1024, 4, 9, 0x8], [-512, 4, 8, 0x9], [-256, 4, 7, 0xa], [-128, 5, 6, 0x1d], [-64, 5, 5, 0x1e], [-32, 4, 5, 0xb], [0, 2, 7, 0x0], [128, 3, 7, 0x2], [256, 3, 8, 0x3], [512, 4, 9, 0xc], [1024, 4, 10, 0xd], [-2049, 6, 32, 0x3e, "lower"], [2048, 6, 32, 0x3f]];
        break;

      case 7:
        lines = [[-1024, 4, 9, 0x8], [-512, 3, 8, 0x0], [-256, 4, 7, 0x9], [-128, 5, 6, 0x1a], [-64, 5, 5, 0x1b], [-32, 4, 5, 0xa], [0, 4, 5, 0xb], [32, 5, 5, 0x1c], [64, 5, 6, 0x1d], [128, 4, 7, 0xc], [256, 3, 8, 0x1], [512, 3, 9, 0x2], [1024, 3, 10, 0x3], [-1025, 5, 32, 0x1e, "lower"], [2048, 5, 32, 0x1f]];
        break;

      case 8:
        lines = [[-15, 8, 3, 0xfc], [-7, 9, 1, 0x1fc], [-5, 8, 1, 0xfd], [-3, 9, 0, 0x1fd], [-2, 7, 0, 0x7c], [-1, 4, 0, 0xa], [0, 2, 1, 0x0], [2, 5, 0, 0x1a], [3, 6, 0, 0x3a], [4, 3, 4, 0x4], [20, 6, 1, 0x3b], [22, 4, 4, 0xb], [38, 4, 5, 0xc], [70, 5, 6, 0x1b], [134, 5, 7, 0x1c], [262, 6, 7, 0x3c], [390, 7, 8, 0x7d], [646, 6, 10, 0x3d], [-16, 9, 32, 0x1fe, "lower"], [1670, 9, 32, 0x1ff], [2, 0x1]];
        break;

      case 9:
        lines = [[-31, 8, 4, 0xfc], [-15, 9, 2, 0x1fc], [-11, 8, 2, 0xfd], [-7, 9, 1, 0x1fd], [-5, 7, 1, 0x7c], [-3, 4, 1, 0xa], [-1, 3, 1, 0x2], [1, 3, 1, 0x3], [3, 5, 1, 0x1a], [5, 6, 1, 0x3a], [7, 3, 5, 0x4], [39, 6, 2, 0x3b], [43, 4, 5, 0xb], [75, 4, 6, 0xc], [139, 5, 7, 0x1b], [267, 5, 8, 0x1c], [523, 6, 8, 0x3c], [779, 7, 9, 0x7d], [1291, 6, 11, 0x3d], [-32, 9, 32, 0x1fe, "lower"], [3339, 9, 32, 0x1ff], [2, 0x0]];
        break;

      case 10:
        lines = [[-21, 7, 4, 0x7a], [-5, 8, 0, 0xfc], [-4, 7, 0, 0x7b], [-3, 5, 0, 0x18], [-2, 2, 2, 0x0], [2, 5, 0, 0x19], [3, 6, 0, 0x36], [4, 7, 0, 0x7c], [5, 8, 0, 0xfd], [6, 2, 6, 0x1], [70, 5, 5, 0x1a], [102, 6, 5, 0x37], [134, 6, 6, 0x38], [198, 6, 7, 0x39], [326, 6, 8, 0x3a], [582, 6, 9, 0x3b], [1094, 6, 10, 0x3c], [2118, 7, 11, 0x7d], [-22, 8, 32, 0xfe, "lower"], [4166, 8, 32, 0xff], [2, 0x2]];
        break;

      case 11:
        lines = [[1, 1, 0, 0x0], [2, 2, 1, 0x2], [4, 4, 0, 0xc], [5, 4, 1, 0xd], [7, 5, 1, 0x1c], [9, 5, 2, 0x1d], [13, 6, 2, 0x3c], [17, 7, 2, 0x7a], [21, 7, 3, 0x7b], [29, 7, 4, 0x7c], [45, 7, 5, 0x7d], [77, 7, 6, 0x7e], [141, 7, 32, 0x7f]];
        break;

      case 12:
        lines = [[1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 1, 0x6], [5, 5, 0, 0x1c], [6, 5, 1, 0x1d], [8, 6, 1, 0x3c], [10, 7, 0, 0x7a], [11, 7, 1, 0x7b], [13, 7, 2, 0x7c], [17, 7, 3, 0x7d], [25, 7, 4, 0x7e], [41, 8, 5, 0xfe], [73, 8, 32, 0xff]];
        break;

      case 13:
        lines = [[1, 1, 0, 0x0], [2, 3, 0, 0x4], [3, 4, 0, 0xc], [4, 5, 0, 0x1c], [5, 4, 1, 0xd], [7, 3, 3, 0x5], [15, 6, 1, 0x3a], [17, 6, 2, 0x3b], [21, 6, 3, 0x3c], [29, 6, 4, 0x3d], [45, 6, 5, 0x3e], [77, 7, 6, 0x7e], [141, 7, 32, 0x7f]];
        break;

      case 14:
        lines = [[-2, 3, 0, 0x4], [-1, 3, 0, 0x5], [0, 1, 0, 0x0], [1, 3, 0, 0x6], [2, 3, 0, 0x7]];
        break;

      case 15:
        lines = [[-24, 7, 4, 0x7c], [-8, 6, 2, 0x3c], [-4, 5, 1, 0x1c], [-2, 4, 0, 0xc], [-1, 3, 0, 0x4], [0, 1, 0, 0x0], [1, 3, 0, 0x5], [2, 4, 0, 0xd], [3, 5, 1, 0x1d], [5, 6, 2, 0x3d], [9, 7, 4, 0x7d], [-25, 7, 32, 0x7e, "lower"], [25, 7, 32, 0x7f]];
        break;

      default:
        throw new Jbig2Error("standard table B.".concat(number, " does not exist"));
    }

    for (var i = 0, ii = lines.length; i < ii; i++) {
      lines[i] = new HuffmanLine(lines[i]);
    }

    table = new HuffmanTable(lines, true);
    standardTablesCache[number] = table;
    return table;
  }

  function Reader(data, start, end) {
    this.data = data;
    this.start = start;
    this.end = end;
    this.position = start;
    this.shift = -1;
    this.currentByte = 0;
  }

  Reader.prototype = {
    readBit: function readBit() {
      if (this.shift < 0) {
        if (this.position >= this.end) {
          throw new Jbig2Error("end of data while reading bit");
        }

        this.currentByte = this.data[this.position++];
        this.shift = 7;
      }

      var bit = this.currentByte >> this.shift & 1;
      this.shift--;
      return bit;
    },
    readBits: function readBits(numBits) {
      var result = 0,
          i;

      for (i = numBits - 1; i >= 0; i--) {
        result |= this.readBit() << i;
      }

      return result;
    },
    byteAlign: function byteAlign() {
      this.shift = -1;
    },
    next: function next() {
      if (this.position >= this.end) {
        return -1;
      }

      return this.data[this.position++];
    }
  };

  function getCustomHuffmanTable(index, referredTo, customTables) {
    var currentIndex = 0;

    for (var i = 0, ii = referredTo.length; i < ii; i++) {
      var table = customTables[referredTo[i]];

      if (table) {
        if (index === currentIndex) {
          return table;
        }

        currentIndex++;
      }
    }

    throw new Jbig2Error("can't find custom Huffman table");
  }

  function getTextRegionHuffmanTables(textRegion, referredTo, customTables, numberOfSymbols, reader) {
    var codes = [];

    for (var i = 0; i <= 34; i++) {
      var codeLength = reader.readBits(4);
      codes.push(new HuffmanLine([i, codeLength, 0, 0]));
    }

    var runCodesTable = new HuffmanTable(codes, false);
    codes.length = 0;

    for (var _i3 = 0; _i3 < numberOfSymbols;) {
      var _codeLength = runCodesTable.decode(reader);

      if (_codeLength >= 32) {
        var repeatedLength = void 0,
            numberOfRepeats = void 0,
            j = void 0;

        switch (_codeLength) {
          case 32:
            if (_i3 === 0) {
              throw new Jbig2Error("no previous value in symbol ID table");
            }

            numberOfRepeats = reader.readBits(2) + 3;
            repeatedLength = codes[_i3 - 1].prefixLength;
            break;

          case 33:
            numberOfRepeats = reader.readBits(3) + 3;
            repeatedLength = 0;
            break;

          case 34:
            numberOfRepeats = reader.readBits(7) + 11;
            repeatedLength = 0;
            break;

          default:
            throw new Jbig2Error("invalid code length in symbol ID table");
        }

        for (j = 0; j < numberOfRepeats; j++) {
          codes.push(new HuffmanLine([_i3, repeatedLength, 0, 0]));
          _i3++;
        }
      } else {
        codes.push(new HuffmanLine([_i3, _codeLength, 0, 0]));
        _i3++;
      }
    }

    reader.byteAlign();
    var symbolIDTable = new HuffmanTable(codes, false);
    var customIndex = 0,
        tableFirstS,
        tableDeltaS,
        tableDeltaT;

    switch (textRegion.huffmanFS) {
      case 0:
      case 1:
        tableFirstS = getStandardTable(textRegion.huffmanFS + 6);
        break;

      case 3:
        tableFirstS = getCustomHuffmanTable(customIndex, referredTo, customTables);
        customIndex++;
        break;

      default:
        throw new Jbig2Error("invalid Huffman FS selector");
    }

    switch (textRegion.huffmanDS) {
      case 0:
      case 1:
      case 2:
        tableDeltaS = getStandardTable(textRegion.huffmanDS + 8);
        break;

      case 3:
        tableDeltaS = getCustomHuffmanTable(customIndex, referredTo, customTables);
        customIndex++;
        break;

      default:
        throw new Jbig2Error("invalid Huffman DS selector");
    }

    switch (textRegion.huffmanDT) {
      case 0:
      case 1:
      case 2:
        tableDeltaT = getStandardTable(textRegion.huffmanDT + 11);
        break;

      case 3:
        tableDeltaT = getCustomHuffmanTable(customIndex, referredTo, customTables);
        customIndex++;
        break;

      default:
        throw new Jbig2Error("invalid Huffman DT selector");
    }

    if (textRegion.refinement) {
      throw new Jbig2Error("refinement with Huffman is not supported");
    }

    return {
      symbolIDTable: symbolIDTable,
      tableFirstS: tableFirstS,
      tableDeltaS: tableDeltaS,
      tableDeltaT: tableDeltaT
    };
  }

  function getSymbolDictionaryHuffmanTables(dictionary, referredTo, customTables) {
    var customIndex = 0,
        tableDeltaHeight,
        tableDeltaWidth;

    switch (dictionary.huffmanDHSelector) {
      case 0:
      case 1:
        tableDeltaHeight = getStandardTable(dictionary.huffmanDHSelector + 4);
        break;

      case 3:
        tableDeltaHeight = getCustomHuffmanTable(customIndex, referredTo, customTables);
        customIndex++;
        break;

      default:
        throw new Jbig2Error("invalid Huffman DH selector");
    }

    switch (dictionary.huffmanDWSelector) {
      case 0:
      case 1:
        tableDeltaWidth = getStandardTable(dictionary.huffmanDWSelector + 2);
        break;

      case 3:
        tableDeltaWidth = getCustomHuffmanTable(customIndex, referredTo, customTables);
        customIndex++;
        break;

      default:
        throw new Jbig2Error("invalid Huffman DW selector");
    }

    var tableBitmapSize, tableAggregateInstances;

    if (dictionary.bitmapSizeSelector) {
      tableBitmapSize = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
    } else {
      tableBitmapSize = getStandardTable(1);
    }

    if (dictionary.aggregationInstancesSelector) {
      tableAggregateInstances = getCustomHuffmanTable(customIndex, referredTo, customTables);
    } else {
      tableAggregateInstances = getStandardTable(1);
    }

    return {
      tableDeltaHeight: tableDeltaHeight,
      tableDeltaWidth: tableDeltaWidth,
      tableBitmapSize: tableBitmapSize,
      tableAggregateInstances: tableAggregateInstances
    };
  }

  function readUncompressedBitmap(reader, width, height) {
    var bitmap = [];

    for (var y = 0; y < height; y++) {
      var row = new Uint8Array(width);
      bitmap.push(row);

      for (var x = 0; x < width; x++) {
        row[x] = reader.readBit();
      }

      reader.byteAlign();
    }

    return bitmap;
  }

  function decodeMMRBitmap(input, width, height, endOfBlock) {
    var params = {
      K: -1,
      Columns: width,
      Rows: height,
      BlackIs1: true,
      EndOfBlock: endOfBlock
    };
    var decoder = new _ccitt.CCITTFaxDecoder(input, params);
    var bitmap = [];
    var currentByte,
        eof = false;

    for (var y = 0; y < height; y++) {
      var row = new Uint8Array(width);
      bitmap.push(row);
      var shift = -1;

      for (var x = 0; x < width; x++) {
        if (shift < 0) {
          currentByte = decoder.readNextChar();

          if (currentByte === -1) {
            currentByte = 0;
            eof = true;
          }

          shift = 7;
        }

        row[x] = currentByte >> shift & 1;
        shift--;
      }
    }

    if (endOfBlock && !eof) {
      var lookForEOFLimit = 5;

      for (var i = 0; i < lookForEOFLimit; i++) {
        if (decoder.readNextChar() === -1) {
          break;
        }
      }
    }

    return bitmap;
  }

  function Jbig2Image() {}

  Jbig2Image.prototype = {
    parseChunks: function parseChunks(chunks) {
      return parseJbig2Chunks(chunks);
    },
    parse: function parse(data) {
      var _parseJbig = parseJbig2(data),
          imgData = _parseJbig.imgData,
          width = _parseJbig.width,
          height = _parseJbig.height;

      this.width = width;
      this.height = height;
      return imgData;
    }
  };
  return Jbig2Image;
}();

exports.Jbig2Image = Jbig2Image;

/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.collectActions = collectActions;
exports.escapePDFName = escapePDFName;
exports.getArrayLookupTableFactory = getArrayLookupTableFactory;
exports.getInheritableProperty = getInheritableProperty;
exports.getLookupTableFactory = getLookupTableFactory;
exports.isWhiteSpace = isWhiteSpace;
exports.log2 = log2;
exports.parseXFAPath = parseXFAPath;
exports.readInt8 = readInt8;
exports.readUint16 = readUint16;
exports.readUint32 = readUint32;
exports.toRomanNumerals = toRomanNumerals;
exports.XRefParseException = exports.XRefEntryException = exports.MissingDataException = void 0;

var _util = __w_pdfjs_require__(1);

var _primitives = __w_pdfjs_require__(95);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function getLookupTableFactory(initializer) {
  var lookup;
  return function () {
    if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
    }

    return lookup;
  };
}

function getArrayLookupTableFactory(initializer) {
  var lookup;
  return function () {
    if (initializer) {
      var arr = initializer();
      initializer = null;
      lookup = Object.create(null);

      for (var i = 0, ii = arr.length; i < ii; i += 2) {
        lookup[arr[i]] = arr[i + 1];
      }

      arr = null;
    }

    return lookup;
  };
}

var MissingDataException = /*#__PURE__*/function (_BaseException) {
  _inherits(MissingDataException, _BaseException);

  var _super = _createSuper(MissingDataException);

  function MissingDataException(begin, end) {
    var _this;

    _classCallCheck(this, MissingDataException);

    _this = _super.call(this, "Missing data [".concat(begin, ", ").concat(end, ")"));
    _this.begin = begin;
    _this.end = end;
    return _this;
  }

  return MissingDataException;
}(_util.BaseException);

exports.MissingDataException = MissingDataException;

var XRefEntryException = /*#__PURE__*/function (_BaseException2) {
  _inherits(XRefEntryException, _BaseException2);

  var _super2 = _createSuper(XRefEntryException);

  function XRefEntryException() {
    _classCallCheck(this, XRefEntryException);

    return _super2.apply(this, arguments);
  }

  return XRefEntryException;
}(_util.BaseException);

exports.XRefEntryException = XRefEntryException;

var XRefParseException = /*#__PURE__*/function (_BaseException3) {
  _inherits(XRefParseException, _BaseException3);

  var _super3 = _createSuper(XRefParseException);

  function XRefParseException() {
    _classCallCheck(this, XRefParseException);

    return _super3.apply(this, arguments);
  }

  return XRefParseException;
}(_util.BaseException);

exports.XRefParseException = XRefParseException;

function getInheritableProperty(_ref) {
  var dict = _ref.dict,
      key = _ref.key,
      _ref$getArray = _ref.getArray,
      getArray = _ref$getArray === void 0 ? false : _ref$getArray,
      _ref$stopWhenFound = _ref.stopWhenFound,
      stopWhenFound = _ref$stopWhenFound === void 0 ? true : _ref$stopWhenFound;
  var LOOP_LIMIT = 100;
  var loopCount = 0;
  var values;

  while (dict) {
    var value = getArray ? dict.getArray(key) : dict.get(key);

    if (value !== undefined) {
      if (stopWhenFound) {
        return value;
      }

      if (!values) {
        values = [];
      }

      values.push(value);
    }

    if (++loopCount > LOOP_LIMIT) {
      (0, _util.warn)("getInheritableProperty: maximum loop count exceeded for \"".concat(key, "\""));
      break;
    }

    dict = dict.get("Parent");
  }

  return values;
}

var ROMAN_NUMBER_MAP = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

function toRomanNumerals(number) {
  var lowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  (0, _util.assert)(Number.isInteger(number) && number > 0, "The number should be a positive integer.");
  var romanBuf = [];
  var pos;

  while (number >= 1000) {
    number -= 1000;
    romanBuf.push("M");
  }

  pos = number / 100 | 0;
  number %= 100;
  romanBuf.push(ROMAN_NUMBER_MAP[pos]);
  pos = number / 10 | 0;
  number %= 10;
  romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
  romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
  var romanStr = romanBuf.join("");
  return lowerCase ? romanStr.toLowerCase() : romanStr;
}

function log2(x) {
  if (x <= 0) {
    return 0;
  }

  return Math.ceil(Math.log2(x));
}

function readInt8(data, offset) {
  return data[offset] << 24 >> 24;
}

function readUint16(data, offset) {
  return data[offset] << 8 | data[offset + 1];
}

function readUint32(data, offset) {
  return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
}

function isWhiteSpace(ch) {
  return ch === 0x20 || ch === 0x09 || ch === 0x0d || ch === 0x0a;
}

function parseXFAPath(path) {
  var positionPattern = /(.+)\[([0-9]+)\]$/;
  return path.split(".").map(function (component) {
    var m = component.match(positionPattern);

    if (m) {
      return {
        name: m[1],
        pos: parseInt(m[2], 10)
      };
    }

    return {
      name: component,
      pos: 0
    };
  });
}

function escapePDFName(str) {
  var buffer = [];
  var start = 0;

  for (var i = 0, ii = str.length; i < ii; i++) {
    var _char = str.charCodeAt(i);

    if (_char < 0x21 || _char > 0x7e || _char === 0x23 || _char === 0x28 || _char === 0x29 || _char === 0x3c || _char === 0x3e || _char === 0x5b || _char === 0x5d || _char === 0x7b || _char === 0x7d || _char === 0x2f || _char === 0x25) {
      if (start < i) {
        buffer.push(str.substring(start, i));
      }

      buffer.push("#".concat(_char.toString(16)));
      start = i + 1;
    }
  }

  if (buffer.length === 0) {
    return str;
  }

  if (start < str.length) {
    buffer.push(str.substring(start, str.length));
  }

  return buffer.join("");
}

function _collectJS(entry, xref, list, parents) {
  if (!entry) {
    return;
  }

  var parent = null;

  if ((0, _primitives.isRef)(entry)) {
    if (parents.has(entry)) {
      return;
    }

    parent = entry;
    parents.put(parent);
    entry = xref.fetch(entry);
  }

  if (Array.isArray(entry)) {
    var _iterator = _createForOfIteratorHelper(entry),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;

        _collectJS(element, xref, list, parents);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (entry instanceof _primitives.Dict) {
    if ((0, _primitives.isName)(entry.get("S"), "JavaScript") && entry.has("JS")) {
      var js = entry.get("JS");
      var code;

      if ((0, _primitives.isStream)(js)) {
        code = (0, _util.bytesToString)(js.getBytes());
      } else {
        code = js;
      }

      code = (0, _util.stringToPDFString)(code);

      if (code) {
        list.push(code);
      }
    }

    _collectJS(entry.getRaw("Next"), xref, list, parents);
  }

  if (parent) {
    parents.remove(parent);
  }
}

function collectActions(xref, dict, eventType) {
  var actions = Object.create(null);

  if (dict.has("AA")) {
    var additionalActions = dict.get("AA");

    var _iterator2 = _createForOfIteratorHelper(additionalActions.getKeys()),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var key = _step2.value;
        var action = eventType[key];

        if (!action) {
          continue;
        }

        var actionDict = additionalActions.getRaw(key);
        var parents = new _primitives.RefSet();
        var list = [];

        _collectJS(actionDict, xref, list, parents);

        if (list.length > 0) {
          actions[action] = list;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  if (dict.has("A")) {
    var _actionDict = dict.get("A");

    var _parents = new _primitives.RefSet();

    var _list = [];

    _collectJS(_actionDict, xref, _list, _parents);

    if (_list.length > 0) {
      actions.Action = _list;
    }
  }

  return (0, _util.objectSize)(actions) > 0 ? actions : null;
}

/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clearPrimitiveCaches = clearPrimitiveCaches;
exports.isCmd = isCmd;
exports.isDict = isDict;
exports.isEOF = isEOF;
exports.isName = isName;
exports.isRef = isRef;
exports.isRefsEqual = isRefsEqual;
exports.isStream = isStream;
exports.RefSetCache = exports.RefSet = exports.Ref = exports.Name = exports.EOF = exports.Dict = exports.Cmd = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(96));

var _util = __w_pdfjs_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var EOF = {};
exports.EOF = EOF;

var Name = function NameClosure() {
  var nameCache = Object.create(null);

  function Name(name) {
    this.name = name;
  }

  Name.prototype = {};

  Name.get = function Name_get(name) {
    var nameValue = nameCache[name];
    return nameValue ? nameValue : nameCache[name] = new Name(name);
  };

  Name._clearCache = function () {
    nameCache = Object.create(null);
  };

  return Name;
}();

exports.Name = Name;

var Cmd = function CmdClosure() {
  var cmdCache = Object.create(null);

  function Cmd(cmd) {
    this.cmd = cmd;
  }

  Cmd.prototype = {};

  Cmd.get = function Cmd_get(cmd) {
    var cmdValue = cmdCache[cmd];
    return cmdValue ? cmdValue : cmdCache[cmd] = new Cmd(cmd);
  };

  Cmd._clearCache = function () {
    cmdCache = Object.create(null);
  };

  return Cmd;
}();

exports.Cmd = Cmd;

var Dict = function DictClosure() {
  var nonSerializable = function nonSerializableClosure() {
    return nonSerializable;
  };

  function Dict(xref) {
    this._map = Object.create(null);
    this.xref = xref;
    this.objId = null;
    this.suppressEncryption = false;
    this.__nonSerializable__ = nonSerializable;
  }

  Dict.prototype = {
    assignXref: function Dict_assignXref(newXref) {
      this.xref = newXref;
    },

    get size() {
      return Object.keys(this._map).length;
    },

    get: function get(key1, key2, key3) {
      var value = this._map[key1];

      if (value === undefined && key2 !== undefined) {
        value = this._map[key2];

        if (value === undefined && key3 !== undefined) {
          value = this._map[key3];
        }
      }

      if (value instanceof Ref && this.xref) {
        return this.xref.fetch(value, this.suppressEncryption);
      }

      return value;
    },
    getAsync: function getAsync(key1, key2, key3) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var value;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = _this._map[key1];

                if (value === undefined && key2 !== undefined) {
                  value = _this._map[key2];

                  if (value === undefined && key3 !== undefined) {
                    value = _this._map[key3];
                  }
                }

                if (!(value instanceof Ref && _this.xref)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", _this.xref.fetchAsync(value, _this.suppressEncryption));

              case 4:
                return _context.abrupt("return", value);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getArray: function getArray(key1, key2, key3) {
      var value = this.get(key1, key2, key3);

      if (!Array.isArray(value) || !this.xref) {
        return value;
      }

      value = value.slice();

      for (var i = 0, ii = value.length; i < ii; i++) {
        if (!(value[i] instanceof Ref)) {
          continue;
        }

        value[i] = this.xref.fetch(value[i], this.suppressEncryption);
      }

      return value;
    },
    getRaw: function Dict_getRaw(key) {
      return this._map[key];
    },
    getKeys: function Dict_getKeys() {
      return Object.keys(this._map);
    },
    getRawValues: function Dict_getRawValues() {
      return Object.values(this._map);
    },
    set: function Dict_set(key, value) {
      this._map[key] = value;
    },
    has: function Dict_has(key) {
      return this._map[key] !== undefined;
    },
    forEach: function Dict_forEach(callback) {
      for (var key in this._map) {
        callback(key, this.get(key));
      }
    }
  };

  Dict.empty = function () {
    var emptyDict = new Dict(null);

    emptyDict.set = function (key, value) {
      (0, _util.unreachable)("Should not call `set` on the empty dictionary.");
    };

    return emptyDict;
  }();

  Dict.merge = function (_ref) {
    var xref = _ref.xref,
        dictArray = _ref.dictArray,
        _ref$mergeSubDicts = _ref.mergeSubDicts,
        mergeSubDicts = _ref$mergeSubDicts === void 0 ? false : _ref$mergeSubDicts;
    var mergedDict = new Dict(xref);

    if (!mergeSubDicts) {
      var _iterator = _createForOfIteratorHelper(dictArray),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dict = _step.value;

          if (!(dict instanceof Dict)) {
            continue;
          }

          for (var _i = 0, _Object$entries = Object.entries(dict._map); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            if (mergedDict._map[key] === undefined) {
              mergedDict._map[key] = value;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return mergedDict.size > 0 ? mergedDict : Dict.empty;
    }

    var properties = new Map();

    var _iterator2 = _createForOfIteratorHelper(dictArray),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _dict = _step2.value;

        if (!(_dict instanceof Dict)) {
          continue;
        }

        for (var _i2 = 0, _Object$entries2 = Object.entries(_dict._map); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
              _key = _Object$entries2$_i[0],
              _value = _Object$entries2$_i[1];

          var property = properties.get(_key);

          if (property === undefined) {
            property = [];
            properties.set(_key, property);
          }

          property.push(_value);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var _iterator3 = _createForOfIteratorHelper(properties),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            name = _step3$value[0],
            values = _step3$value[1];

        if (values.length === 1 || !(values[0] instanceof Dict)) {
          mergedDict._map[name] = values[0];
          continue;
        }

        var subDict = new Dict(xref);

        var _iterator4 = _createForOfIteratorHelper(values),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _dict2 = _step4.value;

            if (!(_dict2 instanceof Dict)) {
              continue;
            }

            for (var _i3 = 0, _Object$entries3 = Object.entries(_dict2._map); _i3 < _Object$entries3.length; _i3++) {
              var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
                  _key2 = _Object$entries3$_i[0],
                  _value2 = _Object$entries3$_i[1];

              if (subDict._map[_key2] === undefined) {
                subDict._map[_key2] = _value2;
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        if (subDict.size > 0) {
          mergedDict._map[name] = subDict;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    properties.clear();
    return mergedDict.size > 0 ? mergedDict : Dict.empty;
  };

  return Dict;
}();

exports.Dict = Dict;

var Ref = function RefClosure() {
  var refCache = Object.create(null);

  function Ref(num, gen) {
    this.num = num;
    this.gen = gen;
  }

  Ref.prototype = {
    toString: function Ref_toString() {
      if (this.gen === 0) {
        return "".concat(this.num, "R");
      }

      return "".concat(this.num, "R").concat(this.gen);
    }
  };

  Ref.get = function (num, gen) {
    var key = gen === 0 ? "".concat(num, "R") : "".concat(num, "R").concat(gen);
    var refValue = refCache[key];
    return refValue ? refValue : refCache[key] = new Ref(num, gen);
  };

  Ref._clearCache = function () {
    refCache = Object.create(null);
  };

  return Ref;
}();

exports.Ref = Ref;

var RefSet = /*#__PURE__*/function () {
  function RefSet() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, RefSet);

    this._set = new Set(parent && parent._set);
  }

  _createClass(RefSet, [{
    key: "has",
    value: function has(ref) {
      return this._set.has(ref.toString());
    }
  }, {
    key: "put",
    value: function put(ref) {
      this._set.add(ref.toString());
    }
  }, {
    key: "remove",
    value: function remove(ref) {
      this._set["delete"](ref.toString());
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      var _iterator5 = _createForOfIteratorHelper(this._set.values()),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var ref = _step5.value;
          callback(ref);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this._set.clear();
    }
  }]);

  return RefSet;
}();

exports.RefSet = RefSet;

var RefSetCache = /*#__PURE__*/function () {
  function RefSetCache() {
    _classCallCheck(this, RefSetCache);

    this._map = new Map();
  }

  _createClass(RefSetCache, [{
    key: "get",
    value: function get(ref) {
      return this._map.get(ref.toString());
    }
  }, {
    key: "has",
    value: function has(ref) {
      return this._map.has(ref.toString());
    }
  }, {
    key: "put",
    value: function put(ref, obj) {
      this._map.set(ref.toString(), obj);
    }
  }, {
    key: "putAlias",
    value: function putAlias(ref, aliasRef) {
      this._map.set(ref.toString(), this.get(aliasRef));
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      var _iterator6 = _createForOfIteratorHelper(this._map.values()),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var value = _step6.value;
          callback(value);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this._map.clear();
    }
  }, {
    key: "size",
    get: function get() {
      return this._map.size;
    }
  }]);

  return RefSetCache;
}();

exports.RefSetCache = RefSetCache;

function isEOF(v) {
  return v === EOF;
}

function isName(v, name) {
  return v instanceof Name && (name === undefined || v.name === name);
}

function isCmd(v, cmd) {
  return v instanceof Cmd && (cmd === undefined || v.cmd === cmd);
}

function isDict(v, type) {
  return v instanceof Dict && (type === undefined || isName(v.get("Type"), type));
}

function isRef(v) {
  return v instanceof Ref;
}

function isRefsEqual(v1, v2) {
  return v1.num === v2.num && v1.gen === v2.gen;
}

function isStream(v) {
  return _typeof(v) === "object" && v !== null && v.getBytes !== undefined;
}

function clearPrimitiveCaches() {
  Cmd._clearCache();

  Name._clearCache();

  Ref._clearCache();
}

/***/ }),
/* 96 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";


module.exports = __w_pdfjs_require__(97);

/***/ }),
/* 97 */
/***/ ((module, __unused_webpack_exports, __w_pdfjs_require__) => {

"use strict";
/* module decorator */ module = __w_pdfjs_require__.nmd(module);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap;

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator;

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator["return"]) {
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      return info;
    }

    context.delegate = null;
    return ContinueSentinel;
  }

  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
  return exports;
}(( false ? 0 : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ArithmeticDecoder = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var QeTable = [{
  qe: 0x5601,
  nmps: 1,
  nlps: 1,
  switchFlag: 1
}, {
  qe: 0x3401,
  nmps: 2,
  nlps: 6,
  switchFlag: 0
}, {
  qe: 0x1801,
  nmps: 3,
  nlps: 9,
  switchFlag: 0
}, {
  qe: 0x0ac1,
  nmps: 4,
  nlps: 12,
  switchFlag: 0
}, {
  qe: 0x0521,
  nmps: 5,
  nlps: 29,
  switchFlag: 0
}, {
  qe: 0x0221,
  nmps: 38,
  nlps: 33,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 7,
  nlps: 6,
  switchFlag: 1
}, {
  qe: 0x5401,
  nmps: 8,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x4801,
  nmps: 9,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x3801,
  nmps: 10,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x3001,
  nmps: 11,
  nlps: 17,
  switchFlag: 0
}, {
  qe: 0x2401,
  nmps: 12,
  nlps: 18,
  switchFlag: 0
}, {
  qe: 0x1c01,
  nmps: 13,
  nlps: 20,
  switchFlag: 0
}, {
  qe: 0x1601,
  nmps: 29,
  nlps: 21,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 15,
  nlps: 14,
  switchFlag: 1
}, {
  qe: 0x5401,
  nmps: 16,
  nlps: 14,
  switchFlag: 0
}, {
  qe: 0x5101,
  nmps: 17,
  nlps: 15,
  switchFlag: 0
}, {
  qe: 0x4801,
  nmps: 18,
  nlps: 16,
  switchFlag: 0
}, {
  qe: 0x3801,
  nmps: 19,
  nlps: 17,
  switchFlag: 0
}, {
  qe: 0x3401,
  nmps: 20,
  nlps: 18,
  switchFlag: 0
}, {
  qe: 0x3001,
  nmps: 21,
  nlps: 19,
  switchFlag: 0
}, {
  qe: 0x2801,
  nmps: 22,
  nlps: 19,
  switchFlag: 0
}, {
  qe: 0x2401,
  nmps: 23,
  nlps: 20,
  switchFlag: 0
}, {
  qe: 0x2201,
  nmps: 24,
  nlps: 21,
  switchFlag: 0
}, {
  qe: 0x1c01,
  nmps: 25,
  nlps: 22,
  switchFlag: 0
}, {
  qe: 0x1801,
  nmps: 26,
  nlps: 23,
  switchFlag: 0
}, {
  qe: 0x1601,
  nmps: 27,
  nlps: 24,
  switchFlag: 0
}, {
  qe: 0x1401,
  nmps: 28,
  nlps: 25,
  switchFlag: 0
}, {
  qe: 0x1201,
  nmps: 29,
  nlps: 26,
  switchFlag: 0
}, {
  qe: 0x1101,
  nmps: 30,
  nlps: 27,
  switchFlag: 0
}, {
  qe: 0x0ac1,
  nmps: 31,
  nlps: 28,
  switchFlag: 0
}, {
  qe: 0x09c1,
  nmps: 32,
  nlps: 29,
  switchFlag: 0
}, {
  qe: 0x08a1,
  nmps: 33,
  nlps: 30,
  switchFlag: 0
}, {
  qe: 0x0521,
  nmps: 34,
  nlps: 31,
  switchFlag: 0
}, {
  qe: 0x0441,
  nmps: 35,
  nlps: 32,
  switchFlag: 0
}, {
  qe: 0x02a1,
  nmps: 36,
  nlps: 33,
  switchFlag: 0
}, {
  qe: 0x0221,
  nmps: 37,
  nlps: 34,
  switchFlag: 0
}, {
  qe: 0x0141,
  nmps: 38,
  nlps: 35,
  switchFlag: 0
}, {
  qe: 0x0111,
  nmps: 39,
  nlps: 36,
  switchFlag: 0
}, {
  qe: 0x0085,
  nmps: 40,
  nlps: 37,
  switchFlag: 0
}, {
  qe: 0x0049,
  nmps: 41,
  nlps: 38,
  switchFlag: 0
}, {
  qe: 0x0025,
  nmps: 42,
  nlps: 39,
  switchFlag: 0
}, {
  qe: 0x0015,
  nmps: 43,
  nlps: 40,
  switchFlag: 0
}, {
  qe: 0x0009,
  nmps: 44,
  nlps: 41,
  switchFlag: 0
}, {
  qe: 0x0005,
  nmps: 45,
  nlps: 42,
  switchFlag: 0
}, {
  qe: 0x0001,
  nmps: 45,
  nlps: 43,
  switchFlag: 0
}, {
  qe: 0x5601,
  nmps: 46,
  nlps: 46,
  switchFlag: 0
}];

var ArithmeticDecoder = /*#__PURE__*/function () {
  function ArithmeticDecoder(data, start, end) {
    _classCallCheck(this, ArithmeticDecoder);

    this.data = data;
    this.bp = start;
    this.dataEnd = end;
    this.chigh = data[start];
    this.clow = 0;
    this.byteIn();
    this.chigh = this.chigh << 7 & 0xffff | this.clow >> 9 & 0x7f;
    this.clow = this.clow << 7 & 0xffff;
    this.ct -= 7;
    this.a = 0x8000;
  }

  _createClass(ArithmeticDecoder, [{
    key: "byteIn",
    value: function byteIn() {
      var data = this.data;
      var bp = this.bp;

      if (data[bp] === 0xff) {
        if (data[bp + 1] > 0x8f) {
          this.clow += 0xff00;
          this.ct = 8;
        } else {
          bp++;
          this.clow += data[bp] << 9;
          this.ct = 7;
          this.bp = bp;
        }
      } else {
        bp++;
        this.clow += bp < this.dataEnd ? data[bp] << 8 : 0xff00;
        this.ct = 8;
        this.bp = bp;
      }

      if (this.clow > 0xffff) {
        this.chigh += this.clow >> 16;
        this.clow &= 0xffff;
      }
    }
  }, {
    key: "readBit",
    value: function readBit(contexts, pos) {
      var cx_index = contexts[pos] >> 1,
          cx_mps = contexts[pos] & 1;
      var qeTableIcx = QeTable[cx_index];
      var qeIcx = qeTableIcx.qe;
      var d;
      var a = this.a - qeIcx;

      if (this.chigh < qeIcx) {
        if (a < qeIcx) {
          a = qeIcx;
          d = cx_mps;
          cx_index = qeTableIcx.nmps;
        } else {
          a = qeIcx;
          d = 1 ^ cx_mps;

          if (qeTableIcx.switchFlag === 1) {
            cx_mps = d;
          }

          cx_index = qeTableIcx.nlps;
        }
      } else {
        this.chigh -= qeIcx;

        if ((a & 0x8000) !== 0) {
          this.a = a;
          return cx_mps;
        }

        if (a < qeIcx) {
          d = 1 ^ cx_mps;

          if (qeTableIcx.switchFlag === 1) {
            cx_mps = d;
          }

          cx_index = qeTableIcx.nlps;
        } else {
          d = cx_mps;
          cx_index = qeTableIcx.nmps;
        }
      }

      do {
        if (this.ct === 0) {
          this.byteIn();
        }

        a <<= 1;
        this.chigh = this.chigh << 1 & 0xffff | this.clow >> 15 & 1;
        this.clow = this.clow << 1 & 0xffff;
        this.ct--;
      } while ((a & 0x8000) === 0);

      this.a = a;
      contexts[pos] = cx_index << 1 | cx_mps;
      return d;
    }
  }]);

  return ArithmeticDecoder;
}();

exports.ArithmeticDecoder = ArithmeticDecoder;

/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CCITTFaxDecoder = void 0;

var _util = __w_pdfjs_require__(1);

var CCITTFaxDecoder = function CCITTFaxDecoder() {
  var ccittEOL = -2;
  var ccittEOF = -1;
  var twoDimPass = 0;
  var twoDimHoriz = 1;
  var twoDimVert0 = 2;
  var twoDimVertR1 = 3;
  var twoDimVertL1 = 4;
  var twoDimVertR2 = 5;
  var twoDimVertL2 = 6;
  var twoDimVertR3 = 7;
  var twoDimVertL3 = 8;
  var twoDimTable = [[-1, -1], [-1, -1], [7, twoDimVertL3], [7, twoDimVertR3], [6, twoDimVertL2], [6, twoDimVertL2], [6, twoDimVertR2], [6, twoDimVertR2], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0]];
  var whiteTable1 = [[-1, -1], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [12, 1984], [12, 2048], [12, 2112], [12, 2176], [12, 2240], [12, 2304], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [12, 2368], [12, 2432], [12, 2496], [12, 2560]];
  var whiteTable2 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 29], [8, 29], [8, 30], [8, 30], [8, 45], [8, 45], [8, 46], [8, 46], [7, 22], [7, 22], [7, 22], [7, 22], [7, 23], [7, 23], [7, 23], [7, 23], [8, 47], [8, 47], [8, 48], [8, 48], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [7, 20], [7, 20], [7, 20], [7, 20], [8, 33], [8, 33], [8, 34], [8, 34], [8, 35], [8, 35], [8, 36], [8, 36], [8, 37], [8, 37], [8, 38], [8, 38], [7, 19], [7, 19], [7, 19], [7, 19], [8, 31], [8, 31], [8, 32], [8, 32], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [8, 53], [8, 53], [8, 54], [8, 54], [7, 26], [7, 26], [7, 26], [7, 26], [8, 39], [8, 39], [8, 40], [8, 40], [8, 41], [8, 41], [8, 42], [8, 42], [8, 43], [8, 43], [8, 44], [8, 44], [7, 21], [7, 21], [7, 21], [7, 21], [7, 28], [7, 28], [7, 28], [7, 28], [8, 61], [8, 61], [8, 62], [8, 62], [8, 63], [8, 63], [8, 0], [8, 0], [8, 320], [8, 320], [8, 384], [8, 384], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [7, 27], [7, 27], [7, 27], [7, 27], [8, 59], [8, 59], [8, 60], [8, 60], [9, 1472], [9, 1536], [9, 1600], [9, 1728], [7, 18], [7, 18], [7, 18], [7, 18], [7, 24], [7, 24], [7, 24], [7, 24], [8, 49], [8, 49], [8, 50], [8, 50], [8, 51], [8, 51], [8, 52], [8, 52], [7, 25], [7, 25], [7, 25], [7, 25], [8, 55], [8, 55], [8, 56], [8, 56], [8, 57], [8, 57], [8, 58], [8, 58], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [8, 448], [8, 448], [8, 512], [8, 512], [9, 704], [9, 768], [8, 640], [8, 640], [8, 576], [8, 576], [9, 832], [9, 896], [9, 960], [9, 1024], [9, 1088], [9, 1152], [9, 1216], [9, 1280], [9, 1344], [9, 1408], [7, 256], [7, 256], [7, 256], [7, 256], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7]];
  var blackTable1 = [[-1, -1], [-1, -1], [12, ccittEOL], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [11, 1792], [11, 1792], [12, 1984], [12, 1984], [12, 2048], [12, 2048], [12, 2112], [12, 2112], [12, 2176], [12, 2176], [12, 2240], [12, 2240], [12, 2304], [12, 2304], [11, 1856], [11, 1856], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [11, 1920], [11, 1920], [12, 2368], [12, 2368], [12, 2432], [12, 2432], [12, 2496], [12, 2496], [12, 2560], [12, 2560], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [12, 52], [12, 52], [13, 640], [13, 704], [13, 768], [13, 832], [12, 55], [12, 55], [12, 56], [12, 56], [13, 1280], [13, 1344], [13, 1408], [13, 1472], [12, 59], [12, 59], [12, 60], [12, 60], [13, 1536], [13, 1600], [11, 24], [11, 24], [11, 24], [11, 24], [11, 25], [11, 25], [11, 25], [11, 25], [13, 1664], [13, 1728], [12, 320], [12, 320], [12, 384], [12, 384], [12, 448], [12, 448], [13, 512], [13, 576], [12, 53], [12, 53], [12, 54], [12, 54], [13, 896], [13, 960], [13, 1024], [13, 1088], [13, 1152], [13, 1216], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64]];
  var blackTable2 = [[8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [11, 23], [11, 23], [12, 50], [12, 51], [12, 44], [12, 45], [12, 46], [12, 47], [12, 57], [12, 58], [12, 61], [12, 256], [10, 16], [10, 16], [10, 16], [10, 16], [10, 17], [10, 17], [10, 17], [10, 17], [12, 48], [12, 49], [12, 62], [12, 63], [12, 30], [12, 31], [12, 32], [12, 33], [12, 40], [12, 41], [11, 22], [11, 22], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [12, 128], [12, 192], [12, 26], [12, 27], [12, 28], [12, 29], [11, 19], [11, 19], [11, 20], [11, 20], [12, 34], [12, 35], [12, 36], [12, 37], [12, 38], [12, 39], [11, 21], [11, 21], [12, 42], [12, 43], [10, 0], [10, 0], [10, 0], [10, 0], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12]];
  var blackTable3 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [6, 9], [6, 8], [5, 7], [5, 7], [4, 6], [4, 6], [4, 6], [4, 6], [4, 5], [4, 5], [4, 5], [4, 5], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];

  function CCITTFaxDecoder(source) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!source || typeof source.next !== "function") {
      throw new Error('CCITTFaxDecoder - invalid "source" parameter.');
    }

    this.source = source;
    this.eof = false;
    this.encoding = options.K || 0;
    this.eoline = options.EndOfLine || false;
    this.byteAlign = options.EncodedByteAlign || false;
    this.columns = options.Columns || 1728;
    this.rows = options.Rows || 0;
    var eoblock = options.EndOfBlock;

    if (eoblock === null || eoblock === undefined) {
      eoblock = true;
    }

    this.eoblock = eoblock;
    this.black = options.BlackIs1 || false;
    this.codingLine = new Uint32Array(this.columns + 1);
    this.refLine = new Uint32Array(this.columns + 2);
    this.codingLine[0] = this.columns;
    this.codingPos = 0;
    this.row = 0;
    this.nextLine2D = this.encoding < 0;
    this.inputBits = 0;
    this.inputBuf = 0;
    this.outputBits = 0;
    this.rowsDone = false;
    var code1;

    while ((code1 = this._lookBits(12)) === 0) {
      this._eatBits(1);
    }

    if (code1 === 1) {
      this._eatBits(12);
    }

    if (this.encoding > 0) {
      this.nextLine2D = !this._lookBits(1);

      this._eatBits(1);
    }
  }

  CCITTFaxDecoder.prototype = {
    readNextChar: function readNextChar() {
      if (this.eof) {
        return -1;
      }

      var refLine = this.refLine;
      var codingLine = this.codingLine;
      var columns = this.columns;
      var refPos, blackPixels, bits, i;

      if (this.outputBits === 0) {
        if (this.rowsDone) {
          this.eof = true;
        }

        if (this.eof) {
          return -1;
        }

        this.err = false;
        var code1, code2, code3;

        if (this.nextLine2D) {
          for (i = 0; codingLine[i] < columns; ++i) {
            refLine[i] = codingLine[i];
          }

          refLine[i++] = columns;
          refLine[i] = columns;
          codingLine[0] = 0;
          this.codingPos = 0;
          refPos = 0;
          blackPixels = 0;

          while (codingLine[this.codingPos] < columns) {
            code1 = this._getTwoDimCode();

            switch (code1) {
              case twoDimPass:
                this._addPixels(refLine[refPos + 1], blackPixels);

                if (refLine[refPos + 1] < columns) {
                  refPos += 2;
                }

                break;

              case twoDimHoriz:
                code1 = code2 = 0;

                if (blackPixels) {
                  do {
                    code1 += code3 = this._getBlackCode();
                  } while (code3 >= 64);

                  do {
                    code2 += code3 = this._getWhiteCode();
                  } while (code3 >= 64);
                } else {
                  do {
                    code1 += code3 = this._getWhiteCode();
                  } while (code3 >= 64);

                  do {
                    code2 += code3 = this._getBlackCode();
                  } while (code3 >= 64);
                }

                this._addPixels(codingLine[this.codingPos] + code1, blackPixels);

                if (codingLine[this.codingPos] < columns) {
                  this._addPixels(codingLine[this.codingPos] + code2, blackPixels ^ 1);
                }

                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }

                break;

              case twoDimVertR3:
                this._addPixels(refLine[refPos] + 3, blackPixels);

                blackPixels ^= 1;

                if (codingLine[this.codingPos] < columns) {
                  ++refPos;

                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }

                break;

              case twoDimVertR2:
                this._addPixels(refLine[refPos] + 2, blackPixels);

                blackPixels ^= 1;

                if (codingLine[this.codingPos] < columns) {
                  ++refPos;

                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }

                break;

              case twoDimVertR1:
                this._addPixels(refLine[refPos] + 1, blackPixels);

                blackPixels ^= 1;

                if (codingLine[this.codingPos] < columns) {
                  ++refPos;

                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }

                break;

              case twoDimVert0:
                this._addPixels(refLine[refPos], blackPixels);

                blackPixels ^= 1;

                if (codingLine[this.codingPos] < columns) {
                  ++refPos;

                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }

                break;

              case twoDimVertL3:
                this._addPixelsNeg(refLine[refPos] - 3, blackPixels);

                blackPixels ^= 1;

                if (codingLine[this.codingPos] < columns) {
                  if (refPos > 0) {
                    --refPos;
                  } else {
                    ++refPos;
                  }

                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }

                break;

              case twoDimVertL2:
                this._addPixelsNeg(refLine[refPos] - 2, blackPixels);

                blackPixels ^= 1;

                if (codingLine[this.codingPos] < columns) {
                  if (refPos > 0) {
                    --refPos;
                  } else {
                    ++refPos;
                  }

                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }

                break;

              case twoDimVertL1:
                this._addPixelsNeg(refLine[refPos] - 1, blackPixels);

                blackPixels ^= 1;

                if (codingLine[this.codingPos] < columns) {
                  if (refPos > 0) {
                    --refPos;
                  } else {
                    ++refPos;
                  }

                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }

                break;

              case ccittEOF:
                this._addPixels(columns, 0);

                this.eof = true;
                break;

              default:
                (0, _util.info)("bad 2d code");

                this._addPixels(columns, 0);

                this.err = true;
            }
          }
        } else {
          codingLine[0] = 0;
          this.codingPos = 0;
          blackPixels = 0;

          while (codingLine[this.codingPos] < columns) {
            code1 = 0;

            if (blackPixels) {
              do {
                code1 += code3 = this._getBlackCode();
              } while (code3 >= 64);
            } else {
              do {
                code1 += code3 = this._getWhiteCode();
              } while (code3 >= 64);
            }

            this._addPixels(codingLine[this.codingPos] + code1, blackPixels);

            blackPixels ^= 1;
          }
        }

        var gotEOL = false;

        if (this.byteAlign) {
          this.inputBits &= ~7;
        }

        if (!this.eoblock && this.row === this.rows - 1) {
          this.rowsDone = true;
        } else {
          code1 = this._lookBits(12);

          if (this.eoline) {
            while (code1 !== ccittEOF && code1 !== 1) {
              this._eatBits(1);

              code1 = this._lookBits(12);
            }
          } else {
            while (code1 === 0) {
              this._eatBits(1);

              code1 = this._lookBits(12);
            }
          }

          if (code1 === 1) {
            this._eatBits(12);

            gotEOL = true;
          } else if (code1 === ccittEOF) {
            this.eof = true;
          }
        }

        if (!this.eof && this.encoding > 0 && !this.rowsDone) {
          this.nextLine2D = !this._lookBits(1);

          this._eatBits(1);
        }

        if (this.eoblock && gotEOL && this.byteAlign) {
          code1 = this._lookBits(12);

          if (code1 === 1) {
            this._eatBits(12);

            if (this.encoding > 0) {
              this._lookBits(1);

              this._eatBits(1);
            }

            if (this.encoding >= 0) {
              for (i = 0; i < 4; ++i) {
                code1 = this._lookBits(12);

                if (code1 !== 1) {
                  (0, _util.info)("bad rtc code: " + code1);
                }

                this._eatBits(12);

                if (this.encoding > 0) {
                  this._lookBits(1);

                  this._eatBits(1);
                }
              }
            }

            this.eof = true;
          }
        } else if (this.err && this.eoline) {
          while (true) {
            code1 = this._lookBits(13);

            if (code1 === ccittEOF) {
              this.eof = true;
              return -1;
            }

            if (code1 >> 1 === 1) {
              break;
            }

            this._eatBits(1);
          }

          this._eatBits(12);

          if (this.encoding > 0) {
            this._eatBits(1);

            this.nextLine2D = !(code1 & 1);
          }
        }

        if (codingLine[0] > 0) {
          this.outputBits = codingLine[this.codingPos = 0];
        } else {
          this.outputBits = codingLine[this.codingPos = 1];
        }

        this.row++;
      }

      var c;

      if (this.outputBits >= 8) {
        c = this.codingPos & 1 ? 0 : 0xff;
        this.outputBits -= 8;

        if (this.outputBits === 0 && codingLine[this.codingPos] < columns) {
          this.codingPos++;
          this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
        }
      } else {
        bits = 8;
        c = 0;

        do {
          if (this.outputBits > bits) {
            c <<= bits;

            if (!(this.codingPos & 1)) {
              c |= 0xff >> 8 - bits;
            }

            this.outputBits -= bits;
            bits = 0;
          } else {
            c <<= this.outputBits;

            if (!(this.codingPos & 1)) {
              c |= 0xff >> 8 - this.outputBits;
            }

            bits -= this.outputBits;
            this.outputBits = 0;

            if (codingLine[this.codingPos] < columns) {
              this.codingPos++;
              this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
            } else if (bits > 0) {
              c <<= bits;
              bits = 0;
            }
          }
        } while (bits);
      }

      if (this.black) {
        c ^= 0xff;
      }

      return c;
    },
    _addPixels: function _addPixels(a1, blackPixels) {
      var codingLine = this.codingLine;
      var codingPos = this.codingPos;

      if (a1 > codingLine[codingPos]) {
        if (a1 > this.columns) {
          (0, _util.info)("row is wrong length");
          this.err = true;
          a1 = this.columns;
        }

        if (codingPos & 1 ^ blackPixels) {
          ++codingPos;
        }

        codingLine[codingPos] = a1;
      }

      this.codingPos = codingPos;
    },
    _addPixelsNeg: function _addPixelsNeg(a1, blackPixels) {
      var codingLine = this.codingLine;
      var codingPos = this.codingPos;

      if (a1 > codingLine[codingPos]) {
        if (a1 > this.columns) {
          (0, _util.info)("row is wrong length");
          this.err = true;
          a1 = this.columns;
        }

        if (codingPos & 1 ^ blackPixels) {
          ++codingPos;
        }

        codingLine[codingPos] = a1;
      } else if (a1 < codingLine[codingPos]) {
        if (a1 < 0) {
          (0, _util.info)("invalid code");
          this.err = true;
          a1 = 0;
        }

        while (codingPos > 0 && a1 < codingLine[codingPos - 1]) {
          --codingPos;
        }

        codingLine[codingPos] = a1;
      }

      this.codingPos = codingPos;
    },
    _findTableCode: function _findTableCode(start, end, table, limit) {
      var limitValue = limit || 0;

      for (var i = start; i <= end; ++i) {
        var code = this._lookBits(i);

        if (code === ccittEOF) {
          return [true, 1, false];
        }

        if (i < end) {
          code <<= end - i;
        }

        if (!limitValue || code >= limitValue) {
          var p = table[code - limitValue];

          if (p[0] === i) {
            this._eatBits(i);

            return [true, p[1], true];
          }
        }
      }

      return [false, 0, false];
    },
    _getTwoDimCode: function _getTwoDimCode() {
      var code = 0;
      var p;

      if (this.eoblock) {
        code = this._lookBits(7);
        p = twoDimTable[code];

        if (p && p[0] > 0) {
          this._eatBits(p[0]);

          return p[1];
        }
      } else {
        var result = this._findTableCode(1, 7, twoDimTable);

        if (result[0] && result[2]) {
          return result[1];
        }
      }

      (0, _util.info)("Bad two dim code");
      return ccittEOF;
    },
    _getWhiteCode: function _getWhiteCode() {
      var code = 0;
      var p;

      if (this.eoblock) {
        code = this._lookBits(12);

        if (code === ccittEOF) {
          return 1;
        }

        if (code >> 5 === 0) {
          p = whiteTable1[code];
        } else {
          p = whiteTable2[code >> 3];
        }

        if (p[0] > 0) {
          this._eatBits(p[0]);

          return p[1];
        }
      } else {
        var result = this._findTableCode(1, 9, whiteTable2);

        if (result[0]) {
          return result[1];
        }

        result = this._findTableCode(11, 12, whiteTable1);

        if (result[0]) {
          return result[1];
        }
      }

      (0, _util.info)("bad white code");

      this._eatBits(1);

      return 1;
    },
    _getBlackCode: function _getBlackCode() {
      var code, p;

      if (this.eoblock) {
        code = this._lookBits(13);

        if (code === ccittEOF) {
          return 1;
        }

        if (code >> 7 === 0) {
          p = blackTable1[code];
        } else if (code >> 9 === 0 && code >> 7 !== 0) {
          p = blackTable2[(code >> 1) - 64];
        } else {
          p = blackTable3[code >> 7];
        }

        if (p[0] > 0) {
          this._eatBits(p[0]);

          return p[1];
        }
      } else {
        var result = this._findTableCode(2, 6, blackTable3);

        if (result[0]) {
          return result[1];
        }

        result = this._findTableCode(7, 12, blackTable2, 64);

        if (result[0]) {
          return result[1];
        }

        result = this._findTableCode(10, 13, blackTable1);

        if (result[0]) {
          return result[1];
        }
      }

      (0, _util.info)("bad black code");

      this._eatBits(1);

      return 1;
    },
    _lookBits: function _lookBits(n) {
      var c;

      while (this.inputBits < n) {
        if ((c = this.source.next()) === -1) {
          if (this.inputBits === 0) {
            return ccittEOF;
          }

          return this.inputBuf << n - this.inputBits & 0xffff >> 16 - n;
        }

        this.inputBuf = this.inputBuf << 8 | c;
        this.inputBits += 8;
      }

      return this.inputBuf >> this.inputBits - n & 0xffff >> 16 - n;
    },
    _eatBits: function _eatBits(n) {
      if ((this.inputBits -= n) < 0) {
        this.inputBits = 0;
      }
    }
  };
  return CCITTFaxDecoder;
}();

exports.CCITTFaxDecoder = CCITTFaxDecoder;

/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.JpegImage = void 0;

var _util = __w_pdfjs_require__(1);

var _core_utils = __w_pdfjs_require__(94);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var JpegError = /*#__PURE__*/function (_BaseException) {
  _inherits(JpegError, _BaseException);

  var _super = _createSuper(JpegError);

  function JpegError(msg) {
    _classCallCheck(this, JpegError);

    return _super.call(this, "JPEG error: ".concat(msg));
  }

  return JpegError;
}(_util.BaseException);

var DNLMarkerError = /*#__PURE__*/function (_BaseException2) {
  _inherits(DNLMarkerError, _BaseException2);

  var _super2 = _createSuper(DNLMarkerError);

  function DNLMarkerError(message, scanLines) {
    var _this;

    _classCallCheck(this, DNLMarkerError);

    _this = _super2.call(this, message);
    _this.scanLines = scanLines;
    return _this;
  }

  return DNLMarkerError;
}(_util.BaseException);

var EOIMarkerError = /*#__PURE__*/function (_BaseException3) {
  _inherits(EOIMarkerError, _BaseException3);

  var _super3 = _createSuper(EOIMarkerError);

  function EOIMarkerError() {
    _classCallCheck(this, EOIMarkerError);

    return _super3.apply(this, arguments);
  }

  return EOIMarkerError;
}(_util.BaseException);

var JpegImage = function JpegImageClosure() {
  var dctZigZag = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
  var dctCos1 = 4017;
  var dctSin1 = 799;
  var dctCos3 = 3406;
  var dctSin3 = 2276;
  var dctCos6 = 1567;
  var dctSin6 = 3784;
  var dctSqrt2 = 5793;
  var dctSqrt1d2 = 2896;

  function JpegImage() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$decodeTransform = _ref.decodeTransform,
        decodeTransform = _ref$decodeTransform === void 0 ? null : _ref$decodeTransform,
        _ref$colorTransform = _ref.colorTransform,
        colorTransform = _ref$colorTransform === void 0 ? -1 : _ref$colorTransform;

    this._decodeTransform = decodeTransform;
    this._colorTransform = colorTransform;
  }

  function buildHuffmanTable(codeLengths, values) {
    var k = 0,
        code = [],
        i,
        j,
        length = 16;

    while (length > 0 && !codeLengths[length - 1]) {
      length--;
    }

    code.push({
      children: [],
      index: 0
    });
    var p = code[0],
        q;

    for (i = 0; i < length; i++) {
      for (j = 0; j < codeLengths[i]; j++) {
        p = code.pop();
        p.children[p.index] = values[k];

        while (p.index > 0) {
          p = code.pop();
        }

        p.index++;
        code.push(p);

        while (code.length <= i) {
          code.push(q = {
            children: [],
            index: 0
          });
          p.children[p.index] = q.children;
          p = q;
        }

        k++;
      }

      if (i + 1 < length) {
        code.push(q = {
          children: [],
          index: 0
        });
        p.children[p.index] = q.children;
        p = q;
      }
    }

    return code[0].children;
  }

  function getBlockBufferOffset(component, row, col) {
    return 64 * ((component.blocksPerLine + 1) * row + col);
  }

  function decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive) {
    var parseDNLMarker = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
    var mcusPerLine = frame.mcusPerLine;
    var progressive = frame.progressive;
    var startOffset = offset;
    var bitsData = 0,
        bitsCount = 0;

    function readBit() {
      if (bitsCount > 0) {
        bitsCount--;
        return bitsData >> bitsCount & 1;
      }

      bitsData = data[offset++];

      if (bitsData === 0xff) {
        var nextByte = data[offset++];

        if (nextByte) {
          if (nextByte === 0xdc && parseDNLMarker) {
            offset += 2;
            var scanLines = (0, _core_utils.readUint16)(data, offset);
            offset += 2;

            if (scanLines > 0 && scanLines !== frame.scanLines) {
              throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", scanLines);
            }
          } else if (nextByte === 0xd9) {
            if (parseDNLMarker) {
              var maybeScanLines = blockRow * (frame.precision === 8 ? 8 : 0);

              if (maybeScanLines > 0 && Math.round(frame.scanLines / maybeScanLines) >= 10) {
                throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, " + "possibly caused by incorrect `scanLines` parameter", maybeScanLines);
              }
            }

            throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");
          }

          throw new JpegError("unexpected marker ".concat((bitsData << 8 | nextByte).toString(16)));
        }
      }

      bitsCount = 7;
      return bitsData >>> 7;
    }

    function decodeHuffman(tree) {
      var node = tree;

      while (true) {
        node = node[readBit()];

        switch (_typeof(node)) {
          case "number":
            return node;

          case "object":
            continue;
        }

        throw new JpegError("invalid huffman sequence");
      }
    }

    function receive(length) {
      var n = 0;

      while (length > 0) {
        n = n << 1 | readBit();
        length--;
      }

      return n;
    }

    function receiveAndExtend(length) {
      if (length === 1) {
        return readBit() === 1 ? 1 : -1;
      }

      var n = receive(length);

      if (n >= 1 << length - 1) {
        return n;
      }

      return n + (-1 << length) + 1;
    }

    function decodeBaseline(component, blockOffset) {
      var t = decodeHuffman(component.huffmanTableDC);
      var diff = t === 0 ? 0 : receiveAndExtend(t);
      component.blockData[blockOffset] = component.pred += diff;
      var k = 1;

      while (k < 64) {
        var rs = decodeHuffman(component.huffmanTableAC);
        var s = rs & 15,
            r = rs >> 4;

        if (s === 0) {
          if (r < 15) {
            break;
          }

          k += 16;
          continue;
        }

        k += r;
        var z = dctZigZag[k];
        component.blockData[blockOffset + z] = receiveAndExtend(s);
        k++;
      }
    }

    function decodeDCFirst(component, blockOffset) {
      var t = decodeHuffman(component.huffmanTableDC);
      var diff = t === 0 ? 0 : receiveAndExtend(t) << successive;
      component.blockData[blockOffset] = component.pred += diff;
    }

    function decodeDCSuccessive(component, blockOffset) {
      component.blockData[blockOffset] |= readBit() << successive;
    }

    var eobrun = 0;

    function decodeACFirst(component, blockOffset) {
      if (eobrun > 0) {
        eobrun--;
        return;
      }

      var k = spectralStart,
          e = spectralEnd;

      while (k <= e) {
        var rs = decodeHuffman(component.huffmanTableAC);
        var s = rs & 15,
            r = rs >> 4;

        if (s === 0) {
          if (r < 15) {
            eobrun = receive(r) + (1 << r) - 1;
            break;
          }

          k += 16;
          continue;
        }

        k += r;
        var z = dctZigZag[k];
        component.blockData[blockOffset + z] = receiveAndExtend(s) * (1 << successive);
        k++;
      }
    }

    var successiveACState = 0,
        successiveACNextValue;

    function decodeACSuccessive(component, blockOffset) {
      var k = spectralStart;
      var e = spectralEnd;
      var r = 0;
      var s;
      var rs;

      while (k <= e) {
        var offsetZ = blockOffset + dctZigZag[k];
        var sign = component.blockData[offsetZ] < 0 ? -1 : 1;

        switch (successiveACState) {
          case 0:
            rs = decodeHuffman(component.huffmanTableAC);
            s = rs & 15;
            r = rs >> 4;

            if (s === 0) {
              if (r < 15) {
                eobrun = receive(r) + (1 << r);
                successiveACState = 4;
              } else {
                r = 16;
                successiveACState = 1;
              }
            } else {
              if (s !== 1) {
                throw new JpegError("invalid ACn encoding");
              }

              successiveACNextValue = receiveAndExtend(s);
              successiveACState = r ? 2 : 3;
            }

            continue;

          case 1:
          case 2:
            if (component.blockData[offsetZ]) {
              component.blockData[offsetZ] += sign * (readBit() << successive);
            } else {
              r--;

              if (r === 0) {
                successiveACState = successiveACState === 2 ? 3 : 0;
              }
            }

            break;

          case 3:
            if (component.blockData[offsetZ]) {
              component.blockData[offsetZ] += sign * (readBit() << successive);
            } else {
              component.blockData[offsetZ] = successiveACNextValue << successive;
              successiveACState = 0;
            }

            break;

          case 4:
            if (component.blockData[offsetZ]) {
              component.blockData[offsetZ] += sign * (readBit() << successive);
            }

            break;
        }

        k++;
      }

      if (successiveACState === 4) {
        eobrun--;

        if (eobrun === 0) {
          successiveACState = 0;
        }
      }
    }

    var blockRow = 0;

    function decodeMcu(component, decode, mcu, row, col) {
      var mcuRow = mcu / mcusPerLine | 0;
      var mcuCol = mcu % mcusPerLine;
      blockRow = mcuRow * component.v + row;
      var blockCol = mcuCol * component.h + col;
      var blockOffset = getBlockBufferOffset(component, blockRow, blockCol);
      decode(component, blockOffset);
    }

    function decodeBlock(component, decode, mcu) {
      blockRow = mcu / component.blocksPerLine | 0;
      var blockCol = mcu % component.blocksPerLine;
      var blockOffset = getBlockBufferOffset(component, blockRow, blockCol);
      decode(component, blockOffset);
    }

    var componentsLength = components.length;
    var component, i, j, k, n;
    var decodeFn;

    if (progressive) {
      if (spectralStart === 0) {
        decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
      } else {
        decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
      }
    } else {
      decodeFn = decodeBaseline;
    }

    var mcu = 0,
        fileMarker;
    var mcuExpected;

    if (componentsLength === 1) {
      mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
    } else {
      mcuExpected = mcusPerLine * frame.mcusPerColumn;
    }

    var h, v;

    while (mcu <= mcuExpected) {
      var mcuToRead = resetInterval ? Math.min(mcuExpected - mcu, resetInterval) : mcuExpected;

      if (mcuToRead > 0) {
        for (i = 0; i < componentsLength; i++) {
          components[i].pred = 0;
        }

        eobrun = 0;

        if (componentsLength === 1) {
          component = components[0];

          for (n = 0; n < mcuToRead; n++) {
            decodeBlock(component, decodeFn, mcu);
            mcu++;
          }
        } else {
          for (n = 0; n < mcuToRead; n++) {
            for (i = 0; i < componentsLength; i++) {
              component = components[i];
              h = component.h;
              v = component.v;

              for (j = 0; j < v; j++) {
                for (k = 0; k < h; k++) {
                  decodeMcu(component, decodeFn, mcu, j, k);
                }
              }
            }

            mcu++;
          }
        }
      }

      bitsCount = 0;
      fileMarker = findNextFileMarker(data, offset);

      if (!fileMarker) {
        break;
      }

      if (fileMarker.invalid) {
        var partialMsg = mcuToRead > 0 ? "unexpected" : "excessive";
        (0, _util.warn)("decodeScan - ".concat(partialMsg, " MCU data, current marker is: ").concat(fileMarker.invalid));
        offset = fileMarker.offset;
      }

      if (fileMarker.marker >= 0xffd0 && fileMarker.marker <= 0xffd7) {
        offset += 2;
      } else {
        break;
      }
    }

    return offset - startOffset;
  }

  function quantizeAndInverse(component, blockBufferOffset, p) {
    var qt = component.quantizationTable,
        blockData = component.blockData;
    var v0, v1, v2, v3, v4, v5, v6, v7;
    var p0, p1, p2, p3, p4, p5, p6, p7;
    var t;

    if (!qt) {
      throw new JpegError("missing required Quantization Table.");
    }

    for (var row = 0; row < 64; row += 8) {
      p0 = blockData[blockBufferOffset + row];
      p1 = blockData[blockBufferOffset + row + 1];
      p2 = blockData[blockBufferOffset + row + 2];
      p3 = blockData[blockBufferOffset + row + 3];
      p4 = blockData[blockBufferOffset + row + 4];
      p5 = blockData[blockBufferOffset + row + 5];
      p6 = blockData[blockBufferOffset + row + 6];
      p7 = blockData[blockBufferOffset + row + 7];
      p0 *= qt[row];

      if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
        t = dctSqrt2 * p0 + 512 >> 10;
        p[row] = t;
        p[row + 1] = t;
        p[row + 2] = t;
        p[row + 3] = t;
        p[row + 4] = t;
        p[row + 5] = t;
        p[row + 6] = t;
        p[row + 7] = t;
        continue;
      }

      p1 *= qt[row + 1];
      p2 *= qt[row + 2];
      p3 *= qt[row + 3];
      p4 *= qt[row + 4];
      p5 *= qt[row + 5];
      p6 *= qt[row + 6];
      p7 *= qt[row + 7];
      v0 = dctSqrt2 * p0 + 128 >> 8;
      v1 = dctSqrt2 * p4 + 128 >> 8;
      v2 = p2;
      v3 = p6;
      v4 = dctSqrt1d2 * (p1 - p7) + 128 >> 8;
      v7 = dctSqrt1d2 * (p1 + p7) + 128 >> 8;
      v5 = p3 << 4;
      v6 = p5 << 4;
      v0 = v0 + v1 + 1 >> 1;
      v1 = v0 - v1;
      t = v2 * dctSin6 + v3 * dctCos6 + 128 >> 8;
      v2 = v2 * dctCos6 - v3 * dctSin6 + 128 >> 8;
      v3 = t;
      v4 = v4 + v6 + 1 >> 1;
      v6 = v4 - v6;
      v7 = v7 + v5 + 1 >> 1;
      v5 = v7 - v5;
      v0 = v0 + v3 + 1 >> 1;
      v3 = v0 - v3;
      v1 = v1 + v2 + 1 >> 1;
      v2 = v1 - v2;
      t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
      v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
      v7 = t;
      t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
      v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
      v6 = t;
      p[row] = v0 + v7;
      p[row + 7] = v0 - v7;
      p[row + 1] = v1 + v6;
      p[row + 6] = v1 - v6;
      p[row + 2] = v2 + v5;
      p[row + 5] = v2 - v5;
      p[row + 3] = v3 + v4;
      p[row + 4] = v3 - v4;
    }

    for (var col = 0; col < 8; ++col) {
      p0 = p[col];
      p1 = p[col + 8];
      p2 = p[col + 16];
      p3 = p[col + 24];
      p4 = p[col + 32];
      p5 = p[col + 40];
      p6 = p[col + 48];
      p7 = p[col + 56];

      if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
        t = dctSqrt2 * p0 + 8192 >> 14;

        if (t < -2040) {
          t = 0;
        } else if (t >= 2024) {
          t = 255;
        } else {
          t = t + 2056 >> 4;
        }

        blockData[blockBufferOffset + col] = t;
        blockData[blockBufferOffset + col + 8] = t;
        blockData[blockBufferOffset + col + 16] = t;
        blockData[blockBufferOffset + col + 24] = t;
        blockData[blockBufferOffset + col + 32] = t;
        blockData[blockBufferOffset + col + 40] = t;
        blockData[blockBufferOffset + col + 48] = t;
        blockData[blockBufferOffset + col + 56] = t;
        continue;
      }

      v0 = dctSqrt2 * p0 + 2048 >> 12;
      v1 = dctSqrt2 * p4 + 2048 >> 12;
      v2 = p2;
      v3 = p6;
      v4 = dctSqrt1d2 * (p1 - p7) + 2048 >> 12;
      v7 = dctSqrt1d2 * (p1 + p7) + 2048 >> 12;
      v5 = p3;
      v6 = p5;
      v0 = (v0 + v1 + 1 >> 1) + 4112;
      v1 = v0 - v1;
      t = v2 * dctSin6 + v3 * dctCos6 + 2048 >> 12;
      v2 = v2 * dctCos6 - v3 * dctSin6 + 2048 >> 12;
      v3 = t;
      v4 = v4 + v6 + 1 >> 1;
      v6 = v4 - v6;
      v7 = v7 + v5 + 1 >> 1;
      v5 = v7 - v5;
      v0 = v0 + v3 + 1 >> 1;
      v3 = v0 - v3;
      v1 = v1 + v2 + 1 >> 1;
      v2 = v1 - v2;
      t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
      v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
      v7 = t;
      t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
      v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
      v6 = t;
      p0 = v0 + v7;
      p7 = v0 - v7;
      p1 = v1 + v6;
      p6 = v1 - v6;
      p2 = v2 + v5;
      p5 = v2 - v5;
      p3 = v3 + v4;
      p4 = v3 - v4;

      if (p0 < 16) {
        p0 = 0;
      } else if (p0 >= 4080) {
        p0 = 255;
      } else {
        p0 >>= 4;
      }

      if (p1 < 16) {
        p1 = 0;
      } else if (p1 >= 4080) {
        p1 = 255;
      } else {
        p1 >>= 4;
      }

      if (p2 < 16) {
        p2 = 0;
      } else if (p2 >= 4080) {
        p2 = 255;
      } else {
        p2 >>= 4;
      }

      if (p3 < 16) {
        p3 = 0;
      } else if (p3 >= 4080) {
        p3 = 255;
      } else {
        p3 >>= 4;
      }

      if (p4 < 16) {
        p4 = 0;
      } else if (p4 >= 4080) {
        p4 = 255;
      } else {
        p4 >>= 4;
      }

      if (p5 < 16) {
        p5 = 0;
      } else if (p5 >= 4080) {
        p5 = 255;
      } else {
        p5 >>= 4;
      }

      if (p6 < 16) {
        p6 = 0;
      } else if (p6 >= 4080) {
        p6 = 255;
      } else {
        p6 >>= 4;
      }

      if (p7 < 16) {
        p7 = 0;
      } else if (p7 >= 4080) {
        p7 = 255;
      } else {
        p7 >>= 4;
      }

      blockData[blockBufferOffset + col] = p0;
      blockData[blockBufferOffset + col + 8] = p1;
      blockData[blockBufferOffset + col + 16] = p2;
      blockData[blockBufferOffset + col + 24] = p3;
      blockData[blockBufferOffset + col + 32] = p4;
      blockData[blockBufferOffset + col + 40] = p5;
      blockData[blockBufferOffset + col + 48] = p6;
      blockData[blockBufferOffset + col + 56] = p7;
    }
  }

  function buildComponentData(frame, component) {
    var blocksPerLine = component.blocksPerLine;
    var blocksPerColumn = component.blocksPerColumn;
    var computationBuffer = new Int16Array(64);

    for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
      for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) {
        var offset = getBlockBufferOffset(component, blockRow, blockCol);
        quantizeAndInverse(component, offset, computationBuffer);
      }
    }

    return component.blockData;
  }

  function findNextFileMarker(data, currentPos) {
    var startPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentPos;
    var maxPos = data.length - 1;
    var newPos = startPos < currentPos ? startPos : currentPos;

    if (currentPos >= maxPos) {
      return null;
    }

    var currentMarker = (0, _core_utils.readUint16)(data, currentPos);

    if (currentMarker >= 0xffc0 && currentMarker <= 0xfffe) {
      return {
        invalid: null,
        marker: currentMarker,
        offset: currentPos
      };
    }

    var newMarker = (0, _core_utils.readUint16)(data, newPos);

    while (!(newMarker >= 0xffc0 && newMarker <= 0xfffe)) {
      if (++newPos >= maxPos) {
        return null;
      }

      newMarker = (0, _core_utils.readUint16)(data, newPos);
    }

    return {
      invalid: currentMarker.toString(16),
      marker: newMarker,
      offset: newPos
    };
  }

  JpegImage.prototype = {
    parse: function parse(data) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$dnlScanLines = _ref2.dnlScanLines,
          dnlScanLines = _ref2$dnlScanLines === void 0 ? null : _ref2$dnlScanLines;

      function readDataBlock() {
        var length = (0, _core_utils.readUint16)(data, offset);
        offset += 2;
        var endOffset = offset + length - 2;
        var fileMarker = findNextFileMarker(data, endOffset, offset);

        if (fileMarker && fileMarker.invalid) {
          (0, _util.warn)("readDataBlock - incorrect length, current marker is: " + fileMarker.invalid);
          endOffset = fileMarker.offset;
        }

        var array = data.subarray(offset, endOffset);
        offset += array.length;
        return array;
      }

      function prepareComponents(frame) {
        var mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / frame.maxH);
        var mcusPerColumn = Math.ceil(frame.scanLines / 8 / frame.maxV);

        for (var i = 0; i < frame.components.length; i++) {
          component = frame.components[i];
          var blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / frame.maxH);
          var blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) * component.v / frame.maxV);
          var blocksPerLineForMcu = mcusPerLine * component.h;
          var blocksPerColumnForMcu = mcusPerColumn * component.v;
          var blocksBufferSize = 64 * blocksPerColumnForMcu * (blocksPerLineForMcu + 1);
          component.blockData = new Int16Array(blocksBufferSize);
          component.blocksPerLine = blocksPerLine;
          component.blocksPerColumn = blocksPerColumn;
        }

        frame.mcusPerLine = mcusPerLine;
        frame.mcusPerColumn = mcusPerColumn;
      }

      var offset = 0;
      var jfif = null;
      var adobe = null;
      var frame, resetInterval;
      var numSOSMarkers = 0;
      var quantizationTables = [];
      var huffmanTablesAC = [],
          huffmanTablesDC = [];
      var fileMarker = (0, _core_utils.readUint16)(data, offset);
      offset += 2;

      if (fileMarker !== 0xffd8) {
        throw new JpegError("SOI not found");
      }

      fileMarker = (0, _core_utils.readUint16)(data, offset);
      offset += 2;

      markerLoop: while (fileMarker !== 0xffd9) {
        var i, j, l;

        switch (fileMarker) {
          case 0xffe0:
          case 0xffe1:
          case 0xffe2:
          case 0xffe3:
          case 0xffe4:
          case 0xffe5:
          case 0xffe6:
          case 0xffe7:
          case 0xffe8:
          case 0xffe9:
          case 0xffea:
          case 0xffeb:
          case 0xffec:
          case 0xffed:
          case 0xffee:
          case 0xffef:
          case 0xfffe:
            var appData = readDataBlock();

            if (fileMarker === 0xffe0) {
              if (appData[0] === 0x4a && appData[1] === 0x46 && appData[2] === 0x49 && appData[3] === 0x46 && appData[4] === 0) {
                jfif = {
                  version: {
                    major: appData[5],
                    minor: appData[6]
                  },
                  densityUnits: appData[7],
                  xDensity: appData[8] << 8 | appData[9],
                  yDensity: appData[10] << 8 | appData[11],
                  thumbWidth: appData[12],
                  thumbHeight: appData[13],
                  thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
                };
              }
            }

            if (fileMarker === 0xffee) {
              if (appData[0] === 0x41 && appData[1] === 0x64 && appData[2] === 0x6f && appData[3] === 0x62 && appData[4] === 0x65) {
                adobe = {
                  version: appData[5] << 8 | appData[6],
                  flags0: appData[7] << 8 | appData[8],
                  flags1: appData[9] << 8 | appData[10],
                  transformCode: appData[11]
                };
              }
            }

            break;

          case 0xffdb:
            var quantizationTablesLength = (0, _core_utils.readUint16)(data, offset);
            offset += 2;
            var quantizationTablesEnd = quantizationTablesLength + offset - 2;
            var z;

            while (offset < quantizationTablesEnd) {
              var quantizationTableSpec = data[offset++];
              var tableData = new Uint16Array(64);

              if (quantizationTableSpec >> 4 === 0) {
                for (j = 0; j < 64; j++) {
                  z = dctZigZag[j];
                  tableData[z] = data[offset++];
                }
              } else if (quantizationTableSpec >> 4 === 1) {
                for (j = 0; j < 64; j++) {
                  z = dctZigZag[j];
                  tableData[z] = (0, _core_utils.readUint16)(data, offset);
                  offset += 2;
                }
              } else {
                throw new JpegError("DQT - invalid table spec");
              }

              quantizationTables[quantizationTableSpec & 15] = tableData;
            }

            break;

          case 0xffc0:
          case 0xffc1:
          case 0xffc2:
            if (frame) {
              throw new JpegError("Only single frame JPEGs supported");
            }

            offset += 2;
            frame = {};
            frame.extended = fileMarker === 0xffc1;
            frame.progressive = fileMarker === 0xffc2;
            frame.precision = data[offset++];
            var sofScanLines = (0, _core_utils.readUint16)(data, offset);
            offset += 2;
            frame.scanLines = dnlScanLines || sofScanLines;
            frame.samplesPerLine = (0, _core_utils.readUint16)(data, offset);
            offset += 2;
            frame.components = [];
            frame.componentIds = {};
            var componentsCount = data[offset++],
                componentId;
            var maxH = 0,
                maxV = 0;

            for (i = 0; i < componentsCount; i++) {
              componentId = data[offset];
              var h = data[offset + 1] >> 4;
              var v = data[offset + 1] & 15;

              if (maxH < h) {
                maxH = h;
              }

              if (maxV < v) {
                maxV = v;
              }

              var qId = data[offset + 2];
              l = frame.components.push({
                h: h,
                v: v,
                quantizationId: qId,
                quantizationTable: null
              });
              frame.componentIds[componentId] = l - 1;
              offset += 3;
            }

            frame.maxH = maxH;
            frame.maxV = maxV;
            prepareComponents(frame);
            break;

          case 0xffc4:
            var huffmanLength = (0, _core_utils.readUint16)(data, offset);
            offset += 2;

            for (i = 2; i < huffmanLength;) {
              var huffmanTableSpec = data[offset++];
              var codeLengths = new Uint8Array(16);
              var codeLengthSum = 0;

              for (j = 0; j < 16; j++, offset++) {
                codeLengthSum += codeLengths[j] = data[offset];
              }

              var huffmanValues = new Uint8Array(codeLengthSum);

              for (j = 0; j < codeLengthSum; j++, offset++) {
                huffmanValues[j] = data[offset];
              }

              i += 17 + codeLengthSum;
              (huffmanTableSpec >> 4 === 0 ? huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
            }

            break;

          case 0xffdd:
            offset += 2;
            resetInterval = (0, _core_utils.readUint16)(data, offset);
            offset += 2;
            break;

          case 0xffda:
            var parseDNLMarker = ++numSOSMarkers === 1 && !dnlScanLines;
            offset += 2;
            var selectorsCount = data[offset++];
            var components = [],
                component;

            for (i = 0; i < selectorsCount; i++) {
              var index = data[offset++];
              var componentIndex = frame.componentIds[index];
              component = frame.components[componentIndex];
              component.index = index;
              var tableSpec = data[offset++];
              component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
              component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
              components.push(component);
            }

            var spectralStart = data[offset++];
            var spectralEnd = data[offset++];
            var successiveApproximation = data[offset++];

            try {
              var processed = decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15, parseDNLMarker);
              offset += processed;
            } catch (ex) {
              if (ex instanceof DNLMarkerError) {
                (0, _util.warn)("".concat(ex.message, " -- attempting to re-parse the JPEG image."));
                return this.parse(data, {
                  dnlScanLines: ex.scanLines
                });
              } else if (ex instanceof EOIMarkerError) {
                (0, _util.warn)("".concat(ex.message, " -- ignoring the rest of the image data."));
                break markerLoop;
              }

              throw ex;
            }

            break;

          case 0xffdc:
            offset += 4;
            break;

          case 0xffff:
            if (data[offset] !== 0xff) {
              offset--;
            }

            break;

          default:
            var nextFileMarker = findNextFileMarker(data, offset - 2, offset - 3);

            if (nextFileMarker && nextFileMarker.invalid) {
              (0, _util.warn)("JpegImage.parse - unexpected data, current marker is: " + nextFileMarker.invalid);
              offset = nextFileMarker.offset;
              break;
            }

            if (!nextFileMarker || offset >= data.length - 1) {
              (0, _util.warn)("JpegImage.parse - reached the end of the image data " + "without finding an EOI marker (0xFFD9).");
              break markerLoop;
            }

            throw new JpegError("JpegImage.parse - unknown marker: " + fileMarker.toString(16));
        }

        fileMarker = (0, _core_utils.readUint16)(data, offset);
        offset += 2;
      }

      this.width = frame.samplesPerLine;
      this.height = frame.scanLines;
      this.jfif = jfif;
      this.adobe = adobe;
      this.components = [];

      for (i = 0; i < frame.components.length; i++) {
        component = frame.components[i];
        var quantizationTable = quantizationTables[component.quantizationId];

        if (quantizationTable) {
          component.quantizationTable = quantizationTable;
        }

        this.components.push({
          index: component.index,
          output: buildComponentData(frame, component),
          scaleX: component.h / frame.maxH,
          scaleY: component.v / frame.maxV,
          blocksPerLine: component.blocksPerLine,
          blocksPerColumn: component.blocksPerColumn
        });
      }

      this.numComponents = this.components.length;
      return undefined;
    },
    _getLinearizedBlockData: function _getLinearizedBlockData(width, height) {
      var isSourcePDF = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var scaleX = this.width / width,
          scaleY = this.height / height;
      var component, componentScaleX, componentScaleY, blocksPerScanline;
      var x, y, i, j, k;
      var index;
      var offset = 0;
      var output;
      var numComponents = this.components.length;
      var dataLength = width * height * numComponents;
      var data = new Uint8ClampedArray(dataLength);
      var xScaleBlockOffset = new Uint32Array(width);
      var mask3LSB = 0xfffffff8;
      var lastComponentScaleX;

      for (i = 0; i < numComponents; i++) {
        component = this.components[i];
        componentScaleX = component.scaleX * scaleX;
        componentScaleY = component.scaleY * scaleY;
        offset = i;
        output = component.output;
        blocksPerScanline = component.blocksPerLine + 1 << 3;

        if (componentScaleX !== lastComponentScaleX) {
          for (x = 0; x < width; x++) {
            j = 0 | x * componentScaleX;
            xScaleBlockOffset[x] = (j & mask3LSB) << 3 | j & 7;
          }

          lastComponentScaleX = componentScaleX;
        }

        for (y = 0; y < height; y++) {
          j = 0 | y * componentScaleY;
          index = blocksPerScanline * (j & mask3LSB) | (j & 7) << 3;

          for (x = 0; x < width; x++) {
            data[offset] = output[index + xScaleBlockOffset[x]];
            offset += numComponents;
          }
        }
      }

      var transform = this._decodeTransform;

      if (!isSourcePDF && numComponents === 4 && !transform) {
        transform = new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255]);
      }

      if (transform) {
        for (i = 0; i < dataLength;) {
          for (j = 0, k = 0; j < numComponents; j++, i++, k += 2) {
            data[i] = (data[i] * transform[k] >> 8) + transform[k + 1];
          }
        }
      }

      return data;
    },

    get _isColorConversionNeeded() {
      if (this.adobe) {
        return !!this.adobe.transformCode;
      }

      if (this.numComponents === 3) {
        if (this._colorTransform === 0) {
          return false;
        } else if (this.components[0].index === 0x52 && this.components[1].index === 0x47 && this.components[2].index === 0x42) {
          return false;
        }

        return true;
      }

      if (this._colorTransform === 1) {
        return true;
      }

      return false;
    },

    _convertYccToRgb: function convertYccToRgb(data) {
      var Y, Cb, Cr;

      for (var i = 0, length = data.length; i < length; i += 3) {
        Y = data[i];
        Cb = data[i + 1];
        Cr = data[i + 2];
        data[i] = Y - 179.456 + 1.402 * Cr;
        data[i + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
        data[i + 2] = Y - 226.816 + 1.772 * Cb;
      }

      return data;
    },
    _convertYcckToRgb: function convertYcckToRgb(data) {
      var Y, Cb, Cr, k;
      var offset = 0;

      for (var i = 0, length = data.length; i < length; i += 4) {
        Y = data[i];
        Cb = data[i + 1];
        Cr = data[i + 2];
        k = data[i + 3];
        data[offset++] = -122.67195406894 + Cb * (-6.60635669420364e-5 * Cb + 0.000437130475926232 * Cr - 5.4080610064599e-5 * Y + 0.00048449797120281 * k - 0.154362151871126) + Cr * (-0.000957964378445773 * Cr + 0.000817076911346625 * Y - 0.00477271405408747 * k + 1.53380253221734) + Y * (0.000961250184130688 * Y - 0.00266257332283933 * k + 0.48357088451265) + k * (-0.000336197177618394 * k + 0.484791561490776);
        data[offset++] = 107.268039397724 + Cb * (2.19927104525741e-5 * Cb - 0.000640992018297945 * Cr + 0.000659397001245577 * Y + 0.000426105652938837 * k - 0.176491792462875) + Cr * (-0.000778269941513683 * Cr + 0.00130872261408275 * Y + 0.000770482631801132 * k - 0.151051492775562) + Y * (0.00126935368114843 * Y - 0.00265090189010898 * k + 0.25802910206845) + k * (-0.000318913117588328 * k - 0.213742400323665);
        data[offset++] = -20.810012546947 + Cb * (-0.000570115196973677 * Cb - 2.63409051004589e-5 * Cr + 0.0020741088115012 * Y - 0.00288260236853442 * k + 0.814272968359295) + Cr * (-1.53496057440975e-5 * Cr - 0.000132689043961446 * Y + 0.000560833691242812 * k - 0.195152027534049) + Y * (0.00174418132927582 * Y - 0.00255243321439347 * k + 0.116935020465145) + k * (-0.000343531996510555 * k + 0.24165260232407);
      }

      return data.subarray(0, offset);
    },
    _convertYcckToCmyk: function convertYcckToCmyk(data) {
      var Y, Cb, Cr;

      for (var i = 0, length = data.length; i < length; i += 4) {
        Y = data[i];
        Cb = data[i + 1];
        Cr = data[i + 2];
        data[i] = 434.456 - Y - 1.402 * Cr;
        data[i + 1] = 119.541 - Y + 0.344 * Cb + 0.714 * Cr;
        data[i + 2] = 481.816 - Y - 1.772 * Cb;
      }

      return data;
    },
    _convertCmykToRgb: function convertCmykToRgb(data) {
      var c, m, y, k;
      var offset = 0;

      for (var i = 0, length = data.length; i < length; i += 4) {
        c = data[i];
        m = data[i + 1];
        y = data[i + 2];
        k = data[i + 3];
        data[offset++] = 255 + c * (-0.00006747147073602441 * c + 0.0008379262121013727 * m + 0.0002894718188643294 * y + 0.003264231057537806 * k - 1.1185611867203937) + m * (0.000026374107616089405 * m - 0.00008626949158638572 * y - 0.0002748769067499491 * k - 0.02155688794978967) + y * (-0.00003878099212869363 * y - 0.0003267808279485286 * k + 0.0686742238595345) - k * (0.0003361971776183937 * k + 0.7430659151342254);
        data[offset++] = 255 + c * (0.00013596372813588848 * c + 0.000924537132573585 * m + 0.00010567359618683593 * y + 0.0004791864687436512 * k - 0.3109689587515875) + m * (-0.00023545346108370344 * m + 0.0002702845253534714 * y + 0.0020200308977307156 * k - 0.7488052167015494) + y * (0.00006834815998235662 * y + 0.00015168452363460973 * k - 0.09751927774728933) - k * (0.00031891311758832814 * k + 0.7364883807733168);
        data[offset++] = 255 + c * (0.000013598650411385307 * c + 0.00012423956175490851 * m + 0.0004751985097583589 * y - 0.0000036729317476630422 * k - 0.05562186980264034) + m * (0.00016141380598724676 * m + 0.0009692239130725186 * y + 0.0007782692450036253 * k - 0.44015232367526463) + y * (5.068882914068769e-7 * y + 0.0017778369011375071 * k - 0.7591454649749609) - k * (0.0003435319965105553 * k + 0.7063770186160144);
      }

      return data.subarray(0, offset);
    },
    getData: function getData(_ref3) {
      var width = _ref3.width,
          height = _ref3.height,
          _ref3$forceRGB = _ref3.forceRGB,
          forceRGB = _ref3$forceRGB === void 0 ? false : _ref3$forceRGB,
          _ref3$isSourcePDF = _ref3.isSourcePDF,
          isSourcePDF = _ref3$isSourcePDF === void 0 ? false : _ref3$isSourcePDF;

      if (this.numComponents > 4) {
        throw new JpegError("Unsupported color mode");
      }

      var data = this._getLinearizedBlockData(width, height, isSourcePDF);

      if (this.numComponents === 1 && forceRGB) {
        var dataLength = data.length;
        var rgbData = new Uint8ClampedArray(dataLength * 3);
        var offset = 0;

        for (var i = 0; i < dataLength; i++) {
          var grayColor = data[i];
          rgbData[offset++] = grayColor;
          rgbData[offset++] = grayColor;
          rgbData[offset++] = grayColor;
        }

        return rgbData;
      } else if (this.numComponents === 3 && this._isColorConversionNeeded) {
        return this._convertYccToRgb(data);
      } else if (this.numComponents === 4) {
        if (this._isColorConversionNeeded) {
          if (forceRGB) {
            return this._convertYcckToRgb(data);
          }

          return this._convertYcckToCmyk(data);
        } else if (forceRGB) {
          return this._convertCmykToRgb(data);
        }
      }

      return data;
    }
  };
  return JpegImage;
}();

exports.JpegImage = JpegImage;

/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.JpxImage = void 0;

var _util = __w_pdfjs_require__(1);

var _core_utils = __w_pdfjs_require__(94);

var _arithmetic_decoder = __w_pdfjs_require__(98);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var JpxError = /*#__PURE__*/function (_BaseException) {
  _inherits(JpxError, _BaseException);

  var _super = _createSuper(JpxError);

  function JpxError(msg) {
    _classCallCheck(this, JpxError);

    return _super.call(this, "JPX error: ".concat(msg));
  }

  return JpxError;
}(_util.BaseException);

var JpxImage = function JpxImageClosure() {
  var SubbandsGainLog2 = {
    LL: 0,
    LH: 1,
    HL: 1,
    HH: 2
  };

  function JpxImage() {
    this.failOnCorruptedImage = false;
  }

  JpxImage.prototype = {
    parse: function JpxImage_parse(data) {
      var head = (0, _core_utils.readUint16)(data, 0);

      if (head === 0xff4f) {
        this.parseCodestream(data, 0, data.length);
        return;
      }

      var position = 0,
          length = data.length;

      while (position < length) {
        var headerSize = 8;
        var lbox = (0, _core_utils.readUint32)(data, position);
        var tbox = (0, _core_utils.readUint32)(data, position + 4);
        position += headerSize;

        if (lbox === 1) {
          lbox = (0, _core_utils.readUint32)(data, position) * 4294967296 + (0, _core_utils.readUint32)(data, position + 4);
          position += 8;
          headerSize += 8;
        }

        if (lbox === 0) {
          lbox = length - position + headerSize;
        }

        if (lbox < headerSize) {
          throw new JpxError("Invalid box field size");
        }

        var dataLength = lbox - headerSize;
        var jumpDataLength = true;

        switch (tbox) {
          case 0x6a703268:
            jumpDataLength = false;
            break;

          case 0x636f6c72:
            var method = data[position];

            if (method === 1) {
              var colorspace = (0, _core_utils.readUint32)(data, position + 3);

              switch (colorspace) {
                case 16:
                case 17:
                case 18:
                  break;

                default:
                  (0, _util.warn)("Unknown colorspace " + colorspace);
                  break;
              }
            } else if (method === 2) {
              (0, _util.info)("ICC profile not supported");
            }

            break;

          case 0x6a703263:
            this.parseCodestream(data, position, position + dataLength);
            break;

          case 0x6a502020:
            if ((0, _core_utils.readUint32)(data, position) !== 0x0d0a870a) {
              (0, _util.warn)("Invalid JP2 signature");
            }

            break;

          case 0x6a501a1a:
          case 0x66747970:
          case 0x72726571:
          case 0x72657320:
          case 0x69686472:
            break;

          default:
            var headerType = String.fromCharCode(tbox >> 24 & 0xff, tbox >> 16 & 0xff, tbox >> 8 & 0xff, tbox & 0xff);
            (0, _util.warn)("Unsupported header type " + tbox + " (" + headerType + ")");
            break;
        }

        if (jumpDataLength) {
          position += dataLength;
        }
      }
    },
    parseImageProperties: function JpxImage_parseImageProperties(stream) {
      var newByte = stream.getByte();

      while (newByte >= 0) {
        var oldByte = newByte;
        newByte = stream.getByte();
        var code = oldByte << 8 | newByte;

        if (code === 0xff51) {
          stream.skip(4);
          var Xsiz = stream.getInt32() >>> 0;
          var Ysiz = stream.getInt32() >>> 0;
          var XOsiz = stream.getInt32() >>> 0;
          var YOsiz = stream.getInt32() >>> 0;
          stream.skip(16);
          var Csiz = stream.getUint16();
          this.width = Xsiz - XOsiz;
          this.height = Ysiz - YOsiz;
          this.componentsCount = Csiz;
          this.bitsPerComponent = 8;
          return;
        }
      }

      throw new JpxError("No size marker found in JPX stream");
    },
    parseCodestream: function JpxImage_parseCodestream(data, start, end) {
      var context = {};
      var doNotRecover = false;

      try {
        var position = start;

        while (position + 1 < end) {
          var code = (0, _core_utils.readUint16)(data, position);
          position += 2;
          var length = 0,
              j,
              sqcd,
              spqcds,
              spqcdSize,
              scalarExpounded,
              tile;

          switch (code) {
            case 0xff4f:
              context.mainHeader = true;
              break;

            case 0xffd9:
              break;

            case 0xff51:
              length = (0, _core_utils.readUint16)(data, position);
              var siz = {};
              siz.Xsiz = (0, _core_utils.readUint32)(data, position + 4);
              siz.Ysiz = (0, _core_utils.readUint32)(data, position + 8);
              siz.XOsiz = (0, _core_utils.readUint32)(data, position + 12);
              siz.YOsiz = (0, _core_utils.readUint32)(data, position + 16);
              siz.XTsiz = (0, _core_utils.readUint32)(data, position + 20);
              siz.YTsiz = (0, _core_utils.readUint32)(data, position + 24);
              siz.XTOsiz = (0, _core_utils.readUint32)(data, position + 28);
              siz.YTOsiz = (0, _core_utils.readUint32)(data, position + 32);
              var componentsCount = (0, _core_utils.readUint16)(data, position + 36);
              siz.Csiz = componentsCount;
              var components = [];
              j = position + 38;

              for (var i = 0; i < componentsCount; i++) {
                var component = {
                  precision: (data[j] & 0x7f) + 1,
                  isSigned: !!(data[j] & 0x80),
                  XRsiz: data[j + 1],
                  YRsiz: data[j + 2]
                };
                j += 3;
                calculateComponentDimensions(component, siz);
                components.push(component);
              }

              context.SIZ = siz;
              context.components = components;
              calculateTileGrids(context, components);
              context.QCC = [];
              context.COC = [];
              break;

            case 0xff5c:
              length = (0, _core_utils.readUint16)(data, position);
              var qcd = {};
              j = position + 2;
              sqcd = data[j++];

              switch (sqcd & 0x1f) {
                case 0:
                  spqcdSize = 8;
                  scalarExpounded = true;
                  break;

                case 1:
                  spqcdSize = 16;
                  scalarExpounded = false;
                  break;

                case 2:
                  spqcdSize = 16;
                  scalarExpounded = true;
                  break;

                default:
                  throw new Error("Invalid SQcd value " + sqcd);
              }

              qcd.noQuantization = spqcdSize === 8;
              qcd.scalarExpounded = scalarExpounded;
              qcd.guardBits = sqcd >> 5;
              spqcds = [];

              while (j < length + position) {
                var spqcd = {};

                if (spqcdSize === 8) {
                  spqcd.epsilon = data[j++] >> 3;
                  spqcd.mu = 0;
                } else {
                  spqcd.epsilon = data[j] >> 3;
                  spqcd.mu = (data[j] & 0x7) << 8 | data[j + 1];
                  j += 2;
                }

                spqcds.push(spqcd);
              }

              qcd.SPqcds = spqcds;

              if (context.mainHeader) {
                context.QCD = qcd;
              } else {
                context.currentTile.QCD = qcd;
                context.currentTile.QCC = [];
              }

              break;

            case 0xff5d:
              length = (0, _core_utils.readUint16)(data, position);
              var qcc = {};
              j = position + 2;
              var cqcc;

              if (context.SIZ.Csiz < 257) {
                cqcc = data[j++];
              } else {
                cqcc = (0, _core_utils.readUint16)(data, j);
                j += 2;
              }

              sqcd = data[j++];

              switch (sqcd & 0x1f) {
                case 0:
                  spqcdSize = 8;
                  scalarExpounded = true;
                  break;

                case 1:
                  spqcdSize = 16;
                  scalarExpounded = false;
                  break;

                case 2:
                  spqcdSize = 16;
                  scalarExpounded = true;
                  break;

                default:
                  throw new Error("Invalid SQcd value " + sqcd);
              }

              qcc.noQuantization = spqcdSize === 8;
              qcc.scalarExpounded = scalarExpounded;
              qcc.guardBits = sqcd >> 5;
              spqcds = [];

              while (j < length + position) {
                spqcd = {};

                if (spqcdSize === 8) {
                  spqcd.epsilon = data[j++] >> 3;
                  spqcd.mu = 0;
                } else {
                  spqcd.epsilon = data[j] >> 3;
                  spqcd.mu = (data[j] & 0x7) << 8 | data[j + 1];
                  j += 2;
                }

                spqcds.push(spqcd);
              }

              qcc.SPqcds = spqcds;

              if (context.mainHeader) {
                context.QCC[cqcc] = qcc;
              } else {
                context.currentTile.QCC[cqcc] = qcc;
              }

              break;

            case 0xff52:
              length = (0, _core_utils.readUint16)(data, position);
              var cod = {};
              j = position + 2;
              var scod = data[j++];
              cod.entropyCoderWithCustomPrecincts = !!(scod & 1);
              cod.sopMarkerUsed = !!(scod & 2);
              cod.ephMarkerUsed = !!(scod & 4);
              cod.progressionOrder = data[j++];
              cod.layersCount = (0, _core_utils.readUint16)(data, j);
              j += 2;
              cod.multipleComponentTransform = data[j++];
              cod.decompositionLevelsCount = data[j++];
              cod.xcb = (data[j++] & 0xf) + 2;
              cod.ycb = (data[j++] & 0xf) + 2;
              var blockStyle = data[j++];
              cod.selectiveArithmeticCodingBypass = !!(blockStyle & 1);
              cod.resetContextProbabilities = !!(blockStyle & 2);
              cod.terminationOnEachCodingPass = !!(blockStyle & 4);
              cod.verticallyStripe = !!(blockStyle & 8);
              cod.predictableTermination = !!(blockStyle & 16);
              cod.segmentationSymbolUsed = !!(blockStyle & 32);
              cod.reversibleTransformation = data[j++];

              if (cod.entropyCoderWithCustomPrecincts) {
                var precinctsSizes = [];

                while (j < length + position) {
                  var precinctsSize = data[j++];
                  precinctsSizes.push({
                    PPx: precinctsSize & 0xf,
                    PPy: precinctsSize >> 4
                  });
                }

                cod.precinctsSizes = precinctsSizes;
              }

              var unsupported = [];

              if (cod.selectiveArithmeticCodingBypass) {
                unsupported.push("selectiveArithmeticCodingBypass");
              }

              if (cod.resetContextProbabilities) {
                unsupported.push("resetContextProbabilities");
              }

              if (cod.terminationOnEachCodingPass) {
                unsupported.push("terminationOnEachCodingPass");
              }

              if (cod.verticallyStripe) {
                unsupported.push("verticallyStripe");
              }

              if (cod.predictableTermination) {
                unsupported.push("predictableTermination");
              }

              if (unsupported.length > 0) {
                doNotRecover = true;
                (0, _util.warn)("JPX: Unsupported COD options (".concat(unsupported.join(", "), ")."));
              }

              if (context.mainHeader) {
                context.COD = cod;
              } else {
                context.currentTile.COD = cod;
                context.currentTile.COC = [];
              }

              break;

            case 0xff90:
              length = (0, _core_utils.readUint16)(data, position);
              tile = {};
              tile.index = (0, _core_utils.readUint16)(data, position + 2);
              tile.length = (0, _core_utils.readUint32)(data, position + 4);
              tile.dataEnd = tile.length + position - 2;
              tile.partIndex = data[position + 8];
              tile.partsCount = data[position + 9];
              context.mainHeader = false;

              if (tile.partIndex === 0) {
                tile.COD = context.COD;
                tile.COC = context.COC.slice(0);
                tile.QCD = context.QCD;
                tile.QCC = context.QCC.slice(0);
              }

              context.currentTile = tile;
              break;

            case 0xff93:
              tile = context.currentTile;

              if (tile.partIndex === 0) {
                initializeTile(context, tile.index);
                buildPackets(context);
              }

              length = tile.dataEnd - position;
              parseTilePackets(context, data, position, length);
              break;

            case 0xff53:
              (0, _util.warn)("JPX: Codestream code 0xFF53 (COC) is not implemented.");

            case 0xff55:
            case 0xff57:
            case 0xff58:
            case 0xff64:
              length = (0, _core_utils.readUint16)(data, position);
              break;

            default:
              throw new Error("Unknown codestream code: " + code.toString(16));
          }

          position += length;
        }
      } catch (e) {
        if (doNotRecover || this.failOnCorruptedImage) {
          throw new JpxError(e.message);
        } else {
          (0, _util.warn)("JPX: Trying to recover from: \"".concat(e.message, "\"."));
        }
      }

      this.tiles = transformComponents(context);
      this.width = context.SIZ.Xsiz - context.SIZ.XOsiz;
      this.height = context.SIZ.Ysiz - context.SIZ.YOsiz;
      this.componentsCount = context.SIZ.Csiz;
    }
  };

  function calculateComponentDimensions(component, siz) {
    component.x0 = Math.ceil(siz.XOsiz / component.XRsiz);
    component.x1 = Math.ceil(siz.Xsiz / component.XRsiz);
    component.y0 = Math.ceil(siz.YOsiz / component.YRsiz);
    component.y1 = Math.ceil(siz.Ysiz / component.YRsiz);
    component.width = component.x1 - component.x0;
    component.height = component.y1 - component.y0;
  }

  function calculateTileGrids(context, components) {
    var siz = context.SIZ;
    var tile,
        tiles = [];
    var numXtiles = Math.ceil((siz.Xsiz - siz.XTOsiz) / siz.XTsiz);
    var numYtiles = Math.ceil((siz.Ysiz - siz.YTOsiz) / siz.YTsiz);

    for (var q = 0; q < numYtiles; q++) {
      for (var p = 0; p < numXtiles; p++) {
        tile = {};
        tile.tx0 = Math.max(siz.XTOsiz + p * siz.XTsiz, siz.XOsiz);
        tile.ty0 = Math.max(siz.YTOsiz + q * siz.YTsiz, siz.YOsiz);
        tile.tx1 = Math.min(siz.XTOsiz + (p + 1) * siz.XTsiz, siz.Xsiz);
        tile.ty1 = Math.min(siz.YTOsiz + (q + 1) * siz.YTsiz, siz.Ysiz);
        tile.width = tile.tx1 - tile.tx0;
        tile.height = tile.ty1 - tile.ty0;
        tile.components = [];
        tiles.push(tile);
      }
    }

    context.tiles = tiles;
    var componentsCount = siz.Csiz;

    for (var i = 0, ii = componentsCount; i < ii; i++) {
      var component = components[i];

      for (var j = 0, jj = tiles.length; j < jj; j++) {
        var tileComponent = {};
        tile = tiles[j];
        tileComponent.tcx0 = Math.ceil(tile.tx0 / component.XRsiz);
        tileComponent.tcy0 = Math.ceil(tile.ty0 / component.YRsiz);
        tileComponent.tcx1 = Math.ceil(tile.tx1 / component.XRsiz);
        tileComponent.tcy1 = Math.ceil(tile.ty1 / component.YRsiz);
        tileComponent.width = tileComponent.tcx1 - tileComponent.tcx0;
        tileComponent.height = tileComponent.tcy1 - tileComponent.tcy0;
        tile.components[i] = tileComponent;
      }
    }
  }

  function getBlocksDimensions(context, component, r) {
    var codOrCoc = component.codingStyleParameters;
    var result = {};

    if (!codOrCoc.entropyCoderWithCustomPrecincts) {
      result.PPx = 15;
      result.PPy = 15;
    } else {
      result.PPx = codOrCoc.precinctsSizes[r].PPx;
      result.PPy = codOrCoc.precinctsSizes[r].PPy;
    }

    result.xcb_ = r > 0 ? Math.min(codOrCoc.xcb, result.PPx - 1) : Math.min(codOrCoc.xcb, result.PPx);
    result.ycb_ = r > 0 ? Math.min(codOrCoc.ycb, result.PPy - 1) : Math.min(codOrCoc.ycb, result.PPy);
    return result;
  }

  function buildPrecincts(context, resolution, dimensions) {
    var precinctWidth = 1 << dimensions.PPx;
    var precinctHeight = 1 << dimensions.PPy;
    var isZeroRes = resolution.resLevel === 0;
    var precinctWidthInSubband = 1 << dimensions.PPx + (isZeroRes ? 0 : -1);
    var precinctHeightInSubband = 1 << dimensions.PPy + (isZeroRes ? 0 : -1);
    var numprecinctswide = resolution.trx1 > resolution.trx0 ? Math.ceil(resolution.trx1 / precinctWidth) - Math.floor(resolution.trx0 / precinctWidth) : 0;
    var numprecinctshigh = resolution.try1 > resolution.try0 ? Math.ceil(resolution.try1 / precinctHeight) - Math.floor(resolution.try0 / precinctHeight) : 0;
    var numprecincts = numprecinctswide * numprecinctshigh;
    resolution.precinctParameters = {
      precinctWidth: precinctWidth,
      precinctHeight: precinctHeight,
      numprecinctswide: numprecinctswide,
      numprecinctshigh: numprecinctshigh,
      numprecincts: numprecincts,
      precinctWidthInSubband: precinctWidthInSubband,
      precinctHeightInSubband: precinctHeightInSubband
    };
  }

  function buildCodeblocks(context, subband, dimensions) {
    var xcb_ = dimensions.xcb_;
    var ycb_ = dimensions.ycb_;
    var codeblockWidth = 1 << xcb_;
    var codeblockHeight = 1 << ycb_;
    var cbx0 = subband.tbx0 >> xcb_;
    var cby0 = subband.tby0 >> ycb_;
    var cbx1 = subband.tbx1 + codeblockWidth - 1 >> xcb_;
    var cby1 = subband.tby1 + codeblockHeight - 1 >> ycb_;
    var precinctParameters = subband.resolution.precinctParameters;
    var codeblocks = [];
    var precincts = [];
    var i, j, codeblock, precinctNumber;

    for (j = cby0; j < cby1; j++) {
      for (i = cbx0; i < cbx1; i++) {
        codeblock = {
          cbx: i,
          cby: j,
          tbx0: codeblockWidth * i,
          tby0: codeblockHeight * j,
          tbx1: codeblockWidth * (i + 1),
          tby1: codeblockHeight * (j + 1)
        };
        codeblock.tbx0_ = Math.max(subband.tbx0, codeblock.tbx0);
        codeblock.tby0_ = Math.max(subband.tby0, codeblock.tby0);
        codeblock.tbx1_ = Math.min(subband.tbx1, codeblock.tbx1);
        codeblock.tby1_ = Math.min(subband.tby1, codeblock.tby1);
        var pi = Math.floor((codeblock.tbx0_ - subband.tbx0) / precinctParameters.precinctWidthInSubband);
        var pj = Math.floor((codeblock.tby0_ - subband.tby0) / precinctParameters.precinctHeightInSubband);
        precinctNumber = pi + pj * precinctParameters.numprecinctswide;
        codeblock.precinctNumber = precinctNumber;
        codeblock.subbandType = subband.type;
        codeblock.Lblock = 3;

        if (codeblock.tbx1_ <= codeblock.tbx0_ || codeblock.tby1_ <= codeblock.tby0_) {
          continue;
        }

        codeblocks.push(codeblock);
        var precinct = precincts[precinctNumber];

        if (precinct !== undefined) {
          if (i < precinct.cbxMin) {
            precinct.cbxMin = i;
          } else if (i > precinct.cbxMax) {
            precinct.cbxMax = i;
          }

          if (j < precinct.cbyMin) {
            precinct.cbxMin = j;
          } else if (j > precinct.cbyMax) {
            precinct.cbyMax = j;
          }
        } else {
          precincts[precinctNumber] = precinct = {
            cbxMin: i,
            cbyMin: j,
            cbxMax: i,
            cbyMax: j
          };
        }

        codeblock.precinct = precinct;
      }
    }

    subband.codeblockParameters = {
      codeblockWidth: xcb_,
      codeblockHeight: ycb_,
      numcodeblockwide: cbx1 - cbx0 + 1,
      numcodeblockhigh: cby1 - cby0 + 1
    };
    subband.codeblocks = codeblocks;
    subband.precincts = precincts;
  }

  function createPacket(resolution, precinctNumber, layerNumber) {
    var precinctCodeblocks = [];
    var subbands = resolution.subbands;

    for (var i = 0, ii = subbands.length; i < ii; i++) {
      var subband = subbands[i];
      var codeblocks = subband.codeblocks;

      for (var j = 0, jj = codeblocks.length; j < jj; j++) {
        var codeblock = codeblocks[j];

        if (codeblock.precinctNumber !== precinctNumber) {
          continue;
        }

        precinctCodeblocks.push(codeblock);
      }
    }

    return {
      layerNumber: layerNumber,
      codeblocks: precinctCodeblocks
    };
  }

  function LayerResolutionComponentPositionIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var maxDecompositionLevelsCount = 0;

    for (var q = 0; q < componentsCount; q++) {
      maxDecompositionLevelsCount = Math.max(maxDecompositionLevelsCount, tile.components[q].codingStyleParameters.decompositionLevelsCount);
    }

    var l = 0,
        r = 0,
        i = 0,
        k = 0;

    this.nextPacket = function JpxImage_nextPacket() {
      for (; l < layersCount; l++) {
        for (; r <= maxDecompositionLevelsCount; r++) {
          for (; i < componentsCount; i++) {
            var component = tile.components[i];

            if (r > component.codingStyleParameters.decompositionLevelsCount) {
              continue;
            }

            var resolution = component.resolutions[r];
            var numprecincts = resolution.precinctParameters.numprecincts;

            for (; k < numprecincts;) {
              var packet = createPacket(resolution, k, l);
              k++;
              return packet;
            }

            k = 0;
          }

          i = 0;
        }

        r = 0;
      }

      throw new JpxError("Out of packets");
    };
  }

  function ResolutionLayerComponentPositionIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var maxDecompositionLevelsCount = 0;

    for (var q = 0; q < componentsCount; q++) {
      maxDecompositionLevelsCount = Math.max(maxDecompositionLevelsCount, tile.components[q].codingStyleParameters.decompositionLevelsCount);
    }

    var r = 0,
        l = 0,
        i = 0,
        k = 0;

    this.nextPacket = function JpxImage_nextPacket() {
      for (; r <= maxDecompositionLevelsCount; r++) {
        for (; l < layersCount; l++) {
          for (; i < componentsCount; i++) {
            var component = tile.components[i];

            if (r > component.codingStyleParameters.decompositionLevelsCount) {
              continue;
            }

            var resolution = component.resolutions[r];
            var numprecincts = resolution.precinctParameters.numprecincts;

            for (; k < numprecincts;) {
              var packet = createPacket(resolution, k, l);
              k++;
              return packet;
            }

            k = 0;
          }

          i = 0;
        }

        l = 0;
      }

      throw new JpxError("Out of packets");
    };
  }

  function ResolutionPositionComponentLayerIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var l, r, c, p;
    var maxDecompositionLevelsCount = 0;

    for (c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      maxDecompositionLevelsCount = Math.max(maxDecompositionLevelsCount, component.codingStyleParameters.decompositionLevelsCount);
    }

    var maxNumPrecinctsInLevel = new Int32Array(maxDecompositionLevelsCount + 1);

    for (r = 0; r <= maxDecompositionLevelsCount; ++r) {
      var maxNumPrecincts = 0;

      for (c = 0; c < componentsCount; ++c) {
        var resolutions = tile.components[c].resolutions;

        if (r < resolutions.length) {
          maxNumPrecincts = Math.max(maxNumPrecincts, resolutions[r].precinctParameters.numprecincts);
        }
      }

      maxNumPrecinctsInLevel[r] = maxNumPrecincts;
    }

    l = 0;
    r = 0;
    c = 0;
    p = 0;

    this.nextPacket = function JpxImage_nextPacket() {
      for (; r <= maxDecompositionLevelsCount; r++) {
        for (; p < maxNumPrecinctsInLevel[r]; p++) {
          for (; c < componentsCount; c++) {
            var _component = tile.components[c];

            if (r > _component.codingStyleParameters.decompositionLevelsCount) {
              continue;
            }

            var resolution = _component.resolutions[r];
            var numprecincts = resolution.precinctParameters.numprecincts;

            if (p >= numprecincts) {
              continue;
            }

            for (; l < layersCount;) {
              var packet = createPacket(resolution, p, l);
              l++;
              return packet;
            }

            l = 0;
          }

          c = 0;
        }

        p = 0;
      }

      throw new JpxError("Out of packets");
    };
  }

  function PositionComponentResolutionLayerIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var precinctsSizes = getPrecinctSizesInImageScale(tile);
    var precinctsIterationSizes = precinctsSizes;
    var l = 0,
        r = 0,
        c = 0,
        px = 0,
        py = 0;

    this.nextPacket = function JpxImage_nextPacket() {
      for (; py < precinctsIterationSizes.maxNumHigh; py++) {
        for (; px < precinctsIterationSizes.maxNumWide; px++) {
          for (; c < componentsCount; c++) {
            var component = tile.components[c];
            var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;

            for (; r <= decompositionLevelsCount; r++) {
              var resolution = component.resolutions[r];
              var sizeInImageScale = precinctsSizes.components[c].resolutions[r];
              var k = getPrecinctIndexIfExist(px, py, sizeInImageScale, precinctsIterationSizes, resolution);

              if (k === null) {
                continue;
              }

              for (; l < layersCount;) {
                var packet = createPacket(resolution, k, l);
                l++;
                return packet;
              }

              l = 0;
            }

            r = 0;
          }

          c = 0;
        }

        px = 0;
      }

      throw new JpxError("Out of packets");
    };
  }

  function ComponentPositionResolutionLayerIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var precinctsSizes = getPrecinctSizesInImageScale(tile);
    var l = 0,
        r = 0,
        c = 0,
        px = 0,
        py = 0;

    this.nextPacket = function JpxImage_nextPacket() {
      for (; c < componentsCount; ++c) {
        var component = tile.components[c];
        var precinctsIterationSizes = precinctsSizes.components[c];
        var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;

        for (; py < precinctsIterationSizes.maxNumHigh; py++) {
          for (; px < precinctsIterationSizes.maxNumWide; px++) {
            for (; r <= decompositionLevelsCount; r++) {
              var resolution = component.resolutions[r];
              var sizeInImageScale = precinctsIterationSizes.resolutions[r];
              var k = getPrecinctIndexIfExist(px, py, sizeInImageScale, precinctsIterationSizes, resolution);

              if (k === null) {
                continue;
              }

              for (; l < layersCount;) {
                var packet = createPacket(resolution, k, l);
                l++;
                return packet;
              }

              l = 0;
            }

            r = 0;
          }

          px = 0;
        }

        py = 0;
      }

      throw new JpxError("Out of packets");
    };
  }

  function getPrecinctIndexIfExist(pxIndex, pyIndex, sizeInImageScale, precinctIterationSizes, resolution) {
    var posX = pxIndex * precinctIterationSizes.minWidth;
    var posY = pyIndex * precinctIterationSizes.minHeight;

    if (posX % sizeInImageScale.width !== 0 || posY % sizeInImageScale.height !== 0) {
      return null;
    }

    var startPrecinctRowIndex = posY / sizeInImageScale.width * resolution.precinctParameters.numprecinctswide;
    return posX / sizeInImageScale.height + startPrecinctRowIndex;
  }

  function getPrecinctSizesInImageScale(tile) {
    var componentsCount = tile.components.length;
    var minWidth = Number.MAX_VALUE;
    var minHeight = Number.MAX_VALUE;
    var maxNumWide = 0;
    var maxNumHigh = 0;
    var sizePerComponent = new Array(componentsCount);

    for (var c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;
      var sizePerResolution = new Array(decompositionLevelsCount + 1);
      var minWidthCurrentComponent = Number.MAX_VALUE;
      var minHeightCurrentComponent = Number.MAX_VALUE;
      var maxNumWideCurrentComponent = 0;
      var maxNumHighCurrentComponent = 0;
      var scale = 1;

      for (var r = decompositionLevelsCount; r >= 0; --r) {
        var resolution = component.resolutions[r];
        var widthCurrentResolution = scale * resolution.precinctParameters.precinctWidth;
        var heightCurrentResolution = scale * resolution.precinctParameters.precinctHeight;
        minWidthCurrentComponent = Math.min(minWidthCurrentComponent, widthCurrentResolution);
        minHeightCurrentComponent = Math.min(minHeightCurrentComponent, heightCurrentResolution);
        maxNumWideCurrentComponent = Math.max(maxNumWideCurrentComponent, resolution.precinctParameters.numprecinctswide);
        maxNumHighCurrentComponent = Math.max(maxNumHighCurrentComponent, resolution.precinctParameters.numprecinctshigh);
        sizePerResolution[r] = {
          width: widthCurrentResolution,
          height: heightCurrentResolution
        };
        scale <<= 1;
      }

      minWidth = Math.min(minWidth, minWidthCurrentComponent);
      minHeight = Math.min(minHeight, minHeightCurrentComponent);
      maxNumWide = Math.max(maxNumWide, maxNumWideCurrentComponent);
      maxNumHigh = Math.max(maxNumHigh, maxNumHighCurrentComponent);
      sizePerComponent[c] = {
        resolutions: sizePerResolution,
        minWidth: minWidthCurrentComponent,
        minHeight: minHeightCurrentComponent,
        maxNumWide: maxNumWideCurrentComponent,
        maxNumHigh: maxNumHighCurrentComponent
      };
    }

    return {
      components: sizePerComponent,
      minWidth: minWidth,
      minHeight: minHeight,
      maxNumWide: maxNumWide,
      maxNumHigh: maxNumHigh
    };
  }

  function buildPackets(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var componentsCount = siz.Csiz;

    for (var c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;
      var resolutions = [];
      var subbands = [];

      for (var r = 0; r <= decompositionLevelsCount; r++) {
        var blocksDimensions = getBlocksDimensions(context, component, r);
        var resolution = {};
        var scale = 1 << decompositionLevelsCount - r;
        resolution.trx0 = Math.ceil(component.tcx0 / scale);
        resolution.try0 = Math.ceil(component.tcy0 / scale);
        resolution.trx1 = Math.ceil(component.tcx1 / scale);
        resolution.try1 = Math.ceil(component.tcy1 / scale);
        resolution.resLevel = r;
        buildPrecincts(context, resolution, blocksDimensions);
        resolutions.push(resolution);
        var subband;

        if (r === 0) {
          subband = {};
          subband.type = "LL";
          subband.tbx0 = Math.ceil(component.tcx0 / scale);
          subband.tby0 = Math.ceil(component.tcy0 / scale);
          subband.tbx1 = Math.ceil(component.tcx1 / scale);
          subband.tby1 = Math.ceil(component.tcy1 / scale);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolution.subbands = [subband];
        } else {
          var bscale = 1 << decompositionLevelsCount - r + 1;
          var resolutionSubbands = [];
          subband = {};
          subband.type = "HL";
          subband.tbx0 = Math.ceil(component.tcx0 / bscale - 0.5);
          subband.tby0 = Math.ceil(component.tcy0 / bscale);
          subband.tbx1 = Math.ceil(component.tcx1 / bscale - 0.5);
          subband.tby1 = Math.ceil(component.tcy1 / bscale);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolutionSubbands.push(subband);
          subband = {};
          subband.type = "LH";
          subband.tbx0 = Math.ceil(component.tcx0 / bscale);
          subband.tby0 = Math.ceil(component.tcy0 / bscale - 0.5);
          subband.tbx1 = Math.ceil(component.tcx1 / bscale);
          subband.tby1 = Math.ceil(component.tcy1 / bscale - 0.5);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolutionSubbands.push(subband);
          subband = {};
          subband.type = "HH";
          subband.tbx0 = Math.ceil(component.tcx0 / bscale - 0.5);
          subband.tby0 = Math.ceil(component.tcy0 / bscale - 0.5);
          subband.tbx1 = Math.ceil(component.tcx1 / bscale - 0.5);
          subband.tby1 = Math.ceil(component.tcy1 / bscale - 0.5);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolutionSubbands.push(subband);
          resolution.subbands = resolutionSubbands;
        }
      }

      component.resolutions = resolutions;
      component.subbands = subbands;
    }

    var progressionOrder = tile.codingStyleDefaultParameters.progressionOrder;

    switch (progressionOrder) {
      case 0:
        tile.packetsIterator = new LayerResolutionComponentPositionIterator(context);
        break;

      case 1:
        tile.packetsIterator = new ResolutionLayerComponentPositionIterator(context);
        break;

      case 2:
        tile.packetsIterator = new ResolutionPositionComponentLayerIterator(context);
        break;

      case 3:
        tile.packetsIterator = new PositionComponentResolutionLayerIterator(context);
        break;

      case 4:
        tile.packetsIterator = new ComponentPositionResolutionLayerIterator(context);
        break;

      default:
        throw new JpxError("Unsupported progression order ".concat(progressionOrder));
    }
  }

  function parseTilePackets(context, data, offset, dataLength) {
    var position = 0;
    var buffer,
        bufferSize = 0,
        skipNextBit = false;

    function readBits(count) {
      while (bufferSize < count) {
        var b = data[offset + position];
        position++;

        if (skipNextBit) {
          buffer = buffer << 7 | b;
          bufferSize += 7;
          skipNextBit = false;
        } else {
          buffer = buffer << 8 | b;
          bufferSize += 8;
        }

        if (b === 0xff) {
          skipNextBit = true;
        }
      }

      bufferSize -= count;
      return buffer >>> bufferSize & (1 << count) - 1;
    }

    function skipMarkerIfEqual(value) {
      if (data[offset + position - 1] === 0xff && data[offset + position] === value) {
        skipBytes(1);
        return true;
      } else if (data[offset + position] === 0xff && data[offset + position + 1] === value) {
        skipBytes(2);
        return true;
      }

      return false;
    }

    function skipBytes(count) {
      position += count;
    }

    function alignToByte() {
      bufferSize = 0;

      if (skipNextBit) {
        position++;
        skipNextBit = false;
      }
    }

    function readCodingpasses() {
      if (readBits(1) === 0) {
        return 1;
      }

      if (readBits(1) === 0) {
        return 2;
      }

      var value = readBits(2);

      if (value < 3) {
        return value + 3;
      }

      value = readBits(5);

      if (value < 31) {
        return value + 6;
      }

      value = readBits(7);
      return value + 37;
    }

    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var sopMarkerUsed = context.COD.sopMarkerUsed;
    var ephMarkerUsed = context.COD.ephMarkerUsed;
    var packetsIterator = tile.packetsIterator;

    while (position < dataLength) {
      alignToByte();

      if (sopMarkerUsed && skipMarkerIfEqual(0x91)) {
        skipBytes(4);
      }

      var packet = packetsIterator.nextPacket();

      if (!readBits(1)) {
        continue;
      }

      var layerNumber = packet.layerNumber;
      var queue = [],
          codeblock;

      for (var i = 0, ii = packet.codeblocks.length; i < ii; i++) {
        codeblock = packet.codeblocks[i];
        var precinct = codeblock.precinct;
        var codeblockColumn = codeblock.cbx - precinct.cbxMin;
        var codeblockRow = codeblock.cby - precinct.cbyMin;
        var codeblockIncluded = false;
        var firstTimeInclusion = false;
        var valueReady;

        if (codeblock.included !== undefined) {
          codeblockIncluded = !!readBits(1);
        } else {
          precinct = codeblock.precinct;
          var inclusionTree, zeroBitPlanesTree;

          if (precinct.inclusionTree !== undefined) {
            inclusionTree = precinct.inclusionTree;
          } else {
            var width = precinct.cbxMax - precinct.cbxMin + 1;
            var height = precinct.cbyMax - precinct.cbyMin + 1;
            inclusionTree = new InclusionTree(width, height, layerNumber);
            zeroBitPlanesTree = new TagTree(width, height);
            precinct.inclusionTree = inclusionTree;
            precinct.zeroBitPlanesTree = zeroBitPlanesTree;
          }

          if (inclusionTree.reset(codeblockColumn, codeblockRow, layerNumber)) {
            while (true) {
              if (readBits(1)) {
                valueReady = !inclusionTree.nextLevel();

                if (valueReady) {
                  codeblock.included = true;
                  codeblockIncluded = firstTimeInclusion = true;
                  break;
                }
              } else {
                inclusionTree.incrementValue(layerNumber);
                break;
              }
            }
          }
        }

        if (!codeblockIncluded) {
          continue;
        }

        if (firstTimeInclusion) {
          zeroBitPlanesTree = precinct.zeroBitPlanesTree;
          zeroBitPlanesTree.reset(codeblockColumn, codeblockRow);

          while (true) {
            if (readBits(1)) {
              valueReady = !zeroBitPlanesTree.nextLevel();

              if (valueReady) {
                break;
              }
            } else {
              zeroBitPlanesTree.incrementValue();
            }
          }

          codeblock.zeroBitPlanes = zeroBitPlanesTree.value;
        }

        var codingpasses = readCodingpasses();

        while (readBits(1)) {
          codeblock.Lblock++;
        }

        var codingpassesLog2 = (0, _core_utils.log2)(codingpasses);
        var bits = (codingpasses < 1 << codingpassesLog2 ? codingpassesLog2 - 1 : codingpassesLog2) + codeblock.Lblock;
        var codedDataLength = readBits(bits);
        queue.push({
          codeblock: codeblock,
          codingpasses: codingpasses,
          dataLength: codedDataLength
        });
      }

      alignToByte();

      if (ephMarkerUsed) {
        skipMarkerIfEqual(0x92);
      }

      while (queue.length > 0) {
        var packetItem = queue.shift();
        codeblock = packetItem.codeblock;

        if (codeblock.data === undefined) {
          codeblock.data = [];
        }

        codeblock.data.push({
          data: data,
          start: offset + position,
          end: offset + position + packetItem.dataLength,
          codingpasses: packetItem.codingpasses
        });
        position += packetItem.dataLength;
      }
    }

    return position;
  }

  function copyCoefficients(coefficients, levelWidth, levelHeight, subband, delta, mb, reversible, segmentationSymbolUsed) {
    var x0 = subband.tbx0;
    var y0 = subband.tby0;
    var width = subband.tbx1 - subband.tbx0;
    var codeblocks = subband.codeblocks;
    var right = subband.type.charAt(0) === "H" ? 1 : 0;
    var bottom = subband.type.charAt(1) === "H" ? levelWidth : 0;

    for (var i = 0, ii = codeblocks.length; i < ii; ++i) {
      var codeblock = codeblocks[i];
      var blockWidth = codeblock.tbx1_ - codeblock.tbx0_;
      var blockHeight = codeblock.tby1_ - codeblock.tby0_;

      if (blockWidth === 0 || blockHeight === 0) {
        continue;
      }

      if (codeblock.data === undefined) {
        continue;
      }

      var bitModel, currentCodingpassType;
      bitModel = new BitModel(blockWidth, blockHeight, codeblock.subbandType, codeblock.zeroBitPlanes, mb);
      currentCodingpassType = 2;
      var data = codeblock.data,
          totalLength = 0,
          codingpasses = 0;
      var j, jj, dataItem;

      for (j = 0, jj = data.length; j < jj; j++) {
        dataItem = data[j];
        totalLength += dataItem.end - dataItem.start;
        codingpasses += dataItem.codingpasses;
      }

      var encodedData = new Uint8Array(totalLength);
      var position = 0;

      for (j = 0, jj = data.length; j < jj; j++) {
        dataItem = data[j];
        var chunk = dataItem.data.subarray(dataItem.start, dataItem.end);
        encodedData.set(chunk, position);
        position += chunk.length;
      }

      var decoder = new _arithmetic_decoder.ArithmeticDecoder(encodedData, 0, totalLength);
      bitModel.setDecoder(decoder);

      for (j = 0; j < codingpasses; j++) {
        switch (currentCodingpassType) {
          case 0:
            bitModel.runSignificancePropagationPass();
            break;

          case 1:
            bitModel.runMagnitudeRefinementPass();
            break;

          case 2:
            bitModel.runCleanupPass();

            if (segmentationSymbolUsed) {
              bitModel.checkSegmentationSymbol();
            }

            break;
        }

        currentCodingpassType = (currentCodingpassType + 1) % 3;
      }

      var offset = codeblock.tbx0_ - x0 + (codeblock.tby0_ - y0) * width;
      var sign = bitModel.coefficentsSign;
      var magnitude = bitModel.coefficentsMagnitude;
      var bitsDecoded = bitModel.bitsDecoded;
      var magnitudeCorrection = reversible ? 0 : 0.5;
      var k, n, nb;
      position = 0;
      var interleave = subband.type !== "LL";

      for (j = 0; j < blockHeight; j++) {
        var row = offset / width | 0;
        var levelOffset = 2 * row * (levelWidth - width) + right + bottom;

        for (k = 0; k < blockWidth; k++) {
          n = magnitude[position];

          if (n !== 0) {
            n = (n + magnitudeCorrection) * delta;

            if (sign[position] !== 0) {
              n = -n;
            }

            nb = bitsDecoded[position];
            var pos = interleave ? levelOffset + (offset << 1) : offset;

            if (reversible && nb >= mb) {
              coefficients[pos] = n;
            } else {
              coefficients[pos] = n * (1 << mb - nb);
            }
          }

          offset++;
          position++;
        }

        offset += width - blockWidth;
      }
    }
  }

  function transformTile(context, tile, c) {
    var component = tile.components[c];
    var codingStyleParameters = component.codingStyleParameters;
    var quantizationParameters = component.quantizationParameters;
    var decompositionLevelsCount = codingStyleParameters.decompositionLevelsCount;
    var spqcds = quantizationParameters.SPqcds;
    var scalarExpounded = quantizationParameters.scalarExpounded;
    var guardBits = quantizationParameters.guardBits;
    var segmentationSymbolUsed = codingStyleParameters.segmentationSymbolUsed;
    var precision = context.components[c].precision;
    var reversible = codingStyleParameters.reversibleTransformation;
    var transform = reversible ? new ReversibleTransform() : new IrreversibleTransform();
    var subbandCoefficients = [];
    var b = 0;

    for (var i = 0; i <= decompositionLevelsCount; i++) {
      var resolution = component.resolutions[i];
      var width = resolution.trx1 - resolution.trx0;
      var height = resolution.try1 - resolution.try0;
      var coefficients = new Float32Array(width * height);

      for (var j = 0, jj = resolution.subbands.length; j < jj; j++) {
        var mu, epsilon;

        if (!scalarExpounded) {
          mu = spqcds[0].mu;
          epsilon = spqcds[0].epsilon + (i > 0 ? 1 - i : 0);
        } else {
          mu = spqcds[b].mu;
          epsilon = spqcds[b].epsilon;
          b++;
        }

        var subband = resolution.subbands[j];
        var gainLog2 = SubbandsGainLog2[subband.type];
        var delta = reversible ? 1 : Math.pow(2, precision + gainLog2 - epsilon) * (1 + mu / 2048);
        var mb = guardBits + epsilon - 1;
        copyCoefficients(coefficients, width, height, subband, delta, mb, reversible, segmentationSymbolUsed);
      }

      subbandCoefficients.push({
        width: width,
        height: height,
        items: coefficients
      });
    }

    var result = transform.calculate(subbandCoefficients, component.tcx0, component.tcy0);
    return {
      left: component.tcx0,
      top: component.tcy0,
      width: result.width,
      height: result.height,
      items: result.items
    };
  }

  function transformComponents(context) {
    var siz = context.SIZ;
    var components = context.components;
    var componentsCount = siz.Csiz;
    var resultImages = [];

    for (var i = 0, ii = context.tiles.length; i < ii; i++) {
      var tile = context.tiles[i];
      var transformedTiles = [];
      var c;

      for (c = 0; c < componentsCount; c++) {
        transformedTiles[c] = transformTile(context, tile, c);
      }

      var tile0 = transformedTiles[0];
      var out = new Uint8ClampedArray(tile0.items.length * componentsCount);
      var result = {
        left: tile0.left,
        top: tile0.top,
        width: tile0.width,
        height: tile0.height,
        items: out
      };
      var shift, offset;
      var pos = 0,
          j,
          jj,
          y0,
          y1,
          y2;

      if (tile.codingStyleDefaultParameters.multipleComponentTransform) {
        var fourComponents = componentsCount === 4;
        var y0items = transformedTiles[0].items;
        var y1items = transformedTiles[1].items;
        var y2items = transformedTiles[2].items;
        var y3items = fourComponents ? transformedTiles[3].items : null;
        shift = components[0].precision - 8;
        offset = (128 << shift) + 0.5;
        var component0 = tile.components[0];
        var alpha01 = componentsCount - 3;
        jj = y0items.length;

        if (!component0.codingStyleParameters.reversibleTransformation) {
          for (j = 0; j < jj; j++, pos += alpha01) {
            y0 = y0items[j] + offset;
            y1 = y1items[j];
            y2 = y2items[j];
            out[pos++] = y0 + 1.402 * y2 >> shift;
            out[pos++] = y0 - 0.34413 * y1 - 0.71414 * y2 >> shift;
            out[pos++] = y0 + 1.772 * y1 >> shift;
          }
        } else {
          for (j = 0; j < jj; j++, pos += alpha01) {
            y0 = y0items[j] + offset;
            y1 = y1items[j];
            y2 = y2items[j];
            var g = y0 - (y2 + y1 >> 2);
            out[pos++] = g + y2 >> shift;
            out[pos++] = g >> shift;
            out[pos++] = g + y1 >> shift;
          }
        }

        if (fourComponents) {
          for (j = 0, pos = 3; j < jj; j++, pos += 4) {
            out[pos] = y3items[j] + offset >> shift;
          }
        }
      } else {
        for (c = 0; c < componentsCount; c++) {
          var items = transformedTiles[c].items;
          shift = components[c].precision - 8;
          offset = (128 << shift) + 0.5;

          for (pos = c, j = 0, jj = items.length; j < jj; j++) {
            out[pos] = items[j] + offset >> shift;
            pos += componentsCount;
          }
        }
      }

      resultImages.push(result);
    }

    return resultImages;
  }

  function initializeTile(context, tileIndex) {
    var siz = context.SIZ;
    var componentsCount = siz.Csiz;
    var tile = context.tiles[tileIndex];

    for (var c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      var qcdOrQcc = context.currentTile.QCC[c] !== undefined ? context.currentTile.QCC[c] : context.currentTile.QCD;
      component.quantizationParameters = qcdOrQcc;
      var codOrCoc = context.currentTile.COC[c] !== undefined ? context.currentTile.COC[c] : context.currentTile.COD;
      component.codingStyleParameters = codOrCoc;
    }

    tile.codingStyleDefaultParameters = context.currentTile.COD;
  }

  var TagTree = function TagTreeClosure() {
    function TagTree(width, height) {
      var levelsLength = (0, _core_utils.log2)(Math.max(width, height)) + 1;
      this.levels = [];

      for (var i = 0; i < levelsLength; i++) {
        var level = {
          width: width,
          height: height,
          items: []
        };
        this.levels.push(level);
        width = Math.ceil(width / 2);
        height = Math.ceil(height / 2);
      }
    }

    TagTree.prototype = {
      reset: function TagTree_reset(i, j) {
        var currentLevel = 0,
            value = 0,
            level;

        while (currentLevel < this.levels.length) {
          level = this.levels[currentLevel];
          var index = i + j * level.width;

          if (level.items[index] !== undefined) {
            value = level.items[index];
            break;
          }

          level.index = index;
          i >>= 1;
          j >>= 1;
          currentLevel++;
        }

        currentLevel--;
        level = this.levels[currentLevel];
        level.items[level.index] = value;
        this.currentLevel = currentLevel;
        delete this.value;
      },
      incrementValue: function TagTree_incrementValue() {
        var level = this.levels[this.currentLevel];
        level.items[level.index]++;
      },
      nextLevel: function TagTree_nextLevel() {
        var currentLevel = this.currentLevel;
        var level = this.levels[currentLevel];
        var value = level.items[level.index];
        currentLevel--;

        if (currentLevel < 0) {
          this.value = value;
          return false;
        }

        this.currentLevel = currentLevel;
        level = this.levels[currentLevel];
        level.items[level.index] = value;
        return true;
      }
    };
    return TagTree;
  }();

  var InclusionTree = function InclusionTreeClosure() {
    function InclusionTree(width, height, defaultValue) {
      var levelsLength = (0, _core_utils.log2)(Math.max(width, height)) + 1;
      this.levels = [];

      for (var i = 0; i < levelsLength; i++) {
        var items = new Uint8Array(width * height);

        for (var j = 0, jj = items.length; j < jj; j++) {
          items[j] = defaultValue;
        }

        var level = {
          width: width,
          height: height,
          items: items
        };
        this.levels.push(level);
        width = Math.ceil(width / 2);
        height = Math.ceil(height / 2);
      }
    }

    InclusionTree.prototype = {
      reset: function InclusionTree_reset(i, j, stopValue) {
        var currentLevel = 0;

        while (currentLevel < this.levels.length) {
          var level = this.levels[currentLevel];
          var index = i + j * level.width;
          level.index = index;
          var value = level.items[index];

          if (value === 0xff) {
            break;
          }

          if (value > stopValue) {
            this.currentLevel = currentLevel;
            this.propagateValues();
            return false;
          }

          i >>= 1;
          j >>= 1;
          currentLevel++;
        }

        this.currentLevel = currentLevel - 1;
        return true;
      },
      incrementValue: function InclusionTree_incrementValue(stopValue) {
        var level = this.levels[this.currentLevel];
        level.items[level.index] = stopValue + 1;
        this.propagateValues();
      },
      propagateValues: function InclusionTree_propagateValues() {
        var levelIndex = this.currentLevel;
        var level = this.levels[levelIndex];
        var currentValue = level.items[level.index];

        while (--levelIndex >= 0) {
          level = this.levels[levelIndex];
          level.items[level.index] = currentValue;
        }
      },
      nextLevel: function InclusionTree_nextLevel() {
        var currentLevel = this.currentLevel;
        var level = this.levels[currentLevel];
        var value = level.items[level.index];
        level.items[level.index] = 0xff;
        currentLevel--;

        if (currentLevel < 0) {
          return false;
        }

        this.currentLevel = currentLevel;
        level = this.levels[currentLevel];
        level.items[level.index] = value;
        return true;
      }
    };
    return InclusionTree;
  }();

  var BitModel = function BitModelClosure() {
    var UNIFORM_CONTEXT = 17;
    var RUNLENGTH_CONTEXT = 18;
    var LLAndLHContextsLabel = new Uint8Array([0, 5, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 1, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8]);
    var HLContextLabel = new Uint8Array([0, 3, 4, 0, 5, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 1, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8]);
    var HHContextLabel = new Uint8Array([0, 1, 2, 0, 1, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 3, 4, 5, 0, 4, 5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 0, 6, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 0, 0, 0, 0, 8, 8, 8, 0, 8, 8, 8, 0, 8, 8, 8, 0, 0, 0, 0, 0, 8, 8, 8, 0, 8, 8, 8, 0, 8, 8, 8]);

    function BitModel(width, height, subband, zeroBitPlanes, mb) {
      this.width = width;
      this.height = height;
      var contextLabelTable;

      if (subband === "HH") {
        contextLabelTable = HHContextLabel;
      } else if (subband === "HL") {
        contextLabelTable = HLContextLabel;
      } else {
        contextLabelTable = LLAndLHContextsLabel;
      }

      this.contextLabelTable = contextLabelTable;
      var coefficientCount = width * height;
      this.neighborsSignificance = new Uint8Array(coefficientCount);
      this.coefficentsSign = new Uint8Array(coefficientCount);
      var coefficentsMagnitude;

      if (mb > 14) {
        coefficentsMagnitude = new Uint32Array(coefficientCount);
      } else if (mb > 6) {
        coefficentsMagnitude = new Uint16Array(coefficientCount);
      } else {
        coefficentsMagnitude = new Uint8Array(coefficientCount);
      }

      this.coefficentsMagnitude = coefficentsMagnitude;
      this.processingFlags = new Uint8Array(coefficientCount);
      var bitsDecoded = new Uint8Array(coefficientCount);

      if (zeroBitPlanes !== 0) {
        for (var i = 0; i < coefficientCount; i++) {
          bitsDecoded[i] = zeroBitPlanes;
        }
      }

      this.bitsDecoded = bitsDecoded;
      this.reset();
    }

    BitModel.prototype = {
      setDecoder: function BitModel_setDecoder(decoder) {
        this.decoder = decoder;
      },
      reset: function BitModel_reset() {
        this.contexts = new Int8Array(19);
        this.contexts[0] = 4 << 1 | 0;
        this.contexts[UNIFORM_CONTEXT] = 46 << 1 | 0;
        this.contexts[RUNLENGTH_CONTEXT] = 3 << 1 | 0;
      },
      setNeighborsSignificance: function BitModel_setNeighborsSignificance(row, column, index) {
        var neighborsSignificance = this.neighborsSignificance;
        var width = this.width,
            height = this.height;
        var left = column > 0;
        var right = column + 1 < width;
        var i;

        if (row > 0) {
          i = index - width;

          if (left) {
            neighborsSignificance[i - 1] += 0x10;
          }

          if (right) {
            neighborsSignificance[i + 1] += 0x10;
          }

          neighborsSignificance[i] += 0x04;
        }

        if (row + 1 < height) {
          i = index + width;

          if (left) {
            neighborsSignificance[i - 1] += 0x10;
          }

          if (right) {
            neighborsSignificance[i + 1] += 0x10;
          }

          neighborsSignificance[i] += 0x04;
        }

        if (left) {
          neighborsSignificance[index - 1] += 0x01;
        }

        if (right) {
          neighborsSignificance[index + 1] += 0x01;
        }

        neighborsSignificance[index] |= 0x80;
      },
      runSignificancePropagationPass: function BitModel_runSignificancePropagationPass() {
        var decoder = this.decoder;
        var width = this.width,
            height = this.height;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var coefficentsSign = this.coefficentsSign;
        var neighborsSignificance = this.neighborsSignificance;
        var processingFlags = this.processingFlags;
        var contexts = this.contexts;
        var labels = this.contextLabelTable;
        var bitsDecoded = this.bitsDecoded;
        var processedInverseMask = ~1;
        var processedMask = 1;
        var firstMagnitudeBitMask = 2;

        for (var i0 = 0; i0 < height; i0 += 4) {
          for (var j = 0; j < width; j++) {
            var index = i0 * width + j;

            for (var i1 = 0; i1 < 4; i1++, index += width) {
              var i = i0 + i1;

              if (i >= height) {
                break;
              }

              processingFlags[index] &= processedInverseMask;

              if (coefficentsMagnitude[index] || !neighborsSignificance[index]) {
                continue;
              }

              var contextLabel = labels[neighborsSignificance[index]];
              var decision = decoder.readBit(contexts, contextLabel);

              if (decision) {
                var sign = this.decodeSignBit(i, j, index);
                coefficentsSign[index] = sign;
                coefficentsMagnitude[index] = 1;
                this.setNeighborsSignificance(i, j, index);
                processingFlags[index] |= firstMagnitudeBitMask;
              }

              bitsDecoded[index]++;
              processingFlags[index] |= processedMask;
            }
          }
        }
      },
      decodeSignBit: function BitModel_decodeSignBit(row, column, index) {
        var width = this.width,
            height = this.height;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var coefficentsSign = this.coefficentsSign;
        var contribution, sign0, sign1, significance1;
        var contextLabel, decoded;
        significance1 = column > 0 && coefficentsMagnitude[index - 1] !== 0;

        if (column + 1 < width && coefficentsMagnitude[index + 1] !== 0) {
          sign1 = coefficentsSign[index + 1];

          if (significance1) {
            sign0 = coefficentsSign[index - 1];
            contribution = 1 - sign1 - sign0;
          } else {
            contribution = 1 - sign1 - sign1;
          }
        } else if (significance1) {
          sign0 = coefficentsSign[index - 1];
          contribution = 1 - sign0 - sign0;
        } else {
          contribution = 0;
        }

        var horizontalContribution = 3 * contribution;
        significance1 = row > 0 && coefficentsMagnitude[index - width] !== 0;

        if (row + 1 < height && coefficentsMagnitude[index + width] !== 0) {
          sign1 = coefficentsSign[index + width];

          if (significance1) {
            sign0 = coefficentsSign[index - width];
            contribution = 1 - sign1 - sign0 + horizontalContribution;
          } else {
            contribution = 1 - sign1 - sign1 + horizontalContribution;
          }
        } else if (significance1) {
          sign0 = coefficentsSign[index - width];
          contribution = 1 - sign0 - sign0 + horizontalContribution;
        } else {
          contribution = horizontalContribution;
        }

        if (contribution >= 0) {
          contextLabel = 9 + contribution;
          decoded = this.decoder.readBit(this.contexts, contextLabel);
        } else {
          contextLabel = 9 - contribution;
          decoded = this.decoder.readBit(this.contexts, contextLabel) ^ 1;
        }

        return decoded;
      },
      runMagnitudeRefinementPass: function BitModel_runMagnitudeRefinementPass() {
        var decoder = this.decoder;
        var width = this.width,
            height = this.height;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var neighborsSignificance = this.neighborsSignificance;
        var contexts = this.contexts;
        var bitsDecoded = this.bitsDecoded;
        var processingFlags = this.processingFlags;
        var processedMask = 1;
        var firstMagnitudeBitMask = 2;
        var length = width * height;
        var width4 = width * 4;

        for (var index0 = 0, indexNext; index0 < length; index0 = indexNext) {
          indexNext = Math.min(length, index0 + width4);

          for (var j = 0; j < width; j++) {
            for (var index = index0 + j; index < indexNext; index += width) {
              if (!coefficentsMagnitude[index] || (processingFlags[index] & processedMask) !== 0) {
                continue;
              }

              var contextLabel = 16;

              if ((processingFlags[index] & firstMagnitudeBitMask) !== 0) {
                processingFlags[index] ^= firstMagnitudeBitMask;
                var significance = neighborsSignificance[index] & 127;
                contextLabel = significance === 0 ? 15 : 14;
              }

              var bit = decoder.readBit(contexts, contextLabel);
              coefficentsMagnitude[index] = coefficentsMagnitude[index] << 1 | bit;
              bitsDecoded[index]++;
              processingFlags[index] |= processedMask;
            }
          }
        }
      },
      runCleanupPass: function BitModel_runCleanupPass() {
        var decoder = this.decoder;
        var width = this.width,
            height = this.height;
        var neighborsSignificance = this.neighborsSignificance;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var coefficentsSign = this.coefficentsSign;
        var contexts = this.contexts;
        var labels = this.contextLabelTable;
        var bitsDecoded = this.bitsDecoded;
        var processingFlags = this.processingFlags;
        var processedMask = 1;
        var firstMagnitudeBitMask = 2;
        var oneRowDown = width;
        var twoRowsDown = width * 2;
        var threeRowsDown = width * 3;
        var iNext;

        for (var i0 = 0; i0 < height; i0 = iNext) {
          iNext = Math.min(i0 + 4, height);
          var indexBase = i0 * width;
          var checkAllEmpty = i0 + 3 < height;

          for (var j = 0; j < width; j++) {
            var index0 = indexBase + j;
            var allEmpty = checkAllEmpty && processingFlags[index0] === 0 && processingFlags[index0 + oneRowDown] === 0 && processingFlags[index0 + twoRowsDown] === 0 && processingFlags[index0 + threeRowsDown] === 0 && neighborsSignificance[index0] === 0 && neighborsSignificance[index0 + oneRowDown] === 0 && neighborsSignificance[index0 + twoRowsDown] === 0 && neighborsSignificance[index0 + threeRowsDown] === 0;
            var i1 = 0,
                index = index0;
            var i = i0,
                sign;

            if (allEmpty) {
              var hasSignificantCoefficent = decoder.readBit(contexts, RUNLENGTH_CONTEXT);

              if (!hasSignificantCoefficent) {
                bitsDecoded[index0]++;
                bitsDecoded[index0 + oneRowDown]++;
                bitsDecoded[index0 + twoRowsDown]++;
                bitsDecoded[index0 + threeRowsDown]++;
                continue;
              }

              i1 = decoder.readBit(contexts, UNIFORM_CONTEXT) << 1 | decoder.readBit(contexts, UNIFORM_CONTEXT);

              if (i1 !== 0) {
                i = i0 + i1;
                index += i1 * width;
              }

              sign = this.decodeSignBit(i, j, index);
              coefficentsSign[index] = sign;
              coefficentsMagnitude[index] = 1;
              this.setNeighborsSignificance(i, j, index);
              processingFlags[index] |= firstMagnitudeBitMask;
              index = index0;

              for (var i2 = i0; i2 <= i; i2++, index += width) {
                bitsDecoded[index]++;
              }

              i1++;
            }

            for (i = i0 + i1; i < iNext; i++, index += width) {
              if (coefficentsMagnitude[index] || (processingFlags[index] & processedMask) !== 0) {
                continue;
              }

              var contextLabel = labels[neighborsSignificance[index]];
              var decision = decoder.readBit(contexts, contextLabel);

              if (decision === 1) {
                sign = this.decodeSignBit(i, j, index);
                coefficentsSign[index] = sign;
                coefficentsMagnitude[index] = 1;
                this.setNeighborsSignificance(i, j, index);
                processingFlags[index] |= firstMagnitudeBitMask;
              }

              bitsDecoded[index]++;
            }
          }
        }
      },
      checkSegmentationSymbol: function BitModel_checkSegmentationSymbol() {
        var decoder = this.decoder;
        var contexts = this.contexts;
        var symbol = decoder.readBit(contexts, UNIFORM_CONTEXT) << 3 | decoder.readBit(contexts, UNIFORM_CONTEXT) << 2 | decoder.readBit(contexts, UNIFORM_CONTEXT) << 1 | decoder.readBit(contexts, UNIFORM_CONTEXT);

        if (symbol !== 0xa) {
          throw new JpxError("Invalid segmentation symbol");
        }
      }
    };
    return BitModel;
  }();

  var Transform = function TransformClosure() {
    function Transform() {}

    Transform.prototype.calculate = function transformCalculate(subbands, u0, v0) {
      var ll = subbands[0];

      for (var i = 1, ii = subbands.length; i < ii; i++) {
        ll = this.iterate(ll, subbands[i], u0, v0);
      }

      return ll;
    };

    Transform.prototype.extend = function extend(buffer, offset, size) {
      var i1 = offset - 1,
          j1 = offset + 1;
      var i2 = offset + size - 2,
          j2 = offset + size;
      buffer[i1--] = buffer[j1++];
      buffer[j2++] = buffer[i2--];
      buffer[i1--] = buffer[j1++];
      buffer[j2++] = buffer[i2--];
      buffer[i1--] = buffer[j1++];
      buffer[j2++] = buffer[i2--];
      buffer[i1] = buffer[j1];
      buffer[j2] = buffer[i2];
    };

    Transform.prototype.iterate = function Transform_iterate(ll, hl_lh_hh, u0, v0) {
      var llWidth = ll.width,
          llHeight = ll.height,
          llItems = ll.items;
      var width = hl_lh_hh.width;
      var height = hl_lh_hh.height;
      var items = hl_lh_hh.items;
      var i, j, k, l, u, v;

      for (k = 0, i = 0; i < llHeight; i++) {
        l = i * 2 * width;

        for (j = 0; j < llWidth; j++, k++, l += 2) {
          items[l] = llItems[k];
        }
      }

      llItems = ll.items = null;
      var bufferPadding = 4;
      var rowBuffer = new Float32Array(width + 2 * bufferPadding);

      if (width === 1) {
        if ((u0 & 1) !== 0) {
          for (v = 0, k = 0; v < height; v++, k += width) {
            items[k] *= 0.5;
          }
        }
      } else {
        for (v = 0, k = 0; v < height; v++, k += width) {
          rowBuffer.set(items.subarray(k, k + width), bufferPadding);
          this.extend(rowBuffer, bufferPadding, width);
          this.filter(rowBuffer, bufferPadding, width);
          items.set(rowBuffer.subarray(bufferPadding, bufferPadding + width), k);
        }
      }

      var numBuffers = 16;
      var colBuffers = [];

      for (i = 0; i < numBuffers; i++) {
        colBuffers.push(new Float32Array(height + 2 * bufferPadding));
      }

      var b,
          currentBuffer = 0;
      ll = bufferPadding + height;

      if (height === 1) {
        if ((v0 & 1) !== 0) {
          for (u = 0; u < width; u++) {
            items[u] *= 0.5;
          }
        }
      } else {
        for (u = 0; u < width; u++) {
          if (currentBuffer === 0) {
            numBuffers = Math.min(width - u, numBuffers);

            for (k = u, l = bufferPadding; l < ll; k += width, l++) {
              for (b = 0; b < numBuffers; b++) {
                colBuffers[b][l] = items[k + b];
              }
            }

            currentBuffer = numBuffers;
          }

          currentBuffer--;
          var buffer = colBuffers[currentBuffer];
          this.extend(buffer, bufferPadding, height);
          this.filter(buffer, bufferPadding, height);

          if (currentBuffer === 0) {
            k = u - numBuffers + 1;

            for (l = bufferPadding; l < ll; k += width, l++) {
              for (b = 0; b < numBuffers; b++) {
                items[k + b] = colBuffers[b][l];
              }
            }
          }
        }
      }

      return {
        width: width,
        height: height,
        items: items
      };
    };

    return Transform;
  }();

  var IrreversibleTransform = function IrreversibleTransformClosure() {
    function IrreversibleTransform() {
      Transform.call(this);
    }

    IrreversibleTransform.prototype = Object.create(Transform.prototype);

    IrreversibleTransform.prototype.filter = function irreversibleTransformFilter(x, offset, length) {
      var len = length >> 1;
      offset = offset | 0;
      var j, n, current, next;
      var alpha = -1.586134342059924;
      var beta = -0.052980118572961;
      var gamma = 0.882911075530934;
      var delta = 0.443506852043971;
      var K = 1.230174104914001;
      var K_ = 1 / K;
      j = offset - 3;

      for (n = len + 4; n--; j += 2) {
        x[j] *= K_;
      }

      j = offset - 2;
      current = delta * x[j - 1];

      for (n = len + 3; n--; j += 2) {
        next = delta * x[j + 1];
        x[j] = K * x[j] - current - next;

        if (n--) {
          j += 2;
          current = delta * x[j + 1];
          x[j] = K * x[j] - current - next;
        } else {
          break;
        }
      }

      j = offset - 1;
      current = gamma * x[j - 1];

      for (n = len + 2; n--; j += 2) {
        next = gamma * x[j + 1];
        x[j] -= current + next;

        if (n--) {
          j += 2;
          current = gamma * x[j + 1];
          x[j] -= current + next;
        } else {
          break;
        }
      }

      j = offset;
      current = beta * x[j - 1];

      for (n = len + 1; n--; j += 2) {
        next = beta * x[j + 1];
        x[j] -= current + next;

        if (n--) {
          j += 2;
          current = beta * x[j + 1];
          x[j] -= current + next;
        } else {
          break;
        }
      }

      if (len !== 0) {
        j = offset + 1;
        current = alpha * x[j - 1];

        for (n = len; n--; j += 2) {
          next = alpha * x[j + 1];
          x[j] -= current + next;

          if (n--) {
            j += 2;
            current = alpha * x[j + 1];
            x[j] -= current + next;
          } else {
            break;
          }
        }
      }
    };

    return IrreversibleTransform;
  }();

  var ReversibleTransform = function ReversibleTransformClosure() {
    function ReversibleTransform() {
      Transform.call(this);
    }

    ReversibleTransform.prototype = Object.create(Transform.prototype);

    ReversibleTransform.prototype.filter = function reversibleTransformFilter(x, offset, length) {
      var len = length >> 1;
      offset = offset | 0;
      var j, n;

      for (j = offset, n = len + 1; n--; j += 2) {
        x[j] -= x[j - 1] + x[j + 1] + 2 >> 2;
      }

      for (j = offset + 1, n = len; n--; j += 2) {
        x[j] += x[j - 1] + x[j + 1] >> 1;
      }
    };

    return ReversibleTransform;
  }();

  return JpxImage;
}();

exports.JpxImage = JpxImage;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __w_pdfjs_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __w_pdfjs_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__w_pdfjs_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __w_pdfjs_require__(0);
/******/ })()
;
});
//# sourceMappingURL=pdf.image_decoders.js.map
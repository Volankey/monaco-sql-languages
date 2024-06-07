var _Class, _parent, _Class2, _Class3, _ScopedSymbol2, _children, _names, _Class4, _Class5, _Class6, _Class7, _Class8, _Class9, _Class10, _Class11, _FundamentalType2, _Class12, _Class13, _Class14, _Class15, _Class16, _Class17, _CodeCompletionCore2, _Class18;
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
  value,
  configurable: true
});

// src/types.ts
var MemberVisibility = /* @__PURE__ */(MemberVisibility2 => {
  MemberVisibility2[MemberVisibility2["Unknown"] = 0] = "Unknown";
  MemberVisibility2[MemberVisibility2["Open"] = 1] = "Open";
  MemberVisibility2[MemberVisibility2["Public"] = 2] = "Public";
  MemberVisibility2[MemberVisibility2["Protected"] = 3] = "Protected";
  MemberVisibility2[MemberVisibility2["Private"] = 4] = "Private";
  MemberVisibility2[MemberVisibility2["FilePrivate"] = 5] = "FilePrivate";
  MemberVisibility2[MemberVisibility2["Library"] = 6] = "Library";
  return MemberVisibility2;
})(MemberVisibility || {});
var Modifier = /* @__PURE__ */(Modifier3 => {
  Modifier3[Modifier3["Static"] = 0] = "Static";
  Modifier3[Modifier3["Final"] = 1] = "Final";
  Modifier3[Modifier3["Sealed"] = 2] = "Sealed";
  Modifier3[Modifier3["Abstract"] = 3] = "Abstract";
  Modifier3[Modifier3["Deprecated"] = 4] = "Deprecated";
  Modifier3[Modifier3["Virtual"] = 5] = "Virtual";
  Modifier3[Modifier3["Const"] = 6] = "Const";
  Modifier3[Modifier3["Overwritten"] = 7] = "Overwritten";
  return Modifier3;
})(Modifier || {});
var TypeKind = /* @__PURE__ */(TypeKind2 => {
  TypeKind2[TypeKind2["Unknown"] = 0] = "Unknown";
  TypeKind2[TypeKind2["Integer"] = 1] = "Integer";
  TypeKind2[TypeKind2["Float"] = 2] = "Float";
  TypeKind2[TypeKind2["Number"] = 3] = "Number";
  TypeKind2[TypeKind2["String"] = 4] = "String";
  TypeKind2[TypeKind2["Char"] = 5] = "Char";
  TypeKind2[TypeKind2["Boolean"] = 6] = "Boolean";
  TypeKind2[TypeKind2["Class"] = 7] = "Class";
  TypeKind2[TypeKind2["Interface"] = 8] = "Interface";
  TypeKind2[TypeKind2["Array"] = 9] = "Array";
  TypeKind2[TypeKind2["Map"] = 10] = "Map";
  TypeKind2[TypeKind2["Enum"] = 11] = "Enum";
  TypeKind2[TypeKind2["Alias"] = 12] = "Alias";
  return TypeKind2;
})(TypeKind || {});
var ReferenceKind = /* @__PURE__ */(ReferenceKind3 => {
  ReferenceKind3[ReferenceKind3["Irrelevant"] = 0] = "Irrelevant";
  ReferenceKind3[ReferenceKind3["Pointer"] = 1] = "Pointer";
  ReferenceKind3[ReferenceKind3["Reference"] = 2] = "Reference";
  ReferenceKind3[ReferenceKind3["Instance"] = 3] = "Instance";
  return ReferenceKind3;
})(ReferenceKind || {});

// src/BaseSymbol.ts
var BaseSymbol = (_parent = /*#__PURE__*/new WeakMap(), (_Class = class BaseSymbol {
  constructor(name = "") {
    /** The name of the symbol or empty if anonymous. */
    _defineProperty(this, "name", void 0);
    /** Reference to the parse tree which contains this symbol. */
    _defineProperty(this, "context", void 0);
    _defineProperty(this, "modifiers", /* @__PURE__ */new Set());
    _defineProperty(this, "visibility", 0 /* Unknown */);
    _classPrivateFieldInitSpec(this, _parent, void 0);
    this.name = name;
  }
  get parent() {
    return _classPrivateFieldGet(_parent, this);
  }
  get firstSibling() {
    var _classPrivateFieldGet2;
    if (!_classPrivateFieldGet(_parent, this)) {
      return void 0;
    }
    return (_classPrivateFieldGet2 = _classPrivateFieldGet(_parent, this)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.firstChild;
  }
  /**
   * @returns the symbol before this symbol in its scope.
   */
  get previousSibling() {
    if (!_classPrivateFieldGet(_parent, this)) {
      return void 0;
    }
    if (!_classPrivateFieldGet(_parent, this)) {
      return this;
    }
    return _classPrivateFieldGet(_parent, this).previousSiblingOf(this);
  }
  /**
   * @returns the symbol following this symbol in its scope.
   */
  get nextSibling() {
    var _classPrivateFieldGet3;
    return (_classPrivateFieldGet3 = _classPrivateFieldGet(_parent, this)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.nextSiblingOf(this);
  }
  get lastSibling() {
    var _classPrivateFieldGet4;
    return (_classPrivateFieldGet4 = _classPrivateFieldGet(_parent, this)) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.lastChild;
  }
  /**
   * @returns the next symbol in definition order, regardless of the scope.
   */
  get next() {
    var _classPrivateFieldGet5;
    return (_classPrivateFieldGet5 = _classPrivateFieldGet(_parent, this)) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.nextOf(this);
  }
  /**
   * @returns the outermost entity (below the symbol table) that holds us.
   */
  get root() {
    let run = _classPrivateFieldGet(_parent, this);
    while (run) {
      if (!run.parent || this.isSymbolTable(run.parent)) {
        return run;
      }
      run = run.parent;
    }
    return run;
  }
  /**
   * @returns the symbol table we belong too or undefined if we are not yet assigned.
   */
  get symbolTable() {
    if (this.isSymbolTable(this)) {
      return this;
    }
    let run = _classPrivateFieldGet(_parent, this);
    while (run) {
      if (this.isSymbolTable(run)) {
        return run;
      }
      run = run.parent;
    }
    return void 0;
  }
  /**
   * @returns the list of symbols from this one up to root.
   */
  get symbolPath() {
    const result = [];
    let run = this;
    while (run) {
      result.push(run);
      if (!run.parent) {
        break;
      }
      run = run.parent;
    }
    return result;
  }
  /**
   * This is rather an internal method and should rarely be used by external code.
   *
   * @param parent The new parent to use.
   */
  setParent(parent) {
    _classPrivateFieldSet(_parent, this, parent);
  }
  /**
   * Remove this symbol from its parent scope.
   */
  removeFromParent() {
    var _classPrivateFieldGet6;
    (_classPrivateFieldGet6 = _classPrivateFieldGet(_parent, this)) === null || _classPrivateFieldGet6 === void 0 || _classPrivateFieldGet6.removeSymbol(this);
    _classPrivateFieldSet(_parent, this, void 0);
  }
  /**
   * Asynchronously looks up a symbol with a given name, in a bottom-up manner.
   *
   * @param name The name of the symbol to find.
   * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
   *                  (recursively).
   *
   * @returns A promise resolving to the first symbol with a given name, in the order of appearance in this scope
   *          or any of the parent scopes (conditionally).
   */
  async resolve(name, localOnly = false) {
    var _classPrivateFieldGet7;
    return (_classPrivateFieldGet7 = _classPrivateFieldGet(_parent, this)) === null || _classPrivateFieldGet7 === void 0 ? void 0 : _classPrivateFieldGet7.resolve(name, localOnly);
  }
  /**
   * Synchronously looks up a symbol with a given name, in a bottom-up manner.
   *
   * @param name The name of the symbol to find.
   * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
   *                  (recursively).
   *
   * @returns the first symbol with a given name, in the order of appearance in this scope
   *          or any of the parent scopes (conditionally).
   */
  resolveSync(name, localOnly = false) {
    var _classPrivateFieldGet8;
    return (_classPrivateFieldGet8 = _classPrivateFieldGet(_parent, this)) === null || _classPrivateFieldGet8 === void 0 ? void 0 : _classPrivateFieldGet8.resolveSync(name, localOnly);
  }
  /**
   * @param t The type of objects to return.
   *
   * @returns the next enclosing parent of the given type.
   */
  getParentOfType(t) {
    let run = _classPrivateFieldGet(_parent, this);
    while (run) {
      if (run instanceof t) {
        return run;
      }
      run = run.parent;
    }
    return void 0;
  }
  /**
   * Creates a qualified identifier from this symbol and its parent.
   * If `full` is true then all parents are traversed in addition to this instance.
   *
   * @param separator The string to be used between the parts.
   * @param full A flag indicating if the full path is to be returned.
   * @param includeAnonymous Use a special string for empty scope names.
   *
   * @returns the constructed qualified identifier.
   */
  qualifiedName(separator = ".", full = false, includeAnonymous = false) {
    if (!includeAnonymous && this.name.length === 0) {
      return "";
    }
    let result = this.name.length === 0 ? "<anonymous>" : this.name;
    let run = _classPrivateFieldGet(_parent, this);
    while (run) {
      if (includeAnonymous || run.name.length > 0) {
        result = (run.name.length === 0 ? "<anonymous>" : run.name) + separator + result;
      }
      if (!full || !run.parent) {
        break;
      }
      run = run.parent;
    }
    return result;
  }
  /**
   * Type guard to check for ISymbolTable.
   *
   * @param candidate The object to check.
   *
   * @returns true if the object is a symbol table.
   */
  isSymbolTable(candidate) {
    return candidate.info !== void 0;
  }
}, __name(_Class, "BaseSymbol"), _Class));

// src/ArrayType.ts
var ArrayType = (_Class2 = class ArrayType extends BaseSymbol {
  constructor(name, referenceKind, elemType, size = 0) {
    super(name);
    _defineProperty(this, "elementType", void 0);
    _defineProperty(this, "size", void 0);
    // > 0 if fixed length.
    _defineProperty(this, "referenceKind", void 0);
    this.referenceKind = referenceKind;
    this.elementType = elemType;
    this.size = size;
  }
  get baseTypes() {
    return [];
  }
  get kind() {
    return 9 /* Array */;
  }
  get reference() {
    return this.referenceKind;
  }
}, __name(_Class2, "ArrayType"), _Class2);

// src/DuplicateSymbolError.ts
var DuplicateSymbolError = (_Class3 = class DuplicateSymbolError extends Error {}, __name(_Class3, "DuplicateSymbolError"), _Class3);

// src/ScopedSymbol.ts
var ScopedSymbol = (_children = /*#__PURE__*/new WeakMap(), _names = /*#__PURE__*/new WeakMap(), (_ScopedSymbol2 = class _ScopedSymbol extends BaseSymbol {
  constructor(name = "") {
    super(name);
    /** All child symbols in definition order. */
    _classPrivateFieldInitSpec(this, _children, []);
    // All used child names. Used to detect name collisions.
    _classPrivateFieldInitSpec(this, _names, /* @__PURE__ */new Map());
  }
  /**
   * @returns A promise resolving to all direct child symbols with a scope (e.g. classes in a module).
   */
  get directScopes() {
    return this.getSymbolsOfType(_ScopedSymbol);
  }
  get children() {
    return _classPrivateFieldGet(_children, this);
  }
  get firstChild() {
    if (_classPrivateFieldGet(_children, this).length > 0) {
      return _classPrivateFieldGet(_children, this)[0];
    }
    return void 0;
  }
  get lastChild() {
    if (_classPrivateFieldGet(_children, this).length > 0) {
      return _classPrivateFieldGet(_children, this)[_classPrivateFieldGet(_children, this).length - 1];
    }
    return void 0;
  }
  clear() {
    _classPrivateFieldSet(_children, this, []);
    _classPrivateFieldGet(_names, this).clear();
  }
  /**
   * Adds the given symbol to this scope. If it belongs already to a different scope
   * it is removed from that before adding it here.
   *
   * @param symbol The symbol to add as a child.
   */
  addSymbol(symbol) {
    symbol.removeFromParent();
    const symbolTable = this.symbolTable;
    const count = _classPrivateFieldGet(_names, this).get(symbol.name);
    if (!symbolTable || !symbolTable.options.allowDuplicateSymbols) {
      if (count !== void 0) {
        var _symbol$name;
        throw new DuplicateSymbolError("Attempt to add duplicate symbol '" + ((_symbol$name = symbol.name) !== null && _symbol$name !== void 0 ? _symbol$name : "<anonymous>") + "'");
      } else {
        _classPrivateFieldGet(_names, this).set(symbol.name, 1);
      }
      const index = _classPrivateFieldGet(_children, this).indexOf(symbol);
      if (index > -1) {
        var _symbol$name2;
        throw new DuplicateSymbolError("Attempt to add duplicate symbol '" + ((_symbol$name2 = symbol.name) !== null && _symbol$name2 !== void 0 ? _symbol$name2 : "<anonymous>") + "'");
      }
    } else {
      _classPrivateFieldGet(_names, this).set(symbol.name, count === void 0 ? 1 : count + 1);
    }
    _classPrivateFieldGet(_children, this).push(symbol);
    symbol.setParent(this);
  }
  removeSymbol(symbol) {
    const index = _classPrivateFieldGet(_children, this).indexOf(symbol);
    if (index > -1) {
      _classPrivateFieldGet(_children, this).splice(index, 1);
      symbol.setParent(void 0);
      const count = _classPrivateFieldGet(_names, this).get(symbol.name);
      if (count !== void 0) {
        if (count === 1) {
          _classPrivateFieldGet(_names, this).delete(symbol.name);
        } else {
          _classPrivateFieldGet(_names, this).set(symbol.name, count - 1);
        }
      }
    }
  }
  /**
   * Asynchronously retrieves child symbols of a given type from this symbol.
   *
   * @param t The type of of the objects to return.
   *
   * @returns A promise resolving to all (nested) children of the given type.
   */
  async getNestedSymbolsOfType(t) {
    const result = [];
    const childPromises = [];
    _classPrivateFieldGet(_children, this).forEach(child => {
      if (child instanceof t) {
        result.push(child);
      }
      if (child instanceof _ScopedSymbol) {
        childPromises.push(child.getNestedSymbolsOfType(t));
      }
    });
    const childSymbols = await Promise.all(childPromises);
    childSymbols.forEach(entry => {
      result.push(...entry);
    });
    return result;
  }
  /**
   * Synchronously retrieves child symbols of a given type from this symbol.
   *
   * @param t The type of of the objects to return.
   *
   * @returns A list of all (nested) children of the given type.
   */
  getNestedSymbolsOfTypeSync(t) {
    const result = [];
    _classPrivateFieldGet(_children, this).forEach(child => {
      if (child instanceof t) {
        result.push(child);
      }
      if (child instanceof _ScopedSymbol) {
        result.push(...child.getNestedSymbolsOfTypeSync(t));
      }
    });
    return result;
  }
  /**
   * @param name If given only returns symbols with that name.
   *
   * @returns A promise resolving to symbols from this and all nested scopes in the order they were defined.
   */
  async getAllNestedSymbols(name) {
    const result = [];
    const childPromises = [];
    _classPrivateFieldGet(_children, this).forEach(child => {
      if (!name || child.name === name) {
        result.push(child);
      }
      if (child instanceof _ScopedSymbol) {
        childPromises.push(child.getAllNestedSymbols(name));
      }
    });
    const childSymbols = await Promise.all(childPromises);
    childSymbols.forEach(entry => {
      result.push(...entry);
    });
    return result;
  }
  /**
   * @param name If given only returns symbols with that name.
   *
   * @returns A list of all symbols from this and all nested scopes in the order they were defined.
   */
  getAllNestedSymbolsSync(name) {
    const result = [];
    _classPrivateFieldGet(_children, this).forEach(child => {
      if (!name || child.name === name) {
        result.push(child);
      }
      if (child instanceof _ScopedSymbol) {
        result.push(...child.getAllNestedSymbolsSync(name));
      }
    });
    return result;
  }
  /**
   * @param t The type of of the objects to return.
   *
   * @returns A promise resolving to direct children of a given type.
   */
  getSymbolsOfType(t) {
    return new Promise(resolve => {
      const result = [];
      _classPrivateFieldGet(_children, this).forEach(child => {
        if (child instanceof t) {
          result.push(child);
        }
      });
      resolve(result);
    });
  }
  /**
   * TODO: add optional position dependency (only symbols defined before a given caret pos are viable).
   *
   * @param t The type of the objects to return.
   * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
   *                  (recursively).
   *
   * @returns A promise resolving to all symbols of the the given type, accessible from this scope (if localOnly is
   *          false), within the owning symbol table.
   */
  async getAllSymbols(t, localOnly = false) {
    const result = [];
    for (const child of _classPrivateFieldGet(_children, this)) {
      if (child instanceof t) {
        result.push(child);
      }
      if (this.isNamespace(child)) {
        const childSymbols = await child.getAllSymbols(t, true);
        result.push(...childSymbols);
      }
    }
    if (!localOnly) {
      if (this.parent) {
        const childSymbols = await this.getAllSymbols(t, true);
        result.push(...childSymbols);
      }
    }
    return result;
  }
  /**
   * TODO: add optional position dependency (only symbols defined before a given caret pos are viable).
   *
   * @param t The type of the objects to return.
   * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
   *                  (recursively).
   *
   * @returns A list with all symbols of the the given type, accessible from this scope (if localOnly is
   *          false), within the owning symbol table.
   */
  getAllSymbolsSync(t, localOnly = false) {
    const result = [];
    for (const child of _classPrivateFieldGet(_children, this)) {
      if (child instanceof t) {
        result.push(child);
      }
      if (this.isNamespace(child)) {
        const childSymbols = child.getAllSymbolsSync(t, true);
        result.push(...childSymbols);
      }
    }
    if (!localOnly) {
      if (this.parent) {
        const childSymbols = this.getAllSymbolsSync(t, true);
        result.push(...childSymbols);
      }
    }
    return result;
  }
  /**
   * @param name The name of the symbol to resolve.
   * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
   *                  (recursively).
   *
   * @returns A promise resolving to the first symbol with a given name, in the order of appearance in this scope
   *          or any of the parent scopes (conditionally).
   */
  async resolve(name, localOnly = false) {
    return new Promise(resolve => {
      for (const child of _classPrivateFieldGet(_children, this)) {
        if (child.name === name) {
          resolve(child);
          return;
        }
      }
      if (!localOnly) {
        if (this.parent) {
          resolve(this.parent.resolve(name, false));
          return;
        }
      }
      resolve(void 0);
    });
  }
  /**
   * @param name The name of the symbol to resolve.
   * @param localOnly If true only child symbols are returned, otherwise also symbols from the parent of this symbol
   *                  (recursively).
   *
   * @returns the first symbol with a given name, in the order of appearance in this scope
   *          or any of the parent scopes (conditionally).
   */
  resolveSync(name, localOnly = false) {
    for (const child of _classPrivateFieldGet(_children, this)) {
      if (child.name === name) {
        return child;
      }
    }
    if (!localOnly) {
      if (this.parent) {
        return this.parent.resolveSync(name, false);
      }
    }
    return void 0;
  }
  /**
   * @param path The path consisting of symbol names separator by `separator`.
   * @param separator The character to separate path segments.
   *
   * @returns the symbol located at the given path through the symbol hierarchy.
   */
  symbolFromPath(path, separator = ".") {
    const elements = path.split(separator);
    let index = 0;
    if (elements[0] === this.name || elements[0].length === 0) {
      ++index;
    }
    let result = this;
    while (index < elements.length) {
      if (!(result instanceof _ScopedSymbol)) {
        return void 0;
      }
      const child = result.children.find(candidate => {
        return candidate.name === elements[index];
      });
      if (!child) {
        return void 0;
      }
      result = child;
      ++index;
    }
    return result;
  }
  /**
   * @param child The child to search for.
   *
   * @returns the index of the given child symbol in the child list or -1 if it couldn't be found.
   */
  indexOfChild(child) {
    return _classPrivateFieldGet(_children, this).findIndex(value => {
      return value === child;
    });
  }
  /**
   * @param child The reference node.
   *
   * @returns the sibling symbol after the given child symbol, if one exists.
   */
  nextSiblingOf(child) {
    const index = this.indexOfChild(child);
    if (index === -1 || index >= _classPrivateFieldGet(_children, this).length - 1) {
      return void 0;
    }
    return _classPrivateFieldGet(_children, this)[index + 1];
  }
  /**
   * @param child The reference node.
   *
   * @returns the sibling symbol before the given child symbol, if one exists.
   */
  previousSiblingOf(child) {
    const index = this.indexOfChild(child);
    if (index < 1) {
      return void 0;
    }
    return _classPrivateFieldGet(_children, this)[index - 1];
  }
  /**
   * @param child The reference node.
   *
   * @returns the next symbol in definition order, regardless of the scope.
   */
  nextOf(child) {
    if (!child.parent) {
      return void 0;
    }
    if (child.parent !== this) {
      return child.parent.nextOf(child);
    }
    if (child instanceof _ScopedSymbol && child.children.length > 0) {
      return child.children[0];
    }
    const sibling = this.nextSiblingOf(child);
    if (sibling) {
      return sibling;
    }
    return this.parent.nextOf(this);
  }
  isNamespace(candidate) {
    return candidate.inline !== void 0 && candidate.attributes !== void 0;
  }
}, __name(_ScopedSymbol2, "ScopedSymbol"), _ScopedSymbol2));

// src/BlockSymbol.ts
var BlockSymbol = (_Class4 = class BlockSymbol extends ScopedSymbol {}, __name(_Class4, "BlockSymbol"), _Class4);

// src/TypedSymbol.ts
var TypedSymbol = (_Class5 = class TypedSymbol extends BaseSymbol {
  constructor(name, type) {
    super(name);
    _defineProperty(this, "type", void 0);
    this.type = type;
  }
}, __name(_Class5, "TypedSymbol"), _Class5);

// src/VariableSymbol.ts
var VariableSymbol = (_Class6 = class VariableSymbol extends TypedSymbol {
  constructor(name, value, type) {
    super(name, type);
    _defineProperty(this, "value", void 0);
    this.value = value;
  }
}, __name(_Class6, "VariableSymbol"), _Class6);

// src/FieldSymbol.ts
var FieldSymbol = (_Class7 = class FieldSymbol extends VariableSymbol {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "setter", void 0);
    _defineProperty(this, "getter", void 0);
  }
}, __name(_Class7, "FieldSymbol"), _Class7);

// src/ParameterSymbol.ts
var ParameterSymbol = (_Class8 = class ParameterSymbol extends VariableSymbol {}, __name(_Class8, "ParameterSymbol"), _Class8);

// src/RoutineSymbol.ts
var RoutineSymbol = (_Class9 = class RoutineSymbol extends ScopedSymbol {
  // Can be null if result is void.
  constructor(name, returnType) {
    super(name);
    _defineProperty(this, "returnType", void 0);
    this.returnType = returnType;
  }
  getVariables(_localOnly = true) {
    return this.getSymbolsOfType(VariableSymbol);
  }
  getParameters(_localOnly = true) {
    return this.getSymbolsOfType(ParameterSymbol);
  }
}, __name(_Class9, "RoutineSymbol"), _Class9);

// src/MethodSymbol.ts
var MethodFlags = /* @__PURE__ */(MethodFlags2 => {
  MethodFlags2[MethodFlags2["None"] = 0] = "None";
  MethodFlags2[MethodFlags2["Virtual"] = 1] = "Virtual";
  MethodFlags2[MethodFlags2["Const"] = 2] = "Const";
  MethodFlags2[MethodFlags2["Overwritten"] = 4] = "Overwritten";
  MethodFlags2[MethodFlags2["SetterOrGetter"] = 8] = "SetterOrGetter";
  MethodFlags2[MethodFlags2["Explicit"] = 16] = "Explicit";
  return MethodFlags2;
})(MethodFlags || {});
var MethodSymbol = (_Class10 = class MethodSymbol extends RoutineSymbol {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "methodFlags", 0 /* None */);
  }
}, __name(_Class10, "MethodSymbol"), _Class10);

// src/ClassSymbol.ts
var ClassSymbol = (_Class11 = class ClassSymbol extends ScopedSymbol {
  constructor(name, ext, impl) {
    super(name);
    _defineProperty(this, "isStruct", false);
    _defineProperty(this, "reference", 0 /* Irrelevant */);
    /** Usually only one member, unless the language supports multiple inheritance (like C++). */
    // eslint-disable-next-line no-use-before-define
    _defineProperty(this, "extends", void 0);
    /** Typescript allows a class to implement a class, not only interfaces. */
    // eslint-disable-next-line no-use-before-define
    _defineProperty(this, "implements", void 0);
    this.extends = ext;
    this.implements = impl;
  }
  get baseTypes() {
    return this.extends;
  }
  get kind() {
    return 7 /* Class */;
  }
  /**
   * @param _includeInherited Not used.
   *
   * @returns a list of all methods.
   */
  getMethods(_includeInherited = false) {
    return this.getSymbolsOfType(MethodSymbol);
  }
  /**
   * @param _includeInherited Not used.
   *
   * @returns all fields.
   */
  getFields(_includeInherited = false) {
    return this.getSymbolsOfType(FieldSymbol);
  }
}, __name(_Class11, "ClassSymbol"), _Class11);

// src/FundamentalType.ts
var FundamentalType = (_FundamentalType2 = class _FundamentalType {
  constructor(name, typeKind = 0 /* Unknown */, referenceKind = 0 /* Irrelevant */) {
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "typeKind", void 0);
    _defineProperty(this, "referenceKind", void 0);
    this.name = name;
    this.typeKind = typeKind;
    this.referenceKind = referenceKind;
  }
  get baseTypes() {
    return [];
  }
  get kind() {
    return this.typeKind;
  }
  get reference() {
    return this.referenceKind;
  }
}, __name(_FundamentalType2, "FundamentalType"), _defineProperty(_FundamentalType2, "integerType", new _FundamentalType2("int", 1 /* Integer */, 3 /* Instance */)), _defineProperty(_FundamentalType2, "floatType", new _FundamentalType2("float", 2 /* Float */, 3 /* Instance */)), _defineProperty(_FundamentalType2, "stringType", new _FundamentalType2("string", 4 /* String */, 3 /* Instance */)), _defineProperty(_FundamentalType2, "boolType", new _FundamentalType2("bool", 6 /* Boolean */, 3 /* Instance */)), _FundamentalType2);

// src/InterfaceSymbol.ts
var InterfaceSymbol = (_Class12 = class InterfaceSymbol extends ScopedSymbol {
  constructor(name, ext) {
    super(name);
    _defineProperty(this, "reference", 0 /* Irrelevant */);
    /** Typescript allows an interface to extend a class, not only interfaces. */
    // eslint-disable-next-line no-use-before-define
    _defineProperty(this, "extends", void 0);
    this.extends = ext;
  }
  get baseTypes() {
    return this.extends;
  }
  get kind() {
    return 8 /* Interface */;
  }
  /**
   * @param _includeInherited not used
   *
   * @returns a list of all methods.
   */
  getMethods(_includeInherited = false) {
    return this.getSymbolsOfType(MethodSymbol);
  }
  /**
   * @param _includeInherited Not used.
   *
   * @returns all fields.
   */
  getFields(_includeInherited = false) {
    return this.getSymbolsOfType(FieldSymbol);
  }
}, __name(_Class12, "InterfaceSymbol"), _Class12);

// src/LiteralSymbol.ts
var LiteralSymbol = (_Class13 = class LiteralSymbol extends TypedSymbol {
  constructor(name, value, type) {
    super(name, type);
    _defineProperty(this, "value", void 0);
    this.value = value;
  }
}, __name(_Class13, "LiteralSymbol"), _Class13);

// src/NamespaceSymbol.ts
var NamespaceSymbol = (_Class14 = class NamespaceSymbol extends ScopedSymbol {
  constructor(name, inline = false, attributes = []) {
    super(name);
    _defineProperty(this, "inline", void 0);
    _defineProperty(this, "attributes", void 0);
    this.inline = inline;
    this.attributes = attributes;
  }
}, __name(_Class14, "NamespaceSymbol"), _Class14);

// src/TypeAlias.ts
var TypeAlias = (_Class15 = class TypeAlias extends BaseSymbol {
  constructor(name, target) {
    super(name);
    _defineProperty(this, "targetType", void 0);
    this.targetType = target;
  }
  get baseTypes() {
    return [this.targetType];
  }
  get kind() {
    return 12 /* Alias */;
  }
  get reference() {
    return 0 /* Irrelevant */;
  }
}, __name(_Class15, "TypeAlias"), _Class15);

// src/CodeCompletionCore.ts
import { ATNState, IntervalSet, ParserRuleContext, Token, TransitionType, ATNStateType } from "antlr4ng";

// src/utils.ts
var longestCommonPrefix = /* @__PURE__ */__name((arr1, arr2) => {
  if (!arr1 || !arr2) {
    return [];
  }
  let i;
  for (i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    if (arr1[i] !== arr2[i]) {
      break;
    }
  }
  return arr1.slice(0, i);
}, "longestCommonPrefix");

// src/CodeCompletionCore.ts
var CandidatesCollection = (_Class16 = class CandidatesCollection {
  constructor() {
    _defineProperty(this, "tokens", /* @__PURE__ */new Map());
    _defineProperty(this, "rules", /* @__PURE__ */new Map());
  }
}, __name(_Class16, "CandidatesCollection"), _Class16);
var FollowSetWithPath = (_Class17 = class FollowSetWithPath {
  constructor() {
    _defineProperty(this, "intervals", void 0);
    _defineProperty(this, "path", []);
    _defineProperty(this, "following", []);
  }
}, __name(_Class17, "FollowSetWithPath"), _Class17);
var CodeCompletionCore = (_CodeCompletionCore2 = class _CodeCompletionCore {
  constructor(parser) {
    // Debugging options. Print human readable ATN state and other info.
    /** Not dependent on showDebugOutput. Prints the collected rules + tokens to terminal. */
    _defineProperty(this, "showResult", false);
    /** Enables printing ATN state info to terminal. */
    _defineProperty(this, "showDebugOutput", false);
    /** Only relevant when showDebugOutput is true. Enables transition printing for a state. */
    _defineProperty(this, "debugOutputWithTransitions", false);
    /** Also depends on showDebugOutput. Enables call stack printing for each rule recursion. */
    _defineProperty(this, "showRuleStack", false);
    /**
     * Tailoring of the result:
     * Tokens which should not appear in the candidates set.
     */
    _defineProperty(this, "ignoredTokens", void 0);
    /**
     * Rules which replace any candidate token they contain.
     * This allows to return descriptive rules (e.g. className, instead of ID/identifier).
     */
    _defineProperty(this, "preferredRules", void 0);
    /**
     * Specify if preferred rules should translated top-down (higher index rule returns first) or
     * bottom-up (lower index rule returns first).
     */
    _defineProperty(this, "translateRulesTopDown", false);
    _defineProperty(this, "parser", void 0);
    _defineProperty(this, "atn", void 0);
    _defineProperty(this, "vocabulary", void 0);
    _defineProperty(this, "ruleNames", void 0);
    _defineProperty(this, "tokens", void 0);
    _defineProperty(this, "precedenceStack", void 0);
    _defineProperty(this, "tokenStartIndex", 0);
    _defineProperty(this, "statesProcessed", 0);
    /**
     * A mapping of rule index + token stream position to end token positions.
     * A rule which has been visited before with the same input position will always produce the same output positions.
     */
    _defineProperty(this, "shortcutMap", /* @__PURE__ */new Map());
    /** The collected candidates (rules and tokens). */
    _defineProperty(this, "candidates", new CandidatesCollection());
    this.parser = parser;
    this.atn = parser.atn;
    this.vocabulary = parser.vocabulary;
    this.ruleNames = parser.ruleNames;
    this.ignoredTokens = /* @__PURE__ */new Set();
    this.preferredRules = /* @__PURE__ */new Set();
  }
  /**
   * This is the main entry point. The caret token index specifies the token stream index for the token which
   * currently covers the caret (or any other position you want to get code completion candidates for).
   * Optionally you can pass in a parser rule context which limits the ATN walk to only that or called rules.
   * This can significantly speed up the retrieval process but might miss some candidates (if they are outside of
   * the given context).
   *
   * @param caretTokenIndex The index of the token at the caret position.
   * @param context An option parser rule context to limit the search space.
   * @returns The collection of completion candidates.
   */
  collectCandidates(caretTokenIndex, context) {
    this.shortcutMap.clear();
    this.candidates.rules.clear();
    this.candidates.tokens.clear();
    this.statesProcessed = 0;
    this.precedenceStack = [];
    this.tokenStartIndex = context !== null && context !== void 0 && context.start ? context.start.tokenIndex : 0;
    const tokenStream = this.parser.tokenStream;
    this.tokens = [];
    let offset = this.tokenStartIndex;
    while (true) {
      const token = tokenStream.get(offset++);
      if (!token) {
        break;
      }
      if (token.channel === Token.DEFAULT_CHANNEL) {
        this.tokens.push(token);
        if (token.tokenIndex >= caretTokenIndex || token.type === Token.EOF) {
          break;
        }
      }
      if (token.type === Token.EOF) {
        break;
      }
    }
    const callStack = [];
    const startRule = context ? context.ruleIndex : 0;
    this.processRule(this.atn.ruleToStartState[startRule], 0, callStack, 0, 0);
    if (this.showResult) {
      console.log(`States processed: ${this.statesProcessed}`);
      console.log("\n\nCollected rules:\n");
      for (const rule of this.candidates.rules) {
        let path = "";
        for (const token of rule[1].ruleList) {
          path += this.ruleNames[token] + " ";
        }
        console.log(this.ruleNames[rule[0]] + ", path: ", path);
      }
      const sortedTokens = /* @__PURE__ */new Set();
      for (const token of this.candidates.tokens) {
        var _this$vocabulary$getD;
        let value = (_this$vocabulary$getD = this.vocabulary.getDisplayName(token[0])) !== null && _this$vocabulary$getD !== void 0 ? _this$vocabulary$getD : "";
        for (const following of token[1]) {
          value += " " + this.vocabulary.getDisplayName(following);
        }
        sortedTokens.add(value);
      }
      console.log("\n\nCollected tokens:\n");
      for (const symbol of sortedTokens) {
        console.log(symbol);
      }
      console.log("\n\n");
    }
    return this.candidates;
  }
  /**
   * Checks if the predicate associated with the given transition evaluates to true.
   *
   * @param transition The transition to check.
   * @returns the evaluation result of the predicate.
   */
  checkPredicate(transition) {
    return transition.getPredicate().evaluate(this.parser, ParserRuleContext.EMPTY);
  }
  /**
   * Walks the rule chain upwards or downwards (depending on translateRulesTopDown) to see if that matches any of the
   * preferred rules. If found, that rule is added to the collection candidates and true is returned.
   *
   * @param ruleWithStartTokenList The list to convert.
   * @returns true if any of the stack entries was converted.
   */
  translateStackToRuleIndex(ruleWithStartTokenList) {
    if (this.preferredRules.size === 0) {
      return false;
    }
    if (this.translateRulesTopDown) {
      for (let i = ruleWithStartTokenList.length - 1; i >= 0; i--) {
        if (this.translateToRuleIndex(i, ruleWithStartTokenList)) {
          return true;
        }
      }
    } else {
      for (let i = 0; i < ruleWithStartTokenList.length; i++) {
        if (this.translateToRuleIndex(i, ruleWithStartTokenList)) {
          return true;
        }
      }
    }
    return false;
  }
  /**
   * Given the index of a rule from a rule chain, check if that matches any of the preferred rules. If it matches,
   * that rule is added to the collection candidates and true is returned.
   *
   * @param i The rule index.
   * @param ruleWithStartTokenList The list to check.
   * @returns true if the specified rule is in the list of preferred rules.
   */
  translateToRuleIndex(i, ruleWithStartTokenList) {
    const {
      ruleIndex,
      startTokenIndex
    } = ruleWithStartTokenList[i];
    if (this.preferredRules.has(ruleIndex)) {
      const path = ruleWithStartTokenList.slice(0, i).map(({
        ruleIndex: candidate
      }) => {
        return candidate;
      });
      let addNew = true;
      for (const rule of this.candidates.rules) {
        if (rule[0] !== ruleIndex || rule[1].ruleList.length !== path.length) {
          continue;
        }
        if (path.every((v, j) => {
          return v === rule[1].ruleList[j];
        })) {
          addNew = false;
          break;
        }
      }
      if (addNew) {
        this.candidates.rules.set(ruleIndex, {
          startTokenIndex,
          ruleList: path
        });
        if (this.showDebugOutput) {
          console.log("=====> collected: ", this.ruleNames[ruleIndex]);
        }
      }
      return true;
    }
    return false;
  }
  /**
   * This method follows the given transition and collects all symbols within the same rule that directly follow it
   * without intermediate transitions to other rules and only if there is a single symbol for a transition.
   *
   * @param transition The transition from which to start.
   * @returns A list of toke types.
   */
  getFollowingTokens(transition) {
    const result = [];
    const pipeline = [transition.target];
    while (pipeline.length > 0) {
      const state = pipeline.pop();
      if (state) {
        state.transitions.forEach(outgoing => {
          if (outgoing.serializationType === TransitionType.ATOM) {
            if (!outgoing.isEpsilon) {
              const list = outgoing.label.toArray();
              if (list.length === 1 && !this.ignoredTokens.has(list[0])) {
                result.push(list[0]);
                pipeline.push(outgoing.target);
              }
            } else {
              pipeline.push(outgoing.target);
            }
          }
        });
      }
    }
    return result;
  }
  /**
   * Entry point for the recursive follow set collection function.
   *
   * @param start Start state.
   * @param stop Stop state.
   * @returns Follow sets.
   */
  determineFollowSets(start, stop) {
    const sets = [];
    const stateStack = [];
    const ruleStack = [];
    const isExhaustive = this.collectFollowSets(start, stop, sets, stateStack, ruleStack);
    const combined = new IntervalSet();
    for (const set of sets) {
      combined.addSet(set.intervals);
    }
    return {
      sets,
      isExhaustive,
      combined
    };
  }
  /**
   * Collects possible tokens which could be matched following the given ATN state. This is essentially the same
   * algorithm as used in the LL1Analyzer class, but here we consider predicates also and use no parser rule context.
   *
   * @param s The state to continue from.
   * @param stopState The state which ends the collection routine.
   * @param followSets A pass through parameter to add found sets to.
   * @param stateStack A stack to avoid endless recursions.
   * @param ruleStack The current rule stack.
   * @returns true if the follow sets is exhaustive, i.e. we terminated before the rule end was reached, so no
   * subsequent rules could add tokens
   */
  collectFollowSets(s, stopState, followSets, stateStack, ruleStack) {
    if (stateStack.find(x => {
      return x === s;
    })) {
      return true;
    }
    stateStack.push(s);
    if (s === stopState || s.stateType === ATNStateType.RULE_STOP) {
      stateStack.pop();
      return false;
    }
    let isExhaustive = true;
    for (const transition of s.transitions) {
      if (transition.serializationType === TransitionType.RULE) {
        const ruleTransition = transition;
        if (ruleStack.indexOf(ruleTransition.target.ruleIndex) !== -1) {
          continue;
        }
        ruleStack.push(ruleTransition.target.ruleIndex);
        const ruleFollowSetsIsExhaustive = this.collectFollowSets(transition.target, stopState, followSets, stateStack, ruleStack);
        ruleStack.pop();
        if (!ruleFollowSetsIsExhaustive) {
          const nextStateFollowSetsIsExhaustive = this.collectFollowSets(ruleTransition.followState, stopState, followSets, stateStack, ruleStack);
          isExhaustive && (isExhaustive = nextStateFollowSetsIsExhaustive);
        }
      } else if (transition.serializationType === TransitionType.PREDICATE) {
        if (this.checkPredicate(transition)) {
          const nextStateFollowSetsIsExhaustive = this.collectFollowSets(transition.target, stopState, followSets, stateStack, ruleStack);
          isExhaustive && (isExhaustive = nextStateFollowSetsIsExhaustive);
        }
      } else if (transition.isEpsilon) {
        const nextStateFollowSetsIsExhaustive = this.collectFollowSets(transition.target, stopState, followSets, stateStack, ruleStack);
        isExhaustive && (isExhaustive = nextStateFollowSetsIsExhaustive);
      } else if (transition.serializationType === TransitionType.WILDCARD) {
        const set = new FollowSetWithPath();
        set.intervals = IntervalSet.of(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
        set.path = ruleStack.slice();
        followSets.push(set);
      } else {
        let label = transition.label;
        if (label && label.length > 0) {
          var _label;
          if (transition.serializationType === TransitionType.NOT_SET) {
            label = label.complement(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
          }
          const set = new FollowSetWithPath();
          set.intervals = (_label = label) !== null && _label !== void 0 ? _label : new IntervalSet();
          set.path = ruleStack.slice();
          set.following = this.getFollowingTokens(transition);
          followSets.push(set);
        }
      }
    }
    stateStack.pop();
    return isExhaustive;
  }
  /**
   * Walks the ATN for a single rule only. It returns the token stream position for each path that could be matched
   * in this rule.
   * The result can be empty in case we hit only non-epsilon transitions that didn't match the current input or if we
   * hit the caret position.
   *
   * @param startState The start state.
   * @param tokenListIndex The token index we are currently at.
   * @param callStack The stack that indicates where in the ATN we are currently.
   * @param precedence The current precedence level.
   * @param indentation A value to determine the current indentation when doing debug prints.
   * @returns the set of token stream indexes (which depend on the ways that had to be taken).
   */
  processRule(startState, tokenListIndex, callStack, precedence, indentation) {
    let positionMap = this.shortcutMap.get(startState.ruleIndex);
    if (!positionMap) {
      positionMap = /* @__PURE__ */new Map();
      this.shortcutMap.set(startState.ruleIndex, positionMap);
    } else {
      if (positionMap.has(tokenListIndex)) {
        if (this.showDebugOutput) {
          console.log("=====> shortcut");
        }
        return positionMap.get(tokenListIndex);
      }
    }
    const result = /* @__PURE__ */new Set();
    let setsPerState = _CodeCompletionCore.followSetsByATN.get(this.parser.constructor.name);
    if (!setsPerState) {
      setsPerState = /* @__PURE__ */new Map();
      _CodeCompletionCore.followSetsByATN.set(this.parser.constructor.name, setsPerState);
    }
    let followSets = setsPerState.get(startState.stateNumber);
    if (!followSets) {
      const stop = this.atn.ruleToStopState[startState.ruleIndex];
      followSets = this.determineFollowSets(startState, stop);
      setsPerState.set(startState.stateNumber, followSets);
    }
    const startTokenIndex = this.tokens[tokenListIndex].tokenIndex;
    callStack.push({
      startTokenIndex,
      ruleIndex: startState.ruleIndex
    });
    if (tokenListIndex >= this.tokens.length - 1) {
      if (this.preferredRules.has(startState.ruleIndex)) {
        this.translateStackToRuleIndex(callStack);
      } else {
        for (const set of followSets.sets) {
          const fullPath = callStack.slice();
          const followSetPath = set.path.map(path => {
            return {
              startTokenIndex,
              ruleIndex: path
            };
          });
          fullPath.push(...followSetPath);
          if (!this.translateStackToRuleIndex(fullPath)) {
            for (const symbol of set.intervals.toArray()) {
              if (!this.ignoredTokens.has(symbol)) {
                if (this.showDebugOutput) {
                  console.log("=====> collected: ", this.vocabulary.getDisplayName(symbol));
                }
                if (!this.candidates.tokens.has(symbol)) {
                  this.candidates.tokens.set(symbol, set.following);
                } else {
                  if (this.candidates.tokens.get(symbol) !== set.following) {
                    this.candidates.tokens.set(symbol, []);
                  }
                }
              }
            }
          }
        }
      }
      if (!followSets.isExhaustive) {
        result.add(tokenListIndex);
      }
      callStack.pop();
      return result;
    } else {
      const currentSymbol = this.tokens[tokenListIndex].type;
      if (followSets.isExhaustive && !followSets.combined.contains(currentSymbol)) {
        callStack.pop();
        return result;
      }
    }
    if (startState.isPrecedenceRule) {
      this.precedenceStack.push(precedence);
    }
    const statePipeline = [];
    let currentEntry;
    statePipeline.push({
      state: startState,
      tokenListIndex
    });
    while (statePipeline.length > 0) {
      currentEntry = statePipeline.pop();
      ++this.statesProcessed;
      const currentSymbol = this.tokens[currentEntry.tokenListIndex].type;
      const atCaret = currentEntry.tokenListIndex >= this.tokens.length - 1;
      if (this.showDebugOutput) {
        this.printDescription(indentation, currentEntry.state, this.generateBaseDescription(currentEntry.state), currentEntry.tokenListIndex);
        if (this.showRuleStack) {
          this.printRuleState(callStack);
        }
      }
      if (currentEntry.state.stateType === ATNStateType.RULE_STOP) {
        result.add(currentEntry.tokenListIndex);
        continue;
      }
      const transitions = currentEntry.state.transitions;
      for (const transition of transitions) {
        switch (transition.serializationType) {
          case TransitionType.RULE:
            {
              const ruleTransition = transition;
              const endStatus = this.processRule(transition.target, currentEntry.tokenListIndex, callStack, ruleTransition.precedence, indentation + 1);
              for (const position of endStatus) {
                statePipeline.push({
                  state: transition.followState,
                  tokenListIndex: position
                });
              }
              break;
            }
          case TransitionType.PREDICATE:
            {
              if (this.checkPredicate(transition)) {
                statePipeline.push({
                  state: transition.target,
                  tokenListIndex: currentEntry.tokenListIndex
                });
              }
              break;
            }
          case TransitionType.PRECEDENCE:
            {
              const predTransition = transition;
              if (predTransition.precedence >= this.precedenceStack[this.precedenceStack.length - 1]) {
                statePipeline.push({
                  state: transition.target,
                  tokenListIndex: currentEntry.tokenListIndex
                });
              }
              break;
            }
          case TransitionType.WILDCARD:
            {
              if (atCaret) {
                if (!this.translateStackToRuleIndex(callStack)) {
                  for (const token of IntervalSet.of(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType).toArray()) {
                    if (!this.ignoredTokens.has(token)) {
                      this.candidates.tokens.set(token, []);
                    }
                  }
                }
              } else {
                statePipeline.push({
                  state: transition.target,
                  tokenListIndex: currentEntry.tokenListIndex + 1
                });
              }
              break;
            }
          default:
            {
              if (transition.isEpsilon) {
                statePipeline.push({
                  state: transition.target,
                  tokenListIndex: currentEntry.tokenListIndex
                });
                continue;
              }
              let set = transition.label;
              if (set && set.length > 0) {
                if (transition.serializationType === TransitionType.NOT_SET) {
                  set = set.complement(Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
                }
                if (atCaret) {
                  if (!this.translateStackToRuleIndex(callStack)) {
                    const list = set.toArray();
                    const hasTokenSequence = list.length === 1;
                    for (const symbol of list) {
                      if (!this.ignoredTokens.has(symbol)) {
                        if (this.showDebugOutput) {
                          console.log("=====> collected: ", this.vocabulary.getDisplayName(symbol));
                        }
                        const followingTokens = hasTokenSequence ? this.getFollowingTokens(transition) : [];
                        if (!this.candidates.tokens.has(symbol)) {
                          this.candidates.tokens.set(symbol, followingTokens);
                        } else {
                          this.candidates.tokens.set(symbol, longestCommonPrefix(followingTokens, this.candidates.tokens.get(symbol)));
                        }
                      }
                    }
                  }
                } else {
                  if (set.contains(currentSymbol)) {
                    if (this.showDebugOutput) {
                      console.log("=====> consumed: ", this.vocabulary.getDisplayName(currentSymbol));
                    }
                    statePipeline.push({
                      state: transition.target,
                      tokenListIndex: currentEntry.tokenListIndex + 1
                    });
                  }
                }
              }
            }
        }
      }
    }
    callStack.pop();
    if (startState.isPrecedenceRule) {
      this.precedenceStack.pop();
    }
    positionMap.set(tokenListIndex, result);
    return result;
  }
  generateBaseDescription(state) {
    const stateValue = state.stateNumber === ATNState.INVALID_STATE_NUMBER ? "Invalid" : state.stateNumber;
    return `[${stateValue} ${_CodeCompletionCore.atnStateTypeMap[state.stateType]}] in ${this.ruleNames[state.ruleIndex]}`;
  }
  printDescription(indentation, state, baseDescription, tokenIndex) {
    const indent = "  ".repeat(indentation);
    let output = indent;
    let transitionDescription = "";
    if (this.debugOutputWithTransitions) {
      for (const transition of state.transitions) {
        let labels = "";
        const symbols = transition.label ? transition.label.toArray() : [];
        if (symbols.length > 2) {
          labels = this.vocabulary.getDisplayName(symbols[0]) + " .. " + this.vocabulary.getDisplayName(symbols[symbols.length - 1]);
        } else {
          for (const symbol of symbols) {
            if (labels.length > 0) {
              labels += ", ";
            }
            labels += this.vocabulary.getDisplayName(symbol);
          }
        }
        if (labels.length === 0) {
          labels = "\u03B5";
        }
        transitionDescription += `
${indent}	(${labels}) [${transition.target.stateNumber} ${_CodeCompletionCore.atnStateTypeMap[transition.target.stateType]}] in ${this.ruleNames[transition.target.ruleIndex]}`;
      }
    }
    if (tokenIndex >= this.tokens.length - 1) {
      output += `<<${this.tokenStartIndex + tokenIndex}>> `;
    } else {
      output += `<${this.tokenStartIndex + tokenIndex}> `;
    }
    console.log(output + "Current state: " + baseDescription + transitionDescription);
  }
  printRuleState(stack) {
    if (stack.length === 0) {
      console.log("<empty stack>");
      return;
    }
    for (const rule of stack) {
      console.log(this.ruleNames[rule.ruleIndex]);
    }
  }
}, __name(_CodeCompletionCore2, "CodeCompletionCore"), _defineProperty(_CodeCompletionCore2, "followSetsByATN", /* @__PURE__ */new Map()), _defineProperty(_CodeCompletionCore2, "atnStateTypeMap", ["invalid", "basic", "rule start", "block start", "plus block start", "star block start", "token start", "rule stop", "block end", "star loop back", "star loop entry", "plus loop back", "loop end"]), _CodeCompletionCore2);

// src/SymbolTable.ts
var SymbolTable = (_Class18 = class SymbolTable extends ScopedSymbol {
  constructor(name, options) {
    super(name);
    /**  Other symbol information available to this instance. */
    _defineProperty(this, "dependencies", /* @__PURE__ */new Set());
    this.options = options;
  }
  get info() {
    return {
      dependencyCount: this.dependencies.size,
      symbolCount: this.children.length
    };
  }
  clear() {
    super.clear();
    this.dependencies.clear();
  }
  addDependencies(...tables) {
    tables.forEach(value => {
      this.dependencies.add(value);
    });
  }
  removeDependency(table) {
    if (this.dependencies.has(table)) {
      this.dependencies.delete(table);
    }
  }
  addNewSymbolOfType(t, parent, ...args) {
    const result = new t(...args);
    if (!parent || parent === this) {
      this.addSymbol(result);
    } else {
      parent.addSymbol(result);
    }
    return result;
  }
  async addNewNamespaceFromPath(parent, path, delimiter = ".") {
    const parts = path.split(delimiter);
    let i = 0;
    let currentParent = parent === void 0 ? this : parent;
    while (i < parts.length - 1) {
      let namespace = await currentParent.resolve(parts[i], true);
      if (namespace === void 0) {
        namespace = this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[i]);
      }
      currentParent = namespace;
      ++i;
    }
    return this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[parts.length - 1]);
  }
  addNewNamespaceFromPathSync(parent, path, delimiter = ".") {
    const parts = path.split(delimiter);
    let i = 0;
    let currentParent = parent === void 0 ? this : parent;
    while (i < parts.length - 1) {
      let namespace = currentParent.resolveSync(parts[i], true);
      if (namespace === void 0) {
        namespace = this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[i]);
      }
      currentParent = namespace;
      ++i;
    }
    return this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[parts.length - 1]);
  }
  async getAllSymbols(t, localOnly = false) {
    const result = await super.getAllSymbols(t, localOnly);
    if (!localOnly) {
      const dependencyResults = await Promise.all([...this.dependencies].map(dependency => {
        return dependency.getAllSymbols(t, localOnly);
      }));
      dependencyResults.forEach(value => {
        result.push(...value);
      });
    }
    return result;
  }
  getAllSymbolsSync(t, localOnly = false) {
    const result = super.getAllSymbolsSync(t, localOnly);
    if (!localOnly) {
      this.dependencies.forEach(dependency => {
        result.push(...dependency.getAllSymbolsSync(t, localOnly));
      });
    }
    return result;
  }
  async symbolWithContext(context) {
    const findRecursive = /* @__PURE__ */__name(symbol => {
      if (symbol.context === context) {
        return symbol;
      }
      if (symbol instanceof ScopedSymbol) {
        for (const child of symbol.children) {
          const result = findRecursive(child);
          if (result) {
            return result;
          }
        }
      }
      return void 0;
    }, "findRecursive");
    let symbols = await this.getAllSymbols(BaseSymbol);
    for (const symbol of symbols) {
      const result = findRecursive(symbol);
      if (result) {
        return result;
      }
    }
    for (const dependency of this.dependencies) {
      symbols = await dependency.getAllSymbols(BaseSymbol);
      for (const symbol of symbols) {
        const result = findRecursive(symbol);
        if (result) {
          return result;
        }
      }
    }
    return void 0;
  }
  symbolWithContextSync(context) {
    const findRecursive = /* @__PURE__ */__name(symbol => {
      if (symbol.context === context) {
        return symbol;
      }
      if (symbol instanceof ScopedSymbol) {
        for (const child of symbol.children) {
          const result = findRecursive(child);
          if (result) {
            return result;
          }
        }
      }
      return void 0;
    }, "findRecursive");
    let symbols = this.getAllSymbolsSync(BaseSymbol);
    for (const symbol of symbols) {
      const result = findRecursive(symbol);
      if (result) {
        return result;
      }
    }
    for (const dependency of this.dependencies) {
      symbols = dependency.getAllSymbolsSync(BaseSymbol);
      for (const symbol of symbols) {
        const result = findRecursive(symbol);
        if (result) {
          return result;
        }
      }
    }
    return void 0;
  }
  async resolve(name, localOnly = false) {
    let result = await super.resolve(name, localOnly);
    if (!result && !localOnly) {
      for (const dependency of this.dependencies) {
        result = await dependency.resolve(name, false);
        if (result) {
          return result;
        }
      }
    }
    return result;
  }
  resolveSync(name, localOnly = false) {
    let result = super.resolveSync(name, localOnly);
    if (!result && !localOnly) {
      for (const dependency of this.dependencies) {
        result = dependency.resolveSync(name, false);
        if (result) {
          return result;
        }
      }
    }
    return result;
  }
}, __name(_Class18, "SymbolTable"), _Class18);
export { ArrayType, BaseSymbol, BlockSymbol, CandidatesCollection, ClassSymbol, CodeCompletionCore, DuplicateSymbolError, FieldSymbol, FundamentalType, InterfaceSymbol, LiteralSymbol, MemberVisibility, MethodFlags, MethodSymbol, Modifier, NamespaceSymbol, ParameterSymbol, ReferenceKind, RoutineSymbol, ScopedSymbol, SymbolTable, TypeAlias, TypeKind, TypedSymbol, VariableSymbol };
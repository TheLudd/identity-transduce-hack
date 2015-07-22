module.exports = Identity;

function Identity(val) {
  if (!(this instanceof Identity)) {
    return new Identity(val);
  }
  this.val = val;
};


Identity.prototype['@@transducer/init'] = function() {
};

Identity.prototype['@@transducer/step'] = function(acc, item) {
  return this.xf['@@transducer/step'](acc, Identity(item));
};

Identity.prototype['@@transducer/result'] = function(result) {
};

Identity.prototype.extract = function() {
  return this.val;
};

Identity.prototype.equals = function(b){
  return b.extract() === this.val;
};

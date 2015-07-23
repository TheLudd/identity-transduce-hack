module.exports = Identity;

function Identity(val) {
  if (!(this instanceof Identity)) {
    return new Identity(val);
  }
  this.val = val;
};


Identity.prototype['@@transducer/init'] = function() {
  return Identity();
};

Identity.prototype['@@transducer/step'] = function(acc, item) {
  return Identity(item);
};

Identity.prototype['@@transducer/result'] = function(result) {
  return result;
};

Identity.prototype['@@iterator'] = function() {
  var didIt = false, that = this;
  return {
    next: function(){
      if(didIt){
        return {done: true};
      }
      didIt = true;
      return {done: false, value: that.extract()};
    }
  };
};

Identity.prototype.extract = function() {
  return this.val;
};

Identity.prototype.equals = function(b){
  return b.extract() === this.val;
};

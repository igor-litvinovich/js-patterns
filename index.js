function abc() {
  let a = function() {
    return this;
  };
  let b = () => {
    return this;
  };
  return {
    a,
    b
  }
}

let a = this;
console.log(a);



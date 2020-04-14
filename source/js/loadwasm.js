// VM Setup

function StartVMWebsocket(filename) {
  return fetch(filename)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => {
      return new WebAssembly.Instance(module);
    });
}

// C++ VM

let add, divide, multiply, subtract;

StartVMWebsocket(
  "https://cdn.glitch.com/197f19a4-c913-4eb7-baf5-c1f36a4965be%2Ftest%20(4).wasm?v=1586730773116"
).then(instance => {
  add = instance.exports._Z3addii;
  divide = instance.exports._Z6divideii;
  multiply = instance.exports._Z8multiplyii;
  subtract = instance.exports._Z8subtractii;
});

// C VM
let letfunc;

StartVMWebsocket(
  "https://cdn.glitch.com/197f19a4-c913-4eb7-baf5-c1f36a4965be%2Ftest%20(5).wasm"
).then(instance => {
  letfunc = instance.exports.letfunc;
});

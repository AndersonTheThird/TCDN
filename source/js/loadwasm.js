// WebAssebly - C Setup

const FlagEnabled = false // Experimental Feature - Flag # 582343814

if (FlagEnabled) { // that stuff aint ready aw naw
  (async() => {
const codePromise = fetch("https://cdn.tetretalk.com/source/wasm/output.wasm") // fetch the stuff from our cdn
const { instance } = await WebAssembly.instantiateStreaming(codePromise) // now lets stantiate it

const buffer = new Uint8Array(instance.exports.memory.buffer) // since its a machine language we gotta convert it to utf8

const pointer = instance.exports.main() // know where to get var from

let string = "" 
for(let i = pointer; buffer[i]; i++) {
  string += String.fromCharCode(buffer[i]) // do the stuff for the stuff that does the stuff you know what you mean ugh
}

document.querySelector("#maintenance > center > a").innerHTML = string; // just boilerplate code lol going to add other stuffs
// but this is just for testing

})()
}

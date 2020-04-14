#define WASM_EXPORT __attribute__((visibility("default")))

WASM_EXPORT
char* main()
{
  return "<h1>Hello :D";
}

'use strict';
module.exports = async function(c, a, b = {}) {
  const {interval:h = 250, writable:g = process.stdout} = b;
  a = "function" == typeof a ? a() : a;
  const d = g.write.bind(g);
  ({INDICATRIX_PLACEHOLDER:b} = process.env);
  if (b && "0" != b) {
    return d(`${c}<INDICATRIX_PLACEHOLDER>`), await a;
  }
  let e = 1, f = `${c}${".".repeat(e)}`;
  d(f);
  b = setInterval(() => {
    e = (e + 1) % 4;
    f = `${c}${".".repeat(e)}`;
    d(`\r${" ".repeat(c.length + 3)}\r`);
    d(f);
  }, h);
  try {
    return await a;
  } finally {
    clearInterval(b), d(`\r${" ".repeat(c.length + 3)}\r`);
  }
};


//# sourceMappingURL=indicatrix.js.map
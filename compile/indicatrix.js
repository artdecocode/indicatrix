'use strict';
module.exports = async function(b, a, c = {}) {
  const {interval:h = 250, writable:g = process.stdout} = c;
  a = "function" == typeof a ? a() : a;
  const d = g.write.bind(g);
  if ((c = process.env.INDICATRIX_PLACEHOLDER) && "0" != c) {
    return d(`${b}<INDICATRIX_PLACEHOLDER>`), await a;
  }
  let e = 1, f = `${b}${".".repeat(e)}`;
  d(f);
  c = setInterval(() => {
    e = (e + 1) % 4;
    f = `${b}${".".repeat(e)}`;
    d(`\r${" ".repeat(b.length + 3)}\r`);
    d(f);
  }, h);
  try {
    return await a;
  } finally {
    clearInterval(c), d(`\r${" ".repeat(b.length + 3)}\r`);
  }
};


//# sourceMappingURL=indicatrix.js.map
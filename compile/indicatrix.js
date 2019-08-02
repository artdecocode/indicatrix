'use strict';
module.exports = async function(b, a, e = {}) {
  const {interval:h = 250, writable:g = process.stdout} = e;
  a = "function" == typeof a ? a() : a;
  const c = g.write.bind(g);
  let d = 1, f = `${b}${".".repeat(d)}`;
  c(f);
  e = setInterval(() => {
    d = (d + 1) % 4;
    f = `${b}${".".repeat(d)}`;
    c(`\r${" ".repeat(b.length + 3)}\r`);
    c(f);
  }, h);
  try {
    return await a;
  } finally {
    clearInterval(e), c(`\r${" ".repeat(b.length + 3)}\r`);
  }
};


//# sourceMappingURL=indicatrix.js.map
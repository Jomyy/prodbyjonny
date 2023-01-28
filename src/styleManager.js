const cssVars = new Map();

function refresh() {
  let values = [];
  for(let [key, value] of cssVars) {
    values.push(`--${key}:${value}`);
  }
  document.documentElement.style.cssText = values.join(';');
}

/**
 * @param {string} name
 * @param {string} value
 */
export function set(name, value) {
  cssVars.set(name, value);
  refresh();
}

/**
 * @param {any} name
 */
export function del(name) {
  cssVars.delete(name);
  refresh();
}
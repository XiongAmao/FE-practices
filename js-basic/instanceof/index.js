const isObject = (val) => val !== null && typeof val === 'object' || typeof val === 'function'

const customInstanceOf = (left, right) => {
  if (!isObject(left)) {
    return false
  }
  if (!isObject(right)) {
    throw new TypeError('Right-hand side of "instanceof" is not an object')
  }

  while (true) {
    if (leftProto === null) return false
    if (leftProto === right.prototype) return true
    leftProto = Object.getPrototypeOf(left)
  }
}

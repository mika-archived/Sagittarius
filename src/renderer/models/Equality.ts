export function equalsToArray(array1: any[], array2: any[]): boolean {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i: number = 0; i < array1.length; i++) {
    if (!equalsTo(array1[i], array2[i])) {
      return false;
    }
  }
  return true;
}

export function equalsTo(obj1: any, obj2: any): boolean {
  if (obj1 instanceof Object) {
    for (let propName in obj1) {
      if (!equalsTo(obj1[propName], obj2[propName])) {
        return false;
      }
    }
  } else if (obj1 instanceof Array) {
    if (!equalsToArray(obj1, obj2)) {
      return false;
    }
  } else {
    return obj1 === obj2;
  }
  return true;
}

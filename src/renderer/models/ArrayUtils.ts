export function equalsTo(array1: any[], array2: any[]): boolean {
  if(array1.length != array2.length) {
    return false;
  }
  
  for(var i = 0; i < array1.length; i++) {
    if(array1[i] instanceof Object) {
      for(var propName in array1[i]) {
        if(array1[i][propName] != array2[i][propName]) {
          return false;
        }
      }
    } else {
      if(array1[i] != array2[i]) {
        return false;
      }
    }
  }
  
  return true;
}
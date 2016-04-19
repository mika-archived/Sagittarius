export class Serializable {
  public fromJson(json: any): void {
    for (let propName in json) {
      if (this[this.toCamelCase(propName)] instanceof Serializable) {
        // ↓こういうのをしたかった。
        // C#: this[this.toCamelCase(propName)] = Activator.CreateInstance(typeof(this[this.toCamelCase(propName)]), {json[PropName]})
      } else {
        this[this.toCamelCase(propName)] = json[propName];
      }
    }
  }

  private toCamelCase(param: string): string {
    return param.replace(/_./g, s => s.charAt(1).toUpperCase());
  }
}

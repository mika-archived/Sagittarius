export class Serializable {
  public fromJson(json: any): void {
    for(var propName in json) {
      this[this.toCamelCase(propName)] = json[propName];
    }
  }
  
  private toCamelCase(param: string): string {
    return param.replace(/_./g, s => s.charAt(1).toUpperCase());
  }
}
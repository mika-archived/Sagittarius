interface String {
    format(...replacements: string[]): string;
}

if (!String.prototype.format) {
  String.prototype.format = function(): string {
    let args: any = arguments;
    return this.replace(/{(\d+)}/g, (match, index) => {
      return typeof args[index] !== "undefined"
        ? args[index]
        : match
      ;
    });
  };
}

export class DtextFormatter {

  private body: string;
  private formattedText: string; // Cached

  constructor(body: string) {
    this.body = body;
    this.formattedText = null;
  }

  public format(): string {
    if (this.formattedText != null) {
      return this.formattedText;
    }
    if (this.body === "") {
      this.body = "&nbsp;"; // Insert blank
    }
    this.body = this.preventXSS(this.body);
    this.body = this.formatNewLine(this.body);

    this.formattedText = this.body;
    return this.formattedText;
  }

  private preventXSS(body: string): string {
    return body.replace(/>/g, "&gt;").replace(/</g, "&lt;");
  }

  private formatNewLine(body: string): string {
    return body.replace(/\n/g, "<br />");
  }
}

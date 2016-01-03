// Semantic UI - Form Validation

interface SemanticUIFormSettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  fields: boolean;
  keyboardShortcuts: boolean;
  on: string;
  inline: boolean;
  delay: number;
  revalidate: boolean;
  transition: string;
  duration: number;
  onValid(callback: Function): void;
  onInvalid(callback: Function): void;
  onSuccess(callback: Function): boolean;
  onFailure(callback: Function): boolean;
  metadata: SemanticUIFormMetadata;
  regExp: SemanticUIFormRegExp;
  text: SemanticUIFormText;
  prompt: SemanticUIFormPrompt;
  selector: SemanticUIFormSelector;
  className: SemanticUIFormClassName;
  error: SemanticUIFormError;
  templates: SemanticUIFormTemplates;
  rules: SemanticUIFormRules;
}

interface SemanticUIFormMetadata {
  defaultValue: string;
  validate: string;
}

interface SemanticUIFormRegExp {
  bracket: string;
  decimal: string;
  email: string;
  escape: string;
  flags: string;
  integer: string;
  number: string;
  url: string;
}

interface SemanticUIFormText {
  unspecifiedRule: string;
  unspecifiedField: string;
}

interface SemanticUIFormPrompt {
  empty: string;
  checked: string;
  email: string;
  url: string;
  regExp: string;
  integer: string;
  decimal: string;
  number: string;
  is: string;
  isExactly: string;
  not: string;
  notExactly: string;
  contains: string;
  containsExactly: string;
  doesnotContain: string;
  doesnotContainexactly: string;
  minLength: string;
  length: string;
  exactLength: string;
  maxLength: string;
  match: string;
  different: string;
  creditCard: string;
  minCount: string;
  exactCount: string;
  maxCount: string;
}

interface SemanticUIFormSelector {
  checkbox: string;
  clear: string;
  field: string;
  group: string;
  input: string;
  message: string;
  prompt: string;
  radio: string;
  reset: string;
  submit: string;
  uiCheckbox: string;
  uiDropdown: string;
}

interface SemanticUIFormClassName {
  error: string;
  label: string;
  pressed: string;
  success: string;
}

interface SemanticUIFormError {
  identifier: string;
  method: string;
  noRule: string;
  oldSyntax: string;
}

interface SemanticUIFormTemplates {
  error(callback: (errors) => any): any;
  prompt(callback: (errors) => any): any;
}

interface SemanticUIFormRules {
  empty(callback: (value) => boolean): boolean;
  checked(callback: () => boolean): boolean;
  email(callback: (value) => boolean): boolean;
  url(callback: (value) => boolean): boolean;
  regExp(callback: (value, regExp) => boolean): boolean;
  integer(callback: (value, range) => boolean): boolean;
  decimal(callback: (value) => boolean): boolean;
  number(callback: (value) => boolean): boolean;
  is(callback: (value, text) => boolean): boolean;
  isExactly(callback: (value, text) => boolean): boolean;
  not(callback: (value, notValue) => boolean): boolean;
  notExactly(callback: (value, notValue) => boolean): boolean;
  contains(callback: (value, text) => boolean): boolean;
  containsExactly(callback: (value, text) => boolean): boolean;
  doesnotContain(callback: (value, text) => boolean): boolean;
  doesnotContainexactly(callback: (value, text) => boolean): boolean;
  minLength(callback: (value, requiredLength) => boolean): boolean;
  length(callback: (value, requiredLength) => boolean): boolean;
  exactLength(callback: (value, requiredLength) => boolean): boolean;
  maxLength(callback: (value, requiredLength) => boolean): boolean;
  match(callback: (value, identifier) => boolean): boolean;
  different(callback: (value, identifier) => boolean): boolean;
  creditCard(callback: (cardNumber, cardTypes) => boolean): boolean;
  minCount(callback: (value, minCount) => boolean): boolean;
  exactCount(callback: (value, exactCount) => boolean): boolean;
  maxCount(callback: (vale, maxCount) => boolean): boolean;
}
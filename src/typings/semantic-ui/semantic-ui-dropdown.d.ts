// Semantic UI - Dropdown

interface SemanticUIDropdownSettings {
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  on: string;
  action: string;
  apiSettings: boolean;
  saveRemoteData: boolean;
  throttle: number;
  context: any;
  direction: string;
  keepOnScreen: boolean;
  match: string;
  fullTextSearch: boolean;
  placeholder: string;
  preserveHTML: boolean;
  sortSelect: boolean;
  forceSelection: boolean;
  allowAdditions: boolean;
  maxSelection: boolean;
  useLabels: boolean;
  delimiter: string;
  showOnFocus: boolean;
  allowTab: boolean;
  allowCategorySelection: boolean;
  fireOnInput: boolean;
  transition: string;
  duration: number;
  glyphWidth: number;
  label: SemanticUIDropdownLabel;
  delay: SemanticUIDropdownDelay;
  onChange(callback: (value, text, $selected) => void): void;
  onAdd(callback: (value, text, $selected) => void): void;
  onRemove(callback: (value, text, $selected) => void): void;
  onLabelSelected(callback: ($selectedLabels) => void): void;
  onLabelCreate(callback: (value, text) => void): void;
  onLabelRemove(callback: (value) => void): void;
  onNoResults(callback: (searchTerm) => void): void;
  onShow(callback: () => void): void;
  onHide(callback: () => void): void;
  name: string;
  namespace: string;
  message: SemanticUIDropdownMessage;
  error: SemanticUIDropdownError;
  regExp: SemanticUIDropdownRegExp;
  metadata: SemanticUIDropdownMetadata;
  fields: SemanticUIDropdownFields;
  keys: SemanticUIDropdownKeys;
  selector: SemanticUIDropdownSelector;
  className: SemanticUIDropdownClassName;
  templates: SemanticUIDropdownTemplates;
}

interface SemanticUIDropdownLabel {
  transition: string;
  duration: number;
  variation: boolean;
}

interface SemanticUIDropdownDelay {
  hide: number;
  show: number;
  search: number;
  touch: number;
}

interface SemanticUIDropdownMessage {
  addResult: string;
  count: string;
  maxSelections: string;
  noResults: string;
  serverError: string;
}

interface SemanticUIDropdownError {
  action: string;
  alreadySetup: string;
  labels: string;
  missingMultiple: string;
  method: string;
  noAPI: string;
  noStorage: string;
  noTransition: string;
}

interface SemanticUIDropdownRegExp {
  escape: string;
}

interface SemanticUIDropdownMetadata {
  defaultText: string;
  defaultValue: string;
  placeholderText: string;
  text: string;
  value: string;
}

interface SemanticUIDropdownFields {
  remoteValues: string;
  values: string;
  name: string;
  value: string;
}

interface SemanticUIDropdownKeys {
  backspace: number;
  delimiter: number;
  deleteKey: number;
  enter: number;
  escape: number;
  pageUp: number;
  pageDown: number;
  leftArrow: number;
  upArrow: number;
  rightArrow: number;
  downArrow: number;
}

interface SemanticUIDropdownSelector {
  addition: string;
  dropdown: string;
  icon: string;
  input: string;
  item: string;
  label: string;
  remove: string;
  siblingLabel: string;
  menu: string;
  message: string;
  menuIcon: string;
  search: string;
  text: string;
  unselectable: string;
}

interface SemanticUIDropdownClassName {
  active: string;
  addition: string;
  animating: string;
  disabled: string;
  dropdown: string;
  filtered: string;
  hidden: string;
  item: string;
  label: string;
  loading: string;
  menu: string;
  message: string;
  placeholder: string;
  search: string;
  selected: string;
  selection: string;
  upward: string;
  visible: string;
}

interface SemanticUIDropdownTemplates {
  dropdown(callback: (select) => string): string;
  menu(callback: (response, fields) => string): string;
  label(callback: (value, text) => string): string;
  message(callback: (message) => string): string;
  addition(callback: (choise) => string): string;
}
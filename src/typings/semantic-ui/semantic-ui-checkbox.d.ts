// Semantic UI - Checkbox

interface SemanticUICheckboxSettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  uncheckable: string;
  fireOnInit: boolean;
  onChange(callback: () => void): void;
  beforeChecked(callback: () => void): void;
  beforeUnchecked(callback: () => void): void;
  beforeDeterminate(callback: () => void): void;
  beforeIndeterminate(callback: () => void): void;
  onChecked(callback: () => void): void;
  onUnchecked(callback: () => void): void;
  onDeterminate(callback: () => void): void;
  onIndeterminate(callback: () => void): void;
  onEnable(callback: () => void): void;
  onDisable(callback: () => void): void;
  className: SemanticUICheckboxClassName;
  error: SemanticUICheckboxError;
  selector: SemanticUICheckboxSelector;
}

interface SemanticUICheckboxClassName {
  checked: string;
  indeterminate: string;
  disabled: string;
  hidden: string;
  radio: string;
  readOnly: string;
}

interface SemanticUICheckboxError {
  method: string;
}

interface SemanticUICheckboxSelector {
  checkbox: string;
  label: string;
  input: string;
  link: string;
}
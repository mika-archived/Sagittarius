// Semantic UI - State

interface SemanticUIStateSettings {
  name: string;
  debug: boolean;
  verbose: boolean;
  namespace: string;
  performance: string;
  onActivate(callback: () => void): void;
  onDeactivate(callback: () => void): void;
  onChange(callback: () => void): void;
  activateTest(callback: () => boolean): boolean;
  deactivateTest(callback: () => boolean): boolean;
  automatic: boolean;
  sync: boolean;
  flashDuration: number;
  filter: SemanticUIStateFilter;
  context: boolean;
  error: SemanticUIStateError;
  metadata: SemanticUIStateMetadata;
  className: SemanticUIStateClassName;
  selector: SemanticUIStateSelector;
  defaults: SemanticUIStateDefaults;
  states: SemanticUIStateStates;
}

interface SemanticUIStateFilter {
  text: string;
  active: string;
}

interface SemanticUIStateError {
  beforeSend: string;
  method: string;
}

interface SemanticUIStateMetadata {
  promise: string;
  storedText: string;
}

interface SemanticUIStateClassName {
  active: string;
  disabled: string;
  error: string;
  loading: string;
  success: string;
  warning: string;
}

interface SemanticUIStateSelector {
  text: boolean; // string?
}

interface SemanticUIStateDefaults {
  input: SemanticUIStateDefaultsInput;
  button: SemanticUIStateDefaultsButton;
  progress: SemanticUIStateDefaultsProgress;
}

interface SemanticUIStateDefaultsInput {
  disabled: boolean;
  loading: boolean;
  active: boolean;
}

interface SemanticUIStateDefaultsButton {
  disabled: boolean;
  loading: boolean;
  active: boolean;
}

interface SemanticUIStateDefaultsProgress {
  active: boolean;
  success: boolean;
  warning: boolean;
  error: boolean;
}

interface SemanticUIStateStates {
  active: boolean;
  disabled: boolean;
  error: boolean;
  loading: boolean;
  success: boolean;
  warning: boolean;
}

interface SemanticUIStateText {
  disabled: boolean;
  flash: boolean;
  hover: boolean;
  active: boolean;
  inactive: boolean;
  activate: boolean;
  deactivate: boolean;
}
// Semantic UI - Progress

interface SemanticUIProgressSettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  random: SemanticUIProgressRandom;
  duration: number;
  autoSuccess: boolean;
  showActivity: boolean;
  limitValues: boolean;
  label: string;
  precision: number;
  framerate: number;
  percent: boolean;
  total: boolean;
  value: boolean;
  onChange(callback: (percent, value, total) => void): void;
  onSuccess(callback: (total) => void): void;
  onActive(callback: (value, total) => void): void;
  onError(callback: (value, total) => void): void;
  onWarning(callback: (value, total) => void): void;
  error: SemanticUIProgressError;
  regExp: SemanticUIProgressRegExp;
  metadata: SemanticUIProgressMetadata;
  selector: SemanticUIProgressSelector;
  text: SemanticUIProgressText;
  className: SemanticUIProgressClassName;
}

interface SemanticUIProgressRandom {
  min: number;
  max: number;
}

interface SemanticUIProgressError {
  method: string;
  nonNumeric: string;
  tooHigh: string;
  tooLow: string;
}

interface SemanticUIProgressRegExp {
  variable: string;
}

interface SemanticUIProgressMetadata {
  percent: string;
  total: string;
  value: string;
}

interface SemanticUIProgressSelector {
  bar: string;
  label: string;
  progress: string;
}

interface SemanticUIProgressText {
  active: boolean;
  error: boolean;
  success: boolean;
  warning: boolean;
  percent: string;
  ratio: string;
}

interface SemanticUIProgressClassName {
  active: string;
  error: string;
  success: string;
  warning: string;
}
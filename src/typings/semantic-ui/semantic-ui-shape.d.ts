// Semantic UI - Shape

interface SemanticUIShapeSettings {
  name: string;
  namespace: string;
  verbose: boolean;
  debug: boolean;
  performance: boolean;
  beforeChange(callback: () => void): void;
  onchange(callback: () => void): void;
  allowRepeats: boolean;
  duration: boolean;
  error: SemanticUIShapeError;
  className: SemanticUIShapeClassName;
  selector: SemanticUIShapeSelector;
}

interface SemanticUIShapeError {
  side: string;
  method: string;
}

interface SemanticUIShapeClassName {
  animating: string;
  hidden: string;
  loading: string;
  active: string;
}

interface SemanticUIShapeSelector {
  sides: string;
  side: string;
}
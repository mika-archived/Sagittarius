// Semantic UI - Dimmer

interface SemanticUIDimmerSettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbode: boolean;
  performance: boolean;
  dimmerName: boolean;
  variation: boolean;
  closable: string;
  useCSS: boolean;
  transition: string;
  on: boolean;
  opacity: string;
  duration: SemanticUIDimmerDuration;
  onChange(callback: () => void): void;
  onShow(callback: () => void): void;
  onHide(callback: () => void): void;
  error: SemanticUIDimmerError;
  className: SemanticUIDimmerClassName;
  selector: SemanticUIDimmerSelector;
  template: SemanticUIDimmerTemplate;
}

interface SemanticUIDimmerDuration {
  show: number;
  hide: number;
}

interface SemanticUIDimmerError {
  method: string;
}

interface SemanticUIDimmerClassName {
  active: string;
  animating: string;
  dimmable: string;
  dimmed: string;
  dimmer: string;
  disabled: string;
  hide: string;
  pageDimmer: string;
  show: string;
}

interface SemanticUIDimmerSelector {
  dimmer: string;
  content: string;
}

interface SemanticUIDimmerTemplate {
  dimmer(callback: () => any): any;
}
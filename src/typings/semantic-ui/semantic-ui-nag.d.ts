// Semantic UI - Nag

interface SemanticUINagSettings {
  name: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  namespace: string;
  persist: boolean;
  displayTime: number;
  animation: SemanticUINagAnimation;
  context: boolean;
  detachable: boolean;
  expires: number;
  domain: boolean;
  path: string;
  storageMethod: string;
  key: string;
  value: string;
  error: SemanticUINagError;
  className: SemanticUINagClassName;
  selector: SemanticUINagSelector;
  speed: number;
  easing: string;
  onHide(callback: () => void): void;
}

interface SemanticUINagAnimation {
  show: string;
  hide: string;
}

interface SemanticUINagError {
  noCookieStorage: string;
  noStorage: string;
  method: string;
}

interface SemanticUINagClassName {
  bottom: string;
  fixed: string;
}

interface SemanticUINagSelector {
  close: string;
}
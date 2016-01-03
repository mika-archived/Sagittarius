// Semantic UI - Modal

interface SemanticUIModalSettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  observeChanges: boolean;
  allowMultiple: boolean;
  detachable: boolean;
  closable: boolean;
  autofocus: boolean;
  inverted: boolean;
  blurring: boolean;
  dimmerSettings: SemanticUIModalDimmerSettings;
  context: string;
  queue: boolean;
  duration: number;
  offset: number;
  transition: string;
  padding: number;
  onShow(callback: () => void): void;
  onVisibile(callback: () => void): void;
  onHide(callback: () => boolean): boolean;
  onHidden(callback: () => void): void;
  onApprove(callback: () => boolean): boolean;
  onDeny(callback: () => boolean): boolean;
  selector: SemanticUIModalSelector;
  error: SemanticUIModalError;
  className: SemanticUIModalClassName;
}

interface SemanticUIModalDimmerSettings {
  closable: boolean;
  useCSS: boolean;
}

interface SemanticUIModalSelector {
  close: string;
  approve: string;
  deny: string;
  modal: string;
}

interface SemanticUIModalError {
  dimmer: string;
  method: string;
  notFound: string;
}

interface SemanticUIModalClassName {
  active: string;
  animating: string;
  blurring: string;
  scrolling: string;
  undetached: string;
}
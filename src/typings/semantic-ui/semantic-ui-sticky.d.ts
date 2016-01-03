// Semantic UI - Sticky

interface SemanticUIStickySettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  pushing: boolean;
  context: string;
  scrollContext: any;
  offset: number;
  bottomOffset: number;
  jitter: number;
  observeChanges: boolean;
  onReposition(callback: () => void): void;
  onScroll(callback: () => void): void;
  onStick(callback: () => void): void;
  onUnstick(callback: () => void): void;
  onTop(callback: () => void): void;
  onBottom(callback: () => void): void;
  error: SemanticUIStickyError;
  className: SemanticUIStickyClassName;
}

interface SemanticUIStickyError {
  container: string;
  visible: string;
  method: string;
  invalidContext: string;
  elementSize: string;
}

interface SemanticUIStickyClassName {
  bound: string;
  fixed: string;
  supported: string;
  top: string;
  bottom: string;
}
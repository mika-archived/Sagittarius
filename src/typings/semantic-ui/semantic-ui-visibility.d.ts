// Semantic UI - Visibility

interface SemanticUIVisibilitySettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  observeChanges: boolean;
  initialCheck: boolean;
  refreshOnLoad: boolean;
  refreshOnResize: boolean;
  checkOnRefresh: boolean;
  once: boolean;
  continuous: boolean;
  offset: number;
  includeMargin: boolean;
  context: any;
  throttle: boolean;
  type: boolean;
  transition: string;
  duration: number;
  onPassed(callback: () => void): void;
  onOnScreen(callback: () => boolean): boolean; // void?
  onOffScreen(callback: () => boolean): boolean;
  onPassing(callback: () => boolean): boolean;
  onTopVisible(callback: () => boolean): boolean;
  onBottomVisible(callback: () => boolean): boolean;
  onTopPassed(callback: () => boolean): boolean;
  onBottomPassed(callback: () => boolean): boolean;
  onPassingReverse(callback: () => boolean): boolean;
  onTopVisibleReverse(callback: () => boolean): boolean;
  onBottomVisiblereverse(callback: () => boolean): boolean;
  onTopPassedReverse(callback: () => boolean): boolean;
  onBottomPassedReverse(callback: () => boolean): boolean;
  onUpdate(callback: () => boolean): boolean;
  onRefresh(callback: () => void): void;
  metadata: SemanticUIVisibilityMetadata;
  className: SemanticUIVisibilityClassName;
  error: SemanticUIVisibilityError;
}

interface SemanticUIVisibilityMetadata {
  src: string;
}

interface SemanticUIVisibilityClassName {
  fixed: string;
  placeholder: string;
}

interface SemanticUIVisibilityError {
  method: string;
  visible: string;
}
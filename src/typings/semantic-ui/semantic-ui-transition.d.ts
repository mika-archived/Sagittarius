// Semantic UI - Transition

interface SemanticUITransitionSettings {
  name: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  namespace: string;
  interval: number;
  reverse: string;
  onStart(callback: () => void): void;
  onComplete(callback: () => void): void;
  onShow(callback: () => void): void;
  onHide(callback: () => void): void;
  useFailSafe: boolean;
  failSafeDelay: number;
  allowRepeats: boolean;
  displayType: boolean;
  animation: string;
  duration: boolean;
  queue: boolean;
  metadata: SemanticUITransitionMetadata;
  className: SemanticUITransitionClassName;
  error: SemanticUITransitionError;
}

interface SemanticUITransitionMetadata {
  displayType: string;
}

interface SemanticUITransitionClassName {
  animating: string;
  disabled: string;
  hidden: string;
  inward: string;
  loading: string;
  looping: string;
  outward: string;
  transition: string;
  visible: string;
}

interface SemanticUITransitionError {
  noAnimation: string;
  repeated: string;
  method: string;
  support: string; 
}
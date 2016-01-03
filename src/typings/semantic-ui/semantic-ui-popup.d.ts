// Semantic UI - Popup

interface SemanticUIPopupSettings {
  name: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  namespace: string;
  onCreate(callback: () => void): void;
  onRemove(callback: () => void): void;
  onShow(callback: () => void): void;
  onVisible(callback: () => void): void;
  onHide(callback: () => void): void;
  onUnplaceable(callback: () => void): void;
  onHidden(callback: () => void): void;
  on: string;
  addTouchEvents: boolean;
  position: string;
  variation: string;
  movePopup: boolean;
  target: boolean;
  popup: boolean;
  inline: boolean;
  preserve: boolean;
  hoverable: boolean;
  content: boolean;
  html: boolean;
  title: boolean;
  closable: boolean;
  hideOnScroll: string;
  exclusive: boolean;
  context: string;
  prefer: string;
  lastResort: boolean;
  delay: SemanticUIPopupDelay;
  setFluidWidth: boolean;
  duration: number;
  transition: string;
  distanceAway: number;
  jitter: number;
  offset: number;
  maxSearchDepth: number;
  error: SemanticUIPopupError;
  metadata: SemanticUIPopupMetadata;
  className: SemanticUIPopupClassName;
  selector: SemanticUIPopupSelector;
  templates: SemanticUIPopupTemplates;
}

interface SemanticUIPopupDelay {
  show: number;
  hide: number;
}

interface SemanticUIPopupError {
  invalidPosition: string;
  cannotPlace: string;
  method: string;
  noTransition: string;
  notFound: string;
}

interface SemanticUIPopupMetadata {
  activator: string;
  content: string;
  html: string;
  offset: string;
  position: string;
  title: string;
  variation: string;
}

interface SemanticUIPopupClassName {
  active: string;
  animating: string;
  dropdown: string;
  fluid: string;
  loading: string;
  popup: string;
  position: string;
  visible: string;
}

interface SemanticUIPopupSelector {
  popup: string;
}

interface SemanticUIPopupTemplates {
  escape(callback: (string) => string): string;
  popup(callback: (text) => string): string;
}
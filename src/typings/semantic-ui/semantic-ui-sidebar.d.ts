// Semantic UI - Sidebar

interface SemanticUISidebarSettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  transition: string;
  mobileTransition: string;
  defaultTransition: SemanticUISidebarDefaultTransition;
  context: string;
  exclusive: boolean;
  closable: boolean;
  dimPage: boolean;
  scrollLock: boolean;
  returnScroll: boolean;
  delaySetup: boolean;
  duration: number;
  onChange(callback: () => void): void;
  onShow(callback: () => void): void;
  onHide(callback: () => void): void;
  onHidden(callback: () => void): void;
  onVisible(callback: () => void): void;
  className: SemanticUISidebarClassName;
  selector: SemanticUISidebarSelector;
  regExp: SemanticUISidebarRegExp;
  error: SemanticUISidebarError;
}

interface SemanticUISidebarDefaultTransition {
  computer: SemanticUISidebarDefaultTransitionType;
  mobile: SemanticUISidebarDefaultTransitionType;
}

interface SemanticUISidebarDefaultTransitionType {
  left: string;
  right: string;
  top: string;
  bottom: string;
}

interface SemanticUISidebarClassName {
  active: string;
  animating: string;
  dimmed: string;
  ios: string;
  pushable: string;
  right: string;
  top: string;
  left: string;
  bottom: string;
  visible: string;
}

interface SemanticUISidebarSelector {
  fixed: string;
  omitted: string;
  pusher: string;
  sidebar: string;
}

interface SemanticUISidebarRegExp {
  ios: string;
  mobileChrome: string;
  mobile: string;
}

interface SemanticUISidebarError {
  method: string;
  pusher: string;
  movedSidebar: string;
  overlay: string;
  notFound: string;
}
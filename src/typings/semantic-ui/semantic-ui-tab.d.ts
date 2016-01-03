// Semantic UI - Tab

interface SemanticUITabSettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  auto: boolean;
  history: boolean;
  historyType: string;
  path: boolean;
  context: boolean;
  childrenOnly: boolean;
  maxDepth: number;
  alwaysRefresh: boolean;
  cache: boolean;
  ignoreFirstLoad: boolean;
  apiSettings: boolean;
  evaluateScripts: string;
  onFirstLoad(callback: (tabPath, parameterArray, historyEvent) => void): void;
  onLoad(callback: (tabPath, parameterArray, historyEvent) => void): void;
  onVisible(callback: (tabPath, parameterArray, historyEvent) => void): void;
  onRequest(callback: (tabPath, parameterArray, historyEvent) => void): void;
  templates: SemanticUITabTemplates;
  error: SemanticUITabError;
  metadata: SemanticUITabMetadata;
  className: SemanticUITabClassName;
  selector: SemanticUITabSelector;
}

interface SemanticUITabTemplates {
  determineTitle(callback: (tabArray) => string): string;
}

interface SemanticUITabError {
  api: string;
  method: string;
  missingTab: string;
  noContext: string;
  path: string;
  recursion: string;
  legacyInit: string;
  legacyLoad: string;
  state: string;
}

interface SemanticUITabMetadata {
  tab: string;
  loaded: string;
  promise: string;
}

interface SemanticUITabClassName {
  loading: string;
  active: string;
}

interface SemanticUITabSelector {
  tabs: string;
  ui: string;
}
// Semantic UI - Video

interface SemanticUIEmbedSettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  icon: boolean;
  source: boolean;
  url: boolean;
  id: boolean;
  autoplay: string;
  color: string;
  hd: boolean;
  brandedUI: boolean;
  parameters: boolean;
  onDisplay(callback: () => void): void;
  onPlaceholderDisplay(callback: () => void): void;
  onReset(callback: () => void): void;
  onCreate(callback: () => void): void;
  onEmbed(callback: () => any): any;
  metadata: SemanticUIEmbedMetadata;
  error: SemanticUIEmbedError;
  className: SemanticUIEmbedClassName;
  selector: SemanticUIEmbedSelector;
  sources: SemanticUIEmbedSources;
  templates: SemanticUIEmbedTemplates;
  api: boolean;
  onPause(callback: () => void): void;
  onPlay(callback: () => void): void;
  onStop(callback: () => void): void;
}

interface SemanticUIEmbedMetadata {
  id: string;
  icon: string;
  placeholder: string;
  source: string;
  url: string;
}

interface SemanticUIEmbedError {
  noURL: string;
  method: string;
}

interface SemanticUIEmbedClassName {
  active: string;
  embed: string;
}

interface SemanticUIEmbedSelector {
  embed: string;
  placeholder: string;
  icon: string;
}

interface SemanticUIEmbedSources {
  youtube: SemanticUIEmbedSource;
  vimeo: SemanticUIEmbedSource;
}

interface SemanticUIEmbedSource {
  name: string;
  type: string;
  icon: string;
  domain: string;
  url: string;
  parameters(callback: (settings) => any): any;
}

interface SemanticUIEmbedTemplates {
  iframe(callback: (url, parameters) => string): string;
  placeholder(callback: (image, icon) => string): string;
}
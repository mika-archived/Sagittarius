// Semantic UI - Search

interface SemanticUISearchSettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  type: string;
  minCharacters: number;
  apiSettings: boolean;
  source: boolean;
  searchFields: string[];
  displayField: string;
  searchFullText: boolean;
  automatic: boolean;
  hideDelay: number;
  searchDelay: number;
  maxResults: number;
  cache: boolean;
  transition: string;
  duration: number;
  easing: string;
  onSelect(callback: () => boolean): boolean;
  onResultsAdd(callback: () => boolean): boolean;
  onSearchQuery(callback: (query) => void): void;
  onResults(callback: (response) => void): void;
  onResultsOpen(callback: () => void): void;
  onResultsClose(callback: () => void): void;
  className: SemanticUISearchClassName;
  error: SemanticUISearchError;
  metadata: SemanticUISearchMetadata;
  regExp: SemanticUISearchRegExp;
  fields: SemanticUISearchFields;
  selector: SemanticUISearchSelector;
  templates: SemanticUISearchTemplates;
}

interface SemanticUISearchClassName {
  animating: string;
  active: string;
  empty: string;
  focus: string;
  hidden: string;
  loading: string;
  results: string;
  pressed: string;
}

interface SemanticUISearchError {
  source: string;
  noResults: string;
  logging: string;
  noEndpoint: string;
  noTemplate: string;
  serverError: string;
  maxResults: string;97
  method: string;
}

interface SemanticUISearchMetadata {
  cache: string;
  results: string;
  result: string;
}

interface SemanticUISearchRegExp {
  escape: string;
  beginsWith: string;
}

interface SemanticUISearchFields {
  categories: string;
  categoryName: string;
  categoryResults: string;
  description: string;
  image: string;
  price: string;
  results: string;
  title: string;
  url: string;
  action: string;
  actionText: string;
  actionURL: string;
}

interface SemanticUISearchSelector {
  prompt: string;
  searchButton: string;
  results: string;
  category: string;
  result: string;
  title: string;
}

interface SemanticUISearchTemplates {
  escape(callback: (string) => string): string;
  message(callback: (message, type) => string): string;
  category(callback: (response, fields) => any): any;
  standard(callback: (response, fields) => any): any;
}
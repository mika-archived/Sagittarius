// Semantic UI - Site

interface SemanticUISiteSettings {
  name: string;
  namespace: string;
  error: SemanticUISiteError;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  modules: string[];
  siteNamespace: string;
  
}

interface SemanticUISiteError {
  console: string;
  method: string;
}

interface SemanticUISiteNamespaceStub {
  cache: any;
  config: any;
  sections: any;
  section: any;
  utilities: any;
}
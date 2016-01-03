// Semantic UI - API

interface SemanticUIAPISettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  api: any;
  cache: boolean;
  interruptRequests: boolean;
  on: string;
  stateContext: boolean;
  loadingDuration: number;
  hideError: string;
  errorDuration: number;
  encodeParameters: boolean;
  action: boolean;
  url: boolean;
  base: string;
  urlData: any;
  defaultData: boolean;
  serializeForm: boolean;
  throttle: number;
  throttleFirstRequest: boolean;
  method: string;
  data: any;
  dataType: string;
  mockResponse: boolean;
  mockResponseAsync: boolean;
  response: boolean;
  responseAsync:boolean;
  beforeSend(callback: (settings) => any): any;
  beforeXHR(callback: (xhr) => void): void;
  onRequest(callback: (promise, xhr) => void): void;
  onResponse(callback: (response) => boolean): boolean;
  onSuccess(callback: (response, $module) => void): void;
  onComplete(callback: (response, $module) => void): void;
  onFailure(callback: (response, $module) => void): void;
  onError(callback: (errorMessage, $module) => void): void;
  onAbort(callback: (errorMessage, $module) => void): void;
  successTest: boolean;
  error: SemanticUIAPIError;
  regExp: SemanticUIAPIRegExp;
  className: SemanticUIAPIClassName;
  selector: SemanticUIAPISelector;
  metadata: SemanticUIAPIMetadata;
}

interface SemanticUIAPIError {
  beforeSend: string;
  error: string;
  exitConditions: string;
  JSONParse: string;
  legacyParameters: string;
  method: string;
  missingAction: string;
  missingURL: string;
  noReturnedValue: string;
  noStorage: string;
  parseError: string;
  requiredParameter: string;
  timeout: string;
}

interface SemanticUIAPIRegExp {
  required: string;
  optional: string;
}

interface SemanticUIAPIClassName {
  loading: string;
  error: string;
}

interface SemanticUIAPISelector {
  disabled: string;
  form: string;
}

interface SemanticUIAPIMetadata {
  action: string;
  url: string;
}
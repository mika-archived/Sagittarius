// Semantic UI - Rating

interface SemanticUIRatingSettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  initialRating: number;
  initeractive: boolean;
  maxRating: number;
  clearable: string;
  onRate(callback: (rating) => void): void;
  error: SemanticUIRatingError;
  metadata: SemanticUIRatingMetadata;
  className: SemanticUIRatingClassName;
  selector: SemanticUIRatingSelector;
  templates: SemanticUIRatingTemplates;
}

interface SemanticUIRatingError {
  method: string;
  noMaximum: string;
}

interface SemanticUIRatingMetadata {
  rating: string;
  maxRating: string;
}

interface SemanticUIRatingClassName {
  active: string;
  disabled: string;
  selected: string;
  loading: string;
}

interface SemanticUIRatingSelector {
  icon: string;
}

interface SemanticUIRatingTemplates {
  icon(callback: (maxRating) => string): string;
}
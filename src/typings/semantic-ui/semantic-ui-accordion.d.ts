// Semantic UI - Accordion

interface SemanticUIAccordionSettings {
  name: string;
  namespace: string;
  debug: boolean;
  verbose: boolean;
  performance: boolean;
  on: string;
  observeChanges: boolean;
  exclusive: boolean;
  collapsible: boolean;
  closeNested: boolean;
  animateChildren: boolean;
  duration: number;
  easing: string;
  onOpening(callback: () => void): void;
  onOpen(callback: () => void): void;
  onClosing(callback: () => void): void;
  onClose(callback: () => void): void;
  onChange(callback: () => void): void;
  error: SemanticUIAccordionError;
  className: SemanticUIAccordionClassName;
  selector: SemanticUIAccordionSelector;
}

interface SemanticUIAccordionError {
  method: string;
}

interface SemanticUIAccordionClassName {
  active: string;
  animating: string;
}

interface SemanticUIAccordionSelector {
  accordion: string;
  title: string;
  trigger: string;
  content: string;
}

interface NotifierOptions {
  title: string;
  subtitle: string;
  message: string;
  sound: string;
  icon: string;
  contentImage: string;
  open: string;
  wait: boolean;
  
  // Growl
  sticky: boolean;
  label: string;
  priority: number;
  
  // NotifySend
  urgency: string;
  time: number;
  category: string;
  hint: string;
}

interface Notifier {
  notify(options: any, callback: () => void): void;
  
  NotifySend: Notifier;
  NotificationCenter: Notifier;
  WindowsToaster: Notifier;
  WindowsBalloon: Notifier;
  Growl: Notifier;
}

declare module "node-notifier" {
  var Notifier: Notifier;
  export = Notifier;
}
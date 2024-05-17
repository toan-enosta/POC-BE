export interface Step {
  name: string;
  element: string;
  popover: PopoverConfig;
}

export interface PopoverConfig {
  // Please refer to https://driverjs.com/docs/configuration for futher information
  title?: string;
  description?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  showButtons?: ('next' | 'previous' | 'close')[];
  disableButtons?: ('next' | 'previous' | 'close')[];
  nextBtnText?: string;
  prevBtnText?: string;
  doneBtnText?: string;
  showProgress?: boolean;
  progressText?: string;
  popoverClass?: string;
}

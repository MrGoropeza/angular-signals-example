import { Directive, ElementRef, Input } from "@angular/core";

type ButtonSeverity =
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "help"
  | "danger"
  | "success";

@Directive({
  selector: "[buttonSeverity]",
  standalone: true,
})
export class ButtonSeverityDirectiveDirective {
  @Input("buttonSeverity")
  set severity(value: ButtonSeverity) {
    this.el.nativeElement.classList.add(`p-button-${value}`);
  }

  constructor(private el: ElementRef<HTMLElement>) {}
}

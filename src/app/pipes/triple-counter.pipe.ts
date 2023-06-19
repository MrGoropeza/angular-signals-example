import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "tripleCounter",
  standalone: true,
})
export class TripleCounterPipe implements PipeTransform {
  transform(value: number | null): number {
    return value ? value * 3 : 0;
  }
}

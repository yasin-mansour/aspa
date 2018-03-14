import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';
import {ElementMapService} from '../../core';


@Directive({
  selector: '[appElementIndexer]'
})
export class ElementIndexerDirective implements OnInit, OnDestroy {
  @Input() name;

  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef,
              private elementMapService: ElementMapService) {
  }

  ngOnInit() {
    // this.elementMapService.addElement(this.name, this);
  }

  ngOnDestroy() {
    // this.elementMapService.removeElement(this.name);
  }
}

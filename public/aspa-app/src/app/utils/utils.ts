export function componentAddClass(renderer, hostElement, componentClass) {
  if (Array.isArray(componentClass)) {
    componentClass.map(className => {
      renderer.addClass(hostElement.nativeElement, className);
    });
  } else if (componentClass) {
    renderer.addClass(hostElement.nativeElement, componentClass);
  }
}

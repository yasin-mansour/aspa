export function componentAddClass(renderer, hostElement, componentClass) {
  if (Array.isArray(componentClass)) {
    componentClass.map(className => {
      renderer.addClass(hostElement.nativeElement, className);
    });
  } else if (componentClass) {
    renderer.addClass(hostElement.nativeElement, componentClass);
  }
}

export function issueDateList() {
  const lastYear = new Date().getFullYear();

  const options = [];

  for (let i = lastYear; i > 1970; i--) {
    options.push({label: `${i} - ${i - 1}`, value: `${i} - ${i - 1}`});
  }

  return options;
}

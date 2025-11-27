export function register(components: any) {
  for (const componentName in components) {
    const component = components[componentName]
    app.component(component.name, component)
    app.use(component)
  }
}

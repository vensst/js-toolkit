export default {
  install(app) {
    // 同步方式导入所有.vue组件 eager: true
    const modules = import.meta.glob('./*.vue', { eager: true })
    for (const path in modules) {
      const component = (modules[path] as any).default
      const componentName = component.name || path.replace(/^.*\/(.+)\.vue$/, '$1')
      app.component(componentName, component)
    }
  }
}

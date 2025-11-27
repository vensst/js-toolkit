// obj.d.ts

/**
 * 链式获取对象属性值，支持点表示法和方括号表示法
 *
 * @param obj - 要检索的对象
 * @param chain - 属性链，支持点表示法(a.b.c)和方括号表示法(a[0]、a['b']、a["c"])
 * @param defaultValue - 当属性不存在时返回的默认值
 * @returns 属性值或默认值
 */
export function chainGet<T = any>(
  obj: Record<string, any>,
  chain: string,
  defaultValue?: T
): T;

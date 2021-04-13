export function checkRender(routes: any, path: string) {
  let item = routes.find((obj: any) => {
    let routePath = obj.path;
    if (typeof routePath === "string") {
      return obj.path?.startsWith(path) && path != "/" && path;
    }
    return routePath.find((link: string) => {
      return link.startsWith(path) && path != "/" && path;
    });
  });

  if (item) {
    return true;
  }
  return false;
}

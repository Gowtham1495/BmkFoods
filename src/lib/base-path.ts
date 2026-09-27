export function withBasePath(path: string) {
  if (!path || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }

  const basePath = process.env.GITHUB_ACTIONS === "true" ? "/BmkFoods" : "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}

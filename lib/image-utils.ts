export function getWebpPath(originalPath: string): string {
  if (originalPath.endsWith('.webp')) {
    return originalPath;
  }
  
  return originalPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
}

export function getImageSrc(src: string, preferWebp: boolean = true): string {
  if (!preferWebp) {
    return src;
  }
  
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:') || src.endsWith('.svg')) {
    return src;
  }
  
  return getWebpPath(src);
}


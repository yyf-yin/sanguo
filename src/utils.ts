/** 生成带 base 前缀的站内链接 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function lifespan(born?: number, died?: number): string {
  return `${born ?? '？'}–${died ?? '？'}`;
}

export function yearRange(year: number, endYear?: number): string {
  return endYear && endYear !== year ? `${year}–${endYear}` : `${year}`;
}

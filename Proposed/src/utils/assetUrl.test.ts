import { describe, it, expect } from 'vitest';
import { assetUrl } from './assetUrl';

describe('assetUrl utility', () => {
  it('should return empty string for empty input', () => {
    expect(assetUrl('')).toBe('');
  });

  it('should preserve external HTTP and HTTPS URLs', () => {
    expect(assetUrl('https://example.com/photo.jpg')).toBe('https://example.com/photo.jpg');
    expect(assetUrl('http://example.com/photo.jpg')).toBe('http://example.com/photo.jpg');
  });

  it('should preserve data and blob URLs', () => {
    expect(assetUrl('data:image/png;base64,...')).toBe('data:image/png;base64,...');
    expect(assetUrl('blob:http://localhost/...')).toBe('blob:http://localhost/...');
  });

  it('should prefix relative and leading-slash paths with BASE_URL', () => {
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    expect(assetUrl('/images/logo.png')).toBe(`${cleanBase}images/logo.png`);
    expect(assetUrl('images/logo.png')).toBe(`${cleanBase}images/logo.png`);
  });
});

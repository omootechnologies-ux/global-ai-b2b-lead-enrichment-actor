export function normalizeWhitespace(value = '') { return String(value).replace(/\s+/g, ' ').trim(); }
export function uniq(values = []) { const seen = new Set(); const out = []; for (const v of values.flat().filter(Boolean)) { const s = String(v).trim(); const k = s.toLowerCase(); if (!k || seen.has(k)) continue; seen.add(k); out.push(s); } return out; }
export function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
export function safeUrl(value) { if (!value) return null; try { const u = new URL(String(value).trim()); if (!['http:', 'https:'].includes(u.protocol)) return null; u.hash = ''; return u.href; } catch { return null; } }
export function hostnameFromUrl(value) { try { return new URL(value).hostname.replace(/^www\./i, '').toLowerCase(); } catch { return ''; } }
export function domainExcluded(url, excludeDomains = []) { const host = hostnameFromUrl(url); if (!host) return true; return excludeDomains.some((d) => { const clean = String(d).replace(/^www\./i, '').toLowerCase(); return host === clean || host.endsWith(`.${clean}`); }); }
export function toStartUrlObjects(startUrls = []) { return startUrls.map((item) => { const url = typeof item === 'string' ? item : item?.url; const normalized = safeUrl(url); return normalized ? { url: normalized, userData: item?.userData || {} } : null; }).filter(Boolean); }
export function limitArray(values = [], limit = 10) { return values.slice(0, Math.max(0, limit)); }
export function textIncludesAny(text = '', words = []) { const h = text.toLowerCase(); return words.some((word) => h.includes(String(word).toLowerCase())); }
export function currentIso() { return new Date().toISOString(); }

export function getLanguageFromURL(pathname: string) {
  const langMatch = pathname.match(/^\/(en|zh|es|fr|ar|bn|pt|ru|ur|hi|ta)/);
  return langMatch ? langMatch[1] : null;
}
export const getLanguageFromURL = (pathname: string) => {
  const match = pathname.match(/^\/(en|zh|es|fr|de|ja|pa|jv|ko|vi|tr|sw|it|fa|ar|bn|pt|ru|ur|hi|ta|pl)/);
  return match ? match[1] : 'en';
};
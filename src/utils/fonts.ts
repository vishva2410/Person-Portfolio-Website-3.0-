/*
  Utility to patch fonts for components if necessary. 
  Text component from drei uses a Google Fonts CDN by default if you pass a google font URL, 
  BUT sticking to a .json or .ttf path is safer for Text3D.
  However, `Text` (not Text3D) uses SDF generation on the fly from a font file URL.
  I will use Google Fonts CDN woff/ttf links in the components directly.
*/
export const Fonts = {
    Inter: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.ttf',
    SpaceGrotesk: 'https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oDA.ttf'
};

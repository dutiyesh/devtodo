function getThemeName() {
  const themeName = chrome.devtools.panels.themeName === 'dark' ? 'theme-dark' : '';

  return themeName;
}

export default getThemeName;

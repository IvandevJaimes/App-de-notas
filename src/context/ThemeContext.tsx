import { FC, ReactNode, createContext, useEffect, useState } from "react"

type ThemeType = 'dark' | 'light';

type Theme = {
  background: string,
  inputBackground: string
  elements: string
  onHover: string
  fontColor: string,
  disabledFont: string,
  red: string,
  redOnHover: string,
  boxShadow: string,
  waveBackground: string
  accent: string,
  accentLight: string,
  accentDark: string
}

const themes: Record<ThemeType, Theme> = {
  light: {
    background: '#fffdf6',
    inputBackground: '#fff3d9',
    elements: '#fffdf6',
    onHover: '#ffeef6',
    fontColor: '#222222',
    disabledFont: '#ffb6d6',
    red: '#ff6aa8',
    redOnHover: '#ff4d93',
    boxShadow: '8px 8px 29px -11px rgba(255, 106, 168, 0.3)',
    waveBackground: '#fff0f6',
    accent: '#ff6aa8',
    accentLight: '#ffd6ea',
    accentDark: '#e43b7b'
  },
  dark: {
    background: '#2a1a24',
    inputBackground: '#3d2530',
    elements: '#3d2530',
    onHover: '#4f3241',
    fontColor: '#fffdf6',
    disabledFont: '#ffb6d6',
    red: '#ff6aa8',
    redOnHover: '#ff4d93',
    boxShadow: 'none',
    waveBackground: '#1f1319',
    accent: '#ff6aa8',
    accentLight: '#ffd6ea',
    accentDark: '#e43b7b'
  }
}

type ThemeContextType = {
  themeType: ThemeType,
  theme: Theme
  setTheme?: (themeType: ThemeType) => void
};

export const ThemeContext = createContext<ThemeContextType>({ 
  themeType: 'dark',
  theme: themes['dark']
 });

type ThemeProviderProps = {
  children?: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>(localStorage.getItem('themeType') as ThemeType || 'light');

  const setBodyTheme = () => {
    const { background, fontColor } = themes[themeType];
    document.body.style.backgroundColor = background;
    document.body.style.color = fontColor;
    localStorage.setItem('themeType', themeType)
  }

  useEffect(() => setBodyTheme(), [themeType]);

  return (
    <ThemeContext.Provider
      value={{
        themeType,
        theme: themes[themeType],
        setTheme: setThemeType
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
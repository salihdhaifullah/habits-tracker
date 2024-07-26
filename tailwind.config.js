/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
          "dark": {
            "background": "#1A1110",
            "stateLayer": "rgba(255, 181, 169, 0.08)",
            "error": "#FFB4AB",
            "errorContainer": "#93000A",
            "inverseOnSurface": "#392E2C",
            "inversePrimary": "#904A42",
            "inverseSurface": "#F1DEDC",
            "onBackground": "#F1DEDC",
            "onError": "#690005",
            "onErrorContainer": "#FFDAD6",
            "onPrimary": "#561E18",
            "onPrimaryContainer": "#FFDAD5",
            "onSecondary": "#442926",
            "onSecondaryContainer": "#FFDAD5",
            "onSurface": "#F1DEDC",
            "disabled": "rgba(241, 222, 220, 0.38)",
            "onSurfaceVariant": "#D8C2BE",
            "onTertiary": "#3E2E04",
            "onTertiaryContainer": "#FCDFA6",
            "outline": "#A08C89",
            "outlineVariant": "#534341",
            "primary": "#FFB4A9",
            "scrim": "#000000",
            "primaryContainer": "#73342C",
            "secondary": "#E7BDB7",
            "secondaryContainer": "#5D3F3B",
            "surface": "#1A1110",
            "surfaceBright": "#423735",
            "surfaceContainer": "#271D1C",
            "surfaceContainerHigh": "#322826",
            "surfaceContainerHighest": "#3D3231",
            "surfaceContainerLow": "#231918",
            "surfaceContainerLowest": "#140C0B",
            "surfaceDim": "#1A1110",
            "surfaceTint": "#FFB4A9",
            "surfaceVariant": "#534341",
            "tertiary": "#DFC38C",
            "tertiaryContainer": "#574419",
          },
          "light": {
            "background": "#FFF8F7",
            "stateLayer": "rgba(144, 74, 66, 0.08)",
            "error": "#BA1A1A",
            "errorContainer": "#FFDAD6",
            "inverseOnSurface": "#FFEDEA",
            "inversePrimary": "#FFB4A9",
            "inverseSurface": "#392E2C",
            "onBackground": "#231918",
            "onError": "#FFFFFF",
            "onErrorContainer": "#410002",
            "onPrimary": "#FFFFFF",
            "onPrimaryContainer": "#3B0906",
            "onSecondary": "#FFFFFF",
            "onSecondaryContainer": "#2C1512",
            "onSurface": "#231918",
            "disabled": "rgba(35, 25, 24, 0.38)",
            "onSurfaceVariant": "#534341",
            "onTertiary": "#FFFFFF",
            "onTertiaryContainer": "#261A00",
            "outline": "#857370",
            "outlineVariant": "#D8C2BE",
            "primary": "#904A42",
            "scrim": "#000000",
            "primaryContainer": "#FFDAD5",
            "secondary": "#775652",
            "secondaryContainer": "#FFDAD5",
            "surface": "#FFF8F7",
            "surfaceBright": "#FFF8F7",
            "surfaceContainer": "#FCEAE7",
            "surfaceContainerHigh": "#F7E4E1",
            "surfaceContainerHighest": "#F1DEDC",
            "surfaceContainerLow": "#FFF0EE",
            "surfaceContainerLowest": "#FFFFFF",
            "surfaceDim": "#E8D6D3",
            "surfaceTint": "#904A42",
            "surfaceVariant": "#F5DDDA",
            "tertiary": "#705C2E",
            "tertiaryContainer": "#FCDFA6"
        }        
      },
      boxShadow: {
        'sm-elevated': '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)', // Small elevation
        'md-elevated': '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)', // Medium elevation
        'lg-elevated': '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)', // Large elevation
        'xl-elevated': '0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22)', // Extra large elevation
        '2xl-elevated': '0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.22)', // 2x large elevation
      },
    },
    plugins: [],
  }
}

// #f44336 primary seed
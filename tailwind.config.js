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
        primary: {
          DEFAULT: '#F44336', // Primary red (500): Used for the main elements like headers, primary buttons, and active elements.
          light: '#FFCDD2',   // Light red (100): Used for lighter shades of primary elements, background highlights, or hover effects.
          dark: '#D32F2F',    // Dark red (700): Used for darker shades of primary elements, focus states, or active states.
        },
        secondary: {
          DEFAULT: '#2196F3', // Secondary blue (500): Used for secondary elements like secondary buttons, links, or other secondary actions.
          light: '#BBDEFB',   // Light blue (100): Used for lighter shades of secondary elements, background highlights, or hover effects.
          dark: '#1976D2',    // Dark blue (700): Used for darker shades of secondary elements, focus states, or active states.
        },
        accent: {
          yellow: '#FFFF00',  // Accent yellow (A200): Used for accent elements like highlights, badges, or small details.
          green: '#00E676',   // Accent green (A400): Used for accent elements like highlights, success messages, or small details.
        },
        text: {
          primary: '#212121', // Primary text color: Used for main text elements to ensure good readability.
          secondary: '#757575', // Secondary text color: Used for secondary text elements like subtitles or less important text.
          dark: {
            primary: '#FFFFFF', // Primary text color (dark mode): Used for main text elements in dark mode to ensure good readability.
            secondary: '#B0BEC5', // Secondary text color (dark mode): Used for secondary text elements in dark mode like subtitles or less important text.
          }
        },
        background: {
          DEFAULT: '#FFFFFF', // Background color: Used for the main background color of the site.
          dark: '#121212',    // Background color (dark mode): Used for the main background color in dark mode.
        },
        surface: {
          DEFAULT: '#FAFAFA',    // Surface color: Used for card backgrounds, containers, or any other surface elements.
          dark: '#1E1E1E', // Surface color (dark mode): Used for card backgrounds, containers, or any other surface elements in dark mode.
        },
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

      // /* 
      // /* Shadow 1 */
      // box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
      // 0px 1px 2px rgba(0, 0, 0, 0.24);
      
      // /* Shadow 2 */
      // box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
      
      // /* Shadow 3 */
      // box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23);
      
      // /* Shadow 4 */
      // box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22);
      
      // /* Shadow 5 */
      // box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.22);
      //       */
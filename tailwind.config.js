/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx", "./App.tsx"],
    theme: {
        extend: {
            colors: {
                "red": "#FF0000",
                "light": "#FF6666",
                "dark": "#990000",
                "pink": "#FFCCCC",
                "white": "#FFFFFF",
                "gray": "#CCCCCC",
                "blue": "#0066FF"
            }
        },
    }
}


/* 
Headers and Important Tasks: Use Primary Bright Red (#FF0000).
Subtasks and Secondary Elements: Use Lighter Red (#FF6666).
Completed Tasks or Critical Issues: Use Dark Red (#990000).
Background Highlights: Use Soft Pink (#FFCCCC).
Text on Red Backgrounds: Use Contrasting White (#FFFFFF).
Neutral Elements: Use Neutral Grey (#CCCCCC).
Notifications/Alerts: Use Complementary Blue (#0066FF).
*/


import colors from 'vuetify/es5/util/colors'

export default {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.teal.accent3,
          accent: colors.teal.lighten1,
          secondary: colors.teal.accent4,
          white: colors.white,
          
          info: "#0164d3",
          warning: "#fec500",
          error: "#ff4d7e",
          success: "#2cdd9b",
          
          dark: colors.teal.darken3
        },
        light: {
          primary: colors.teal.accent4,
          accent: colors.teal.accent1,
          secondary: colors.teal.accent3,
          white: colors.white,

          info: "#0164d3",
          warning: "#fec500",
          error: "#ff4d7e",
          success: "#2cdd9b",
          
          dark: colors.teal.darken4
        }
      }
    }
  };
  
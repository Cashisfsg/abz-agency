export const defaultTheme = {
    colors: {
        text: "rgba(0, 0, 0, 0.87)",
        yellow: "#f4e041",
        blue: "#00bdd3",
        body: "#F8F8F8",
        white: "#fff"
    },
    font: {
        primary: "Nunito"
    },
    padding: {
        mobile: "0 1rem",
        tablet: "0 2rem",
        laptop: "0 2.5rem"
    },
    screens: {
        mobile: "360px",
        tablet: "768px",
        laptop: "1024px"
    }
};

export type ThemeType = typeof defaultTheme;

import { Components, Theme } from "@mui/material/styles";

export const components: Components<Omit<Theme, "components">> = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollBehavior: "smooth",
      },
      "*": {
        boxSizing: "border-box",
      },
      "::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#3B82F6",
        borderRadius: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
    },
  },

  MuiContainer: {
    defaultProps: {
      maxWidth: "lg",
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },

    styleOverrides: {
      root: {
        borderRadius: 14,
        padding: "12px 28px",
        fontWeight: 600,
        transition: "all .3s ease",
      },

      contained: {
        background:
          "linear-gradient(135deg,#3B82F6 0%, #06B6D4 100%)",

        color: "#fff",

        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 12px 30px rgba(59,130,246,.35)",
        },
      },

      outlined: {
        borderWidth: 2,

        "&:hover": {
          borderWidth: 2,
          transform: "translateY(-3px)",
        },
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 20,

        background:
          theme.palette.mode === "dark"
            ? "rgba(24,24,27,.7)"
            : "#fff",

        backdropFilter: "blur(18px)",

        border: `1px solid ${theme.palette.divider}`,

        transition: "all .35s ease",

        boxShadow: "none",

        "&:hover": {
          transform: "translateY(-8px)",

          boxShadow:
            "0 20px 45px rgba(0,0,0,.12)",
        },
      }),
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundImage: "none",

        borderRadius: 18,

        border: `1px solid ${theme.palette.divider}`,
      }),
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 10,

        fontWeight: 500,

        paddingInline: 6,
      },
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        background:
          theme.palette.mode === "dark"
            ? "rgba(9,9,11,.75)"
            : "rgba(255,255,255,.75)",

        backdropFilter: "blur(18px)",

        boxShadow: "none",

        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      fullWidth: true,
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 14,

        "& fieldset": {
          borderColor: theme.palette.divider,
        },

        "&:hover fieldset": {
          borderColor: theme.palette.primary.main,
        },

        "&.Mui-focused fieldset": {
          borderWidth: 2,
        },
      }),
    },
  },

  MuiIconButton: {
    styleOverrides: {
      root: {
        transition: ".3s",

        "&:hover": {
          transform: "rotate(8deg) scale(1.08)",
        },
      },
    },
  },

  MuiLink: {
    defaultProps: {
      underline: "none",
    },
  },

  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
  "base": {
    "surface": {
      "primary": "#FAFAFA",
      "secondary": "#F5F5F4",
      "tertiary": "#F0EFEE",
      "subtle": "#FAFAFA"
    },
    "onSurface": {
      "primary": "#1A1A1A",
      "secondary": "#424040"
    }
  },
  "inverse": {
    "surface": {
      "primary": "#1A1A1A"
    },
    "onSurface": {
      "primary": "#FAFAFA"
    }
  },
  "campaign": {
    "surface": {
      "primary": "#BDEC00",
      "primarySubdued": "#DFE1FB"
    },
    "onSurface": {
      "primary": "#1A1A1A",
      "primarySubdued": "#1A1A1A"
    }
  },
  "accent": {
    "surface": {
      "primary": "#2A3E2E",
      "primarySubdued": "#E0F685",
      "secondary": "#292435",
      "secondarySubdued": "#ACAFF4",
      "tertiary": "#361719",
      "tertiarySubdued": "#F8D3B8",
      "brand": "#292435"
    },
    "onSurface": {
      "primary": "#BDEC00",
      "primarySubdued": "#2A3E2E",
      "secondary": "#ACAFF4",
      "secondarySubdued": "#292435",
      "tertiary": "#F8D3B8",
      "tertiarySubdued": "#361719",
      "brand": "#FAFAFA"
    }
  },
  "feedback": {
    "info": "#0A34C6",
    "infoSubdued": "#E0E8FF",
    "success": "#2E6E3B",
    "successSubdued": "#CCF4D5",
    "warning": "#B97809",
    "warningSubdued": "#F9E5C3",
    "danger": "#C41821",
    "dangerSubdued": "#FFD1D4"
  },
  "interface": {
    "iconStyle": "regular-sharp",
    "borderWidth": 1,
    "highlightBorderWidth": 1,
    "selectedBorderWidth": 2,
    "border": "#C3C1BF",
    "borderHover": "#747371",
    "divider": "#DBDAD8",
    "disabled": "#DBDAD8",
    "onDisabled": "#747371",
    "selectedPrimary": "#292435",
    "selectedSecondary": "#F0EFEE"
  },
  "opacity": {
    "transparent": "#FFFFFF",
    "hover": "#1A1A1A",
    "pressed": "#1A1A1A",
    "overlay": "#1A1A1A",
    "onPressed": "#1A1A1A",
    "onHover": "#1A1A1A",
    "dark": {
      "small": "#1A1A1A",
      "medium": "#1A1A1A",
      "large": "#1A1A1A"
    },
    "light": {
      "small": "#FAFAFA",
      "medium": "#FAFAFA",
      "large": "#FAFAFA"
    }
  },
  "specific": {
    "onImage": {
      "gradientA": "#1A1A1A",
      "gradientB": "#1A1A1A",
      "gradientC": "#FAFAFA",
      "gradientD": "#FAFAFA",
      "onSurfaceImageDark": "#FAFAFA",
      "onSurfaceImageLight": "#1A1A1A",
      "onSurfaceImageCampaign": "#BDEC00"
    },
    "onBrutalist": {
      "onSurfaceBrutalist": "#1A1A1A"
    },
    "marketingBanner": {
      "marketingBannerSurface": "#DFE1FB"
    },
    "input": {
      "inputSurface": "#F0EFEE",
      "inputSurfaceLocked": "#E3E2E0",
      "inputBorder": "#747371"
    },
    "toggle": {
      "toggleSurface": "#C3C1BF",
      "toggleSelector": "#FAFAFA"
    },
    "modal": {
      "modalSurface": "#FAFAFA"
    },
    "navigation": {
      "headerSurface": "#FAFAFA",
      "headerSurfaceSecondary": "#F0EFEE",
      "headerSurfaceSecondaryGradient": "#F0EFEE",
      "onHeaderSurface": "#1A1A1A",
      "onHeaderSurfaceSecondary": "#1A1A1A",
      "headerNotificationSurface": "#4624EC",
      "onHeaderNotificationSurface": "#FAFAFA",
      "footerSurface": "#1A1A1A",
      "onFooterSurface": "#FAFAFA"
    },
    "subscriptionCard": {
      "SubscriptionCardSurface": "#F0EFEE",
      "subscription-card-min-height-desktop": 288,
      "subscription-card-min-height-mobile": 295,
      "subscriptionCardBorderWidth": 0
    }
  }
}
    },
  },
  plugins: [],
}
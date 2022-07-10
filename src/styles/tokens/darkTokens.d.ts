/**
 * Do not edit directly
 * Generated on Sat, 09 Jul 2022 07:10:01 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "button": {
    "primary": {
      "background": DesignToken
    },
    "ghost": {
      "outline": DesignToken,
      "text": DesignToken
    }
  },
  "borderWidth": {
    "button": {
      "ghost": DesignToken
    }
  },
  "borderRadius": {
    "button": {
      "ghost": DesignToken
    },
    "card": DesignToken
  },
  "fontSizes": {
    "card": {
      "title": DesignToken,
      "content": DesignToken
    }
  },
  "boxShadow": {
    "default": {
      "0": {
        "x": DesignToken,
        "y": DesignToken,
        "spread": DesignToken,
        "color": DesignToken,
        "blur": DesignToken,
        "type": DesignToken
      },
      "1": {
        "x": DesignToken,
        "y": DesignToken,
        "spread": DesignToken,
        "color": DesignToken,
        "blur": DesignToken,
        "type": DesignToken
      }
    }
  },
  "fg": {
    "default": DesignToken,
    "muted": DesignToken,
    "subtle": DesignToken
  },
  "bg": {
    "default": DesignToken,
    "muted": DesignToken,
    "subtle": DesignToken
  },
  "accent": {
    "default": DesignToken
  },
  "shadows": {
    "default": DesignToken
  }
}
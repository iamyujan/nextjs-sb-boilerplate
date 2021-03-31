// Theme settings configured from Storyblock
const settings = {
  layout: {},
  mobile: {},
  buttons: {
    primary: {
      base_size,  /* ["Small", "Regular", "Large"] */
      border_radius,
      icon, /* SVG code */
      icon_position,
      icon_border_radius,
      states: {
        normal: {
          background, /* color_picker */
          background_opacity, /* color_picker */
          border, /* color_picker */
          text, /* color_picker */
          icon_background, /* color_picker */
          icon_background_opacity, /* color_picker */
          icon_border, /* color_picker */
        },
        hover: {
          background, /* color_picker */
          background_opacity, /* color_picker */
          border, /* color_picker */
          text, /* color_picker */
          icon_background, /* color_picker */
          icon_background_opacity, /* color_picker */
          icon_border, /* color_picker */
        },
      },
    },
    secondary: {
      base_size,  /* ["Small", "Regular", "Large"] */
      border_radius,
      icon, /* SVG code */
      icon_position,
      icon_border_radius,
      states: {
        normal: {
          background, /* color_picker */
          background_opacity, /* color_picker */
          border, /* color_picker */
          text, /* color_picker */
          icon_background, /* color_picker */
          icon_background_opacity, /* color_picker */
          icon_border, /* color_picker */
        },
        hover: {
          background, /* color_picker */
          background_opacity, /* color_picker */
          border, /* color_picker */
          text, /* color_picker */
          icon_background, /* color_picker */
          icon_background_opacity, /* color_picker */
          icon_border, /* color_picker */
        },
      },
    },
    addToCart: {
      base_size,  /* ["Small", "Regular", "Large"] */
      border_radius,
      icon, /* SVG code */
      icon_position,
      icon_border_radius,
      states: {
        normal: {
          background, /* color_picker */
          background_opacity, /* color_picker */
          border, /* color_picker */
          text, /* color_picker */
          icon_background, /* color_picker */
          icon_background_opacity, /* color_picker */
          icon_border, /* color_picker */
        },
        hover: {
          background, /* color_picker */
          background_opacity, /* color_picker */
          border, /* color_picker */
          text, /* color_picker */
          icon_background, /* color_picker */
          icon_background_opacity, /* color_picker */
          icon_border, /* color_picker */
        },
      },
    }
  },
  link_style: {
    primary: {
      base_size,  /* ["Small", "Regular", "Large"] */
      underline_style: [dashed, dotted, solid],
      underline_thickness,
      icon, /* SVG code */
      icon_position,
      icon_border_radius,
      states: {
        normal: {
          text, /* color_picker */
          icon_background, /* color_picker */
          icon_background_opacity, /* color_picker */
          icon_border, /* color_picker */
        },
        hover: {
          text, /* color_picker */
          icon_background, /* color_picker */
          icon_background_opacity, /* color_picker */
          icon_border, /* color_picker */
        },
      },
    },
    secondary: {
      base_size,  /* ["Small", "Regular", "Large"] */
      underline_style: [dashed, dotted, solid],
      underline_thickness,
      icon, /* SVG code */
      icon_position,
      icon_border_radius,
      states: {
        normal: {
          text, /* color_picker */
          icon_background, /* color_picker */
          icon_background_opacity, /* color_picker */
          icon_border, /* color_picker */
        },
        hover: {
          text, /* color_picker */
          icon_background, /* color_picker */
          icon_background_opacity, /* color_picker */
          icon_border, /* color_picker */
        },
      },
    },
  },
  elements: {
    icons: {
      icon_style, /* ["Outline", "Solid"] */
      accordion_icon_type, /* ["Plus and Minus", "Carets"] */
      social_media_icon_border, /* ["Rounded", "Square"] */
    },
    breadcrumbs: {
      capitalization, /* [] */
      seperator,  /* ["Arrow", "Bullet", "Caret", "Slash", ] */
      size,  /* ["Small", "Regular", "Large"] */
    },
    forms: {
      use_placeholders,
      button_style, /* ["Primary", "Secondary", "Link style", "Primary Inverted", "Secondary Inverted", "Link style Inverted"] */
    },
    tags: {
      tag_style,  /* ["Outline", "Solid"] */
    }
  },
  colors: {
    background,
    borders,
    text: {
      body_text,
      links,
      links_hover
    },
    headings: {
      preheading,
      heading,
      subheading,
    },
    header: {
      background,
      links,
      links_cover,
      cart_icon_count,
      drawer_background
    },
    dropdown_menu: {
      show_drop_shadow,
      background,
      background_opacity,
      links,
      links_hover
    },
    footer: {
      background,
      border,
      links,
      links_hover,
      text
    },
    product_thumbnail: {
      sale_price,
      compare_at_price,
      image_hover_text,
      image_hover_background
    },
    product_stickers: {
      best_seller,
      comming_soon,
      new,
      pre_order,
      sale,
      staff_pick
    }
  },
  typography: {
    body_text: {
      regular_font,
      regular_font_size,
    },
    nav: {
      nav_font,
      nav_font_size,
      nav_letter_spacing,
      nav_font_capitalization,
    },
    dropdown: {
      dropdown_heading_font_size,
      dropdown_font_size,
      dropdown_letter_spacing,
      dropdown_font_capitalization,
    },
    button: {
      button__font,
      button_letter_spacing,
      button_font_capitalization,
    },
    heading: {
      heading_font,
      heading_size,
      heading_letter_spacing,
      heading_font_capitalization,
    },
    preheading: {
      preheading_font,
      preheading_size,
      preheading_capitalization,
    },
    subheading: {
      subheading_font,
      subheading_size,
      subheading_capitalization,
    },
    banner: {
      banner_heading__font,
      banner_heading_size,
      banner_heading_capitalization,
      banner_text__font,
      banner_text_size,
      banner_text_letter_spacing,
    },
    footer: {
      footer_heading_font_size,
      footer_font_size,
    }
  },
  product_grid: {
    product_thumbnail: {
      show_vendor,
      text_alignment,
    },
    product_stickers: {
      show_stickers,
      shape,  /* ["Round", "Square"] */
    },
    swatches: {
      show_color_swatches,
      color_swatch_style,  /* ["Round", "Square"] */
    },
    reviews: {
      enable_reviews,
      show_star_rating
    },
  },
  product_form: {},
  social_media: {},
  favicon,
  checkout: {}
}
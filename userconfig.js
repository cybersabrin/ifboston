// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = latte;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Boston",
    scale: "F",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  // Extra clocks to display alongside main clock
    additionalClocks: [
      {
        // Label displayed next to the clock
        label: "PST",
        // IANA timezone name (handles DST automatically)
        timezone: "US/Pacific",
        // 24-hour format
        format: "k:i p",
      },
     ],
  tabs: [ 
    {
      name: "page1",
      background_url: "src/img/banners/banner_18.gif",
      categories: [
        {
          name: "notebook",
          links: [
            {
              name: "coaching notes",
              url: "",
              icon: "stars",
              icon_color: palette.red,
            },
            {
              name: "captain notes",
              url: "",
              icon: "stars",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "uh idk",
          links: [
            {
              name: "toolbox",
              url: "",
              icon: "tool",
              icon_color: palette.green,
            },
            {
              name: "contacts",
              url: "",
              icon: "message",
              icon_color: palette.peach,
            },
            {
              name: "thingamabob",
              url: "",
              icon: "mail-heart",
              icon_color: palette.red,
            },
            {
              name: "gizmo",
              url: "",
              icon: "mail-opened",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "secret third thing",
          links: [
            {
              name: "who knows",
              url: "",
              icon: "plant",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "teams",
      background_url: "src/img/banners/banner_16.gif",
      categories: [
        {
          name: "strategy",
          links: [
            {
              name: "ntl strategy",
              url: "",
              icon: "world",
              icon_color: palette.green,
            },
            {
              name: "pledge",
              url: "",
              icon: "contrast-2",
              icon_color: palette.peach,
            },
            {
              name: "idk",
              url: "",
              icon: "triangle",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "comms",
          links: [
            {
              name: "canva",
              url: "",
              icon: "box",
              icon_color: palette.blue,
            },
            {
              name: "whatever",
              url: "",
              icon: "planet",
              icon_color: palette.peach,
            },
            {
              name: "yaoi",
              url: "",
              icon: "book",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "culture",
          links: [
            {
              name: "vibes",
              url: "",
              icon: "plant",
              icon_color: palette.maroon,
            },
            {
              name: "docs",
              url: "",
              icon: "tool",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "outreach",
          links: [
            {
              name: "vibes",
              url: "",
              icon: "plant",
              icon_color: palette.maroon,
            },
            {
              name: "docs",
              url: "",
              icon: "tool",
              icon_color: palette.yellow,
            },
          ],
        },
      ],
    },
    {
      name: "l inks",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "educational resources",
          links: [
            {
              name: "watch",
              url: "",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "heated",
              url: "",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "rivalry",
              url: "",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "onboarding materials",
          links: [
            {
              name: "the revolution",
              url: "",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "is",
              url: "",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "my",
              url: "",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "boyfriend",
              url: "",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "idk",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);

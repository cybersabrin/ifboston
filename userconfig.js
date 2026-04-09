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
      name: "home",
      background_url: "src/img/banners/home.png",
      categories: [
        {
          name: "notebook",
          links: [
            {
              name: "coaching notes",
              url: "https://docs.google.com/document/d/1FvSQHLtJEf2vFSa17TzzJlS63d-ppDZiAhcsTQzSpfM/edit?exids=71471469,71471463&pli=1&tab=t.0#heading=h.hqv235i1qzyd",
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
              name: "if toolbox",
              url: "https://www.ycfalliance.com/if-toolbox",
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
              name: "protonmail",
              url: "https://www.mail.proton.me",
              icon: "mail-heart",
              icon_color: palette.red,
            },
            {
              name: "calendar",
              url: "https://www.canva.com/design/DAG4g4FjwZ4/G6qUsQUkPhpSa02xQH5nTg/view",
              icon: "calendar",
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
      background_url: "src/img/banners/teams.png",
      categories: [
        {
          name: "strategy",
          links: [
            {
              name: "captain's guide",
              url: "https://docs.google.com/document/d/1iCbr6eIa1Wh82jM4g0U7bbmz8iMuD2KzCF3bgNXJGaA/edit?tab=t.2itfsa64ogcg",
              icon: "world",
              icon_color: palette.green,
            },
            {
              name: "citi pledge",
              url: "https://www.ycfalliance.com/notyourfutureworkers",
              icon: "contrast-2",
              icon_color: palette.peach,
            },
            {
              name: "planning",
              url: "https://docs.google.com/document/d/1hw9HdGovAFhWRmXN4TL3bmtPD6c1pP1DX5IvfuyENC4/edit?tab=t.0",
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
              url: "https://www.canva.com/",
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
      background_url: "src/img/banners/links.png",
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

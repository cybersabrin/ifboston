
// Component for rendering navigation links within tabs
class Links extends Component {
  /**
   * Initialise the Links component
   */
  constructor() {
    super();
  }

  /**
   * Generates icon HTML for a link
   * @param {Object} link - Link object containing icon properties
   * @returns {string} HTML string for the icon or empty string
   */
  static getIcon(link) {
    const defaultColor = CONFIG.palette.base;

    return link.icon
      ? `<i class="ti ti-${link.icon} link-icon"
            style="color: ${link.icon_color ?? defaultColor}"></i>`
      : "";
  }

  /**
   * Generates HTML for all links in a specific tab
   * @param {string} tabName - Name of the tab to render links for
   * @param {Array} tabs - Array of tab objects
   * @returns {string} HTML string containing all links
   */
  static getAll(tabName, tabs) {
    const { categories } = tabs.find((f) => f.name === tabName);

    return `
      ${categories
        .map(({ name, links }) => {
          return `
          <li>
            <h1>${name}</h1>
              <div class="links-wrapper">
              ${links
              .map(
                (link) => `
                  <div class="link-info">
                    <a href="${link.url}" target="_blank">
                      ${Links.getIcon(link)}
                      ${link.name ? `<p class="link-name">${link.name}</p>` : ""}
                    </a>
                </div>`,
              )
              .join("")}
            </div>
          </li>`;
        })
        .join("")}
    `;
  }
}

/**
 * Component for rendering tab categories with background styling
 */
class Category extends Component {
  /**
   * Initialise the Category component
   */
  constructor() {
    super();
  }

  /**
   * Generates background style attribute for category
   * @param {string} url - Background image URL
   * @returns {string} CSS style attribute string
   */
  static getBackgroundStyle(url) {
    return `style="background-image: url(${url}); background-repeat: no-repeat; background-size: contain; background-position: -8px"`;
  }

  /**
   * Generates HTML for all tab categories
   * @param {Array} tabs - Array of tab objects
   * @returns {string} HTML string containing all categories
   */
  static getAll(tabs) {
    return `
      ${tabs
        .map(({ name, background_url }, index) => {
          return `<ul class="${name}" ${Category.getBackgroundStyle(background_url)} ${index == 0 ? "active" : ""}>
            <div class="banner"></div>
            <div class="links">${Links.getAll(name, tabs)}</div>
          </ul>`;
        })
        .join("")}
    `;
  }
}

/**
 * Main tabs component for displaying categorised links and navigation
 */
class Tabs extends Component {
  // CSS selector references for DOM elements
  refs = {};

  /**
   * Initialise the tabs component with configuration
   */
  constructor() {
    super();
    this.tabs = CONFIG.tabs;
  }

  /**
   * Returns CSS import dependencies for this component
   * @returns {string[]} Array of CSS file paths
   */
  imports() {
    return [
      this.getIconResource('material'),
      this.resources.icons.tabler,
      this.getFontResource('maple'),
      this.getLibraryResource('awoo'),
    ];
  }

  /**
   * Generates component CSS styles
   * @returns {string} CSS styles for the tabs component
   */
  style() {
    return `
      status-bar {
          bottom: -70px;
          height: 32px;
          background: ${CONFIG.palette.base};
          border-radius: 4px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, .25);
      }

      #panels, #panels ul,
      #panels .links {
          position: absolute;
      }

      .nav {
          color: #fff;
      }

      #panels {
          border-radius: 5px 0 0 5px;
          width: 90%;
          max-width: 1200px;
          height: 550px;
          right: 0;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          background: ${CONFIG.palette.base};
      }

      .categories {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          border-radius: 10px 0 0 10px;
      }

      .categories ul {
          --panelbg: transparent;
          --flavour: var(--accent);
          width: 100%;
          height: 100%;
          right: 100%;
          background: ${CONFIG.palette.base} url("../img/bg-1.gif") repeat left;
          transition: all .6s;
          # animation: scroll 25s ease-in-out infinite;
      }

      @keyframes scroll {
          50% {
              background-position-x: -240px;
          }
      }

      .categories ul:nth-child(1) {
          --flavour: ${CONFIG.palette.green};
      }

      .categories ul:nth-child(2) {
          --flavour: ${CONFIG.palette.peach};
      }

      .categories ul:nth-child(3) {
          --flavour: ${CONFIG.palette.red};
      }

      .categories ul:nth-child(4) {
          --flavour: ${CONFIG.palette.blue};
      }
      .categories ul:nth-child(5) {
          --flavour: ${CONFIG.palette.mauve};
      }

      .categories ul .links {
          box-shadow: inset -1px 0 var(--flavour);
      }

      .categories ul[active] {
          right: 0;
          z-index: 1;
      }

      .categories .links {
          right: 0;
          width: 70%;
          height: 100%;
          background: ${CONFIG.palette.base};
          padding: 5%;
          flex-wrap: wrap;
      }

      .categories .links li {
          list-style: none;
      }

      .categories ul .links a {
          color: ${CONFIG.palette.text};
          text-decoration: none;
          font: 700 14px 'Maple Mono', sans-serif;
          transition: all .2s;
          display: inline-flex;
          align-items: center;
          padding: .4em .7em;
          background: ${CONFIG.palette.mantle};
          box-shadow: 0 4px ${CONFIG.palette.mantle}, 0 5px 10px rgb(0 0 0 / 20%);
          border-radius: 2px;
          margin-bottom: .7em;
      }

      .categories .link-info {
          display: inline-flex;
      }

      .categories .link-info:not(:last-child) { margin-right: .5em; }

      .categories ul .links a:hover {
          transform: translate(0, 4px);
          box-shadow: 0 0 rgba(0, 0, 0, 0.25), 0 0 0 rgba(0, 0, 0, .5), 0 -0px 5px rgba(0, 0, 0, .1);
          color: var(--flavour);
      }

      .categories .links li:not(:last-child) {
          box-shadow: 0 1px 0 ${CONFIG.palette.text};
          padding: 0 0 .5em 0;
          margin-bottom: 1.5em;
      }

      .categories .links li h1 {
          color: ${CONFIG.palette.text};
        opacity: 0.5;
          font-size: 14px;
          margin-bottom: 1em;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: 'Maple Mono', sans-serif;
      }

      .categories .link-icon {
          font-size: 20px;
          color: ${CONFIG.palette.text};
          margin-top:8px;
      }

      .categories .link-icon + .link-name {
          margin-left: 4px;
      }

      .categories .links-wrapper {
          display: flex;
          flex-wrap: wrap;
      }

      .ti {
          animation: fadeInAnimation ease .5s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          height: 27px;
          width: 27px;
      }

      @keyframes fadeInAnimation {
          0% {
              opacity: 0;
          }
          100% {
              opacity: 1;
          }
      }
    `;
  }

  /**
   * Generates HTML template for the tabs component
   * @returns {string} HTML template with panels and categories
   */
  template() {
    return `
      <div id="links" class="-">

        <div id="panels">
          <div class="categories">
            ${Category.getAll(this.tabs)}
            <search-bar></search-bar>
          </div>
          <status-bar class="!-"></status-bar>
        </div>
      </div>
    `;
  }

  /**
   * Component lifecycle callback when element is connected to DOM
   */
  connectedCallback() {
    this.render();
  }
}

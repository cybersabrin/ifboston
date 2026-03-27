const RenderedComponents = {};

class Component extends HTMLElement {
  refs = {};

  resources = {
    /** Local font only */
    localFonts: {
      maple: '<link rel="stylesheet" href="src/fonts/maple-mono.css">',
    },

    /** Icon font libraries (kept) */
    icons: {
      material:
        '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">',
      materialLocal: '<link rel="stylesheet" href="src/fonts/material-icons-local.css">',
      cryptofont:
        '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/monzanifabio/cryptofont/cryptofont.css">',
      tabler: '<link rel="stylesheet" href="src/css/tabler-icons.min.css">',
    },

    /** CSS libraries */
    libs: {
      awoo: '<link rel="stylesheet" type="text/css" href="src/css/awoo.min.css">',
      awooLocal: '<link rel="stylesheet" type="text/css" href="src/css/awoo-local.min.css">',
    },
  };

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  /** Always use Maple Mono */
  getFontResource() {
    return this.resources.localFonts.maple;
  }

  getIconResource(iconName) {
    if (typeof CONFIG !== 'undefined' && CONFIG.localFonts && iconName === 'material') {
      return this.resources.icons.materialLocal;
    }
    return this.resources.icons[iconName];
  }

  getLibraryResource(libName) {
    if (typeof CONFIG !== 'undefined' && CONFIG.localFonts && libName === 'awoo') {
      return this.resources.libs.awooLocal;
    }
    return this.resources.libs[libName];
  }

  style() {
    return `
      :host {
        font-family: 'Maple Mono', monospace;
      }

      * {
        font-family: inherit;
      }
    `;
  }

  template() {
    return null;
  }

  /** Always inject Maple Mono */
  imports() {
    return [
      this.resources.localFonts.maple
    ];
  }

  set stylePath(path) {
    this.resources.style = `<link rel="preload" as="style" href="${path}" onload="this.rel='stylesheet'">`;
  }

  get getResources() {
    const imports = this.imports();

    if (this.resources?.style) imports.push(this.resources.style);

    return imports;
  }

  async loadStyles() {
    let html = this.getResources.join("\n");

    if (this.style()) html += `<style>${this.style()}</style>`;

    return html;
  }

  async buildHTML() {
    return (await this.loadStyles()) + (await this.template());
  }

  createRef() {
    return new Proxy(this.refs, {
      get: (target, prop) => {
        const ref = target[prop];
        const elems = this.shadow.querySelectorAll(ref);

        if (elems.length > 1) return elems;

        const element = elems[0];
        if (!element) return ref;

        return element;
      },
      set: (target, prop, value) => {
        this.shadow.querySelector(target[prop]).innerHTML = value;
        return true;
      },
    });
  }

  async render() {
    this.shadow.innerHTML = await this.buildHTML();
    this.refs = this.createRef();
    RenderedComponents[this.localName] = this;
  }
}
// Import stylesheets
import './style.css';

const template = document.createElement('template');
template.innerHTML = `
  <h2 id="id">Hello World</h2>
`;

customElements.define(
  'my-component',
  class MyComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      const title = this.getAttribute('title');
      const element = this.shadowRoot.getElementById('id');
      element.innerText = title;
    }
  }
);

import {html} from 'sinuous'

export const card = (title: string) => {
  return html`
    <section class=${"card " + title.replace(" ", "-")}>
      <h2>${title}</h2>
    </section>
  `;
};

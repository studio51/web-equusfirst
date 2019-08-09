import tingle from 'tingle.js';

export default class EquusFirstServices {
  constructor() {
    document.getElementById('servicesForm').addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.create();
    })
  }

  private async create() {
    const res: any  = await fetch(document.getElementsByTagName('link')[0].href);
    const html: any = await res.text();

    const modal: tingle.modal = new tingle.modal({
      closeMethods: ['overlay', 'button', 'escape'],

      beforeClose: () => {
        return true;
      }
    });

    modal.setContent(html);
    modal.open();
  }
}
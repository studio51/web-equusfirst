import tingle from 'tingle.js';

export default class EquusFirstServices {
  constructor() {
    document.getElementById('servicesForm').addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.create();
    })
  }

  private create() {
    const modal: tingle.modal = new tingle.modal({
      closeMethods: ['overlay', 'button', 'escape'],

      beforeClose: () => {
        return true;
      }
    });

    fetch(document.getElementsByTagName('link')[0].href)
      .then((res: any) => res.text())
      .then((html: any) => {
        modal.setContent(html);
        modal.open();
      });
  }
}
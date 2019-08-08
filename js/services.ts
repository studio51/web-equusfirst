import tingle from 'tingle.js';

export default class EquusFirstServices {
  constructor() {
    document.getElementById('servicesForm').addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      this.show();
    })
  }

  private async show() {
    var modal = new tingle.modal({
      footer: false,
      stickyFooter: false,
      closeMethods: ['overlay', 'button', 'escape'],
      closeLabel: '',
      cssClass: [],

      onOpen: () => { },
      onClose: () => { },
      beforeClose: () => {
        return true;
      }
    });

    fetch(document.getElementsByTagName('link')[0].href)
      .then((res: any) => res.text())
      .then((html: any) => {
        // const parser: DOMParser = new DOMParser();
        // const page: any = parser.parseFromString(html, 'text/html');

        // page.getElementsByTagName('body')[0];

        modal.setContent(html);
        // modal.addFooterBtn('Send', 'btn -green', () => {
        //   window.open('mailto:test@example.com?subject=subject&body=');
        // });

        modal.open();
      })
  }

  private submit() {

  }
}
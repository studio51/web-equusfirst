import * as Cheerio from 'cheerio';
import Axios, { AxiosResponse } from 'axios';

const options: any = {
  crossdomain: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	}
}

const html = async () => {
  const result: AxiosResponse = await Axios.get('https://cors-anywhere.herokuapp.com/https://www.facebook.com/pg/equusfirst/posts/', options);
  return Cheerio.load(result.data);
}

export default class EquusFirstScrapper {
  posts: any[];

  constructor() {
    console.log(this)

    this.initialize();
  }

  async initialize() {
    const $ = await html();

    console.log(await html())

    $('._1xnd').each((index: number, element: any) => {
      this.posts[index] = {};

      const post: any = $(element).find('.userContentWrapper');
      console.log($(post).find('[data-testid=post_message]'))
    })

    console.log(this.posts)
  }

  getLatestPosts() {
  }
}
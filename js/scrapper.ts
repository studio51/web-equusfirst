import * as Cheerio from 'cheerio';
import Axios, { AxiosResponse } from 'axios';

interface Post {
  message: string,
  images: [{
    id: number,
    url: string
  }],
  likes: number,
  url: string,
  date: Date | string
}

const cheerioOptions: any = {
  withDomLvl1: true,
  normalizeWhitespace: true,
  xmlMode: true,
  decodeEntities: true
}

const axiosOptions: any = {
  crossdomain: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
	}
}

const html = async () => {
  const result: AxiosResponse = await Axios.get('https://cors-anywhere.herokuapp.com/https://www.facebook.com/pg/equusfirst/posts/', axiosOptions);
  return Cheerio.load(result.data, cheerioOptions);
}

export default class EquusFirstScrapper {
  posts: any = {};

  constructor() {
    this.get();
  }

  async get() {
    // const $ = await html();

    // $('._1xnd').children().each((index: number, element: any) => {
    //   const wrapper: any = $(element).find('.userContentWrapper');
    //   const post: any    = $(wrapper).find('[data-testid=post_message]');
    //   const images: any  = $(wrapper).find('.uiScaledImageContainer');

    //   this.posts[index] = {};
    //   this.posts[index]['message'] = $(post).text();
    //   this.posts[index]['images']  = [];
    //   this.posts[index]['likes']   = 0;

    //   try {
    //     images.each((index: number, element: any) => {
    //       this.posts[index]['images'].push({
    //         id: '',
    //         url: element.parent.attribs['data-ploi']
    //       })
    //     });
    //   } catch(e) {
    //     console.log(e)
    //   }
    // });

    this.posts = JSON.parse(JSON.stringify({"0":{"message":"Long hectic day out on a course! 3 hours of practical circuits, plus theory an assessment (which I passed with flying colours!!) and an hours drive home, a lift up the hill from fluffy ears was well earned tonight!","images":[{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/67305977_2454147981316544_2913204006807404544_n.jpg?_nc_cat=105&_nc_oc=AQnl28yMzoKwL7aGvxilSXUEz7SQJXLxVNKThKnHfBsX2pGtEbN8ZZx2CW88QJbHiqA&_nc_ht=scontent-iad3-1.xx&oh=c3a348092308fc42d9d3044a5a45131a&oe=5DE9D309"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/67418616_2449043888493620_340317355810750464_n.jpg?_nc_cat=111&_nc_oc=AQn5UJni060I0_T0Ug4FDEeguwdPAY3b5YF5fNNguZmnU4wb0k1OI8KkNGPXPh2_jHE&_nc_ht=scontent-iad3-1.xx&oh=eb7fd346745bddffeb676d637547e459&oe=5DE99761"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/67148861_2440390722692270_7050816998300712960_n.jpg?_nc_cat=108&_nc_oc=AQlZp6J9rVfY64510EQoxNPiTQIDJXlnmHlAFufUP-NxvTzHpa6NskjsHIP88E5jzB8&_nc_ht=scontent-iad3-1.xx&oh=d37afb6a6d40661a034f46f902d873b8&oe=5DA1553D"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/66662902_2433515143379828_6176267189029437440_n.jpg?_nc_cat=103&_nc_oc=AQmiry2Y-jHh40gPVlcNktbsxyqMvtSIhU0PSv4SNtX2Jmx4jqLOGNhzx9IdpXMFgQo&_nc_ht=scontent-iad3-1.xx&oh=265c5cc3f282dc115fc3a1bde4ba64d8&oe=5DAE1619"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/67473444_2431406930257316_4267433007989653504_n.jpg?_nc_cat=104&_nc_oc=AQm0uMirloZL8IID9fpGb1_I6BcpBhqgbhCIPeJ9yndcVwb-KcNfX0gitJYM1ZTImco&_nc_ht=scontent-iad3-1.xx&oh=781dbbe903aa1d26f0739c120de1afdb&oe=5DE51425"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/67354581_2429137977150878_2962276228662296576_n.jpg?_nc_cat=100&_nc_oc=AQlwEjtbJ_BDYBYYs6SsF8cDgqueMbF57aS6RMoXBrovRoL9JbGvWeSnP_qW3-KCcro&_nc_ht=scontent-iad3-1.xx&oh=75d9aa94e4843f08475e85f24af7a752&oe=5DDD9D33"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/66821542_2056429341129693_1233209905251352576_n.jpg?_nc_cat=110&_nc_oc=AQk9PKyHJdaxQrE_0rTt60YA4dpahskYEBYg38wW4SFHqPsnr9pvpeBjQVkpdOWD3l8&_nc_ht=scontent-iad3-1.xx&oh=b7f6143b006e533338478febb403d088&oe=5DA7995B"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/66768812_2424570800940929_8090278669676707840_n.jpg?_nc_cat=102&_nc_oc=AQnf7Fky6ejDpG56-LJI21_I0I-M9YQieYz4uzNO5VMwRVsfpR9c2J7kXExxVv7w7l4&_nc_ht=scontent-iad3-1.xx&oh=1605a48ac76eb8cd30a09d20c5912427&oe=5DAF84AF"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/66167760_2420246508040025_1539204927564283904_o.jpg?_nc_cat=109&_nc_oc=AQkIkBQi4wpy0yykYwiUunlvmlJMhTNXimgIAc1c1xfwDYIme_txVzB3ua21qg0ydRA&_nc_ht=scontent-iad3-1.xx&oh=ff01a4d404f1a0af540bd28c428a5995&oe=5DE54384"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/65288623_2395954733802536_251274111009947648_n.jpg?_nc_cat=111&_nc_oc=AQmhBu5Zw0nr30Hdr5etWQSIJC7HkKN3IZfCrIs0jP_JeERFQ-I-NWU3FF6FGT1L2V4&_nc_ht=scontent-iad3-1.xx&oh=3efa23d686b46ceb9bb6f85e27140434&oe=5DABBBBA"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/64208495_2384626254935384_4481489895939899392_n.jpg?_nc_cat=108&_nc_oc=AQlxLfbwC5Ep6Fc4CDjbaiKGawnofpOUqXWovVI6VGIm0kBGTjLszaQIytpfFm7BtX0&_nc_ht=scontent-iad3-1.xx&oh=f7006bb985dcf62c09ca6a4164cbc806&oe=5DD83ECB"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/62605816_2379993128732030_8200157144427790336_n.jpg?_nc_cat=106&_nc_oc=AQlpdEUunctOw2OMonpUbr0ThhwPRxYqrV2C7pYadJ_12ajwmffsniW9b0eU1yqYbOA&_nc_ht=scontent-iad3-1.xx&oh=ef2c38ce96f80d0f085e13b66d98b0f2&oe=5DA3903E"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/62001380_2373336572731019_7412122356048461824_n.jpg?_nc_cat=100&_nc_oc=AQmCecf7LBXd6whFNn6C-xCYGhT5i3hOGvPatg-noATmludacn_9yN_qmZtUrOjIATg&_nc_ht=scontent-iad3-1.xx&oh=2c52e7e4ef38a6e4ba8fde544a84a35f&oe=5DAE004B"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/61954872_2366461053418571_6051935118535163904_o.jpg?_nc_cat=110&_nc_oc=AQltEfVkr2lTlETUGIrri8_YDeErF-WjM-oS_vxPNpDz2ZuacL5nVzBOYUQoDniB0Pk&_nc_ht=scontent-iad3-1.xx&oh=d738d49611498eec9fa2be4f03462260&oe=5DDCA614"}],"likes":0},"1":{"message":"Wondering how much grass your horse is eating. Thought this was an interesting visual. The little strip with the ladder in looked like the other 4 days ago.","images":[{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/67514963_2449043885160287_4437739147154685952_n.jpg?_nc_cat=111&_nc_oc=AQlgBjCpHwxmdwEaRLa9MADU0sQGn15-bKyPhB9r4dAAEWD-agRiGjdtPZxZQBOY4jI&_nc_ht=scontent-iad3-1.xx&oh=79fed2bafd0165d64800c25a0fb33459&oe=5DE928E3"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/67182606_2440390759358933_166297298295324672_n.jpg?_nc_cat=102&_nc_oc=AQnjwlmVrYJ1F61KYule6uE44hHUSUsb_r4nIZQe8S4VpGIobm-uRRYjnIuWk7AX1Ac&_nc_ht=scontent-iad3-1.xx&oh=4534e2b603bbe1890372882261aaa9a3&oe=5DE9DFAC"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/66769137_2433519670046042_3552134130718212096_n.jpg?_nc_cat=106&_nc_oc=AQmcidoNL6GyE-Q1lO487-qbZr6pomZua0Nbyhkx5kzkl7IlX1jPHVp5EQcrRIwyIM0&_nc_ht=scontent-iad3-1.xx&oh=d68072415bc9b29b6993ea10c6f5887d&oe=5DA89422"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/66624368_2431406936923982_2316390375150845952_n.jpg?_nc_cat=101&_nc_oc=AQlatXVSykINhfQRv5AMAO4vHZORWgjkq2iADc6QWu4crPf1S29w9ligrtDM_PDP93g&_nc_ht=scontent-iad3-1.xx&oh=3d7fef38ae399c5df25aa624765474f4&oe=5DEACEDC"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/66439315_2429138000484209_6181330444370313216_n.jpg?_nc_cat=104&_nc_oc=AQljDdKjqEFKcKOLe8AqYUCO7Sm_n3zfVtoqFKchgaL7njGxeahwYxeo0Qz28Ts0i-8&_nc_ht=scontent-iad3-1.xx&oh=b8ed51e6703c05d1d5e3f29659e65d83&oe=5DAEB569"},{"id":"","url":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/64982119_2395954740469202_3479042282785603584_n.jpg?_nc_cat=107&_nc_oc=AQnbswqkjCciS0Y4HiuKsvpezJL8M5G60DdFcS7kfnkrsGNF5w219P_0Qi1GZSb7XMk&_nc_ht=scontent-iad3-1.xx&oh=935fd82d2ebb7f98a96f31c7993d77f1&oe=5DDEB061"}],"likes":0},"2":{"message":"Massive well done to everyone on the pole clinics today! Mr T got a jockey swap for the fun stuff 🐎 Nora worked on her canter, Indie was a starand I got to test my own set up, working on getting those shoulders lifted up and stretching as well as staying calm with ‘jumps’ up working around them in the arena","images":[],"likes":0},"3":{"message":"One flat out dead pony and one mardy with a squishy mush 😍😍😍🐎 #ponysnuggles #earlystart","images":[],"likes":0}}))
    this.show();
  }

  show() {
    console.log(this.posts)
    if ('content' in document.createElement('template')) {
      // @ts-ignore
      const stupidTypeScriptNotKnowingWhatObjectValuesAre: any = Object.values;

      stupidTypeScriptNotKnowingWhatObjectValuesAre(this.posts).forEach((post: Post) => {
        var template: any = document.querySelector('#feedPost');

        var tbody = document.querySelector('#feedContent');
        var clone = document.importNode(template.content, true);

        if (post.images.length > 0) {
          clone.querySelector('.feed-post-image').src = post.images[0].url;
        }

        clone.querySelector('.feed-post-content').textContent = post.message;

        tbody.appendChild(clone);
      });
    } else {
      console.log('no')
    }
  }
}
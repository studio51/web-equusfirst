export default interface Post {
  source:     string,
  type:       string,

  message:    string,
  likes:      number,
  url?:       string,
  date?:      Date | string,

  images?: [{
    id:       number | string,
    url:      string
  }]
}
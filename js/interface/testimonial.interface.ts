export default interface Testimonial {
  source:     string,
  type:       string,

  author:     string,
  date:       Date | string,
  message:    string,

  images?:    []
}
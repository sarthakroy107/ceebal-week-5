export type TMusicDetails = {
  id: number;
  title: string;
  artist: string;
  cover: string;
  url: string;
}

export const songs: TMusicDetails[] = [
  {
    id: 0,
    title: "Look at the sky",
    artist: "Porter Robinson",
    cover: "https://lh3.googleusercontent.com/TdR9uabhsGy9nyW4YdQADEvgyFQeqpdzy2A7CZcRJV7lU9zvJDrKV6tfTTYZga0ivs70yI4iVEqvPZpx=w544-h544-l90-rj",
    url: "look-at-the-sky.mp3"
  },
  {
    id: 1,
    title: "I love you",
    artist: "xxsagexx",
    cover: "https://lh3.googleusercontent.com/3zaDMV0mqKzio-qnVPh7uoQXiPJMXpXP1uxErobWxc_uWK7x2PMWX-4Odp1hj_NW5kL2fk1t_KiEjd5Q=w544-h544-l90-rj",
    url: "i-love-you-xxsagexx.mp3"
  },
  {
    id: 2,
    title: "The wolf",
    artist: "SIAMES",
    cover: "https://i.ytimg.com/vi/lX44CAz-JhU/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3nW_dau8RlGM2vwFzSRceBm4vck7w",
    url: "the-wolf.mp3"
  }
]
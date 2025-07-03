export interface BlogItem {
  id: number;
  img: string;
  imglogo: string;
  date?: string;       // optional
  time: string;
  location: string;
  title: string;
  desc: string;
}


 export const FarmProduct: BlogItem[] = [
    {
    id: 1,
    img: "/assets/greenfarm1/greenfarm1.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
    time: "This farm produces organic products",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: 2,
    img: "/assets/greenfarm1/greenfarm2.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
   time:"This farm produces organic products",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: 3,
    img: "/assets/greenfarm1/greenfarm3.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
   time:"This farm produces organic products",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: 4,
    img: "/assets/greenfarm1/greenfarm4.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
   time:"This farm produces organic products",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  ];
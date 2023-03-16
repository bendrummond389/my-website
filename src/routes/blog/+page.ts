const posts = [{title: "lorem", text: 'slorem borem', slug: 'slimy'},
{title: "ipsum", text: 'ipsum jipsum', slug: 'gross'},
{title: "ipsum", text: 'ipsum jipsum', slug: 'gross'},
{title: "ipsum", text: 'ipsum jipsum', slug: 'gross'},
{title: "ipsum", text: 'ipsum jipsum', slug: 'gross'},
{title: "ipsum", text: 'ipsum jipsum', slug: 'gross'},
]

export const load = () => {
  return {
    posts
  }
}

export type Post = {
  title: string;
  text: string;
  slug: string;
};

export type Data = {
  posts: Post[];
};
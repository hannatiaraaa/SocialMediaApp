export type TAccountInfo = {
  name: string;
  imageUrl?: string;
};

export type TPostItem = {
  name?: string;
  profilePicture?: string | null;
  photo?: string | null;
  content?: string;
};

export interface IPostItem extends TPostItem {
  name: string;
}

export type TDummyData = {
  accountInfo: TAccountInfo;
  posts: IPostItem[];
};

const profilePicture =
  'https://upload.wikimedia.org/wikipedia/commons/9/9e/The_cutest_smile_in_the_world.jpg';
const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec convallis leo. Vivamus placerat elit lectus, eleifend eleifend lorem commodo id. Mauris id sapien consectetur, faucibus lorem quis, tincidunt mauris. Fusce aliquet, mauris vitae imperdiet maximus, risus ante interdum libero, pretium malesuada urna ante nec nunc. Nunc non mi nec tellus posuere ultrices vitae a orci. Vivamus aliquam rhoncus magna, vel mollis metus facilisis et. Curabitur tempor pharetra odio, a molestie lorem mollis ac. Fusce et dictum turpis. Quisque sodales a tortor non pharetra.';
const someContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec convallis leo.';
const miniContent = 'Lorem ipsum dolor sit amet';

const data: TDummyData = {
  accountInfo: {
    name: 'Bayu Utomo',
    imageUrl: profilePicture,
  },
  posts: [
    {
      name: 'UsupSuparma',
      profilePicture:
        'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      photo: null,
      content,
    },
    {
      name: 'Bayu Utomo',
      profilePicture,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/5/51/A_view_below.jpg',
      content: someContent,
    },
    {
      name: 'Rohan Holland',
      profilePicture:
        'https://upload.wikimedia.org/wikipedia/commons/6/6c/TomCruiseByIanMorris2010.jpg',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/8/80/Eastern_View_from_Bald_Rock.jpg',
      content: miniContent,
    },
    {
      name: 'Kayne Meadows',
      profilePicture:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Prince_Harry_and_Meghan_Markle_on_Christmas_Day_2017_%282%29.jpg',
      photo: null,
      content,
    },
    {
      name: 'Zane Shaw',
      profilePicture:
        'https://upload.wikimedia.org/wikipedia/commons/2/26/Shawn_Mendes_teaches_you_Canadian_slangs_02.jpg',
      photo: null,
      content: miniContent,
    },
    {
      name: 'Fletcher Carver',
      profilePicture: null,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/7/7b/Hadjret_ennouss,_Tipasa.jpg',
      content,
    },
    {
      name: 'Meghan Skinner',
      profilePicture:
        'https://upload.wikimedia.org/wikipedia/commons/f/ff/Meghan_Markle_visits_Northern_Ireland_-_2018_%2841014635181%29.jpg',
      photo: null,
      content: miniContent,
    },
    {
      name: 'Maddie Hancock',
      profilePicture: null,
      photo: null,
      content,
    },
    {
      name: 'Keaton Santana',
      profilePicture: null,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/9/9e/Northern_View_from_Bald_Rock.jpg',
      content: someContent,
    },
    {
      name: 'Stella Romero',
      profilePicture:
        'https://upload.wikimedia.org/wikipedia/commons/a/af/Disneyland_Cinderella_handstogether.jpg',
      photo: null,
      content,
    },
    {
      name: 'Ross Moreno',
      profilePicture:
        'https://upload.wikimedia.org/wikipedia/commons/5/5e/Domestic_cat_in_the_grass.JPG',
      photo: null,
      content: someContent,
    },
    {
      name: 'Lula Burch',
      profilePicture:
        'https://upload.wikimedia.org/wikipedia/commons/0/01/BLACKPINK%27s_Lisa_for_BULGARI_June_2023_0.2.jpg',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/d/db/The_upside_down.jpg',
      content,
    },
  ],
};

export default data;

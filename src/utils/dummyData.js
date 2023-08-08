const profilePicture =
  'https://upload.wikimedia.org/wikipedia/commons/9/9e/The_cutest_smile_in_the_world.jpg';
const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec convallis leo. Vivamus placerat elit lectus, eleifend eleifend lorem commodo id. Mauris id sapien consectetur, faucibus lorem quis, tincidunt mauris. Fusce aliquet, mauris vitae imperdiet maximus, risus ante interdum libero, pretium malesuada urna ante nec nunc. Nunc non mi nec tellus posuere ultrices vitae a orci. Vivamus aliquam rhoncus magna, vel mollis metus facilisis et. Curabitur tempor pharetra odio, a molestie lorem mollis ac. Fusce et dictum turpis. Quisque sodales a tortor non pharetra. Vivamus suscipit dignissim ex sed vulputate.';
const someContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec convallis leo.';
const miniContent = 'Lorem ipsum dolor sit amet';

const data = {
  accountInfo: {
    imageUrl: profilePicture,
  },
  posts: [
    {
      name: 'UsupSuparma',
      profilePicture,
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
      profilePicture,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/8/80/Eastern_View_from_Bald_Rock.jpg',
      content: miniContent,
    },
    {
      name: 'Kayne Meadows',
      profilePicture,
      photo: null,
      content,
    },
    {
      name: 'Zane Shaw',
      profilePicture,
      photo: null,
      content: miniContent,
    },
    {
      name: 'Fletcher Carver',
      profilePicture,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/7/7b/Hadjret_ennouss,_Tipasa.jpg',
      content,
    },
    {
      name: 'Ameer Skinner',
      profilePicture,
      photo: null,
      content: miniContent,
    },
    {
      name: 'Maddie Hancock',
      profilePicture,
      photo: null,
      content,
    },
    {
      name: 'Keaton Santana',
      profilePicture,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/9/9e/Northern_View_from_Bald_Rock.jpg',
      content: someContent,
    },
    {
      name: 'Stella Romero',
      profilePicture,
      photo: null,
      content,
    },
    {
      name: 'Ross Moreno',
      profilePicture,
      photo: null,
      content: someContent,
    },
    {
      name: 'Lula Burch',
      profilePicture,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/d/db/The_upside_down.jpg',
      content,
    },
  ],
};

export default data;

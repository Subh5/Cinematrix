import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

  image: {
    height: '70%',
  },
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImage: {
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  },
}));

import User from '../User';
import classes from './Header.module.css';

export default async function Header() {
  return (
    <div className={classes.header}>
      <h1 className='font-bold'>My Auth App</h1>
      <User />
    </div>
  );
}

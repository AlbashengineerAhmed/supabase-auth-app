import User from '../User';
import classes from './Header.module.css';
import Link from "next/link";

export default async function Header() {
  return (
    <div className={classes.header}>
      <h1 className='font-bold'><Link href="/">My Auth App</Link></h1>
      <User />
    </div>
  );
}

import Navbar from "../Navbar/Navbar";
import { useRouter } from "next/router";
import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div>
      <Navbar />
    </div>
  )
}
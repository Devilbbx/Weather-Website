import Image from 'next/image';
import Button from './button';

export default function Navbar() {
  return (
    <nav style={{ display : 'flex', alignItems: 'center',justifyContent:'space-between',padding:'32px',backgroundColor:'#041614', height: '100px', width: '100%', gap: '200px' }}>
    <Image src="/raad-logo.svg" alt="Logo" width={100} height={80} />
    <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: '0 20px', gap: '20px',color: 'white', fontSize: '20px' }}>
      <li> Home </li>
      <li> About us </li>
      <li> Weather </li>
      <li> Map </li>
      <Button children="Weather" onClick={undefined} />
    </ul>
  </nav>
)
}
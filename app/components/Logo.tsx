import logoImage from '../assets/logo';

export default function Logo(){
  return <span className="logo" aria-label="Expertise Engenharia">
    <img src={logoImage} alt="Expertise Engenharia" style={{display:'block',width:'168px',maxWidth:'42vw',height:'48px',objectFit:'contain',objectPosition:'left center'}} />
  </span>
}

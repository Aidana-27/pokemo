import konst from "../konstract"

const Header=()=>{
return(
    <>
    <div className='header'>
         <p className='logo'>
           {konst.logo}
         </p>
         <div className='link'>
           <a href="#" className='text'>
             {konst.home}
           </a>
           <a href="#" className='text'>
             {konst.about}
           </a>
           <a href="#" className='text'>
               {konst.services}
             </a>
             <a href="#" className='text'>
               {konst.work}
             </a>
             <a href="#" className='text'>
               {konst.contact}
             </a>
           </div>
         </div>
    </>
)
}

export default Header
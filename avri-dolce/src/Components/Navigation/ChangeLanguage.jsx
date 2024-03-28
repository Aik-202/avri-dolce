import React from 'react'
import { it, us } from '../../Data';
// import { flag } from '../../Data'

export default function ChangeLanguage() {
    const [lang, setLang] = React.useState("en");
 
    // This function put query that helps to
    // change the language
    const handleChange = (e) => {
        setLang(e.target.value);
        let loc = "http://localhost:5173/";
        window.location.replace(
            loc + "?lng=" + e.target.value
        );
    };

  return (
    <div className='flex flex-row space-x-2'>
      <img src={lang ? us : it } alt="flag" className='w-[30px] self-center' />
      <select className='px-2 py-1 rounded-full border-solid 
      border-[1px] border-dark-green bg-white items-center' 
      onChange={handleChange}>
          <option value="en" className='flex flex-row space-x-3'>English</option>
          <option value="it" className='flex flex-row space-x-3'>Italian</option>
      </select>
    </div>
  )
}

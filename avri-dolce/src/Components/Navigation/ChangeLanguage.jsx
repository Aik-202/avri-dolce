import React from 'react'
import { it, us } from '../../Data';
// import { flag } from '../../Data'

export default function ChangeLanguage() {
  React.useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'it',
        includedLanguages: 'en,it', // include this for selected languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      'google_translate_element'
    );
  };

  return (
    <div id="google_translate_element" className='h-[-20px]' > </div>
  )
}

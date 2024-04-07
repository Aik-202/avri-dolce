import React from 'react'
import { it, us } from '../../Data';
// import { flag } from '../../Data'

export default function ChangeLanguage() {
  var duplicate_google_translate_counter = 0;//this stops google adding button multiple times
  const googleTranslateElementInit = () => {
    if (duplicate_google_translate_counter == 0) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "it",
          autoDisplay: false
        },
        "google_translate_element"
      );
    }
    duplicate_google_translate_counter++;
  };
  React.useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div id="google_translate_element"></div>
  )
}

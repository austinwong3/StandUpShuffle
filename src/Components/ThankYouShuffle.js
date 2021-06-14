import {Component} from 'react'
import {Translator, Translate} from 'react-auto-translate';

import { googleTranslate } from "../utils/googleTranslate";
import cookie from "react-cookies";

import languageCodes from './languageCodes'
class ThankYouShuffle extends Component{

    state = {
        languageCodes: languageCodes,
      };
    
      render() {
        const { languageCodes } = this.state;
        const currentLanguage= languageCodes[Math.floor(Math.random()*languageCodes.length)]
        console.log(languageCodes)
        return (
          <div class="d-flex flex-column align-items-center">
              {/* <Translator
                from='en'
                to={currentLanguage? currentLanguage['language'] : 'en'}
                googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY}
                >

                <h1><Translate>Thank You</Translate></h1>
                <h1>{currentLanguage? currentLanguage['name'] : 'English'}</h1>
                </Translator> */}
                <a class="btn btn-primary m-1" style={{'background-color': '#569CBF', 'border-color': '#569CBF'}} target="_blank" href={'https://translate.google.com/?sl=en&tl='+(currentLanguage? currentLanguage['language'] : 'en')+'&text=thank%20you&op=translate'}>Thank You of the Day</a>
          </div>
        );
      }
}

export default ThankYouShuffle
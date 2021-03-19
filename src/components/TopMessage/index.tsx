import { useState } from 'react';
import {Message} from './styles';

export function TopMessage() {

  // sets if the top message is visible 
  const [isVisible, setIsVisible] = useState(true); 

  function handleHideMessage() {
    setIsVisible(false); 
  }

  return (
    <>
      {isVisible && 
        <Message>
          Devido a COVID 19, nosso tempo de entrega foi extendido. 
          <button 
            type="button"
            onClick={handleHideMessage}
          >x</button>
        </Message>
      }
    </>
  ); 
}
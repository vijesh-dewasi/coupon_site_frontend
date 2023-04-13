import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

// FONT AWESOME INCLUDES START 
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
// import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
// import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'
// library.add(fas, faTwitter, faFontAwesome, faHatCowboy, faHatChef, faPlateUtensils)
//END

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



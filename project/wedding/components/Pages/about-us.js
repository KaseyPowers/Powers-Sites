import React from 'react'
import Page from './Page';

import './about-us.less';

const AboutUsText = "Our flame ignited in the summer two years ago. A first date in Sarah's hometown where Kasey was attending Florida Tech at the always romantic Buffalo Wild Wing's. The only restaurant we could think of that was still open after he got off his night shift. Sarah first fell for Kasey that evening, tripping on a bench on the way out. After a few more dates, endless texting and phone calls Kasey left her a note with a package of green apple licorice. The note read \"Will you be my girlfriend? Check Yes or No\". Little less than two years later we found ourselves rushing to breakfast at Cinderella's Castle. Minus some little hiccups: unexpectedly cold weather, passing both our parents on our way there and convincing her they were some dopplegangers, we finally made it to the best seat in the whole restaurant. Right in the middle, against the window looking out at the park. Children and princesses surrounding us, trumpets sounded - confused, thinking the waiter was bringing the check, he instead brought out a glass slipper and announced the prince has something to ask her. With everyone in the whole restaurant looking at us, Kasey drops to one knee and everything else just faded away. Balling at this point, of course with photos to prove, She said yes.";

let siteName = document.domain;
let startIndex = siteName.indexOf('www.');
startIndex = startIndex >= 0 ? startIndex + 'www.'.length : 0;
siteName = siteName.substring(startIndex);
siteName = _.trimEnd(siteName, '.com');

const prefix = (siteName === 'localhost' || siteName === 'thefamilypowers') ? '/wedding/' : '/';

var AboutUs = React.createClass({
  render: function() {
    return (
      <Page>
        <p className="about-us">
          <span className="image-container float-left">
            <img src={prefix + 'images/couple1.jpg'} className='img-responsive img-circle center-block'/>
          </span>
          <span className="image-container float-right">
            <img src={prefix + 'images/couple2.jpg'} className='img-responsive img-circle center-block'/>
          </span>
          <span className="text-test-c">
            {AboutUsText}
          </span>
        </p>
      </Page>
    )
  }
});


// var AboutUs = React.createClass({
//   render: function() {
//     return (
//       <Page>
//         <h2>About Us</h2>
//         <div className="row">
//           <div className="col-xs-4 text-test-a">
//             <h4>Allura</h4>
//             <p>{AboutUsText}</p>
//           </div>
//           <div className="col-xs-4 text-test-b">
//             <h4>Homemade Apple</h4>
//             <p>{AboutUsText}</p>
//           </div>
//           <div className="col-xs-4 text-test-c">
//             <h4>Dancing Script</h4>
//             <p>{AboutUsText}</p>
//           </div>
//         </div>
//       </Page>
//     )
//   }
// });

export default AboutUs

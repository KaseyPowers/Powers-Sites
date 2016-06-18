import React from 'react'
import Page from './Page';

import './about-us.less';

const AboutUsText = "Kasey and I's flame ignited two years ago in the summer of 2014. Our first date was at the local Buffalo Wild Wing's in my hometown where he was attending FIT. Buffalo Wild Wing's was the only restaurant we both knew that was open past 11 PM on a Tuesday night. This is when I can honestly say I fell for him, because when we were leaving the restaurant I literally fell over a bench when he was walking me out to my car. After a few more dates, endless texting and phone calls one morning I stopped by his place before work and there was a note plus a package of green apple licorice. The note read \"Will you be my girlfriend? Check Yes or No\". Little less than two years later we found ourselves on January 23rd 2016 rushing to breakfast at Cinderella's Castle. Minus some little hiccups of me thinking I saw my parents car, maybe seeing Kasey's parents twins outside the park and one of the cast members being overly excited when we checked in, we finally made it to the best seat in the whole restaurant. We were right in the middle, against the window looking out at the park. Children and princesses surrounding us, trumpets sounded - while I thought they were bringing us the check the waiter brought out a glass slipper and announced my prince has something to ask me. With everyone in the whole restaurant looking at us, Kasey drops to one knee and everything else just faded away. I'm balling at this point, of course with photos to prove, I say yes (obviously). Every day is a blessing with him by my side. He is my best friend, partner in crime, other half, my person, tutor, my confident, and simply my everything. I could go on and on about how thoughtful, how amazing, how loving, how kind, how great he is with kids, or how much he means to me - but simply you would fall in love with him as well too. ";

var AboutUs = React.createClass({
  render: function() {
    return (
      <Page>
        <p className="about-us">
          <span className="image-container float-left">
            TODO: Image
          </span>
          <span className="image-container float-right">
            TODO: Image
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

import './bridal-party.less';

import React from 'react'
import Page from './Page'

const bridesmaids = [
  {
    name: 'Jordan Carl',
    title: 'Matron of Honor',
    description: 'Jordan and I have been through many things together the past few years. From bad breakups and hospital visits to marriage and child birth. We are each other\'s person, and yes that is a Grey\'s Anatomy reference. Seven years of friendship and I couldn\'t have asked for a better person to stand by my side on this up coming day to hold my dress up when I have to pee or help me make sure my wedding day is everything I could dream of.',
    image: 'images/bridal-party/jordan-carl.jpg'
  },
  {
    name: 'Caroline Duffle',
    description: 'Who knew the best thing about working at Florida Hospital would be meeting this girl on night shift. We spent so many nights trying to keep each other up, and even on our off nights we spent time together studying, cooking and venting about the crazy patients we have encountered. I couldn\'t have ask for a better roommate as well for the past year and to stand by me on this upcoming day.',
    image: 'images/bridal-party/caroline.jpg'
  },
  {
    name: 'Lynsie Pyron',
    description: 'Lynsie and I first crossed path eighth grade at the end of the semester. My very first boyfriend has broken up with me and that is what brought Lynsie and I together. We have had many up and downs over the past eleven years, but I couldn\'t imagine her not being with me on this special day.',
    image: 'images/bridal-party/Lynsie.jpeg'
  },
  {
    name: 'Molly Beasley',
    description: 'Being less than two years apart, Molly and I have grown up closer than just being cousins. She\'s the little sister I never had. As she has grown up, we have naturally continued to be close. She can always rely on me, and I can always rely on her. I\'m not sure who cried more when I got engaged, her or me. But I am thankful she said yes to being apart of our upcoming wedding.',
    image: 'images/bridal-party/molly.jpg'
  },
  {
    name: 'Emily Beasley',
    description: 'My sweet little baby Emily. She and I are further apart in age compared to Molly, but we defiantly treats you as the little sister. Purposely doing stuff without you and telling you that you weren\'t old enough to come with us. But on my wedding day, that is far from the truth. Beyond blessed to have you as a bridesmaid.',
    image: 'images/bridal-party/emily.jpg'
  }
];
const groomsmen = [
  {
    name: 'Taylor Schluter',
    title: 'Best Man',
    description: 'Teammate, then a friend, and finally brother, Taylor has been there since meeting freshman year. After 2 years of convincing, I was able to get him to join my fraternity as my little brother, where he showed us all what brotherhood could mean. We\'ve been on adventures from my 21st birhday in Key West, to a year living together. And even though he lives across the country now, I look foreward to many more adventures. ',
    image: 'images/bridal-party/taylor.jpg'
  },
  {
    name: 'Jordan Zenga',
    description: 'Jordan is the one who first convinced me to go Greek, and was my big brother in the fraternity. As my tolken half blind canadian friend, a good time is never far away.',
    image: 'images/bridal-party/jordan-zenga.jpg'
  },
  {
    name: 'Alec Gorge',
    description: 'Alec, being some kind of prodigy, is the one who inspired me to study programming. If it wasn\'t for him, I probably would not have ended up at FIT, or have met Sarah. Alec is one of the most genuinly nice people I have ever met, and has been there to lend a helping hand whenever one is needed.',
    image: 'images/bridal-party/alec.jpg'
  },
  {
    name: 'David Armstrong',
    description: 'Sarah\'s brother, David has been my guide to everything Star Wars, on top of making me feel a part of the family. He has been a great friend and I will be honored to have him as a brother-in-law',
    image: 'images/bridal-party/david.jpg'
  },
  {
    name: 'Brady Powers',
    description: 'I\'ve known Brady longer than any other groomsman, and while we have not always gotten along, he\s been a great brother.',
    image: 'images/bridal-party/brady.jpg'
  },
  {
    name: 'Bennett Powers',
    description: 'I know Bennett through family, and while he frequintly drives me nuts, he will always be my little brother. Gotta love him.',
    image: 'images/bridal-party/bennett.jpg'
  }
];

var AboutPerson = React.createClass({
  render: function() {
    var image = (
      <img src={this.props.person.image} className={'img-responsive img-circle center-block float-' + (this.props.leftAlign ? 'left' : 'right') }/>
    );

    var main = (
      <div>
        <div className={'text-fancy text-' + (!this.props.leftAlign ? 'right' : 'left')} style={ this.props.person.title ? {fontSize: 34} : null}>
          {this.props.person.name}
          { this.props.person.title ? (<span style={{ fontSize: 24, marginLeft: 12}}>- {this.props.person.title}</span>) : null }
        </div>
        <p className={'about text-' + (this.props.leftAlign ? 'right' : 'left') }>{this.props.person.description}</p>
      </div>
    );
    return (
      <div className={'col-md-' + this.props.columnSize}>
        {image}
        {main}
      </div>
    );
  }
});

var BridalParty = React.createClass({
  render: function() {
    var bridesmaidRows = [];
    bridesmaidRows.push(
      <div key="bridesRow-0" className="row">
      <AboutPerson
        key={bridesmaids[0].name}
        pushRight={false}
        leftAlign={false}
        person={bridesmaids[0]}
        columnSize={12}/>
      </div>
    );
    for(var i = 1; i<bridesmaids.length; i+=2) {
      var bridesmaid1 = bridesmaids[i];
      var bridesmaid2 = bridesmaids[i+1];
      var columns = [];
      var columnCount = 0;
      if (bridesmaid1) {columnCount++;}
      if (bridesmaid2) {columnCount++;}

      if (bridesmaid1) {
        columns.push(
          <AboutPerson
            key={bridesmaid1.name}
            pushRight={false}
            leftAlign={false}
            person={bridesmaid1}
            columnSize={12 / columnCount}/>
        );
      }
      if (bridesmaid2) {
        columns.push(
          <AboutPerson
            key={bridesmaid2.name}
            pushRight={false}
            leftAlign={false}
            person={bridesmaid2}
            columnSize={12 / columnCount}/>
        );
      }
      bridesmaidRows.push(
        <div key={'bridesRow-' + i} className="row">
          {columns}
        </div>
      )
    }

    var groomsmenRows = [];
    groomsmenRows.push(
      <div key="groomRow-0" className="row">
      <AboutPerson
        key={groomsmen[0].name}
        pushRight={false}
        leftAlign={true}
        person={groomsmen[0]}
        columnSize={12}/>
      </div>
    );
    for(var i = 1; i<groomsmen.length; i+=2) {
      var groomsman1 = groomsmen[i];
      var groomsman2 = groomsmen[i+1];
      var columns = [];
      var columnCount = 0;
      if (groomsman1) {columnCount++;}
      if (groomsman2) {columnCount++;}

      if (groomsman1) {
        columns.push(
          <AboutPerson
            key={groomsman1.name}
            pushRight={false}
            leftAlign={true}
            person={groomsman1}
            columnSize={12 / columnCount}/>
        );
      }
      if (groomsman2) {
        columns.push(
          <AboutPerson
            key={groomsman2.name}
            pushRight={false}
            leftAlign={true}
            person={groomsman2}
            columnSize={12 / columnCount}/>
        );
      }
      groomsmenRows.push(
        <div key={'groomsRow-' + i}className="row">
          {columns}
        </div>
      )
    }

    return (
      <Page>
        <div className='bridal-party'>
          <div className='row'>
            <div className='col-md-6'>
              {bridesmaidRows}
            </div>
            <div className='col-md-6'>
              {groomsmenRows}
            </div>
          </div>
        </div>
      </Page>
    )
  }
});

export default BridalParty

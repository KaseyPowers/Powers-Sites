
import './bridal-party.less';

import React from 'react'
import Page from './Page'

const bridesmaids = [
  {
    name: 'Jordan Carl',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    quotes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        by: 'mom'
      }
    ]
  },
  {
    name: 'Caroline Duffle',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    quotes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        by: 'mom'
      }
    ]
  },
  {
    name: 'Lynsie Pyron',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    quotes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        by: 'mom'
      }
    ]
  },
  {
    name: 'Molly Beasley',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    quotes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        by: 'mom'
      }
    ]
  },
  {
    name: 'Emily Beasley',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    quotes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        by: 'mom'
      }
    ]
  }
];
const groomsmen = [
  {
    name: 'Taylor Schluter',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    quotes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        by: 'mom'
      }
    ]
  },
  {
    name: 'Jordan Zenga',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    quotes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        by: 'mom'
      }
    ]
  },
  {
    name: 'Alec Gorge',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    quotes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        by: 'mom'
      }
    ]
  },
  {
    name: 'David Armstrong',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    quotes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        by: 'mom'
      }
    ]
  },
  {
    name: 'Brady Powers',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    quotes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        by: 'mom'
      }
    ]
  },
  {
    name: 'Bennett Powers',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
    quotes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        by: 'mom'
      }
    ]
  }
];

var AboutPerson = React.createClass({
  render: function() {
    // var image = (
    //   <div className='col-xs-4'>
    //     <img src='https://placehold.it/175x250' className='img-responsive img-circle center-block'/>
    //   </div>
    // );
    // var main = (
    //   <div className='col-xs-8'>
    //     <div className={'text-test-c text-' + (this.props.leftAlign ? 'right' : 'left')}>{this.props.person.name}</div>
    //     <p class='about'>{this.props.person.description}</p>
    //     <p class='quote'>{this.props.person.quotes[0].text}</p>
    //   </div>
    // );

    var image = (
      <img src='https://placehold.it/175x250' className={'img-responsive img-circle center-block float-' + (this.props.leftAlign ? 'left' : 'right') }/>
    );

    var main = (
      <div>
        <div className={'text-test-c text-' + (this.props.leftAlign ? 'right' : 'left')}>{this.props.person.name}</div>
        <p className={'about text-' + (this.props.leftAlign ? 'right' : 'left') }>{this.props.person.description}</p>
        <p className={'quote text-' + (this.props.leftAlign ? 'left' : 'right')}>{this.props.person.quotes[0].text}</p>
      </div>
    );

    // return (
    //   <div className={'col-md-6' + (this.props.pushRight ? ' col-md-push-6': '')}>
    //     {this.props.leftAlign ? image : null}
    //     {main}
    //     {this.props.leftAlign ? null : image}
    //   </div>
    // );


    return (
      <div className={'col-md-6 ' + (this.props.leftAlign ? 'col-md-push-6' : 'col-md-pull-6')}>
        {image}
        {main}
      </div>
    );
  }
});

var BridalParty = React.createClass({
  render: function() {
    var rows = [];

    for(let i = 0; i<6; i++) {
      var groomsman = groomsmen[i];
      var bridesmaid = bridesmaids[i];
      var column = [];

      if (groomsman) {
        column.push(
          <AboutPerson
            key={groomsman.name}
            pushRight={!bridesmaid}
            leftAlign={true}
            person={groomsman}/>
        );
      }

      if (bridesmaid) {
        column.push(
          <AboutPerson
            key={bridesmaid.name}
            pushRight={false}
            leftAlign={false}
            person={bridesmaid}/>
        );
      }


      rows.push(
        <div key={'row-index-' + i}
          className='row main-row'>
          {column}
        </div>
      );
    }
    return (
      <Page>
        <div className='bridal-party'>
          {rows}
        </div>
      </Page>
    )
  }
});

export default BridalParty

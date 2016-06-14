import React from 'react'
import ReactDOM from 'react-dom'


var Section = React.createClass({
  bottomSpacerHeight: function() {
    let windowHeight = window.innerHeight;
    let myHeight = this.sectionRef.offsetHeight;
    if(myHeight > windowHeight) {
      return 0;
    }
    let navHeight = this.props.displayData.navHeight;
    // let paddingBottom = window.getComputedStyle(this.sectionRef, null).getPropertyValue('margin-bottom');

    // paddingBottom = parseInt(paddingBottom.substring(0, ( paddingBottom.length -2 )));

    // let outputHeight = windowHeight - myHeight - paddingBottom - navHeight;
    let outputHeight = windowHeight - myHeight - navHeight;
    return outputHeight;
  },
  componentDidMount: function() {
    this.hasMounted = true;
    this.props.addSection({
      [this.props.name]: {
        active: false,
        element: this.sectionRef,
        scrollToggle: this.sectionRef.offsetTop
      }
    });
  },
  render: function() {
    let isActive = this.props.displayData.active;
    let isLastSection = this.props.displayData.lastSection;
    let isNextActive = this.props.displayData.nextActive;
    /*
      hasMounted, active, lastSection, nextActive
      if lastSection, nextActive = false

      content:
      styles: fixed, fixedHidden
      !hasMounted => no style change
      active and !lastSection => style = fixed
      style = fixed and nextActive => style = fixedHidden

      hasMounted and active {
        !lastSection => style = fixed
        nextActive => style = hidden
      }
    */
    let sectionStyle = function() {
      if(this.hasMounted && isActive && !isLastSection) {
        let output ={
          position: 'fixed',
          top: this.props.displayData.navHeight,
          zIndex: -1
        };

        if (isNextActive) {
          this.previousHeight = this.sectionRef.offsetHeight === 0 ? this.previousHeight : this.sectionRef.offsetHeight;
          output.display = 'none';
        }

        return output;
      }
    }.bind(this);
    /*
      spacer:
      styles: matchHeight, fillBottom
      !hasMounted => no style change
      active => matchHeight
      lastItem => fillBottom

      hasMounted {
        lastItem => fillBottom
        active => matchHeight
      }
    */
    let spacer = function() {
      if(this.hasMounted && (isActive || isLastSection)) {
        let thisStyle = {
          height: isLastSection ?
            this.bottomSpacerHeight() :
            ( this.sectionRef.offsetHeight === 0 ? this.previousHeight : this.sectionRef.offsetHeight)
        };
        // console.log('Setting spacer height to: ' + thisStyle.height);
        return <div style={thisStyle} />
      }
    }.bind(this);

    return (
      <div className='Section'>
        <div
          className='content'
          style={ sectionStyle() }
          ref={(ref) => {
            // if(ref === null ) {
            //   console.log(this.props.name + ': unset');
            // } else {
            //   console.log(this.props.name + ': set');
            // }
            this.sectionRef = ref
          }}>
          {this.props.children}
        </div>
        { spacer() }
      </div>
    );

  },
});

export default Section



/*
notes:
when element top = height of nav => fixed top
when element fixed => spacer height = element height, otherwise shouldnt be shown

if element is at the bottom, spacer should be created with height =
window.innerHeight - (element's total height + nav height)

element's total height = element.offSetHeight

if we use top/bottom margins, find their values with:
parseFloat(window.getComputedStyle($0).getPropertyValue('margin-bottom')

element
window.innerHeight - ($0.offsetHeight + parseFloat(window.getComputedStyle($0).getPropertyValue('margin-bottom')) + 80)
*/
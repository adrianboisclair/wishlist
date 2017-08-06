import React from 'react';

const NavComponent = (props)=> {

  console.log(props);

  if(window.innerWidth > 768) {
    window.addEventListener('scroll', function() {
      const navBar = document.getElementById('navbar');
      if(navBar) {
        if(window.scrollY > 20 && !navBar.classList.contains('active')) {
          navBar.classList.add('active');
        }else if(window.scrollY < 20 && navBar.classList.contains('active')) {
          navBar.classList.remove('active');
        }
      }
    });
  }

  return(
    <nav id="navbar" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-toggle-wag collapsed visible-xs" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <img src="https://wagwalking.com/img/layout/logo-mobile.png" alt="Wag! a dog's best friend" height="36" />
          </a>
          <a className="navbar-brand hidden-xs" href="https://wagwalking.com">
            <img src="https://wagwalking.com/img/layout/logo.png" alt="Wag! a dog's best friend"/>
          </a>
          <div className="navbar-mobile-walker-link navbar-btn visible-xs">
            <a href="https://wagwalking.com/dog-walker" className="btn btn-primary">{props.ctaText}</a>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <div className="pull-right navbar-btn hidden-xs">
            <a href="https://wagwalking.com/dog-walker" className="btn btn-primary">{props.ctaText}</a>
          </div>
          <ul className="nav navbar-nav navbar pull-right">
            <li><a href="https://wagwalking.com" >Home</a></li>
            <li><a href="https://wagwalking.com/faq">FAQ</a></li>
            <li><a href="https://wagwalking.com/blog/" >Blog</a></li>
            <li><a href="https://wagwalking.com/contact">Contact Us</a></li>
            <li><a href="https://wagwalking.com/contact">Sign Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;

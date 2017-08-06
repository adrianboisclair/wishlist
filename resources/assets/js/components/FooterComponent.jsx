import React from 'react';

const FooterComponent = ()=> {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Learn More</h5>

            <ul className="list-unstyled list-spaced">
              <li><a href="https://wagwalking.com">Home</a></li>
              <li><a href="https://wagwalking.com/faq">FAQ</a></li>
              <li><a href="https://wagwalking.com/about">About Wag!</a></li>
              <li><a href="https://wagwalking.com/partners">Wag! Partners</a></li>
              <li><a href="/blog/">Blog</a></li>
              <li><a href="http://www.indeed.com/cmp/Wag!-1/jobs">Careers</a></li>
              <li><a href="https://wagwalking.com/contact">Contact Support Center</a></li>
              <li><a href="https://wagwalking.com/dog-walker">Become a Wag! Dog Walker</a></li>
            </ul>

            <div className="margin-top-sm">
              <ul className="list-inline">
                <li><a href="http://facebook.com/wagwalking" className="icon-circle fa fa-facebook"></a></li>
                <li><a href="http://instagram.com/wagwalking" className="icon-circle fa fa-instagram"></a></li>
                <li><a href="http://twitter.com/wagwalking" className="icon-circle fa fa-twitter"></a></li>
              </ul>
            </div>
            <div className="margin-top-md">
              <div className="pull-left margin-right">
                <a href="https://itunes.apple.com/app/id940734609">
                  <img src="//wagwalking.com/img/layout/app-store-logo-outline.png" alt="Apple App Store" width="108" />
                </a>
              </div>
              <div className="pull-left margin-right">
                <a href="https://play.google.com/store/apps/details?id=com.ionicframework.wagandroid554504">
                  <img src="//wagwalking.com/img/layout/google-play-logo-outline.png" alt="Google Play Store" width="108" />
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-md-8 hidden-xs">
            <h5>Popular Wag! Locations</h5>
            <div className="row">
              <div className="col-sm-2">
                <a href="/austin">Austin</a><br/>
                <a href="/berkeley">Berkeley</a><br/>
                <a href="/boston">Boston</a>
              </div>
              <div className="col-sm-2">
                <a href="/chicago">Chicago</a><br/>
                <a href="/denver">Denver</a><br/>
                <a href="/los-angeles">Los Angeles</a>
              </div>
              <div className="col-sm-2">
                <a href="/miami">Miami</a><br/>
                <a href="/new-york">New York</a><br/>
                <a href="/oakland">Oakland</a>
              </div>
              <div className="col-sm-2">
                <a href="/orange-county">Orange County</a><br/>
                <a href="/portland">Portland</a><br/>
                <a href="/san-diego">San Diego</a>
              </div>
              <div className="col-sm-2">
                <a href="/san-francisco">San Francisco</a><br/>
                <a href="/san-jose">San Jose</a><br/>
                <a href="/seattle">Seattle</a>
              </div>
              <div className="col-sm-2">
                <a href="/washington-dc">Washington D.C.</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-8 col-lg-9">
            <a href="https://wagwalking.com/terms" title="Terms &amp; Conditions">Terms &amp; Conditions</a> | <a href="https://wagwalking.com/privacy">Privacy Policy</a>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            ©2016 Wag Labs, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
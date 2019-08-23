import React, { Component } from 'react';
import resumeData from '../resumeData';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead" style={{color:'white'}}>
                Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Facebook:&nbsp;<a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/brandi.halabi/`}>{resumeData.linkedinId}</a>
                </h4>
                <p className="lead" style={{color:'white'}}> <b> Email:</b> brandiflakes07@gmail.com</p>
                <p className="lead" style={{color:'white'}}> < b>Phone:</b> (206) 850 - 5047</p>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}

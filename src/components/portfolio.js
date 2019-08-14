import React, { Component } from 'react';
import resumeData from '../resumeData';
import Modal from 'react-awesome-modal';
//import NaturalLook2 from '../NaturalLook2.jpg'

export default class Porfolio extends Component {

  state={
    modal:{}
  }

  closeModal = () => {
    this.setState({modal:{} })
  }

  render() {
    const {modal} = this.state
    return (<section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, i)=>{
              return(
                <div key={i} className="columns portfolio-item">
                  <div className="item-wrap">
                    <div onClick={()=>this.setState({modal:item})} style={{cursor:'pointer'}}>
                      <img src={`${item.imgurl}`} className="item-img" alt="img" style={{height:300}}/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>

      <Modal 
                    visible={modal&&modal.name}
                    width="1000"
                    height="600"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="portfolio-modal">
                        <h1>{modal.title}</h1>
                        <p>{modal.description}</p>
                        <div className="portfolio images">
                          {modal.imagearray && modal.imagearray.map((url)=>{
                            return <img src={url} alt="img" style={{height:300}}/>
                          })}             
                          </div>
                        <a href={modal.githubLink} target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i>&nbsp; Instagram </a>
                        </div>
                        <div className="buttonlocation">                     
                        <button className="button" onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>

  </section>);
  }
}

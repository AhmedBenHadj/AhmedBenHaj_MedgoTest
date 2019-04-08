import React, { Component } from 'react'

export default class Banner extends Component {
    
  render() {
    return (
			<div className="tp-banner-container">
				<div className="tp-banner-slider">
					<ul>
						<li data-masterspeed={700}>
							<img src="/img/medgo_1.jpg" alt="" />
							<div className="tp-caption sl-content align-left" data-x="['left','center','center','center']" data-hoffset={20} data-y="center" data-voffset={0} data-width="['720px','600px','500px','300px']" data-transform_in="opacity:0;s:1000;e:Power2.easeInOut;" data-transform_out="opacity:0;s:300;s:1000;" data-start={400}>
								<div className="sl-title">Join our team !</div>
								<p>Want to work in different countries ?<br />With a good salary ?</p>
								<a href="#" className="cws-button border-radius">Join us <i className="fa fa-angle-double-right" /></a>
							</div>
						</li>
                        <li data-masterspeed={700}>
                            <img src="/img/medgo_2.jpg" alt="" />
                            <div className="tp-caption sl-content align-right" data-x="['right','center','center','center']" data-hoffset={20} data-y="center" data-voffset={0} data-width="['720px','600px','500px','300px']" data-transform_in="opacity:0;s:1000;e:Power2.easeInOut;" data-transform_out="opacity:0;s:300;s:1000;" data-start={400}>
                                <div className="sl-title">Join our team !</div>
                                <p>Want to work in different countries ?<br />With a good salary ?</p>
                                <a href="#" className="cws-button border-radius">Join us <i className="fa fa-angle-double-right" /></a>
                            </div>
                        </li>
					</ul>
				</div>
			</div>
    )
  }
}

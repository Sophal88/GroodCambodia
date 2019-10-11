import React, { Component } from "react";
//import {Input, List} from 'semantic-ui-react';

class PreOrder extends Component {
  state = {};
  render() {
    return (
      <div className="Header ">
        <div className="frmform">
          <form class="ui form">
            <div class="unstackable two fields">
              <div class="field">
                <label>First name</label>
                <div class="ui input">
                  <input type="text" placeholder="First name" />
                </div>
              </div>
              <div class="field">
                <label>Last name</label>
                <div class="ui input">
                  <input type="text" placeholder="Last name" />
                </div>
              </div>
            </div>
            <div class="two fields">
              <div class="field">
                <label>Email Address</label>
                <div class="ui input">
                  <input type="text" placeholder="Email Address" />
                </div>
              </div>
              <div class="field">
                <label>Phone Number</label>
                <div class="ui input">
                  <input type="text" placeholder="Phone number" />
                </div>
              </div>
            </div>
            <div class="field">
              <label for="form-textarea-control-opinion">Email Address</label>
              <textarea
                id="form-textarea-control-opinion"
                placeholder="Email Address"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="ui button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PreOrder;

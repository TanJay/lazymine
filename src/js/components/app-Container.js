/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-base-store');
var ErrorStore = require('../stores/app-error-store');
var AppActions = require('../actions/app-actions');
var SearchBox = require('../components/app-SearchBox');
var Title = require('../components/app-Title');
var TaskList = require('../components/app-TaskList');
var Footer = require('../components/app-Footer');
var Loader = require('../components/app-Loader');
var Refresh = require('../components/app-Refresh');
var Errors= require('../constants/store-errors');

var Container = React.createClass({

  contextTypes: {
      router: React.PropTypes.func
  },

  getInitialState: function () {
      return AppStore.getState();
  },

  componentWillMount: function () {
      AppStore.addChangeListener(this._change);      
      AppActions.fetchIssues();
  },

  componentDidMount: function(){    
    if(this.state.settings.BaseURL == null || this.state.settings.BaseURL == "" || this.state.settings.APIKey == null || this.state.settings.APIKey == ""){
          this.context.router.transitionTo('setting');
      }

  },
  
  _change: function () {
      var storeState = AppStore.getState();
      this.setState(storeState);
  },

  _error: function(){
    debugger
      var errorState = ErrorStore.getState();

      
  },

  _updateTime: function() {    
      AppActions.createTimeEntries();
  },

  render : function() {
    return (
      <div>
      <Loader isLoading={this.state.isLoading}/>
        <div className="container-fluid">
          <div className="row">
            <SearchBox items={this.state.filteredResult}/>
            <TaskList items={this.state.activeItems} activities={this.state.activities}/>
          </div>
        </div>
        <Footer 
            primaryClick={this._updateTime} 
            secondaryText="CANCEL" 
            cancelLink="#" 
            primaryText="UPDATE"/>
        <Refresh />
      </div>
    );
  }
});

module.exports = Container;
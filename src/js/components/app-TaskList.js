/*global require, module, document, window*/
/** @jsx React.DOM */
var React = require('react'),
    Task = require('../components/app-Task'),
    Help = require('../components/app-Help');

var TaskList = React.createClass({
    getInitialState: function () {
        "use strict";
        return {
            "items": null
        };
    },

    render : function () {
        "use strict";
        var rows,
            items = this.props.items,
            activities = this.props.activities,
            customFields = this.props.customFields;

        if (items && items.length > 0) {
            rows = items.map(function (item, i) {
                return(<Task item={item} key={i} activities={activities} customFields={customFields}/>);
            });
        } /* else {
            rows = (<Help />);
        }*/

        return (
            <div>
                {rows}
            </div>
        );
    }
});

module.exports = TaskList;

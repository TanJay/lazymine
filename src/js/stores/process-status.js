var ProcessStatus = function (status, message, data) {
    "use strict";
    this.status = status;
    this.message = message;
    this.data = null;
};

module.exports = ProcessStatus;
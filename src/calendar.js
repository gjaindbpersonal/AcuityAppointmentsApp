var $ = window.$ = window.jQuery = require('jquery');
var moment = require('moment');
var fullcalendar = require('fullcalendar');

module.exports = function (options) {
  options = options || {};

  var $appointments = $(options.container || '#appointments');

  $appointments.fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,basicWeek,agendaDay'
    },
    //defaultDate: '2016-03-01',
    defaultDate: new Date(),
    eventLimit: true, // allow "more" link when too many events
    events: fetchAppointmentEvents,
    eventClick: function (event, ev) {
    },
    eventMouseover: function (event, ev) {
    },
    eventMouseout: function (event) {
    },
  });

  function fetchAppointmentEvents (start, end, timezone, callback) {
    $.get('/api/appointment').then(function (appointments) {
      callback(appointments.map(function (c) {
        return {
          title: c.firstName + ' ' + c.lastName,
          start: c.datetime,
          end: c.datetime,
          data: c
        };
      }));      
    });
  }  


};

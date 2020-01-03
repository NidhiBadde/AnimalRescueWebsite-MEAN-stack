import { PaymentComponent } from './../payment/payment.component';

// import { HttpService } from './../http.service';
// import { Component, ViewChild, OnInit } from '@angular/core';
// import { mobiscroll, MbscEventcalendarOptions, MbscRangeOptions, MbscFormOptions, MbscEventcalendar,
//   MbscPopupOptions } from '@mobiscroll/angular';
// import {EventSchema} from '../../../../Backend/api/models/eventSchema';

// mobiscroll.settings = {
//   theme: 'ios',
//   themeVariant: 'light'
// };

// let preventSet = false;
// let id = 5;

// const now = new Date();
// const btn = '<button class="mbsc-btn mbsc-btn-outline mbsc-btn-danger md-delete-btn mbsc-ios">Book</button>';


// @Component({
//   selector: 'app-event-calendar',
//   templateUrl: './event-calendar.component.html',
//   styleUrls: ['./event-calendar.component.scss']
// })
// export class EventCalendarComponent implements OnInit {
//   @ViewChild('mbscMonthCal',  {static: false}) monthCal: MbscEventcalendar;

//   @ViewChild('mbscDayCal',  {static: false}) dayCal: MbscEventcalendar;

//   allDay = false;
//   eventDate = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2)];
//   isFree = 'busy';
//   eventText = '';
//   eventDesc = '';
//   control: Array < string > ;
//   wheels: string;

//   events: any[] = [];
//   rangeSettings: MbscRangeOptions = {
//       controls: ['date', 'time'],
//       dateWheels: '|D M d|',
//       startInput: '#startDate',
//       endInput: '#endDate',
//       tabs: false,
//       responsive: {
//           large: {
//               touchUi: false
//           }
//       },
//       showSelector: false
//   };
//   daySettings: MbscEventcalendarOptions = {
//     display: 'inline',
//     view: {
//         eventList: { type: 'day' }
//     },
//     onPageChange: (event, inst) => {
//         const day = event.firstDay;
//         preventSet = true;
//         this.navigate(this.monthCal.instance, day);
//         this.eventDate = [day, new Date(day.getFullYear(), day.getMonth(), day.getDate(), day.getHours() + 2)];
//     },
//     onEventSelect: (event, inst) => {
//         if (event.domEvent.target.classList.contains('md-delete-btn')) {
//             mobiscroll.confirm({
//                 title: 'Confirm Deletion',
//                 message: 'Are you sure you want to delete this item?',
//                 okText: 'Delete',
//                 callback: (res) => {
//                     if (res) {
//                         const events = this.events;
//                         const index = events.indexOf(events.filter(x => x.id === event.event.id)[0]);

//                         events.splice(index, 1);

//                         mobiscroll.toast({
//                             message: 'Deleted'
//                         });
//                     }
//                 }
//             });
//         }
//     }
// };

// monthSettings: MbscEventcalendarOptions = {
//     display: 'inline',
//     view: {
//         calendar: { type: 'month' }
//     },
//     onSetDate: (event, inst) => {
//         if (!preventSet) {
//             const day = event.date;
//             this.navigate(this.dayCal.instance, day);
//             this.eventDate = [day, new Date(day.getFullYear(), day.getMonth(), day.getDate(), day.getHours() + 2)];
//         }
//         preventSet = false;
//     }
// };

// popupSettings: MbscPopupOptions = {
//     display: 'center',
//     cssClass: 'mbsc-no-padding',
//     buttons: [{
//             text: 'Add event',
//             handler: 'set'
//         },
//         'cancel'
//     ],
//     headerText: 'Add new event',
//     onSet: (event, inst) => {
//         this.events.push({
//             id: id,
//             start: this.eventDate[0],
//             end: this.eventDate[1],
//             text: (this.eventText || 'New Event') + btn,
//             title: this.eventText || 'New Event',
//             description: this.eventDesc,
//             allDay: this.allDay,
//             free: this.isFree === 'free'
//         });
//         this.eventText = '';
//         this.eventDesc = '';
//         id += 1;
//         this.monthCal.instance.navigate(this.eventDate[0], true);
//     }
// };
//   constructor(private _http: HttpService) { }

//   ngOnInit() {
//     this._http.getEvents().subscribe(data => {
//       for (let event of Object.keys(data)) {
//         this.events.push(data[event]);
//       }
//     });
//   }

//   navigate(inst, val) {
//       if (inst) {
//           inst.navigate(val);
//       }
//   }

//   change() {
//       this.control = this.allDay ? ['date'] : ['date', 'time'];
//       this.wheels = this.allDay ? 'MM dd yy' : '|D M d|';
//   }
// }
import { Component, ViewChild, OnInit } from '@angular/core';
import { mobiscroll, MbscEventcalendarOptions, MbscRangeOptions, MbscFormOptions,
   MbscEventcalendar, MbscPopupOptions } from '@mobiscroll/angular';
import { HttpService } from './../http.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

let preventSet = false;
let id = 5;

const now = new Date();
const btn = '<button class="mbsc-btn mbsc-btn-outline mbsc-btn-danger md-delete-btn mbsc-ios">Buy Now</button>';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {
    @ViewChild('mbscMonthCal', {static: false})
    monthCal: MbscEventcalendar;

    @ViewChild('mbscDayCal', {static: false})
    dayCal: MbscEventcalendar;

    allDay = false;
    eventDate = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2)];
    isFree = 'busy';
    eventText = '';
    eventDesc = '';
    control: Array < string > ;
    wheels: string;
    events: any[] = [];


    rangeSettings: MbscRangeOptions = {
      controls: ['date', 'time'],
      dateWheels: '|D M d|',
      startInput: '#startDate',
      endInput: '#endDate',
      tabs: false,
      responsive: {
          large: {
              touchUi: false
          }
      },
      showSelector: false
  };

  daySettings: MbscEventcalendarOptions = {
      display: 'inline',
      view: {
          eventList: { type: 'day' }
      },
      onPageChange: (event, inst) => {
          const day = event.firstDay;
          console.log(day);
          preventSet = true;
          this.navigate(this.monthCal.instance, day);
          this.eventDate = [day, new Date(day.getFullYear(), day.getMonth(), day.getDate(), day.getHours() + 2)];
      },
      onEventSelect: (event, inst) => {
          if (event.domEvent.target.classList.contains('md-delete-btn')) {
              mobiscroll.confirm({
                  title: 'Confirm Booking',
                  message: 'Want to book this Event? Proceed for Payment',
                  okText: 'Book Now',
                  callback: (res) => {
                      if (res) {
                          //remove element by id
                          const events = this.events;
                          const index = events.indexOf(events.filter(x => x.id === event.event.id)[0]);
                          const dialogRef = this.dialog.open(PaymentComponent);
                      }
                  }
              });
          }
      }
  };

  monthSettings: MbscEventcalendarOptions = {
      display: 'inline',
      view: {
          calendar: { type: 'month' }
      },
      onSetDate: (event, inst) => {
          if (!preventSet) {
              const day = event.date;
              this.navigate(this.dayCal.instance, day);
              this.eventDate = [day, new Date(day.getFullYear(), day.getMonth(), day.getDate(), day.getHours() + 2)];
          }
          preventSet = false;
      }
  };

  popupSettings: MbscPopupOptions = {
      display: 'center',
      cssClass: 'mbsc-no-padding',
      buttons: [{
              text: 'Add event',
              handler: 'set'
          },
          'cancel'
      ],
      headerText: 'Add new event',
      onSet: (event, inst) => {
          this.events.push({
              id: id,
              start: this.eventDate[0],
              end: this.eventDate[1],
              text: (this.eventText || 'New Event') + btn,
              title: this.eventText || 'New Event',
              description: this.eventDesc,
              allDay: true,
              free: 'free'
          });
          this.eventText = '';
          this.eventDesc = '';
          id += 1;
          // Navigate the calendar to the new event's start date
          this.monthCal.instance.navigate(this.eventDate[0], true);
      }
  };

    constructor(private _http: HttpService, public dialog: MatDialog) { }

    ngOnInit() {
      this._http.getEvents().subscribe(data => {
          for (let event of Object.keys(data)) {
            // this.events.push(data[event]);
            const day = new Date(data[event].start);
            this.eventDate = [day, new Date(day.getFullYear(), day.getMonth(), day.getDate(), day.getHours() + 2)];
            this.events.push({
              start: this.eventDate[0],
              text: data[event].text + btn,
              title: data[event].title,
              description: data[event].description,
              allDay: data[event].allDay,
              free: 'free',
            });
          }
        });
    }


    navigate(inst, val) {
        if (inst) {
            inst.navigate(val);
        }
    }

    change() {
        this.control = this.allDay ? ['date'] : ['date', 'time'];
        this.wheels = this.allDay ? 'MM dd yy' : '|D M d|';
    }
}

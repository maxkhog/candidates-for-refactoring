class Calendar {
  addEvent(event) {
    // some logic to add event
  }
}

interface ICalendar {
  addEvent(event: Event): void;
}

class Director {
  calendar: ICalendar;

  constructor(calendar: ICalendar) {
    this.calendar = calendar;
  }

  scheduleMeeting(event) {
    this.calendar.addEvent(event);
  }
}
/*
  Пахнет Tight Coupling 
  Что было плохо и почему?
    1) Director напрямую зависит от конкретной реализации Calendar, хотя и есть DI.


  Что стало лучше и почему?
   1) Добавил интерфейс ICalendar, теперь Director 
   зависит от интрфейса, а не от конкретного класса Calendar

*/
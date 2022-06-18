import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  ScheduleComponent,
  Week,
  WorkWeek,
} from '@syncfusion/ej2-react-schedule';
import { Header } from '../components';
import { scheduleData } from '../data/dummy';

const calendar = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calender' />
      <ScheduleComponent
        height='650px'
        eventSettings={{ dataSource: scheduleData }}
      >
        <Inject services={[Day, Week, Month, WorkWeek, Agenda, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
};

export default calendar;

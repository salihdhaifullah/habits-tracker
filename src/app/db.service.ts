import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { faFillDrip, faArrowsToCircle, faCircleChevronRight, faChevronCircleRight, faAt, faTrashCan, faTrashAlt, faTextHeight, faUserXmark, faUserTimes, faStethoscope, faMessage, faCommentAlt, faInfo, faDownLeftAndUpRightToCenter, faCompressAlt, faExplosion, faFileLines, faFileAlt, faFileText, faWaveSquare, faRing, faBuildingUn, faDiceThree, faCalendarDays, faCalendarAlt, faAnchorCircleCheck, faBuildingCircleArrowRight, faVolleyball, faVolleyballBall, faArrowsUpToLine, faSortDown, faSortDesc, faCircleMinus, faMinusCircle, faDoorOpen, faRightFromBracket, faSignOutAlt, faAtom, faSoap, faIcons, faHeartMusicCameraBolt, faMicrophoneLinesSlash, faMicrophoneAltSlash, faBridgeCircleCheck, faPumpMedical, faFingerprint, faHandPointRight, faMagnifyingGlassLocation, faSearchLocation, faForwardStep, faStepForward, faFaceSmileBeam, faSmileBeam, faFlagCheckered, faFootball, faFootballBall, faSchoolCircleExclamation, faCrop, faAnglesDown, faAngleDoubleDown, faUsersRectangle, faPeopleRoof, faPeopleLine, faBeerMugEmpty, faBeer, faDiagramPredecessor, faArrowUpLong, faLongArrowUp, faFireFlameSimple, faBurn, faPerson, faMale, faLaptop, faFileCsv, faMenorah, faTruckPlane, faRecordVinyl, faFaceGrinStars, faGrinStars, faBong, faSpaghettiMonsterFlying, faPastafarianism, faArrowDownUpAcrossLine, faSpoon, faUtensilSpoon, faJarWheat, faEnvelopesBulk, faMailBulk, faFileCircleExclamation, faCircleH, faHospitalSymbol, faPager, faAddressBook, faContactBook, faStrikethrough, faK, faLandmarkFlag, faPencil, faPencilAlt, faBackward, faCaretRight, faComments, faPaste, faFileClipboard, faCodePullRequest, faClipboardList, faTruckRampBox, faTruckLoading, faUserCheck, faVialVirus, faSheetPlastic, faBlog, faUserNinja, faPersonArrowUpFromLine, faScrollTorah, faTorah, faBroomBall, faQuidditch, faQuidditchBroomBall, faToggleOff, faBoxArchive, faArchive, faPersonDrowning, faArrowDown91, faSortNumericDesc, faSortNumericDownAlt, faFaceGrinTongueSquint, faGrinTongueSquint, faSprayCan, faTruckMonster, faW, faEarthAfrica, faGlobeAfrica, faRainbow, faCircleNotch, faTabletScreenButton, faTabletAlt, faPaw, faCloud, faTrowelBricks, faFaceFlushed, faFlushed, faHospitalUser, faTentArrowLeftRight, faGavel, faLegal, faBinoculars, faMicrophoneSlash, faBoxTissue } from "@fortawesome/free-solid-svg-icons"

export const icons = [faFillDrip, faArrowsToCircle, faCircleChevronRight, faChevronCircleRight, faAt, faTrashCan, faTrashAlt, faTextHeight, faUserXmark, faUserTimes, faStethoscope, faMessage, faCommentAlt, faInfo, faDownLeftAndUpRightToCenter, faCompressAlt, faExplosion, faFileLines, faFileAlt, faFileText, faWaveSquare, faRing, faBuildingUn, faDiceThree, faCalendarDays, faCalendarAlt, faAnchorCircleCheck, faBuildingCircleArrowRight, faVolleyball, faVolleyballBall, faArrowsUpToLine, faSortDown, faSortDesc, faCircleMinus, faMinusCircle, faDoorOpen, faRightFromBracket, faSignOutAlt, faAtom, faSoap, faIcons, faHeartMusicCameraBolt, faMicrophoneLinesSlash, faMicrophoneAltSlash, faBridgeCircleCheck, faPumpMedical, faFingerprint, faHandPointRight, faMagnifyingGlassLocation, faSearchLocation, faForwardStep, faStepForward, faFaceSmileBeam, faSmileBeam, faFlagCheckered, faFootball, faFootballBall, faSchoolCircleExclamation, faCrop, faAnglesDown, faAngleDoubleDown, faUsersRectangle, faPeopleRoof, faPeopleLine, faBeerMugEmpty, faBeer, faDiagramPredecessor, faArrowUpLong, faLongArrowUp, faFireFlameSimple, faBurn, faPerson, faMale, faLaptop, faFileCsv, faMenorah, faTruckPlane, faRecordVinyl, faFaceGrinStars, faGrinStars, faBong, faSpaghettiMonsterFlying, faPastafarianism, faArrowDownUpAcrossLine, faSpoon, faUtensilSpoon, faJarWheat, faEnvelopesBulk, faMailBulk, faFileCircleExclamation, faCircleH, faHospitalSymbol, faPager, faAddressBook, faContactBook, faStrikethrough, faK, faLandmarkFlag, faPencil, faPencilAlt, faBackward, faCaretRight, faComments, faPaste, faFileClipboard, faCodePullRequest, faClipboardList, faTruckRampBox, faTruckLoading, faUserCheck, faVialVirus, faSheetPlastic, faBlog, faUserNinja, faPersonArrowUpFromLine, faScrollTorah, faTorah, faBroomBall, faQuidditch, faQuidditchBroomBall, faToggleOff, faBoxArchive, faArchive, faPersonDrowning, faArrowDown91, faSortNumericDesc, faSortNumericDownAlt, faFaceGrinTongueSquint, faGrinTongueSquint, faSprayCan, faTruckMonster, faW, faEarthAfrica, faGlobeAfrica, faRainbow, faCircleNotch, faTabletScreenButton, faTabletAlt, faPaw, faCloud, faTrowelBricks, faFaceFlushed, faFlushed, faHospitalUser, faTentArrowLeftRight, faGavel, faLegal, faBinoculars, faMicrophoneSlash, faBoxTissue];

export enum WeekDays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export class Todo {
  title: string;
  icon: number;
  order: number;
  points: number;
  days: WeekDays[];
  id: string;

  constructor(title: string, icon: number, order: number, points: number, days: WeekDays[], id: string) {
      this.title = title;
      this.icon = icon;
      this.order = order;
      this.points = points;
      this.days = days;
      this.id = id;
  }
}

export class DailyTodo {
  todoId: string;
  day: WeekDays;
  completed: boolean;

  constructor(todoId: string, day: WeekDays, completed: boolean) {
      this.todoId = todoId;
      this.day = day;
      this.completed = completed;
  }
}


@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {
  todos: Dexie.Table<Todo, string>;
  dailyTodo: Dexie.Table<DailyTodo, [number, string]>;

  constructor() {
      super('DB');
      this.version(1).stores({
          todos: 'id, title, icon, order, points, days',
          dailyTodo: "[day+todoId], day, todoId, completed"
      });
      this.dailyTodo = this.table("dailyTodo")
      this.todos = this.table("todos");
  }
}


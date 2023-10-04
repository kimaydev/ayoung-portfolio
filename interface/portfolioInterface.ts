// 노션 api 타입 지정
export interface IresultData {
  results: Iresults;
}
// 노션 api의 results 타입 지정
export interface Iresults {
  map(
    arg0: (item: Iresults) => import('react').JSX.Element,
  ): import('react').ReactNode;
  id: string;
  public_url: string;
  properties: Iproperies;
}
interface Iproperies {
  url: Iurl;
  thum: Ithum;
  tag: Itag;
  date: Idate;
  이름: Ititle;
}
// url에 대한 타입 지정
interface Iurl {
  url: string;
}
// 썸네일 이미지에 대한 타입 지정
interface Ithum {
  files: Array<Ifiles>;
}
interface Ifiles {
  file: Ifile;
}
interface Ifile {
  url: string;
}
// 했던 일에 대한 타입 지정
interface Itag {
  multi_select: Array<ImultiSelect>;
}
interface ImultiSelect {
  name: string;
}
// 프로젝트 기간에 대한 타입 지정
interface Idate {
  date: IinnerDate;
}
interface IinnerDate {
  start: string;
  end: string;
}
// 타이틀에 대한 타입 지정
interface Ititle {
  title: Array<IinnerTitle>;
}
interface IinnerTitle {
  plain_text: string;
}

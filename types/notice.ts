export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  category: '일반' | '대회' | '이벤트' | '점검';
  isImportant: boolean;
} 
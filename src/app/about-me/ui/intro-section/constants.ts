export const BACKEND_SKILLS = [
  'SQL Server',
  'Entity Framework',
  'LINQ',
  'ASP.NET Core Web APIs',
]
  .sort()
  .join(',' + ' ');

export const FRONTEND_SKILLS = [
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind Css',
  'Angular',
  'RXJS',
  'NGRX',
]
  .sort()
  .join(',' + ' ');

export const PROGRAMMING_LANGS = ['C#', 'TypeScript'].sort().join(',' + ' ');

export const OTHER_TECHNICAL_SKILLS = [
  'OOP',
  'Data Structure',
  'Git/GitHub',
  'Solid Principles',
  'Clean Architecture',
]
  .sort()
  .join(',' + ' ');

  export const SKILLS = {PROGRAMMING_LANGS, BACKEND_SKILLS, FRONTEND_SKILLS, OTHER_TECHNICAL_SKILLS}

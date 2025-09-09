// CSS normal
declare module '*.css';

// CSS Modules
declare module '*.module.css';

// Imagens
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.png';
declare module '*.jpg';

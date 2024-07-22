import { createContext, useContext, useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';

//Создание контекста
export const ThemeContext = createContext();

/** 
`Предоставление контекста`:
      Оберните дерево компонентов в Provider и передайте значение, которое должно быть доступно всем дочерним компонентам.
*/
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
    document.body.style.color = theme === 'dark' ? 'white' : 'black';
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * 
 * `Потребление контекста`:
 * 
Используйте useContext для доступа к данным контекста в любом дочернем компоненте.
 */
const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      activeButton
      style={{ justifyContent: 'end' }}
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </Button>
  );
};

export default ThemeButton;

// Пример использования
/**
 * `Оборачиваем приложение `
 * 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

и дальше вставляем кнопку
export const Main = () => {
  ...код 
  return (
    <main className={style.main}>
      <ThemeButton /> <=================================== место вызова
      {news.length > 0 && <NewsBunner item={news[0]} />}
      <NewList news={news} />
    </main>
  );
  }

 */

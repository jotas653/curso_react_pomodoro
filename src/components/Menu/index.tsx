import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //Não segue o link
    console.log("Clicado", Date.now());

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });

    // document.documentElement.setAttribute("data-theme", theme);
  }

  // useEffect(() => {
  //   console.log("useEffect sem depedencia", Date.now());
  // }); Executado toda vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log("useEffect com array deps vazio", Date.now());
  // }, []); Executa apenas quando o react monta o componente na tela pela primeira vez

  useEffect(() => {
    console.log("", Date.now());
  }, [theme]); //Executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        title="Ir para a Home"
        aria-label="Ir para a Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        title="Ver Histórico"
        aria-label="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        title="Configurações"
        aria-label="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        title="Mudar Tema"
        aria-label="Mudar Tema"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}

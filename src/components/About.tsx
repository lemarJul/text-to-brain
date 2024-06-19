import { Box, Typography, Button } from "@mui/material";
import { useAppContext } from "../utils/context";
import Word from "./Word";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import LooksThreeIcon from "@mui/icons-material/Looks3";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 4rem",
    gap: "2rem",
    "& > *": {
      textAlign: "justify",
    },
  },
  difficulties: {
    display: "flex",
    gap: "3rem",
    "& > span": {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      "& svg": {
        fontSize: "2rem",
      },
    },
  },
};

export default function About() {
  const { setShowAbout } = useAppContext();
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" component="h2">
        Mémorisez efficacement !
      </Typography>
      <Typography variant="body1">
        Écrivez votre texte dans la boîte d'édition. Si votre texte est assez
        long, n'hésitez pas à le découper en plusieurs paragraphes. Basculez en
        mode apprentissage. Lisez d'abord plusieurs fois le texte en clair, puis
        entrainez-vous à restituer le texte au premier niveau de difficulté
        avant de passer aux suivants.
      </Typography>
      <Typography variant="body1">
        Chaque difficulté masque toutes les lettres sauf les premières lettres
        de chaque :
      </Typography>
      <Box component="div" sx={styles.difficulties}>
        <span>
          <LooksOneIcon /> Mot
        </span>
        <span>
          {" "}
          <LooksTwoIcon /> Phrase
        </span>
        <span>
          {" "}
          <LooksThreeIcon /> Paragraphe
        </span>
      </Box>
      <Typography variant="body1">
        Un petit trou de mémoire ? Pas de panique, passez votre souris sur le{" "}
        <Word displayValue="t____" rawValue="texte" /> pour voir les lettres
        manquante.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowAbout(false)}
      >
        Essayer maintenant
      </Button>
    </Box>
  );
}

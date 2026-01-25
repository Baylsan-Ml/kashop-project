import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  return (
    <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            component="span"
            color="error.main"
            sx={{ fontWeight: "bold" }}
          >
            {t("How long does delivery take?")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "success.main" }}>
          {t(
            "Delivery usually takes 2 to 5 business days, depending on your location.",
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            color="error.main"
            sx={{ fontWeight: "bold" }}
          >
            {t("What payment methods do you accept?")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "success.main" }}>
          {t(
            "We accept credit/debit cards, cash on delivery, and other secure online payment options.",
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography
            component="span"
            color="error.main"
            sx={{ fontWeight: "bold" }}
          >
            {t("Can I return or exchange a product?")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "success.main" }}>
          {t(
            "Yes, you can return or exchange products within 7 days of delivery, as long as they are unused and in original condition.",
          )}
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>
    </Container>
  );
}

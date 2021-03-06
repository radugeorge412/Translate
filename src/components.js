import { Details } from "./details";
import { Footer } from "./footer";
import { InstCard } from "./instruction-card";
import { InstructiuniComp } from "./InstructionComponent";
import { Nav } from "./navbar";
import { PriceCard1 } from "./priceCard1";
import { PriceCard2 } from "./priceCard2";
import { Servicii } from "./servicii";
import { Slider } from "./slider";
import { Card } from "./TranslateCard";

customElements.define("nav-bar", Nav);
customElements.define("custom-slider", Slider);
customElements.define("custom-service", Servicii);
customElements.define("trans-card", Card);
customElements.define("instr-card", InstCard);
customElements.define("step-comp", InstructiuniComp);
customElements.define("price-card1", PriceCard1);
customElements.define("price-card2", PriceCard2);
customElements.define("custom-details", Details);
customElements.define("custom-footer", Footer);
